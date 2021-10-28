import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEmployeeState = state => state.employee || initialState;

const selectEmployeeData = () =>
  createSelector(
    selectEmployeeState,
    empState => empState.emp,
  );

export { selectEmployeeState, selectEmployeeData };
