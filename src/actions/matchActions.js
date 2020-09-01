import firebase from '../firebase';

import {
    REQUEST_NEW_MATCH,
    MATCH_START,
    CHANGE_SCOREBOARD,
    CHANGE_SQUARE_NUMBER,
    CHANGE_ALL_SQUARES

} from '../actions/types';

const match_id = '80cb9e92-e1ba-4c9d-89e8-a1c6f2f037e1';
const square_id = '2';

export const initMatch = (squareNumber) => {
   const url = `/matchs/${match_id}/`;

   var squares = {
       1: ' ',
       2: ' ',
       3: ' ',
       4: ' ',
       5: ' ',
       6: ' ',
       7: ' ',
       8: ' '
   }

   firebase.database().ref(url)
   .set(squares);

    return dispatch => {
        dispatch({
            type: CHANGE_ALL_SQUARES,
            payload: squares
        })
    }
};

export const changeScoreBoard = (descricao) => {
    return dispatch => {
        dispatch({ type: CHANGE_SCOREBOARD, payload: descricao });
    }
};

export const changeCurrentSquare = (squareNumber) => {
    
   const url = `/matchs/${match_id}/${squareNumber}`;

   console.log('URL');
   console.log(url);
   console.log('URL');

   firebase.database().ref(url)
   .set('X');
    
    return dispatch => {
        dispatch({
            type: CHANGE_SQUARE_NUMBER,
            payload: squareNumber
        })
    }
};

export const listenerCurrentSquaresStatus = () => {
    
    //const url = ;

   return dispatch => {
        firebase.database().ref(`/matchs/${match_id}/`)
        .on("value", snapshot => {
            dispatch({ type: CHANGE_ALL_SQUARES, payload: snapshot.val() });
        }
    )};
};
