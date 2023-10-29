import React, { useEffect } from 'react';
import { Layout, theme } from 'antd';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';
import SideMenu from '@/components/Menu';
import { Outlet } from 'react-router-dom';
import { getUserInfo } from '@/api';
import { useSystemStore, useUserStore } from '@/store';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const { collapsed } = useSystemStore();
  const userStore = useUserStore();
  useEffect(() => {
    // 获取用户信息
    getUserInfoFunc();
  }, []);
  const getUserInfoFunc = async () => {
    const data = await getUserInfo();
    console.log(data.username);
    userStore.updateUserInfo(data);
  };
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    // <Watermark content={'桌搭设'}>
    <Layout className='w-full h-full'>
      <Sider className='h-screen' trigger={null} collapsible collapsed={collapsed}>
        <SideMenu />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <NavHeader />
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280
          }}
        >
          <Outlet></Outlet>
        </Content>
        <NavFooter />
      </Layout>
    </Layout>
    // </Watermark>
  );
};

export default App;
