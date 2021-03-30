//TWO FORMS TO FULFILL TWO SEARCH REQUIREMENTS.

import React, { useState } from "react";
import "../../src/App.css";

function SearchComponent({ data }) {
  const [filteredList, setFilteredList] = useState([]);
  const [contentList, setContentList] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const handleSearch = (event) => {
    let myWord = event.target.form[0].value;
    let newFilteredListValue = data.filter(
      (article) =>
        (article.keywords.includes(myWord) || article.title.includes(myWord)) &&
        myWord.length > 2
    );

    setFilteredList(newFilteredListValue);
    setTitleInput("");
  };

  const handleContentSearch = (event) => {
    let contentWord = event.target.form[0].value;
    let newContentListValue = data.filter(
      (article) =>
        article.content.includes(contentWord) && contentWord.length > 2
    );

    setContentList(newContentListValue);
    console.log(contentList.length);
    setContentInput("");
  };

  return (
    <div className="search">
      <div className="searchform">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="SEARCH TITLES OR KEYWORDS"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <input
            type="submit"
            value="submit"
            onClick={(e) => handleSearch(e)}
          />
        </form>
        {filteredList.length === 0
          ? "No match so far."
          : filteredList.map((article, i) => (
              <div key={i}>{article.title}</div>
            ))}
      </div>
      <div className="searchform">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="SEARCH CONTENT"
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
          />
          <input
            type="submit"
            value="submit"
            onClick={(e) => handleContentSearch(e)}
          />
        </form>
        {contentList.length === 0
          ? "No match so far."
          : contentList.map((article, i) => <div key={i}>{article.title}</div>)}
      </div>
    </div>
  );
}

export default SearchComponent;
