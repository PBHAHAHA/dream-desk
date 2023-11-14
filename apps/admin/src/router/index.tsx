import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/views/Login';
import Welcome from '@/views/welcome';
import Error404 from '@/views/404';
import Error403 from '@/views/403';
import Layout from '@/layout';
import Dashboard from '@/views/dashboard';
import User from '@/views/user';
import Posts from '@/views/posts';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/posts',
        element: <Posts />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '404',
    element: <Error404 />
  },
  {
    path: '403',
    element: <Error403 />
  }
]);

export default routes;
