import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({suggestedNames}) => {

    const suggestNamesJsx = suggestedNames.map((suggestedName) => {
        // return <p key={suggestedName}>{suggestedName}</p>
        return <NameCard key={suggestedName} suggestedName = {suggestedName}/>;
    });

    return(
        <div className="results-container">
            {/* <p>{suggestedNames.length > 0 ? suggestedNames[0] : null}</p> */}
            {/* <p>{suggestedNames.length > 0 && suggestedNames[0]}</p> */}
            {suggestNamesJsx}
        </div>
    );
};

export default ResultsContainer;