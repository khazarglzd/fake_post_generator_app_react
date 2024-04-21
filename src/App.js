import './style.scss';
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './icons';

function App() {
  return (
    <div className="tweet">
      <div className='tweet-author'>
        <img alt="Avatar resmi" src="https://yt3.ggpht.com/tdohfuP8L3-gTrlMeC4s2k2sbByUJEyXXsZ0CaiL2nyMqVdmm20ZlDo5uCkdDxDdN1MNZJxDrLU=s88-c-k-c0x00ffffff-no-rj" />
        <div>
          <div className='name'>
            Khazar Guluzade
            <VerifiedIcon width="19" height="19" />
          </div>
          <div className='username'>
            @khazarglzd
          </div>
        </div>
      </div>
      <div className='tweet-content'>
        <p> This is a fake tweet written for the test. </p>
      </div>
      <div className="tweet-stats">
        <span>
          <b>240</b> Retweet
        </span>
        <span>
          <b>77</b> Alinti Tweetler
        </span>
        <span>
          <b>120</b> Begeni
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
  );
}

export default App;
