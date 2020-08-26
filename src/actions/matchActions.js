import firebase from '../firebase';

import {
    REQUEST_NEW_MATCH,
    MATCH_START,
    CHANGE_SCOREBOARD,
    CHANGE_SQUARE_NUMBER

} from '../actions/types';

export const changeScoreBoard = (descricao) => {
    return dispatch => {
        dispatch({ type: CHANGE_SCOREBOARD, payload: descricao });
    }
};

export const changeCurrentSquare = (squareNumber) => {
    console.log("Aletando SQUARE: ");
    console.log(squareNumber);
    
    return dispatch => {
        dispatch({
            type: CHANGE_SQUARE_NUMBER,
            payload: squareNumber
        });
    }

    /*return dispatch => {
        
        firebase.collection("Teste").where("id_user", "==", "Teste").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc}`);
            });
        });
        
        dispatch({ type: CHANGE_SQUARES, payload: categoriaId });
    }*/
};

export const matchStart = (itemId) => {
    return dispatch => {
        dispatch({ type: MATCH_START, payload: itemId });
    }
};

export const createNewMatch = () => {
    return dispatch => {
        dispatch({ type: REQUEST_NEW_MATCH, payload: '' });
    }
};

/*
export const adicionarPrato = (novoPrato, localId, categoriaId, tipoItem) => {
    return dispatch => {
        firebase.database().ref(`/${tipoItem}/${localId}/${categoriaId}/`)
            .push(novoPrato)
            .then(() => dispatch({
                type: 'ADICIONA_ITEM',
                payload: novoPrato
            }))
            .catch((erro) => dispatch({
                type: 'ADICIONA_ITEM',
                payload: ''
            }))
    };
}

export const modificarItem = (item, tipoitem, localId, categoriaId, itemId) => {
    return dispatch => {
        firebase.database().ref(`/${tipoitem}/${localId}/${categoriaId}/${itemId}`)
            .update(item)
            .then(() => dispatch({
                type: 'SUCESSO_MODIFICA_ITEM',
                payload: item
            }))
            .catch((error) => dispatch({
                type: 'ERRO_MODIFICA_ITEM',
                payload: error.message
            }))
    };
}

export const deletarItem = (tipoItem, localId, categoriaId, itemId) => {
    return dispatch => {
        firebase.database().ref(`/${tipoItem}/${localId}/${categoriaId}`).child(itemId).remove().
            then(function() {
                dispatch({ type: 'SUCESSO_DELETAR_ITEM', payload: { } });
            })
            .catch(function(error) {
                dispatch({ type: 'ERRO_DELETAR_ITEM', payload: error.message });
            });
    };
};

export const buscarItens = (localId, categoriaId, tipoItem, queryText) => {
    return dispatch => {
        firebase.database().ref(`/${tipoItem}/${localId}/${categoriaId}/`).orderByChild('desc').startAt(queryText).endAt(queryText + "\uf8ff")
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_ITENS', payload: snapshot.val() });
            });
    }
};

export const limparPrato = () => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
}

export const remove = (todo) => {
    return dispatch => {
        dispatch({ type: 'teste', payload: { } });
    }
};
*/