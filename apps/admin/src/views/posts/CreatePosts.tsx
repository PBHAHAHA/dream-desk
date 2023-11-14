import { getCategoriesTreeApi } from '@/api/category';
import { postPostsApi } from '@/api/posts';
import { Form, Input, Modal, Select } from 'antd';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Category } from '@/types/api';
import { useEffect, useState } from 'react';

// 初始化Markdown解析器
const mdParser = new MarkdownIt(/* Markdown-it options */);

const CreatePosts = () => {
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    const valid = await form.validateFields();
    console.log(valid);
    if (valid) {
      const res = await postPostsApi(valid);
      console.log(res);
    }
  };
  // 获取文章分类的数据
  const [categories, setCategories] = useState<Category.CategoryItem[]>([]);
  const getCategories = async () => {
    // 获取文章分类的数据 ts类型
    const data: Category.CategoryItem[] = await getCategoriesTreeApi();
    console.log(data);
    if (data) {
      setCategories(data);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  const handleCancel = () => {};
  // 完成！
  function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
  }
  return (
    <Modal
      title='创建文章'
      okText='提交'
      cancelText='取消'
      width={'80%'}
      open={true}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <div className='mt-6'>
        {/* labelCol 固定宽度 */}
        <Form form={form} className='mt-4' labelCol={{ style: { width: '120px' } }}>
          <Form.Item
            label='文章标题'
            name={'title'}
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder='请输入文章标题'></Input>
          </Form.Item>
          <Form.Item label='文章概述' name='summary'>
            <Input placeholder='请输入文章概览'></Input>
          </Form.Item>
          <Form.Item
            label='文章分类'
            name='category'
            rules={[{ required: true, message: '请选择文章分类' }]}
          >
            <Select>
              {categories.map(item => {
                return (
                  <Select.Option value={item.id} key={item.id}>
                    {item.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label='文章内容'
            name='body'
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <div>
              <MdEditor
                style={{ height: '500px' }}
                renderHTML={text => mdParser.render(text)}
                onChange={handleEditorChange}
              />
            </div>
          </Form.Item>
        </Form>{' '}
      </div>
    </Modal>
  );
};

export default CreatePosts;
