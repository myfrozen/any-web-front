import { ApplicationState } from 'reducers/application';

export type ApplicationAction = ReturnType<typeof setEnv>;

export const setEnv = (env: ApplicationState['env']) =>
  ({
    type: 'SET_ENV',
    payload: {
      env,
    },
  } as const);
