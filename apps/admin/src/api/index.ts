import request from '@/utils/request';
import { Login, User } from '@/types/api';

export const login = (params: Login.params) => {
  return request.post('/users/login', params);
};
export const getUserInfo = () => {
  return request.get<User.UserItem>('/users/info');
};
