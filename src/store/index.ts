import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducers, State } from 'reducers';

type Store = ReturnType<typeof initStore>;
function initStore(initialState: State) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

let prevStore: Store | null = null;

export const INITIAL_STATE = 'INITIAL_STATE';
export const initializeStore = (preloadedState: State): Store => {
  let store = prevStore ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && prevStore) {
    store = initStore({
      ...prevStore?.getState(),
      ...preloadedState,
    });
    // Reset the current store
    prevStore = null;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return store;
  // Create the store once in the client
  if (!prevStore) prevStore = store;

  return store;
};

export const useStore = (initialState: State): Store => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
