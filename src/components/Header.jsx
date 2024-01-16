import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Header = () => {

  const [getToken, setGetToken] = useState("")

  useEffect(() => {
    setGetToken(sessionStorage.getItem("token"))

  }, [])
  console.log(getToken);
  return (
    <>
    
      <Navbar className="bg-body-tertiary">
        <div className='container d-flex align-items-center justify-content-between w-100'>

          <div className='d-flex w-100 align-items-center justify-content-center '>

            <h1 className='d-flex w-100 align-items-center justify-content-center'><img
              alt="No-Image"
              src="https://th.bing.com/th?id=OSK.e3a008c2ff33be7eddce5b6777c1e66c&w=117&h=82&c=7&o=6&pid=SANGAM"
              className="img-fluid"
            />FLASH FICTION  </h1>
          </div>


          <div className='d-flex justify-content-end  w-50'>

            {getToken &&
              <Profile />}

          </div>
        </div>
      </Navbar>
    </>
  )
}

export default Header