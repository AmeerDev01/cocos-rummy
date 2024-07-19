import { default as redux } from "redux";
import { rootReducer } from "./reducer";

export let store: redux.Store;

const configureStore = (preloadedState?: any) => {
  if (!store) {
    const composeEnhancer: typeof redux.compose =
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
    store = redux.createStore(
      rootReducer,
      composeEnhancer(redux.applyMiddleware())
    );
  }
  return store;
};

export default {
  configureStore
};
export const getStore = () => {
  if (!store) {
    configureStore();
  }
  return store;
};
