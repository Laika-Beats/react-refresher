import Tweet from "./Tweet";

function TweetList({ tweets, author, setTweets }) {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          author={author}
          tweet={tweet.message}
          tweets={tweets}
          key={tweet.id}
          id={tweet.id}
          setTweets={setTweets}
        />
      ))}
    </div>
  );
}

export default TweetList;
