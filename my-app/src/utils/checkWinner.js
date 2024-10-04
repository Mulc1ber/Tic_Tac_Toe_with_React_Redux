import { WINNING_COMBOS } from '../Constants';

export const checkWinner = (fields, currentPlayer) => {
    return WINNING_COMBOS.some((pattern) =>
        pattern.every((number) => fields[number] === currentPlayer),
    );
};
