import React, {ChangeEvent} from 'react';
import {MyInput} from './UI/input/MyInput';
import {MySelect} from './UI/select/MySelect';
import {FilterType, OptionType} from '../App';

type PropsType = {
    filter: FilterType
    setFilter: (filter: FilterType) => void
}

export const PostFilter: React.FC<PropsType> = ({filter, setFilter}) => {

    const options: Array<OptionType> = [
        {value: 'title', name: 'По названию'},
        {value: 'description', name: 'По описанию'}
    ]

    const changeSort = (sortValue: string) => {
        setFilter({...filter, sort: sortValue})
    }

    const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter({...filter, query: e.currentTarget.value})
    }

    return (
        <div>
            <MyInput
                type="text"
                placeholder="Поиск..."
                value={filter.query}
                onChange={changeSearchQuery}/>

            <MySelect defaultValue="Сортировка по"
                      options={options}
                      value={filter.sort}
                      onChange={changeSort}
            />
        </div>
    );
};