import React, {ChangeEvent} from 'react';
import {OptionType} from '../../../App';
import styles from './MySelect.module.css'

type PropsType = {
    defaultValue: string
    options: Array<OptionType>
    value: string
    onChange: (value: string) => void
}

export const MySelect: React.FC<PropsType> = ({defaultValue, options, value, onChange}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <select className={styles.select} value={value} onChange={onChangeHandler}>

            <option value="" disabled>{defaultValue}</option>

            {options.map(option =>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}

        </select>
    );
};