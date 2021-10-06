const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
  };

  return (
    <form onSubmit={submitHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="30"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
