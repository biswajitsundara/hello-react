import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
