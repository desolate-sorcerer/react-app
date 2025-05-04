import "./MessageContainer.css"

function MessageContainer({ username, msg }) {
  return (
    <div className="msg-container">
      <span className="username">{username}:</span>
      <span className="msg">{msg}</span>
    </div>
  )
}

export default MessageContainer
