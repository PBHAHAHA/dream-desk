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
