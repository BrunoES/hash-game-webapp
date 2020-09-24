import firebase from '../firebase';

import {
    REQUEST_NEW_MATCH,
    MATCH_START,
    CHANGE_SCOREBOARD,
    CHANGE_SQUARE_NUMBER,
    CHANGE_ALL_SQUARES

} from '../actions/types';

export const initMatch = (match_id, player_1_id, player_2_id) => {
    let newMatch_id = '';


    let squares = {
        Square_1: ' ',
        Square_2: ' ',
        Square_3: ' ',
        Square_4: ' ',
        Square_5: ' ',
        Square_6: ' ',
        Square_7: ' ',
        Square_8: ' ',
        Square_9: ' ',
        player_1: player_1_id,
        player_2: player_2_id
    };
    
    if (match_id == '') {
        newMatch_id = firebase.database().ref(`/matchs/`).push(squares).getKey();
    } else {
        firebase.database().ref(`/matchs/${match_id}`).set(squares);
        newMatch_id = match_id;
    }
    
    return dispatch => {
        dispatch({ type: MATCH_START, payload: newMatch_id });
    }
}

export const searchPlayer = () => {
    return dispatch => {
        //firebase.database().ref(url).child("player_2").equalTo('0')
        firebase.database().ref(`/matchs/`).orderByChild("player_2").equalTo(0).limitToFirst(1)
        .once("value", snapshot => {
            dispatch({ type: REQUEST_NEW_MATCH, payload: snapshot});
        }
    )};
}

export const changeScoreBoard = (descricao) => {
    return dispatch => {
        dispatch({ type: CHANGE_SCOREBOARD, payload: descricao });
    }
};

export const changeCurrentSquare = (squareNumber, match_id, markedSimbol) => {
    
   const url = `/matchs/${match_id}/Square_${squareNumber}`;

   console.log('URL');
   console.log(url);
   console.log('URL');

   firebase.database().ref(url)
   .set(markedSimbol);
    
    return dispatch => {
        dispatch({
            type: '',
            payload: ''
        })
    }
};

export const listenerCurrentSquaresStatus = (match_id) => {
    console.log("MATCHHHHHH IDDDDDDDDDDDDDDD");
    console.log(match_id);
   return dispatch => {
        firebase.database().ref(`/matchs/${match_id}/`)
        .on("value", snapshot => {
            dispatch({ type: CHANGE_ALL_SQUARES, payload: snapshot.val() });
        }
    )};
};
