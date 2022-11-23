import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Api() {

    const {user, setUser} = useState("");

    function getUser() {

        // setLoading(false)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUser(res.data)
                
                    .catch((error) => {
                        console.log(error)
                    })
                    
            })
            console.log(user)

    }
  

    useEffect(()=> {
      getUser()
    }, [])
  return (
    <div>
      <Card />
    </div>
  )
}

export default Api;
