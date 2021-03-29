import React, { useState, useEffect } from "react";
import "../../src/App.css";

function Contribution() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    if (formData) {
      fetch("http://localhost:8000/articles", requestOptions)
        .then((response) => response.text())
        .then((data) => console.log(data));
    }
  }, [formData]);

  const handleClick = (event) => {
    event.preventDefault();

    const newData = {
      ref: new Date().getTime(),
      title: event.target.form[0].value,
      keywords: event.target.form[1].value,
      warmer: event.target.form[2].value,
      content: event.target.form[3].value,
      photoURL: event.target.form[4].value,
      originalURL: event.target.form[5].value,
    };
    setFormData(newData);
  };

  return (
    <div className="contributionbox">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" id="title" name="title" placeholder="TITLE" />
        <input
          type="text"
          id="keywords"
          name="keywords"
          placeholder="KEYWORDS"
        />
        <input type="text" id="warmer" name="warmer" placeholder="WARMER" />
        <input type="text" id="content" name="content" placeholder="CONTENT" />
        <input
          type="text"
          id="photoURL"
          name="photoURL"
          placeholder="LINK TO ORIGINAL ARTICLE"
        />
        <input
          type="text"
          id="originalURL"
          name="originalURL"
          placeholder="LINK TO A RELEVANT IMAGE"
        />
        <input type="submit" value="Submit" onClick={(e) => handleClick(e)} />
      </form>
    </div>
  );
}

export default Contribution;
