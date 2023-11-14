// 接口类型定义

export namespace Login {
  export interface params {
    username: string;
    password: string;
  }
}

export namespace User {
  export interface UserItem {
    id: string;
    username: string;
    nickname: string;
  }
}

export namespace Posts {
  export interface PostsItem {
    id?: string;
    title: string;
    body: string;
    summary?: string;
  }
}

export namespace Category {
  export interface CategoryItem {
    id: string;
    name: string;
    customOrder: string;
    depth: 0;
    parent: string;
    children: CategoryItem[];
  }
}
