import { ApplicationAction } from 'actions/application';

export type ApplicationState = {
  env: string;
};

const initialState: ApplicationState = {
  env: '',
};

const reducer = (
  state = initialState,
  action: ApplicationAction
): ApplicationState => {
  switch (action.type) {
    case 'SET_ENV': {
      return { ...state, env: action.payload.env };
    }

    default: {
      return state;
    }
  }
};

export const application = {
  initialState,
  reducer,
};
