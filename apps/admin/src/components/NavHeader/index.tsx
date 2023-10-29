import { useSystemStore, useUserStore } from '@/store';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Button, Dropdown, MenuProps } from 'antd';
import { WiDaySunny, WiMoonWaxingGibbous6 } from 'react-icons/wi';
const NavHeader = () => {
  const { collapsed, toggleCollapsed } = useSystemStore();
  const userinfo = useUserStore();
  const breadList = [
    {
      title: '首页'
    },
    {
      title: '工作台'
    }
  ];
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: '邮箱'
    },
    {
      key: 2,
      label: '退出'
    }
  ];
  return (
    <div className='flex justify-between px-[20px]'>
      <div className='flex items-center'>
        <div onClick={toggleCollapsed} className='cursor-pointer'>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <Breadcrumb className='ml-4' items={breadList} />
      </div>
      <div className='flex items-center'>
        <Button
          size='small'
          shape='circle'
          className='flex items-center justify-center text-[20px]'
        >
          {/* <WiDaySunny /> */}
          <WiMoonWaxingGibbous6 />
        </Button>
        <Dropdown className='ml-4' menu={{ items }}>
          <div className='flex items-center'>
            <span className='mr-2'>{userinfo.userInfo.nickname}</span>
            <Avatar shape='square' style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
              纸
            </Avatar>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavHeader;
