import './style.scss';
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './icons';
import { useState } from "react"

function App() {

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState();
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);



  return (
    <>
      <div className='tweet-settings'> Tweet Settings</div>
      <div className='tweet-container'>
        <div className="tweet">
          <div className='tweet-author'>
            <img alt="Avatar resmi" src="https://yt3.ggpht.com/tdohfuP8L3-gTrlMeC4s2k2sbByUJEyXXsZ0CaiL2nyMqVdmm20ZlDo5uCkdDxDdN1MNZJxDrLU=s88-c-k-c0x00ffffff-no-rj" />
            <div>
              <div className='name'>
                {name || "Name Surname"}
                {isVerified && <VerifiedIcon width="19" height="19" />}
              </div>
              <div className='username'>
                @{username || "username"}
              </div>
            </div>
          </div>
          <div className='tweet-content'>
            <p> {tweet || "This is a default tweet."}</p>
          </div>
          <div className="tweet-stats">
            <span>
              <b>{retweets}</b> Retweet
            </span>
            <span>
              <b>{quoteTweets}</b> Quote Tweets
            </span>
            <span>
              <b>{likes}</b> Likes
            </span>
          </div>
          <div className="tweet-actions">
            <span>
              <ReplyIcon />
            </span>
            <span>
              <RetweetIcon />
            </span>
            <span>
              <LikeIcon />
            </span>
            <span>
              <ShareIcon />
            </span>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
