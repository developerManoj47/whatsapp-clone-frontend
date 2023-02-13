import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertSharp from '@mui/icons-material/MoreVertSharp';
import AttachFile from '@mui/icons-material/AttachFile';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertSharp />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className='chat__message'>
          <span className="chat__name">Manoj</span>
          This is a message
          <span className="chat__timestamp">
            {
              // Date().toUTCStraing()
              new Date().toISOString()
            }
          </span>
        </p>
        <p className='chat__message chat__reciever'>
          <span className="chat__name">Manoj</span>
          This is a message
          <span className="chat__timestamp">
            {
              // Date().toUTCStraing()
              new Date().toISOString()
            }
          </span>
        </p>
        <p className='chat__message'>
          <span className="chat__name">Manoj</span>
          This is a message
          <span className="chat__timestamp">
            {
              // Date().toUTCStraing()
              new Date().toISOString()
            }
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <SentimentSatisfiedOutlinedIcon />
        <form>
          <input placeholder='Type a message' type="text" />
          <button type='submit' >Send</button>
        </form>
        <KeyboardVoiceOutlinedIcon />
      </div>
    </div>
  )
}

export default Chat
