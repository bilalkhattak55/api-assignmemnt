import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Success from './components/Success';
// import Fail from './components/Fail';


function App() {
    //   return (
    //     <div>
    //       <Signin />
    //       {/* <Api /> */}
    //     </div>
    //   );
    // }

    // const {data, setData} = useState([]);
    const [showScreen, setShowScreen] = useState(false);
    const [email, setEmail] = useState('');
    // const [clickEmail, setClickEmail] = useState("");
    const [emails, setEmails] = useState("");

    function getUser() {

        // setLoading(false)
        axios.get("https://jsonplaceholder.typicode.com/users")

            .then((res) => {
                let userData = res.data;
                let userEmail = userData.map((items) => {
                    return items.email
                })
                // console.log(item.email)
                setEmails(userEmail);




            });


    }
    // console.log(data)


    console.log(email)



    function handleChange(event) {
        setEmail(event.target.value);


    }

    function handleClick(e) {
        e.preventDefault();


        setShowScreen(false);
        for (var i = 0; i <= emails.length; i++) {
            if (emails[i] == email) {
                setShowScreen(true)

            }  else {
               
            }
            // emails.map((myEmail) => {
            //   if(emails == email) {
            //     showScreen(true)
            //   }
            // })

            //    setShowScreen(true)
        }
        
    }

        useEffect(() => {
            getUser()
        }, [])


        return (

            <div>
                {showScreen ? <Success /> :
                    <Form className='basic-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleClick}>
                            Submit
                        </Button>
                    </Form>
                }

            </div>
  )
            }


 export default App;

    
    