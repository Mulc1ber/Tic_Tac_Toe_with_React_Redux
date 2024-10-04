import React from 'react';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import { Restart } from '../Restart/Restart';
import styles from './Game.module.css';

export const GameLayout = () => {
    return (
        <div className={styles.Game}>
            <Information />
            <Field />
            <Restart />
        </div>
    );
};
