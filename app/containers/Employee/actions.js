import { SET_EMPLOYEE_DATA } from './constants';

export const setEmployee = data => ({
  type: SET_EMPLOYEE_DATA,
  data,
});
