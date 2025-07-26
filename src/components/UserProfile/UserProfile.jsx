import "./UserProfile.css"

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="user-background">
        <img src={user.background} />
      </div>
      <div className="user-desc">
        <span className="user-img">
          <img src={user.img} />
        </span>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <div className="user-stats">
          <div>
            <h1>{user.following}</h1>
            <h3>Following</h3>
          </div>
          <div>
            <h1>{user.followers}</h1>
            <h3>Followers</h3>
          </div>
          <div>
            <h1>{user.posts}</h1>
            <h3>Posts</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
