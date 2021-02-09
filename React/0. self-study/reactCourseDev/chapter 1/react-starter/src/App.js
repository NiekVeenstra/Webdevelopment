import React, { useState, useEffect } from "react";
// import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // state
  const [name, setName] = useState("niek");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "Hello";

  useEffect(() => {
    console.log("yeah im in tha function baby");
  }, [textInput]);
  return (
    <div className="box">
      <h1>Hello React</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
