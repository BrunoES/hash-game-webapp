import {
    REQUEST_NEW_MATCH,
    MATCH_START,
    CHANGE_SCOREBOARD,
    CHANGE_SQUARE_NUMBER

} from '../actions/types';

const INITIAL_STATE = {
    uid_match: '',
    score : {
        playerScore: 0,
        opponentScore: 0
    },
    squaresStatus: ['', '', '', '', '', '', '', '', ''],
    currentSquare: 0,
    marked: 'X'
}

const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REQUEST_NEW_MATCH:
            return { ...state, uid_match: action.payload };
        case MATCH_START:
            return { ...state, score: INITIAL_STATE.score, squaresStatus: INITIAL_STATE.squaresStatus, currentSquare : INITIAL_STATE.currentSquare };
        case CHANGE_SCOREBOARD:
            return { ...state, score: action.payload };
        case CHANGE_SQUARE_NUMBER:
            return { ...state, currentSquare: action.payload };

        default:
            return state;
    }
}

export default matchReducer;