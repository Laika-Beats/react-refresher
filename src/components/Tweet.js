const Tweet = ({ author, message }) => {
  return (
    <div>
      <h2>{author}</h2>
      <h3>{message}</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
