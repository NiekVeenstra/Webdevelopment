import React, { useState } from "react";

const CreateTweet = () => {
  // state
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  // function
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    console.log("hey");
  };
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
