import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initMatch, changeCurrentSquare, listenerCurrentSquaresStatus } from '../actions/matchActions';
import _ from 'lodash';

class Square extends React.Component {

    componentDidUpdate(prevProps) {
        if(prevProps.match_id !== this.props.match_id) {
            this.props.listenerCurrentSquaresStatus(this.props.match_id);
        }
    }

    _changeCurrentSquare(squareNumber, match_id, markedSimbol) {
        this.props.changeCurrentSquare(squareNumber, match_id, markedSimbol);
    }

    render() {
        if(this.props.started != 'NAO') {
            return (
                <button className="square"
                    onClick={() => this._changeCurrentSquare(this.props.value, this.props.match_id, this.props.markedSimbol)}
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
        match_id: state.match.match_id,
        started: state.match.started,
        markedSimbol: state.match.markedSimbol
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ initMatch, changeCurrentSquare, listenerCurrentSquaresStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Square);