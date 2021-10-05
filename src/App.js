import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // where you can write normal javascript
  const author = "Joshua Thompson";
  const message = "test tweet text";

  return (
    <div className="App">
      <CreateTweet />
      <TweetList author={author} message={message} />
    </div>
  );
}

export default App;
