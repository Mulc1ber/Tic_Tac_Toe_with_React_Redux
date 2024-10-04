export const setIsGameEnded = (isEnded) => {
    return {
        type: 'SET_IS_GAME_ENDED',
        payload: isEnded,
    };
}
