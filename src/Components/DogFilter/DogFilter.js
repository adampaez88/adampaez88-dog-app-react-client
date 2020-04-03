import React from 'react';
import './DogFilter.css';

export default function DogFilter({ updateSearch }) {

    const handleSearch = (event) => {
        updateSearch(event.target.value)
    }

    return (
        <div className='filter-div'>
            <i className="fa fa-search"></i>
            <input type='text' onChange={handleSearch} name='search-dog' className='search' placeholder='Search'/>
        </div>
    )
}