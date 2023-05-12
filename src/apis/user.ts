import request from '../utils/axios';
import type { ListParams, ListModel } from './model/userModel.d.ts';

export const getList = (params: ListParams) => {
  return request.get<ListModel>('/list', { params });
};
