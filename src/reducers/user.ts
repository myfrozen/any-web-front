import { UserAction } from 'actions/user';

export type User = {
  id: number;
  name: string;
};

export type UserState = User[];

const initialState: UserState = [];

const reducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'ADD_USER': {
      return state.concat(action.payload.user);
    }

    case 'REMOVE_USER': {
      return state.filter(({ id }) => action.payload.userId !== id);
    }

    case 'RESET_USER': {
      return [];
    }

    default: {
      return state;
    }
  }
};

export const user = {
  initialState,
  reducer,
};
