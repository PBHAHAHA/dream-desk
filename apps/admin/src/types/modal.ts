import { RefObject } from 'react';

export type IAction = 'create' | 'edit' | 'delete';

export interface IModalProp {
  mRef: RefObject<{
    open: (action: IAction, data?: any) => void | undefined;
  }>;
  update: () => void;
}
