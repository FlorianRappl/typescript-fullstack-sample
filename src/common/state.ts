import * as rawActions from './actions';
import { createStore } from 'react-hooks-global-state';
import { GlobalState } from './types';

type RawActions = typeof rawActions;
type ActionNames = keyof RawActions;
type RemainingArgs<T> = T extends (_: any, ...args: infer U) => any ? U : never;
type Actions = {
  [P in ActionNames]: {
    type: P;
    payload: RemainingArgs<RawActions[P]>;
  };
}[ActionNames];

function reducer(state: GlobalState, action: Actions) {
  const fn = rawActions[action.type];
  return fn(state, ...action.payload);
}

const initialState: GlobalState = { todos: [] };

export const { GlobalStateProvider, useGlobalState, dispatch } = createStore(reducer, initialState);

type NewActions = {
  [P in ActionNames]: (...args: RemainingArgs<RawActions[P]>) => void;
};

export const actions = Object.keys(rawActions).reduce((obj, type: ActionNames) => {
  obj[type] = (...payload) =>
    dispatch({
      type,
      payload,
    });
  return obj;
}, {} as NewActions);
