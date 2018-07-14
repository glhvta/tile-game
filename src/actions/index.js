import { START_ACTION } from "../actionTypes";

export const start = payload => {
  return {
    type: START_ACTION,
    payload
  }
};
