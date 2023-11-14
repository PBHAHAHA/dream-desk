import { Category } from '@/types/api';
import request from '@/utils/request';

// 分类树
export const getCategoriesTreeApi = () => {
  return request.get<Category.CategoryItem[]>('/categories/tree');
};
