import "./User.css"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
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


  if (loading) return <div>Loading...</div>

  return (
    (error) ? <p style={{ color: 'red' }}>{error}</p> :
      <div className="profile">
        <h2>Profile</h2>
        <form>
          <input type="text" value={sessionData.name} className="input-data" /><br />
          <input type="text" value={sessionData.email} className="input-data" /><br />
          <input type="submit" value="Save changes" className="submit" />
        </form>
        <button className="logout" onClick={logout}>Logout</button>
      </div>
  )
}
export default User
