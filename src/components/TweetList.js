import Tweet from "./Tweet";

function TweetList({ tweets, author, setTweets }) {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet author={author} tweet={tweet} setTweets={setTweets} />
      ))}
    </div>
  );
}

export default TweetList;
