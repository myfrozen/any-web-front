import { initialState, State } from 'reducers';
import { INITIAL_STATE } from 'store';

/*
 *  getServerSideProps時などに初期store stateとしてのオブジェクトを生成するヘルパー関数
 */
export const createInitialState = (
  partialState: Partial<State>
): { [INITIAL_STATE]: State } => ({
  [INITIAL_STATE]: { ...initialState, ...partialState },
});
