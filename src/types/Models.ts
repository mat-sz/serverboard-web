import { ActionType } from './ActionType';

export interface ActionModel {
  type: ActionType;
  value: any;
}

export interface ServerModel {
  id: string;
  name: string;
  ip: string;
}
