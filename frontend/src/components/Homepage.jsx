import React from 'react'
import "../styles/Homepage.css"
import Sidenav from './Sidenav'
import Timeline from './Timeline'

function Homepage(){
    return (
        <div className='homepage'>
            <div className="homepage-nav">
                <Sidenav />
            </div>
            <div className="homepage-timeline">
            <Timeline />
            </div>
        </div>
    )
}
export default Homepage