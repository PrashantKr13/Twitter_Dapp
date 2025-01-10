import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Tweets = ({ tweets, shortAddress, getTweets, account, contract }) => {
  const heartEmoji = <FontAwesomeIcon icon={faHeart} />
  const likeTweet = (tweet)=>{
    return async ()=>{
      await contract.methods.likeTweet(tweet.author, tweet.id).send({from: account});

      console.log(tweet.author+" "+tweet.likes);
      getTweets();
    }
  }
    return (
      <div id="tweetsContainer">
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet">
            <img
              className="user-icon"
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${tweet.author}`}
              alt="User Icon"
            />
            <div className="tweet-inner">
              <div className="author">{shortAddress(tweet.author)}</div>
              <div className="content">{tweet.content}</div>
              <div className="likes">
                <FontAwesomeIcon icon={faHeart} className="likeButton" onClick={likeTweet(tweet)}/>
                <div className="likeCount">{tweet.likes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Tweets;
  