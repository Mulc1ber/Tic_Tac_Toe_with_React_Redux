export const setIsCurrentPlayer = (currentPlayer) => {
    return {
        type: 'SET_CURRENT_PLAYER',
        payload: currentPlayer,
    };
}
