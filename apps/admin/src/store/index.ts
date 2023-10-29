import { create } from 'zustand';
import { User } from '@/types/api';

export const useUserStore = create<{
  token: string;
  userInfo: {
    username: string;
    nickname: string;
  };
  updateUserInfo: (userInfo: User.UserItem) => void;
}>(set => ({
  token: '',
  userInfo: {
    username: '',
    nickname: ''
  },
  updateUserInfo(userInfo: User.UserItem) {
    set({
      userInfo: userInfo
    });
  }
}));

export const useSystemStore = create<{
  collapsed: boolean;
  toggleCollapsed: () => void;
}>(set => ({
  collapsed: false,
  toggleCollapsed: () =>
    set(state => {
      return {
        collapsed: !state.collapsed
      };
    })
}));
