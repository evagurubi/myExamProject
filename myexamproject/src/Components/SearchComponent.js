import React, { useState } from "react";
import "../../src/App.css";

function SearchComponent({ data }) {
  const [filteredList, setFilteredList] = useState([]);
  const [contentList, setContentList] = useState([]);

  const handleSearch = (event) => {
    let myWord = event.target.form[0].value;
    let newFilteredListValue = data.filter(
      (article) =>
        article.keywords.includes(myWord) ||
        article.title.includes(myWord) ||
        article.content.includes(myWord)
    );

    setFilteredList(newFilteredListValue);
  };

  const handleContentSearch = (event) => {
    let contentWord = event.target.form[0].value;
    let newContentListValue = data.filter((article) =>
      article.content.includes(contentWord)
    );

    setContentList(newContentListValue);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" placeholder="SEARCH TITLES OR KEYWORDS" />
        <input type="submit" value="submit" onClick={(e) => handleSearch(e)} />
      </form>
      {filteredList.map((article, i) => (
        <div key={i}>{article.title}</div>
      ))}

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" placeholder="SEARCH CONTENT" />
        <input
          type="submit"
          value="submit"
          onClick={(e) => handleContentSearch(e)}
        />
      </form>
      {contentList.map((article, i) => (
        <div key={i}>{article.title}</div>
      ))}
    </div>
  );
}

export default SearchComponent;
