import { getCategoriesTreeApi } from '@/api/category';
import { postPostsApi, getPostsByIdApi, patchPostsApi } from '@/api/posts';
import { Form, Input, Modal, Select, message } from 'antd';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Category } from '@/types/api';
import { useEffect, useImperativeHandle, useState } from 'react';
import { IAction, IModalProp } from '@/types/modal';
import { set } from 'nprogress';

// 初始化Markdown解析器
const mdParser = new MarkdownIt(/* Markdown-it options */);

const CreatePosts = (props: IModalProp) => {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('创建文章');
  const [form] = Form.useForm();
  const [mdBody, setMdBody] = useState('');
  const [categories, setCategories] = useState<Category.CategoryItem[]>([]);
  useImperativeHandle(props.mRef, () => {
    return {
      open
    };
  });
  // 弹窗显示方法
  const [id, setId] = useState(null);
  const open = (type: IAction, data?: any) => {
    setVisible(true);
    if (type == 'create') {
      setModalTitle('创建文章');
    } else if (type == 'edit') {
      setModalTitle('编辑文章');
      getPostDetail(data.id);
      setId(data.id);
    }
  };
  const handleSubmit = async () => {
    const valid = await form.validateFields();
    if (valid) {
      if (modalTitle == '编辑文章') {
        const data = await patchPostsApi({ ...valid, id });
        if (data) {
          message.success('修改成功');
          handleCancel();
          // 刷新父组件数据
          props.update();
        }
      } else if (modalTitle == '创建文章') {
        const data = await postPostsApi(valid);
        if (data) {
          message.success('新增成功');
          handleCancel();
          props.update();
        }
      }
    }
  };
  // 根据id获取文章详情
  const getPostDetail = async (id: string) => {
    const data = await getPostsByIdApi(id);
    console.log(data);
    if (data) {
      form.setFieldsValue({
        ...data,
        id: id
      });
      form.setFieldValue('category', data.category.id);
      setMdBody(data.body);
    }
  };
  // 获取文章分类的数据
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
  const handleCancel = () => {
    setVisible(false);
  };
  // 完成！
  function handleEditorChange({ html, text }: { html: any; text: any }) {
    console.log('handleEditorChange', html, text);
    setMdBody(text);
  }
  return (
    <Modal
      title={modalTitle}
      okText='提交'
      cancelText='取消'
      width={'80%'}
      open={visible}
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
                value={mdBody}
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
