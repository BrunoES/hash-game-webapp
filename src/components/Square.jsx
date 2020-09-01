import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initMatch, changeCurrentSquare, listenerCurrentSquaresStatus } from '../actions/matchActions';

class Square extends React.Component {

    componentWillMount() {
        this.props.initMatch();
    }

    componentDidMount() {
        this.props.listenerCurrentSquaresStatus();
    }

    _changeCurrentSquare(squareNumber) {
        this.props.changeCurrentSquare(squareNumber);
    }

    render() {
        return (
            <button className="square"
                onClick={() => this._changeCurrentSquare(this.props.value)}
            >
                {this.props.marked[this.props.value]}
            </button>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        marked: state.match.squaresStatus,
        currentSquare: state.match.currentSquare
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ initMatch, changeCurrentSquare, listenerCurrentSquaresStatus }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Square);