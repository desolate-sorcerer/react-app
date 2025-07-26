import "./UserBio.css"

function UserBio({ user }) {
  return (
    <div className="user-bio">
      <div className="user-info">
        <h3>Personal introduction</h3>
        <p>{user.sex}</p>
        <p>Born {user.birth}</p>
        <p>{user.link}</p>
        <p>{user.link}</p>
        <p>{user.link}</p>
        <button>Edit Details</button>
      </div>
      <div className="user-recipes">
        <h3>Recipes</h3>
      </div>
      <div className="user-books">
        <h3>Books</h3>
      </div>
    </div>
  )
}

export default UserBio;
