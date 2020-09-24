import {
    REQUEST_NEW_MATCH,
    MATCH_START,
    CHANGE_SCOREBOARD,
    CHANGE_SQUARE_NUMBER,
    CHANGE_ALL_SQUARES

} from '../actions/types';

import _ from 'lodash';

const INITIAL_STATE = {
    user_id: Math.random(),
    match_id: '',
    uid_match: '',
    score : {
        playerScore: 0,
        opponentScore: 0
    },
    squaresStatus: {
        Square_1: ' ',
        Square_2: ' ',
        Square_3: ' ',
        Square_4: ' ',
        Square_5: ' ',
        Square_6: ' ',
        Square_7: ' ',
        Square_8: ' ',
        Square_9: ' ',
    },
    markedSimbol: 'X',
    started: 'NAO',
    player_1_id: ''
};

let tmpSquaresStatus = INITIAL_STATE.squaresStatus;
let currentSquare = 0;
let tmp_match_id= '';
let tmp_player_1_id = '';
let tmp_markedSimbol = '';
let tmp_square_id = '';
let retorno;

const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REQUEST_NEW_MATCH:

            tmp_match_id = INITIAL_STATE.match_id;
            tmp_player_1_id = '';
            tmp_markedSimbol = 'X';

            if(action.payload.val()) {
                tmp_match_id = Object.keys(action.payload.val())[0];
                tmp_player_1_id = _.values(action.payload.val())[0].player_1;
                tmp_markedSimbol = 'O';
            }
            console.log('=================');
            console.log(tmp_match_id);
            console.log(tmp_player_1_id);
            console.log('=================');

            return { ...state, match_id: tmp_match_id, player_1_id: tmp_player_1_id, started: 'SIM', markedSimbol: tmp_markedSimbol, squaresStatus: INITIAL_STATE.squaresStatus };
        case MATCH_START:
            return { ...state, score: INITIAL_STATE.score, squaresStatus: INITIAL_STATE.squaresStatus, match_id: action.payload, started: 'OK' };
        case CHANGE_SCOREBOARD:
            return { ...state, score: action.payload };
        case CHANGE_SQUARE_NUMBER:
            /*tmpSquaresStatus = state.squaresStatus;
            currentSquare = 'Square_'+action.payload;
            tmpSquaresStatus[currentSquare] = state.markedSimbol;
            return { ...state, squaresStatus: tmpSquaresStatus};*/
        case CHANGE_ALL_SQUARES:
            //tmpSquaresStatus = '';
            console.log("STAUTSSSSSSSSSS");
            console.log(action.payload);
            if(action.payload) {
                retorno = action.payload;
                tmpSquaresStatus.Square_1 = retorno.Square_1;
                tmpSquaresStatus.Square_2 = retorno.Square_2;
                tmpSquaresStatus.Square_3 = retorno.Square_3;
                tmpSquaresStatus.Square_4 = retorno.Square_4;
                tmpSquaresStatus.Square_5 = retorno.Square_5;
                tmpSquaresStatus.Square_6 = retorno.Square_6;
                tmpSquaresStatus.Square_7 = retorno.Square_7;
                tmpSquaresStatus.Square_8 = retorno.Square_8;
                tmpSquaresStatus.Square_9 = retorno.Square_9;
            }
            /*
            console.log("ATUALIZADO:")
            console.log(tmpSquaresStatus);
            console.log("RETORNO:")
            console.log(retorno);*/
            
            return { ...state };

        default:
            return state;
    }
}

export default matchReducer;
