import React from 'react';
import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';

const App: React.FC = () => (
  <Result
    status='404'
    title='404'
    subTitle='对不起, 访问的页面不存在.'
    extra={
      <Button type='primary'>
        <NavLink to='/'>返回首页</NavLink>
      </Button>
    }
  />
);

export default App;
