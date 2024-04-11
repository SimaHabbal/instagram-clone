import React from 'react';
import "../styles/Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Sidenav(){
    return (
        <div className='sidenav'>
            <img className='sidenav-logo' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" />
            <div className="sidenav-buttons">
                <button className="sidenav-button">
                    <HomeIcon/>
                    <span>Home</span>
                </button>
                <button className="sidenav-button">
                    <SearchIcon/>
                    <span>Search</span>
                </button>

                <button className="sidenav-button">
                    <ExploreOutlinedIcon/>
                    <span>Explore</span>
                </button>

                <button className="sidenav-button">
                    <SlideshowOutlinedIcon/>
                    <span>Reels</span>
                </button>

                <button className="sidenav-button">
                    <ChatIcon/>
                    <span>Messages</span>
                </button>

                <button className="sidenav-button">
                    <FavoriteBorderIcon/>
                    <span>Notifications</span>
                </button>

                <button className="sidenav-button">
                    <AddBoxOutlinedIcon/>
                    <span>Create</span>
                </button>
                
                <button className="sidenav-button">
                    <GestureIcon/>
                    <span>Threads</span>
                </button>
                
            </div>
            <div className='sidenav-more'>
            <button className="sidenav-button">
                    <MenuRoundedIcon/>
                    <span>More</span>
                </button>
            </div>
        </div>
    )
}
export default Sidenav