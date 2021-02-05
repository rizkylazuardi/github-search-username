import * as actionType from './search-box-action-type';
import axios from 'axios';

const startLoading = () => ({
    type: actionType.START_LOADING,
});

const finishLoading = () => ({
    type: actionType.FINISH_LOADING,
});

export const fetchData = (username)=> (dispatch) => {
    dispatch(startLoading());

    axios({
        method: 'get',
        url: `https://api.github.com/users/${username}/repos`,
        responseType: 'json'
      })
        .then(function (response) {
          console.log(response.data);
          dispatch({
            type: actionType.SHOW_RESULT,
            payload: response.data
          });
          dispatch(finishLoading());
    }).catch(()=>{
        dispatch({
            type: actionType.SHOW_RESULT,
            payload: []
          });
        dispatch(finishLoading());
    });

    
}