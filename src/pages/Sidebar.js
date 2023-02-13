import React from 'react'
import "./Sidebar.css"
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import DonutLargeSharpIcon from '@mui/icons-material/DonutLargeSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from '../components/SidebarChat';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FleFLP0c8o1Ai-OCZ4q_eSmggI1Vz44xMpp8V5aEow&s" /> 
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeSharpIcon />
                    </IconButton>
                    <IconButton>
                        <ChatSharpIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertSharpIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder='Search or start new chat' type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
