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
    let iMPlayer = 0;

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
        next_player: 1,
        player_1: player_1_id,
        player_2: player_2_id
    };
    
    if (match_id == '') {
        newMatch_id = firebase.database().ref(`/matchs/`).push(squares).getKey();
        iMPlayer = 1;
    } else {
        firebase.database().ref(`/matchs/${match_id}`).set(squares);
        newMatch_id = match_id;
        iMPlayer = 2;
    }
    
    console.log('Definindo iMPlayer.');
    console.log(iMPlayer);
    console.log('Definindo iMPlayer.');

    return dispatch => {
        dispatch(
            {
                type: MATCH_START,
                payload: {
                    newMatch_id: newMatch_id,
                    iMPlayer: iMPlayer
                }
            }
        );
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

export const changeCurrentSquare = (squareNumber, match_id, markedSimbol, iMPlayer) => {
    
    const urlSimbol = `/matchs/${match_id}/Square_${squareNumber}`;
    let urlPlayer = '';

    let nextPlayer = 1;

    if(iMPlayer == 1) {
        nextPlayer = 2;
    }

   urlPlayer = `/matchs/${match_id}/next_player`

   console.log('URL');
   console.log(urlSimbol);
   console.log('URL');

   console.log('URL');
   console.log(urlPlayer);
   console.log('URL');

   console.log('iMPlayer');
   console.log(iMPlayer);
   console.log('iMPlayer');

   console.log('nextPlayer');
   console.log(nextPlayer);
   console.log('nextPlayer');

   firebase.database().ref(urlSimbol)
   .set(markedSimbol);
    
   firebase.database().ref(urlPlayer)
   .set(nextPlayer);

    return dispatch => {
        dispatch({
            type: CHANGE_SQUARE_NUMBER,
            payload: nextPlayer
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
