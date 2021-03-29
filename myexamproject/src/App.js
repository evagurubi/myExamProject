import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Article from "./Components/Article";
import SearchComponent from "./Components/SearchComponent";
import Contribution from "./Components/Contribution";

function App() {
  const [data, setData] = useState(null);
  const [formNeeded, setFormNeeded] = useState(false);

  const fetchData = () => {
    fetch("http://localhost:8000/articles")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="intro">
        <h1>Newspaper And Magazine Articles for Your English Class</h1>
        <h4>
          " ‘One of the words that has been creeping into English teaching in
          the past few years is 'authentic'. It has a kind of magic ring to it:
          who after all would want to be inauthentic?’ Teachers and students are
          naturally attracted to authentic texts (by which I mean any text which
          has not been produced for the purpose of language-learning). Finding
          that you can read something designed for a native speaker is
          motivating, and developing ways to deal with ‘real’ texts enables
          students to read more confidently and extensively outside the
          classroom."
        </h4>
      </div>
      <div className="articles">
        {!data
          ? "Loading..."
          : data.map((article, i) => <Article key={i} article={article} />)}
      </div>
      <div className="searchcomponent">
        <h3>
          You can search for articles by title or keyword using the first form.
          The second form will give you a title if the given word appears
          anywhere within the article.
        </h3>
        {!data ? "Loading..." : <SearchComponent data={data} />}
      </div>
      <div className="contributions">
        <h3>
          You can upload your articles and the related activities by clicking on
          the link below. Please follow the structure of the activities on the
          left. The form will give you a lead.
        </h3>
        <button onClick={() => setFormNeeded(!formNeeded)}>
          PLEASE CONTRIBUTE AND SHARE AN ACTIVITY WITH US
        </button>
        {formNeeded && <Contribution />}
      </div>
    </div>
  );
}

export default App;
