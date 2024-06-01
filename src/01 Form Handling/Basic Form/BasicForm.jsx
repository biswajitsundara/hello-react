import { useState } from "react";

function BasicForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    age: 0,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetHandler = () =>{
    setFormData(initialFormData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button onClick={resetHandler}>Reset</button>
    </form>
  );
}

export default BasicForm;
