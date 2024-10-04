import { useDispatch, useSelector } from 'react-redux';
import { PLAYER } from '../../Constants';
import { checkEmpty, checkWinner } from '../../utils';
import { setIsCurrentPlayer, setFields, setIsDraw, setIsGameEnded } from '../../Actions';
import { selectFields, selectCurrentPlayer, selectIsGameEnded } from '../../Selectors/';
import styles from './Field.module.css';

export const FieldLayout = () => {
    const dispatch = useDispatch();
    const fields = useSelector(selectFields);
    const currentPlayer = useSelector(selectCurrentPlayer);
    const isGameEnded = useSelector(selectIsGameEnded);

    const handleClick = (index) => {
        if (fields[index] === '' && isGameEnded === false) {
            const newFields = fields.slice();
            newFields[index] = currentPlayer;
            dispatch(setFields(newFields));

            if (checkWinner(newFields, currentPlayer)) {
                dispatch(setIsGameEnded(true));
                return;
            } else if (!checkEmpty(newFields)) {
                dispatch(setIsDraw(true));
                dispatch(setIsGameEnded(true));
                return;
            }
            dispatch(
                setIsCurrentPlayer(
                    currentPlayer === PLAYER.crosses ? PLAYER.noughts : PLAYER.crosses,
                ),
            );
        }
    };

    return (
        <div className={styles.FieldsLayout}>
            {fields.map((field, index) => (
                <div key={index} className={styles.Field} onClick={() => handleClick(index)}>
                    {field}
                </div>
            ))}
        </div>
    );
};
