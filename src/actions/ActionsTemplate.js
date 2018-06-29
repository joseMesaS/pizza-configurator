import * as request from 'superagent'

const baseUrl = 'http://localhost:4001' //define a url to fetch data

export const ACTION_TYPE_ONE = 'ACTION_TYPE_ONE'
export const ACTION_TYPE_TWO = 'ACTION_TYPE_TWO'

export function sendAction(dataToStates) {  //simple action creator 
  return {
    type: ACTION_TYPE_ONE,
    payload: dataToStates
  }
}


export const sendRequest = (elementId) => (dispatch) => {  //action creator using thunk
  request
    .get(`${baseUrl}/elements/${elementId}`)
    .then(response => dispatch({
      type: ACTION_TYPE_TWO,
      payload: response.body.element
    }))
    .catch(err => alert(err))
}
