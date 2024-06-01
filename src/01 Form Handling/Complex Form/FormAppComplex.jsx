import React, { useState } from "react";
import MyForm from "./MyForm";
import DisplayData from "./DisplayData";

function FormAppComplex() {
  const [submittedFormData, setSubmittedFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmittedFormData([...submittedFormData, data]);
  };

  return (
    <div>
      <h1>{"Complex Form Example"}</h1>
      <MyForm onSubmit={handleFormSubmit} />
      <DisplayData submittedData={submittedFormData} />
    </div>
  );
}

export default FormAppComplex;
