import './style.scss';
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './icons';
import { useState } from "react"
import { AvatarLoader } from './loaders';

function App() {

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState();
  const [tweet, setTweet] = useState(
    "This is the default tweet written by @khazarglzd and you can find him at https://github.com/khazarglzd github adress."
  );
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState();
  const [quoteTweets, setQuoteTweets] = useState();
  const [likes, setLikes] = useState();

  const tweetFormat = tweet => {
    tweet = tweet
      .replace(/@([\w]+)/g, '<span>@$1</span>')
      .replace(/#([\wşçöğüıİəƏ]+)/gi, '<span>#$1</span>')
      .replace(/(https?:\/\/[\w\.\/]+)/, '<span>$1</span>')
    return tweet;
  };

  const avatarHandle = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };

  const formatNumber = number => {
    if (!number) {
      number = 0;
    }
    if (number < 1000) {
      return number;
    }
    number /= 1000;
    number = String(number).split('.');

    return (
      number[0] + (number[1] > 100 ? ',' + number[1].slice(0, 1) + ' B' : ' B')
    );
  };

  return (
    <>
      <div className='tweet-settings'>
        <p>Tweet Settings</p>
        <ul>
          <li>
            <label>Name Surname:</label>
            <input
              type="text"
              className="input"
              placeholder='Name Surname'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </li>
          <li>
            <label>Username:</label>
            <input
              type="text"
              className="input"
              placeholder='Username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </li>
          <li>
            <label>Tweet:</label>
            <textarea
              class="textarea"
              maxLength="390"
              value={tweet}
              onChange={e => setTweet(e.target.value)}
            />
          </li>
          <li>
            <label>Avatar</label>
            <input type="file" className="input" onChange={avatarHandle} />
          </li>
          <li>
            <label>Total Retweets:</label>
            <input
              type="number"
              className="input"
              value={retweets}
              placeholder={0}
              onChange={e => setRetweets(e.target.value)}
            />
          </li>
          <li>
            <label>Total Quote Tweets:</label>
            <input
              type="number"
              className="input"
              value={quoteTweets}
              placeholder={0}
              onChange={e => setQuoteTweets(e.target.value)}
            />
          </li>
          <li>
            <label>Total Likes:</label>
            <input
              type="number"
              className="input"
              value={likes}
              placeholder={0}
              onChange={e => setLikes(e.target.value)}
            />
          </li>
          <button>Create Tweet</button>
        </ul>
      </div>
      <div className='tweet-container'>
        <div className="tweet">
          <div className='tweet-author'>
            {(avatar && <img src={avatar} />) || <AvatarLoader />}
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
            <p
              dangerouslySetInnerHTML={{
                __html:
                  (tweet && tweetFormat(tweet)) ||
                  'Here is the default tweet'
              }}
            />
          </div>
          <div className="tweet-stats">
            <span>
              <b>{formatNumber(retweets)}</b> Retweet
            </span>
            <span>
              <b>{formatNumber(quoteTweets)}</b> Quote Tweets
            </span>
            <span>
              <b>{formatNumber(likes)}</b> Likes
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
