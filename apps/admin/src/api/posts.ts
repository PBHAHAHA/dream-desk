import { Posts } from '@/types/api';
import request from '@/utils/request';

export const postPostsApi = (data: Posts.PostsItem) => {
  return request.post('/posts', data);
};
