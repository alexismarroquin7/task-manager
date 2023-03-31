import { useReducer } from "react"

const initialState = {
  title: "",
  pages: [], // rows
  properties: {},
  snapshots: [
    {
      type: 'list',
      name: "All",
      filters: [],
      sorts: [],
      propertiesHidden: {},
      active: true
    }
  ] // different snapshots or views of the pages data
}

const reducer = (state = initialState, { type, payload }) => {

}

export const useDB = () => {

  const [state, dispatch] = useReducer(reducer, initialState);


}