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
      <div>
        <h1>Newspaper Articles for Your English Class</h1>
        <h2>
          " ‘One of the words that has been creeping into English teaching in
          the past few years is 'authentic'. It has a kind of magic ring to it:
          who after all would want to be inauthentic?’ Teachers and students are
          naturally attracted to authentic texts (by which I mean any text which
          has not been produced for the purpose of language-learning). Finding
          that you can read something designed for a native speaker is
          motivating, and developing ways to deal with ‘real’ texts enables
          students to read more confidently and extensively outside the
          classroom."
        </h2>
      </div>
      <div>
        {!data
          ? "Loading..."
          : data.map((article, i) => <Article key={i} article={article} />)}
      </div>
      <div>{!data ? "Loading..." : <SearchComponent data={data} />}</div>
      <div>
        <button onClick={() => setFormNeeded(!formNeeded)}>
          PLEASE CONTRIBUTE AND SHARE AN ACTIVITY WITH US
        </button>
        {formNeeded && <Contribution />}
      </div>
    </div>
  );
}

export default App;
