import produce from 'immer';
import { SET_EMPLOYEE_DATA } from './constants';

export const initialState = {
  employee: [],
};

/* eslint-disable default-case, no-param-reassign */
const employeeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_EMPLOYEE_DATA:
        draft.employee = action.data;
        break;
    }
  });

export default employeeReducer;
