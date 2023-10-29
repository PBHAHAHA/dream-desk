import { Button, Form, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { ColumnsType } from 'antd/es/table';

const User = () => {
  interface DataType {
    key: string;
    name: string;
    money: string;
    address: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '用户名',
      dataIndex: 'name',
      render: text => <a>{text}</a>
      // align: 'center'
    },
    {
      title: '用户昵称',
      className: 'column-money',
      dataIndex: 'money'
      // align: 'center'
    },
    {
      title: '用户状态',
      dataIndex: 'address'
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 100,
      render: () => (
        <div>
          <a className='mr-2'>删除</a>
          <a href=''>禁用</a>
        </div>
      )
    }
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sydney No. 1 Lake Park'
    }
  ];
  return (
    <div>
      <div className='search-form'>
        <Form layout='inline'>
          <Form.Item name='username' label='用户名'>
            <Input />
          </Form.Item>
          <Form.Item name='username' label='用户昵称'>
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
          <div>用户列表</div>
          <Button>新增</Button>
          {/* <Button></Button> */}
        </div>
        <div className='table-content'>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default User;
