import React from 'react';
import Board from './Board';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initMatch, searchPlayer } from '../actions/matchActions';

class Game extends React.Component {
    
    componentWillMount() {
        this.props.searchPlayer();
    };
    
    componentDidUpdate(prevProps) {
        // Uso típico, (não esqueça de comparar as props):
        console.log("Entrou componentDidUpdate");
        console.log("Vai chamar initMatch");
        console.log(this.props.match_id);
        console.log(this.props.started);
        let match_id = this.props.match_id;

        if(this.props.started == 'SIM') {
            if(match_id == '') {
                console.log("PLAYER 1");
                this.props.initMatch('', this.props.user_id, 0);
            } else {
                console.log("PLAYER 2");
                this.props.initMatch(this.props.match_id, this.props.player_1_id, this.props.user_id);
            }
        }
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        user_id: state.match.user_id,
        match_id: state.match.match_id,
        started: state.match.started,
        player_1_id: state.match.player_1_id
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ initMatch, searchPlayer }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Game);