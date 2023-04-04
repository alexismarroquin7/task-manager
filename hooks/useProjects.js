import { useReducer } from "react";

const action = {
  create: {
    start: "projects/create/start",
    success: "projects/create/success",
    fail: "projects/create/fail"
  },
  find: {
    all: {
      start: "projects/find/all/start",
      success: "projects/find/all/success",
      fail: "projects/find/all/fail"
    }
  }
};

const initialState = {
  loading: false,
  list: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type){
    case action.create.start:
      return {
        ...state,
        loading: false,
      }
    case action.create.success:
      return {
        ...state,
        loading: false,
      }
    case action.create.fail:
      return {
        ...state,
        loading: false,
      }
    default:
      throw Error(`unknown action.type: ${type}`);
  }
};

export const useProjects = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch
  }
}