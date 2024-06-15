import React, { useEffect, useState } from "react";
import SuggestionsList from "./SuggestionList";

function AutoComplete({
  placeholder,
  fetchSuggestions,
  dataKey,
  customLoading,
  onSelect,
  onChange,
  onBlur,
  onFocus,
  customStyles,
  staticData, // Added staticData as a prop
}) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false); // Set initial state for loading
  const [error, setError] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) =>{
    setInputValue(dataKey ? suggestion[dataKey] : dataKey);
    onSelect(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
  }

  const showDropDownValues = () => {
    setShowSuggestions(true);
    getSuggestions();
  }

  const getSuggestions = async (query) => {
    try {
      let result;
      setLoading(true); // Set loading to true before fetching suggestions
      if (staticData.length > 1) {
        result = staticData.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query); // Await the result of fetchSuggestions
      }
      setSuggestions(result);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue?.length > 1) {
      getSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <div className="autocomplete-input-wrapper">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <div className="dropdown-icon" onClick={showDropDownValues}>&#9660;</div>
      </div>

      {showSuggestions && (suggestions.length > 0 || loading || error) && (
        <ul className="autocomplete-suggestions">
          {error && <div>{error}</div>}
          {loading && <div>{customLoading}</div>}
          <SuggestionsList
            dataKey={dataKey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
