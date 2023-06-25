import React, {ChangeEvent} from 'react';
import {MyInput} from './UI/input/MyInput';
import {MySelect} from './UI/select/MySelect';
import {FilterType} from '../pages/Posts';

type PropsType = {
    filter: FilterType
    setFilter: (filter: FilterType) => void
    limit: number
    setLimit: (limit: number) => void
}

export type OptionType = {
    value: string
    name: string
}

export const PostFilter: React.FC<PropsType> = ({filter, setFilter, limit, setLimit}) => {

    const options: Array<OptionType> = [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
    ]

    const limitOptions: Array<OptionType> = [
        {value: '3', name: '3'},
        {value: '5', name: '5'},
        {value: '10', name: '10'},
        {value: '15', name: '15'},
        {value: '20', name: '20'}
    ]

    const changeSort = (sortValue: string) => {
        setFilter({...filter, sort: sortValue})
    }

    const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter({...filter, query: e.currentTarget.value})
    }

    const changeLimit = (limit: string) => {
        setLimit(+limit)
    }

    return (
        <div style={{display: 'flex'}}>
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

            <MySelect defaultValue="Показывать по"
                      options={limitOptions}
                      value={String(limit)}
                      onChange={changeLimit}
            />
        </div>
    );
};