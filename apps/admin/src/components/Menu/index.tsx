import { Menu } from 'antd';
import { DesktopOutlined, BookOutlined, TagOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSystemStore } from '@/store';

const SideMenu = () => {
  const { collapsed } = useSystemStore();
  const navigate = useNavigate();
  const items = [
    {
      label: '工作台',
      key: '1',
      icon: <DesktopOutlined />
    },
    {
      label: '文章管理',
      key: '2',
      icon: <BookOutlined />,
      children: [
        {
          label: '文章列表',
          key: '21'
        }
      ]
    },
    {
      label: '标签管理',
      key: '3',
      icon: <TagOutlined />,
      children: [
        {
          label: '标签列表',
          key: '31'
        }
      ]
    }
  ];
  const handleClickLogo = () => {
    navigate('/welcome');
  };
  return (
    <div>
      <div
        className='w-full flex items-center py-4 justify-center text-white text-lg'
        onClick={handleClickLogo}
      >
        <img src='/images/logo.svg' alt='' />

        {!collapsed ? <span>梦桌搭</span> : <span>Logo</span>}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        items={items}
      />
    </div>
  );
};

export default SideMenu;
