import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {                      // Github component
    const data = useLoaderData()        // useLoaderData hook
//     const [data, setData] = useState([])       // useState hook
//     useEffect(() => {                    // useEffect hook
//      fetch('https://api.github.com/users/SunnySharma01')
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);
//         setData(data)
//      })
//     }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repositories: {data.public_repos}
    <img src={data.avatar_url} alt="Git picture" width={250} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {           // githubInfoLoader function
    const response = await fetch('https://api.github.com/users/SunnySharma01')
    return response.json()
}