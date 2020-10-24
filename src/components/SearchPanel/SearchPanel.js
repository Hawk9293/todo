import React from 'react';
import './SearchPanel.css';
function  SearchPanel(){
    return(
        <div className="searchPanel">
            <label>
                <input type="text" placeholder="Search"/>
            </label>
            <button><i class="fas fa-search"></i></button>
        </div>
    )

}

export default SearchPanel;