import React from 'react';
import style from './Search.module.scss'

type SearchType = { setSearchPhrase: (e: string) => void };
const Search = ({setSearchPhrase}:SearchType) => {


    return (
        <div className={style.search}>
            <input type="text" placeholder={"Type to search..."} className={"search"} onChange={e => setSearchPhrase(e.target.value)}/>
        </div>
    );
};

export default Search;