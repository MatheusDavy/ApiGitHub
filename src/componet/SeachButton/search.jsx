import React, { useState} from "react";
import "../SeachButton/style.css";


const SearchButton = (props) => {
  const [fields, setFields] = useState({
    name: "",
  });
  const handleChange = (event) =>
    setFields({
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.loginUser(fields.name);
    event.preventDefault()
    console.log(fields.name)
    
  };

  

  return (
    <div className="container__button">
      <form >
        <div className="inputBox">
          <input
            type="text"
            onChange={handleChange}
            value={fields.name}
            name="name"
          />
          <span>Username</span>
        </div>
        <input className="enviar" onClick={handleSubmit}  type="submit" />
      </form>
    </div>
  );
};

export default SearchButton;
