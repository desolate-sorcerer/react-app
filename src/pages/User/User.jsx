import "./User.css"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
import UserSideBar from "../../components/UserSideBar/UserSideBar"
import UserProfile from "../../components/UserProfile/UserProfile"
import UserBio from "../../components/UserBio/UserBio"

function User() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch("http://localhost:5000/session", {
          credentials: 'include'
        });
        const data = await response.json();
        setSessionData(data);
        setLoading(false);
        if (!data.name) {
          navigate('/register');
        }
      }
      catch (err) {
        setError(err || 'error getting data');
        setLoading(false);
      }
    }
    handleData();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        credentials: 'include'
      });
      const succes = await response.json();
      if (succes) {
        navigate('/');
      }
      else {
        setError(err);
      }
    }
    catch (err) {
      setError(err);
    }
  }

  const user = {
    name: 'Nik Mlakar',
    following: 10,
    followers: 11,
    posts: 6,
    background: '../../../public/img/indian.jpg',
    img: '../../../public/img/chad.jpg',
    bio: 'btw i use arch',
    birth: '1.1.2000',
    sex: 'male',
    link: 'nik@gmail.com'
  }

  if (loading) return <div>Loading...</div>

  return (
    (error) ? <p style={{ color: 'red' }}>{error}</p> :
      <div className="user-page">
        <UserSideBar />
        <UserProfile user={user} />
        <UserBio user={user} />
      </div>
  )
}
export default User
