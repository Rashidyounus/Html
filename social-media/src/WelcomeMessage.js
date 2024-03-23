//fetch
/*
const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome_messgae">
      <h1>There is no post</h1>
      <button onClick={onGetPostsClick} className="btn btn-primary">
        Get Posts From Server
      </button>
    </center>
  );
};
*/
//use state without useEffects
const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome_messgae">
      <h1>There is no post</h1>
    </center>
  );
};

export default WelcomeMessage;
