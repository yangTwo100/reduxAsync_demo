import { GET_HOME_DATA } from './actionTypes'

export const loadHomeDataSync = (home) => {
    return {
      type: GET_HOME_DATA,
      home
    }
}
  
export const loadHomeDataAsync = (dispatch) => {
    return () => {
      fetch('/mock/data.json')
        .then(response => response.json())
        .then(result => {
          dispatch(loadHomeDataSync(result.data))
        })
    }
}