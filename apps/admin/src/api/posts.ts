import { Posts } from '@/types/api';
import { PaginateOptions } from '@/types/common';
import request from '@/utils/request';

// 新增文章
export const postPostsApi = (data: Posts.PostsItem) => {
  return request.post('/posts', data);
};
// 修改文章
export const patchPostsApi = (data: Posts.PostsItem) => {
  return request.patch<Posts.PostsItem>(`/posts`, data);
};
// 根据id获取文章
export const getPostsByIdApi = (id: string) => {
  return request.get<Posts.PostsItem>(`/posts/${id}`);
};
// 获取所有文章
export const getPostsApi = (params: PaginateOptions) => {
  return request.get('/posts', params);
};
