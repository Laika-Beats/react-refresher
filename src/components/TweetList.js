import Tweet from "./Tweet";

function TweetList({ author, message }) {
  return (
    <div>
      <Tweet author={author} message={message} />
      <Tweet author={author} message={message} />
      <Tweet author={author} message={message} />
    </div>
  );
}

export default TweetList;
