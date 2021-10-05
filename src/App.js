import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // where you can write normal javascript
  const author = "Joshua Thompson";
  const message = "test tweet text";

  const sayHelloHandler = () => {
    console.log("Hello");
  };
  return (
    <div className="App">
      <button onClick={sayHelloHandler}>CLICK</button>
      <CreateTweet />
      <TweetList author={author} message={message} />
    </div>
  );
}

export default App;
