import { User } from 'reducers/user';

export type UserAction = ReturnType<
  typeof addUser | typeof resetUser | typeof removeUser
>;

export const addUser = (user: User) =>
  ({
    type: 'ADD_USER',
    payload: {
      user,
    },
  } as const);

export const resetUser = () =>
  ({
    type: 'RESET_USER',
  } as const);

export const removeUser = (userId: User['id']) =>
  ({
    type: 'REMOVE_USER',
    payload: {
      userId,
    },
  } as const);
