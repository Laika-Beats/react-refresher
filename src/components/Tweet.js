const Tweet = ({ author, message, tweet, setTweets }) => {
  const deleteTweetHandler = () => {
    console.log(tweet);
  };
  return (
    <div>
      <h2>{author}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweetHandler}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
