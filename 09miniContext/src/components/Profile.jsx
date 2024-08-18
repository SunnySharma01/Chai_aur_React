import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)         // Destructure user from UserContext
    
    if (!user) return <div>please login</div>       // If user is not set, return a message to login

    return <div>Welcome {user.username}</div>       // If user is set, return a welcome message
}

export default Profile