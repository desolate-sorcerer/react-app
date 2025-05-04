import "./Chat.css"
import { FaArrowTurnUp } from "react-icons/fa6";
import MessageContainer from "../../components/MessageContainer/MessageContainer";

function Chat() {
  return (
    <div className="display">
      <div className="msg-display">
        <MessageContainer username={"Nik"} msg={"jghsjkhgjkr"} />
      </div>
      <div className="msg-send">
        <input type="text" className="msg-input" placeholder="message" />
        <button type="submit" className="send-btn"><FaArrowTurnUp /></button>
      </div>
    </div>
  )
}

export default Chat
