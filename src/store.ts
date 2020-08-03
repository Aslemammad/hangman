import { createStore } from 'contextism';
import { Store } from './interfaces';
const Context = createStore<Store>();
export const { Provider, useStore } = Context;
