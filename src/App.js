import './style.scss';
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './icons';
import { useState } from "react"

function App() {

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState();
  const [tweet, setTweet] = useState(
    "This is the deafult tweet written by @khazarglzd and you can find him at https://github.com/khazarglzd github adress."
  );
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);

  const tweetFormat = tweet => {
    tweet = tweet
      .replace(/@([\w]+)/g, '<span>@$1</span>')
      .replace(/#([\wşçöğüıİəƏ]+)/gi, '<span>#$1</span>')
      .replace(/(https?:\/\/[\w\.\/]+)/, '<span>$1</span>')
    return tweet;
  };


  return (
    <>
      <div className='tweet-settings'>
        <p>Tweet Settings</p>
        <ul>
          <li>
            <input
              type="text"
              className="input"
              placeholder='Name Surname'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              className="input"
              placeholder='userName'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </li>
          <li>
            <label>Tweet</label>
            <textarea
              class="textarea"
              maxLength="290"
              value={tweet}
              onChange={e => setTweet(e.target.value)}
            />
          </li>
        </ul>
      </div>
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
            <p>             <p
              dangerouslySetInnerHTML={{
                __html:
                  (tweet && tweetFormat(tweet)) ||
                  'Here is the default tweet'
              }}
            /></p>
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
