import "./App.css";
import React, { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";

  let quoteData = {
    _id: "Z_9VClTWUcSv",
    content:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
    author: "Alfred Adler",
    tags: ["Famous Quotes", "Life"],
    authorSlug: "alfred-adler",
    length: 87,
    dateAdded: "2021-01-30",
    dateModified: "2023-04-14",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="social">
          <FacebookShareButton
            url={`https://api.quotable.io/quotes/${quote._id}`}
            quote={`${quote.author} - ${quote.content}`}>
            <FacebookIcon size={32} round={true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton
            url={`https://api.quotable.io/quotes/${quote._id}`}
            title={`${quote.author} - ${quote.content}`}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton
            title={`${quote.author} - ${quote.content}`}
            url={`https://api.quotable.io/quotes/${quote._id}`}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
};

export default App;
