import { Avatar } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from 'react'
import "./Chat.css";
function Chat() {
    return (
        <div className="chat">

            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                    <SearchOutlined />
                    </IconButton>
                    <IconButton>
                    <AttachFile />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Rosy</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}
                    </span>
                </p><br/>

                <p className="chat_receiver chat_message">
                    <span className="chat_name">Rosy</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p><br/>

                <p className="chat_message">
                    <span className="chat_name">Rosy</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p><br/>

                 <p className="chat_message">
                    <span className="chat_name">Rosy</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p><br/>

                <p className="chat_message">
                    <span className="chat_name">Rosy</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p><br/>

            </div>

            <div className ="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text"/>
                    <button type = "submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat
