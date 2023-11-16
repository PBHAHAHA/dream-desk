import axios, { AxiosError } from 'axios';
import { message } from 'antd';
// import { hideLoading, showLoading } from './loading';
import NProgress from 'nprogress';
NProgress.configure({
  showSpinner: true
});
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  headers: {},
  withCredentials: true
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // showLoading();
    NProgress.start();
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Token:' + token;
    }
    return {
      ...config
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(response => {
  const data = response.data;
  // console.log(data);
  if (data.code === 50001) {
    message.error(data.msg);
    localStorage.removeItem('token');
    location.href = '/login';
  } else if (data.code != 0) {
    message.error(data.msg);
    return Promise.reject(data);
  }
  // alert(1);
  // hideLoading();
  NProgress.done();
  return data.data;
});

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params }).catch(err => {
      message.error(err.message);
      NProgress.done();
      return err;
    });
  },
  post<T>(url: string, data?: object): Promise<T> | Promise<any> {
    return instance.post(url, data).catch(err => {
      // message.error(err.message);
      NProgress.done();
      return Promise.reject(err.response.data);
    });
  },
  patch<T>(url: string, data?: object): Promise<T> | Promise<any> {
    return instance.patch(url, data).catch(err => {
      // message.error(err.message);
      NProgress.done();
      return Promise.reject(err.response.data);
    });
  }
};
