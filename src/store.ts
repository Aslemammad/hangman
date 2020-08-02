import { createStore } from 'contextism';
import { Store, Dispatch } from './interfaces';
const Context = createStore<Store, Dispatch>(undefined);
export const { Provider, useStore } = Context;
