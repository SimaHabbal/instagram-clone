import React from 'react'
import "../styles/Suggestions.css"
import { Avatar } from '@mui/material'

function Suggestions(){
    return (
        <div className='suggestions'>
            <div className="suggestions-title">
                Suggestions for you
            </div>
            <div className="suggestions-usernames">

            <div className="suggestion-username">
                    <div className="username-left">
                        
                        <span className="avatar">
                            <Avatar >S</Avatar>
                        </span>

                        <div className="username-info">
                            <span className="username">
                                Sima
                                </span>
                                
                            <span className="relation">
                                New to Instagram
                                </span>
                        </div>
                    </div>
                    <button className="follow-button">
                        Follow
                        </button>
                </div>


                <div className="suggestion-username">
                    <div className="username-left">
                        
                        <span className="avatar">
                            <Avatar >S</Avatar>
                        </span>

                        <div className="username-info">
                            <span className="username">
                                Sima
                                </span>
                                
                            <span className="relation">
                                New to Instagram
                                </span>
                        </div>
                    </div>
                    <button className="follow-button">
                        Follow
                        </button>
                </div>


                

                <div className="suggestion-username">
                    <div className="username-left">
                        
                        <span className="avatar">
                            <Avatar >S</Avatar>
                        </span>

                        <div className="username-info">
                            <span className="username">
                                Sima
                                </span>
                                
                            <span className="relation">
                                New to Instagram
                                </span>
                        </div>
                    </div>
                    <button className="follow-button">
                        Follow
                        </button>
                </div>
            </div>
        </div>
    )
}
export default Suggestions