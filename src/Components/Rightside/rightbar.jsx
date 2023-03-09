import './rightbar.scss';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src=""
                alt=""
              />
              <span>Issac</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src=""
                alt=""
              />
              <span>Einstein</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
            <span>Latest Activities</span>
            <div className="user">
                <div className="userInfo">
                <img
                    src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <p>
                    <span>Divi</span> changed their Profile picture
                </p>
                </div>
                <span>1 min ago</span>
            </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Williams</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Divi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Priya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src=""
                alt=""
              />
              <div className="online" />
              <span>Robert</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src=""
                alt=""
              />
              <div className="online" />
              <span>Jonathon</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src=""
                alt=""
              />
              <div className="online" />
              <span>Raghu</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src=""
                alt=""
              />
              <div className="online" />
              <span>Sai</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src=""
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;