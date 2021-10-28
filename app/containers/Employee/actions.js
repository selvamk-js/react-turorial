import { SET_EMPLOYEE_DATA } from './constants';

export const setEmployeeData = data => ({
  type: SET_EMPLOYEE_DATA,
  data,
});
