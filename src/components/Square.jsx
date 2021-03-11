import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initMatch, changeCurrentSquare, setWinner, flagWinner, listenerCurrentSquaresStatus } from '../actions/matchActions';
import _ from 'lodash';

class Square extends React.Component {

    componentDidUpdate(prevProps) {
        if(prevProps.match_id !== this.props.match_id) {
            this.props.listenerCurrentSquaresStatus(this.props.match_id);
        }
        console.dir(this.props.squaresStatus);
        if(this.props.squaresStatus != prevProps.squaresStatus && !this.props.flagWin) {
            // Line 1 ->
            this._validaTriade(this.props.squaresStatus[0], this.props.squaresStatus[1], this.props.squaresStatus[2]);
            // Line 2 ->
            this._validaTriade(this.props.squaresStatus[3], this.props.squaresStatus[4], this.props.squaresStatus[5]);
            // Line 3 ->
            this._validaTriade(this.props.squaresStatus[6], this.props.squaresStatus[7], this.props.squaresStatus[8]);
            // Column 1 ->
            this._validaTriade(this.props.squaresStatus[0], this.props.squaresStatus[3], this.props.squaresStatus[6]);
            // Column 2 ->
            this._validaTriade(this.props.squaresStatus[1], this.props.squaresStatus[4], this.props.squaresStatus[7]);
            // Column 3 ->
            this._validaTriade(this.props.squaresStatus[2], this.props.squaresStatus[5], this.props.squaresStatus[8]);
            // Diagonal 1 ->
            this._validaTriade(this.props.squaresStatus[0], this.props.squaresStatus[4], this.props.squaresStatus[8]);
            // Diagonal 1 ->
            this._validaTriade(this.props.squaresStatus[6], this.props.squaresStatus[4], this.props.squaresStatus[2]);
        }  
    }

    _validaTriade(x, y, z) {
        console.dir(x + ' ' + y + ' ' + z);
        if((x == 'X' && y == 'X' && z == 'X' ) ||
           (x == 'O' && y == 'O' && z == 'O' )) {
            this.props.flagWinner(true);
            console.dir("VENCEDOR: " + x);
            this.props.setWinner(this.props.user_id, this.props.match_id, x);
            return true;
        }
        return false;
    }

    _changeCurrentSquare(squareNumber, match_id, markedSimbol, iMPlayer) {
        this.props.changeCurrentSquare(squareNumber, match_id, markedSimbol, iMPlayer);
    }

    _getDisableButton(nextPlayer, iMPlayer) {
        if(iMPlayer == 1 && nextPlayer == 0) {
            return false;
        } else {
            if(nextPlayer == iMPlayer) {
                return false;
            }
        }
        return true;
    }

    render() {
        if(this.props.started != 'NAO') {
            return (
                <button className="square"
                    onClick={() => this._changeCurrentSquare(this.props.value, this.props.match_id, this.props.markedSimbol, this.props.iMPlayer)}
                    disabled={this._getDisableButton(this.props.nextPlayer, this.props.iMPlayer)}
                    variant="outline-light"
                >
                    {this.props.squaresStatus[this.props.value - 1]}
                </button>
            );
        } else {
            return (
                <h2>Loading</h2>
            );
        }
    }
}

const mapStateToProps = (state) => {

    return {
        squaresStatus: _.values(state.match.squaresStatus),
        user_id: state.match.user_id,
        winner: state.match.winner,
        match_id: state.match.match_id,
        started: state.match.started,
        markedSimbol: state.match.markedSimbol,
        nextPlayer: state.match.nextPlayer,
        iMPlayer: state.match.iMPlayer,
        flagWin: state.match.flagWin
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ initMatch, changeCurrentSquare, setWinner, flagWinner, listenerCurrentSquaresStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Square);