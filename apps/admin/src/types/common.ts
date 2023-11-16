interface Obj {
  [key: string]: any;
}
export interface PaginateOptions {
  page: number;
  limit: number;
}
export interface PaginateMeta {
  itemCount: number;
  totalItems?: number;
  perPage: number;
  totalPages?: number;
  currentPage: number;
}

export interface PaginateReturn<E extends Obj> {
  meta: PaginateMeta;
  items: E[];
}
