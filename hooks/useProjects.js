import { useReducer } from "react";

let PROJECT_ID = 0;
let VIEW_ID = 1;

const action = {
  create: {
    project: {
      start: "projects/create/project/start",
      success: "projects/create/project/success",
      fail: "projects/create/project/fail"
    },
    view: {
      start: "projects/create/view/start",
      success: "projects/create/view/success",
      fail: "projects/create/view/fail"
    }
  },
  find: {
    all: {
      start: "projects/find/all/start",
      success: "projects/find/all/success",
      fail: "projects/find/all/fail"
    }
  },
  setCurrentView: {
    start: "projects/setCurrentView/start",
    success: "projects/setCurrentView/success",
    fail: "projects/setCurrentView/fail"
  }
};

const initialState = {
  loading: false,
  list: [],
  views: [
    {
      id: 1,
      type: 'board',
      name: 'All',
      hidden: {}
    }
  ],
  current_view_id: 1
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type){
    case action.create.project.start:
      return {
        ...state,
        loading: true
      }
    case action.create.project.success:
      return {
        ...state,
        loading: false,
        list: [
          ...state.list,
          payload.project
        ]
      }
    case action.create.project.fail:
      return {
        ...state,
        loading: false,
        error: {
          ...state.error,
          message: payload.error.message
        }
      }
    case action.create.view.start:
      return {
        ...state,
        loading: true
      }
    case action.create.view.success:
      return {
        ...state,
        loading: false,
        views: [
          ...state.views,
          payload.view
        ],
        current_view_id: payload.view.id
      }
    case action.create.view.fail:
      return {
        ...state,
        loading: false,
        error: {
          ...state.error,
          message: payload.error.message
        }
      }
    default:
      throw Error(`unknown action.type: ${type}`);
  }
};

export const useProjects = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createProject = async () => {
    dispatch({
      type: action.create.project.start
    });
    
    try {
      
      PROJECT_ID++;
      
      let project = {
        id: PROJECT_ID,
        date_created: new Date(),
        date_updated: new Date(),
        name: 'Untitled',
        tasks: []
      };

      dispatch({
        type: action.create.project.success,
        payload: {
          project
        }
      });
      
    } catch (err) {
      dispatch({
        type: action.create.project.fail,
        payload: {
          error: {
            message: "an error occured"
          }
        }
      });

    }
  }

  const createView = () => {
    dispatch({
      type: action.create.view.start
    });
    
    try {
      
      VIEW_ID++;
      
      let view = {
        id: VIEW_ID,
        date_created: new Date(),
        date_updated: new Date(),
        name: 'Untitled'
      };

      dispatch({
        type: action.create.view.success,
        payload: {
          view
        }
      });
      
    } catch (err) {
      dispatch({
        type: action.create.view.fail,
        payload: {
          error: {
            message: "an error occured"
          }
        }
      });

    }
  }

  const setCurrentView = () => {
    dispatch({
      type: action
    })
  }
  
  return {
    state,
    dispatch,
    createProject,
    createView,
    setCurrentView
  }
}