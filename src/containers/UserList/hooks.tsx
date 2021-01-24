import { useSelector } from 'react-redux';
import { State } from 'reducers';

export const useUserList = () => {
  const users = useSelector((state: State) => state.user);

  return { users };
};

