import { useState, useEffect } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // where you can write normal javascript

  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const author = "Joshua Thompson";

  useEffect(() => {
    console.log("YO");
  }, [textInput]);

  return (
    <div className="App">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList author={author} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
