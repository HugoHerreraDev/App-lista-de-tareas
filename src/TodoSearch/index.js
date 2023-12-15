import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    
    return(
        <input
        placeholder="cortar cebolla"
        className="TodoSearch"
        value={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value);
        }}
        ></input>
    );
}

export {TodoSearch};