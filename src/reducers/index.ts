import { Store } from 'redux';

export enum ActionType {}

export interface ActionModel {
  type: ActionType;
  value: any;
}

export interface StateType {}

let initialState: StateType = {};

export type StoreType = Store<StateType, ActionModel>;

function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return state;
  }

  return newState;
}

export default applicationState;
