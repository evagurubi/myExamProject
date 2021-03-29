import React, { useState } from "react";
import "../../src/App.css";

function Article({ article }) {
  const [warmerNeeded, setWarmerNeeded] = useState(false);
  const [articleNeeded, setArticleNeeded] = useState(false);

  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button onClick={() => setWarmerNeeded(!warmerNeeded)}>
          SHOW ACTIVITIES
        </button>
        {warmerNeeded && (
          <div>
            <h5>{article.warmer}</h5>
            <button onClick={() => setArticleNeeded(!articleNeeded)}>
              READ MORE ABOUT THE TOPIC AND FIND USEFUL LINKS
            </button>
          </div>
        )}
        {articleNeeded && (
          <div>
            <p>{article.content}</p>
            <a href={article.originalURL} target="_blank">
              LINK TO THE ORIGINAL ARTICLE
            </a>
            <br />
            <a href={article.photoURL} target="_blank">
              LINK TO A PICTURE FOR EXTRA IDEAS
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;
