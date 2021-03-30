//INITIALLY LISTS TITLES FROM DATABASE. OFFERS BUTTON FOR ACTIVITIES. ONLY A WARMER QUESTION FIRST AND BY CLICKING ON A SECOND BUTTON THE REST OF THE ACTIVITIES WILL BE DISPLAYED WHEN NEEDED. oRIGINAL ARTICLES AND PHOTOS OPEN IN NEW WINDOW.

import React, { useState } from "react";
import "../../src/App.css";

function Article({ article }) {
  const [warmerNeeded, setWarmerNeeded] = useState(false);
  const [articleNeeded, setArticleNeeded] = useState(false);

  return (
    <div className="articlecontent">
      <h3>{article.title}</h3>
      <button onClick={() => setWarmerNeeded(!warmerNeeded)}>
        {warmerNeeded ? "HIDE ACTIVITIES" : "SHOW ACTIVITIES"}
      </button>
      {warmerNeeded && (
        <div>
          <h5>{article.warmer}</h5>
          <button onClick={() => setArticleNeeded(!articleNeeded)}>
            {articleNeeded
              ? "DO NOT SHOW THE ARTICLE"
              : "READ MORE ABOUT THE TOPIC AND FIND USEFUL LINKS"}
          </button>
        </div>
      )}
      {warmerNeeded && articleNeeded && (
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
  );
}

export default Article;
