import {
    REQUEST_NEW_MATCH,
    MATCH_START,
    CHANGE_SCOREBOARD,
    CHANGE_SQUARE_NUMBER,
    CHANGE_ALL_SQUARES

} from '../actions/types';

const INITIAL_STATE = {
    uid_match: '',
    score : {
        playerScore: 0,
        opponentScore: 0
    },
    squaresStatus: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    currentSquare: 0,
    markedSimbol: 'X'
}

let tmpSquaresStatus = INITIAL_STATE.squaresStatus;
let currentSquare = 0;
let squaresStatusVet = [];

const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REQUEST_NEW_MATCH:
            return { ...state, uid_match: action.payload };
        case MATCH_START:
            return { ...state, score: INITIAL_STATE.score, squaresStatus: INITIAL_STATE.squaresStatus, currentSquare : INITIAL_STATE.currentSquare };
        case CHANGE_SCOREBOARD:
            return { ...state, score: action.payload };
        case CHANGE_SQUARE_NUMBER:
            tmpSquaresStatus = state.squaresStatus;
            currentSquare = action.payload;
            tmpSquaresStatus[currentSquare] = 'X';
/*
            console.log("OPAAAAAAAAAAAAAA");        
            console.log(currentSquare);
            console.log(tmpSquaresStatus);
            console.log(state.squaresStatus);
            console.log("OPAAAAAAAAAAAAAA");
*/
            return { ...state, currentSquare: action.payload, squaresStatus: tmpSquaresStatus};
        case CHANGE_ALL_SQUARES:
            console.log('-APL--------------------------');
            console.log(action.payload);
            /*if (action.payload != null) {
                squaresStatusVet = action.payload;    
            } else {
                squaresStatusVet = INITIAL_STATE.squaresStatu;
            }
            
            squaresStatusVet = action.payload;
            squaresStatusVet.forEach(
                (x) => {
                    return (x != null ? x : '');
                }
            );*/
            return { ...state, squaresStatus: action.payload};

        default:
            return state;
    }
}

export default matchReducer;