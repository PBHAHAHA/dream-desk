import { Button, Form, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import CreatePosts from './CreatePosts';
import { IAction } from '@/types/modal';
import { getPostsApi } from '@/api/posts';
import { PaginateOptions } from '@/types/common';
import moment from 'moment';

interface SearchParamsProps extends PaginateOptions {
  [key: string]: any;
}
const Posts = () => {
  const [searchParams, setSearchParams] = useState<SearchParamsProps>({
    page: 1,
    limit: 10,
    search: ''
  });

  const columns: ColumnsType<any> = [
    {
      title: '文章标题',
      dataIndex: 'title',
      render: text => <a>{text}</a>
      // align: 'center'
    },
    {
      title: '文章概览',
      className: 'column-money',
      dataIndex: 'summary'
      // align: 'center'
    },
    {
      title: '文章类型',
      dataIndex: 'category',
      render: category => <p>{category.name}</p>
    },
    {
      title: '文本类型',
      dataIndex: 'type'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      render: time => <p>{moment(time).format('YYYY-MM-DD HH:mm:ss')}</p>
    },
    {
      title: '更新时间',
      dataIndex: 'updateAt',
      render: time => <p>{moment(time).format('YYYY-MM-DD HH:mm:ss')}</p>
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 100,
      render: data => (
        <div>
          <a className='mr-2' onClick={() => handleUpdate(data)}>
            更新
          </a>
          <a href='#'>删除</a>
        </div>
      )
    }
  ];
  const [tableData, setTableData] = useState<any[]>([]);

  // 点击新增文章
  const postsRef = useRef<{
    open: (type: IAction, data?: any) => void | undefined;
  }>(null);
  const handleCreate = () => {
    postsRef.current?.open('create');
  };
  const handleUpdate = (data: any) => {
    postsRef.current?.open('edit', data);
  };

  // 获取文章列表
  const getPostsList = async (params: SearchParamsProps) => {
    const data = await getPostsApi(params);
    setTableData(data.items);
  };
  useEffect(() => {
    getPostsList(searchParams);
  }, []);
  return (
    <div>
      <div className='search-form'>
        <Form layout='inline'>
          <Form.Item name='title' label='文章标题'>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type='primary' icon={<SearchOutlined />}>
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div>文章列表</div>
          <Button onClick={handleCreate}>新增</Button>
          {/* <Button></Button> */}
        </div>
        <div className='table-content'>
          <Table columns={columns} dataSource={tableData} />
        </div>
      </div>
      <CreatePosts
        mRef={postsRef}
        update={() => {
          getPostsList({
            page: 1,
            limit: 10
          });
        }}
      />
    </div>
  );
};

export default Posts;
