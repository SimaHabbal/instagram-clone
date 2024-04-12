import React from 'react'
import "/post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Posts({user, postImage, likes, timestamp}){
    return(
        <div className='post'>
            <div className="post-header">
                <div className="post-header-author">
                <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                {user} • <span>{timestamp}</span>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="post-image">
                <img src={postImage} alt="" />
            </div>
            <div className="post-footer">
                <div className="post-footer-icons">
                    <div className="post-icons-main">
                        <FavoriteBorderIcon className='postIcon'/>
                        <ChatIcon className='postIcon'/>
                        <TelegramIcon className='postIcon'/>
                    </div>
                    <div className="post-icons-save">
                        <BookmarkBorderIcon className='postIcon'/>
                    </div>
                </div>
                Liked by {likes} people
            </div>
        </div>
    )
}
export default Posts