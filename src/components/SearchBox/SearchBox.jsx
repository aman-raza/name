import React from 'react';
import './SearchBox.css'

// const SearchBox = () => {
//     return (
//         <div className="search-container">
//             <input onChange={(event) => console.log(event.target.value)} placeholder="Type Keywords" className="search-input"></input>
//         </div>
//     );
// };


const SearchBox = ({onInputChange}) => {
    return (
        <div className="search-container">
            <input onChange={(event) => onInputChange(event.target.value)} placeholder="Type Keywords" className="search-input"></input>
        </div>
    );
};

export default SearchBox;