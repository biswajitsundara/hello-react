import React from 'react';

function SuggestionsList({
    suggestions = [],
    highlight,
    dataKey,
    onSuggestionClick
}) {

    const getHighlightedText = (text, highlight) => {
        if (!highlight) return text;
        
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === highlight.toLowerCase() ? 
            <span key={index} className="highlight">{part}</span> : part
        );
    };

    return (
        <>
            {suggestions?.map((suggestion, index) => {
                const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;

                return (
                    <li 
                        key={index}
                        onClick={() => onSuggestionClick(suggestion)}
                        className="suggestion-item"
                    >
                        {getHighlightedText(currSuggestion, highlight)}
                    </li>
                );
            })}
        </>
    );
}

export default SuggestionsList;
