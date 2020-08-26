import { Store } from 'redux';
import { ActionModel, ServerModel } from '../types/Models';

export interface StateType {
  servers: ServerModel[];
}

let initialState: StateType = {
  servers: [{ id: 'test1' }, { id: 'test2' }],
};

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
