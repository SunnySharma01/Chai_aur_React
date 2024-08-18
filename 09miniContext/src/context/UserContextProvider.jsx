import React from "react";
import UserContext from "./UserContext";                  // Import the context object

const UserContextProvider = ({children}) => {              // Create a provider
    const [user, setUser] = React.useState(null)           // Create a state
    return(
        <UserContext.Provider value={{user, setUser}}>          {/* Provide the value */}
        {children}
        </UserContext.Provider>     // Wrap the children
    )
}

export default UserContextProvider           // Export the provider