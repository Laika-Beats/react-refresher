const Tweet = ({ author, setTweets, tweets, tweet, id }) => {
  const deleteTweetHandler = () => {
    setTweets(tweets.filter((state) => state.id !== id));
  };
  return (
    <div>
      <h2 style={{ color: "red" }}>{author}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweetHandler}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
