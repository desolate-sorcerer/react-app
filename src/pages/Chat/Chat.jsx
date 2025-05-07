import "./Chat.css"
import { FaArrowTurnUp } from "react-icons/fa6";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import { io } from 'socket.io-client';
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";

function Chat() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch("http://localhost:5000/session", {
          credentials: 'include'
        });
        const user = await response.json();
        setSessionData(user);
        setLoading(false);
        if (!user.name) {
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

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');
    const socket = socketRef.current;

    socket.emit('join_room', 'room1');

    socket.on('receive_message', (data) => {
      console.log('New message:', data);
      setMessages(prevMessages => [...prevMessages, data.message]);
    });

    socket.on('notification', (data) => {
      console.log('Notification:', data.message);
    });

    return () => {
      socket.off('receive_message');
      socket.off('notification');
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.trim() === "") return;

    socketRef.current.emit('send_message', {
      room: 'room1',
      message: msg,
    });

    setMsg("");
  };


  if (loading) return <p>loading...</p>

  return (
    <div className="display">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="msg-display">
        {messages.map((data) => (<MessageContainer msg={data} username={sessionData.name} />))}
      </div>
      <div className="msg-send">
        <form onSubmit={handleSubmit}>
          <input type="text" className="msg-input" placeholder="message" value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button type="submit" className="send-btn"><FaArrowTurnUp /></button>
        </form>
      </div>
    </div>
  )
}

export default Chat
