import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCurrentSquare } from '../actions/matchActions';

class Square extends React.Component {

    _changeCurrentSquare(squareNumber) {
        console.log(this);
        console.log(this.props);
        console.log(this.props.marked);
        console.log(this.props.currentSquare);
        this.props.changeCurrentSquare({squareNumber});
    }

    render() {
        return (
            <button className="square"
                onClick={() => this._changeCurrentSquare(this.props.value)}
            >
                {this.props.marked}
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    const marked = state.match.marked;

    console.log('-------');
    console.log(marked);
    console.log(state);
    console.log('-------');

    return {
        marked: state.match.marked,
        currentSquare: state.match.currentSquare
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeCurrentSquare }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Square);