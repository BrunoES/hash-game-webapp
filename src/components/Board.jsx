import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={i} />;
    }

    _getDescNextPlayer(nextPlayer, iMPlayer) {
        if(nextPlayer == iMPlayer) {
            return "Você";
        }
        return "Oponente";
    }

    render() {

        return (
            <div>
                <div className="status">{`Próximo Jogador: ${this._getDescNextPlayer(this.props.nextPlayer, this.props.iMPlayer)}`}</div>
                {this.props.nextPlayer}
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        iMPlayer: state.match.iMPlayer,
        actualPlayer: state.match.actualPlayer,
        nextPlayer: state.match.nextPlayer,
    }
}

export default connect(mapStateToProps)(Board);