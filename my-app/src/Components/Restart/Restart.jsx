import { useDispatch, useSelector } from 'react-redux';
import { setIsCurrentPlayer, setFields, setIsDraw, setIsGameEnded } from '../../Actions';
import { selectIsGameEnded } from '../../Selectors';
import styles from './Restart.module.css';

export const Restart = () => {
    const dispatch = useDispatch();
    const isGameEnded = useSelector(selectIsGameEnded);

    const handleRestart = () => {
        dispatch(setFields(Array(9).fill('')));
        dispatch(setIsCurrentPlayer('X'));
        dispatch(setIsGameEnded(false));
        dispatch(setIsDraw(false));
    };

    return (
        <button className={styles.Restart} disabled={!isGameEnded} onClick={handleRestart}>
            Начать заново
        </button>
    );
};
