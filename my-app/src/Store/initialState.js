import { PLAYER } from '../Constants';

export const initialState = {
    fields: Array(9).fill(''),
    currentPlayer: PLAYER.crosses,
    isGameEnded: false,
    isDraw: false,
};
