import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile';
const Header = () => {

  const [getToken, setGetToken] = useState("")

  useEffect(() => {
    setGetToken(sessionStorage.getItem("token"))

  }, [])
  console.log(getToken);
  return (
    <>
      <Navbar expand='lg'  className='d-flex justify-content-center align-items-center w-100' >
        <Container className='d-flex justify-content-center align-items-center w-100'>
          <Navbar.Brand className='d-flex justify-content-center align-items-center w-100'>
            <img
              alt="No-Image"
              src="https://th.bing.com/th?id=OSK.e3a008c2ff33be7eddce5b6777c1e66c&w=117&h=82&c=7&o=6&pid=SANGAM"
              className="img-fluid"
            />
            <h1 className=' w-100 '>FLASH FICTION</h1>


          </Navbar.Brand>
          <div className='ms-auto '>

            {getToken &&
              <Profile />}

          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header