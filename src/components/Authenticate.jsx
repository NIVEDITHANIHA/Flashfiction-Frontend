import React, { useContext, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { flashFictionRegister, loginFlashFiction } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthShareContext } from '../context/Contextshared';


const Authenticate = ({ register }) => {
    const { isAuthContext, setisAuthContext } = useContext(isAuthShareContext)

    console.log(register);

    const navigate = useNavigate()

    const [flashRegister, setFlashRegister] = useState({
        username: "",
        email: "",
        password: ""
    })

    console.log(flashRegister);


    const handleRegister = async (e) => {
        e.preventDefault();

        const { username, email, password } = flashRegister

        if (!username || !email || !password) {
            toast.info("fill the form");
        } else {

            const results = await flashFictionRegister(flashRegister)
            if (results.status === 200) {
                toast.success(`${username} Registerd  Succesfully`)
                navigate("/login")
                setFlashRegister({
                    username: "",
                    email: "",
                    password: "",
                })

            } else {
                toast.error(results.request.response);
            }
        }
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = flashRegister
        if (!email || !password) {
            toast.info("Fill the Form");
        } else {
            const resultsLogin = await loginFlashFiction(flashRegister)
            if (resultsLogin.status === 200) {
                sessionStorage.setItem("existedUser", JSON.stringify(resultsLogin.data.existedUser))
                sessionStorage.setItem("token", resultsLogin.data.token)

                toast.success(`${email} Logined Succesfully`)
                navigate("/dashboard")
                setisAuthContext(true)
            } else {
                toast.error(resultsLogin.request.response);
            }

        }

    }

    return (
        <>
            <div className='d-flex align-items-center justify-content-center w-100 mt-5 p-5' style={{ height: "100%" }}>
                <Navbar className="w-75 mt-5 d-flex align-items-center justify-content-center" style={{ height: "50%" }}>
                    <Row className='w-100'>
                        <Col md={6} lg={6} sm={12}>
                            {register ? <div>
                                <h2 className='d-flex align-items-center justify-content-center w-100'>SIGN UP</h2>


                            </div> : <div>
                                <h2 className='d-flex align-items-center justify-content-center w-100'>SIGN IN</h2>


                            </div>




                            }                            {register && <input type="text" className='form-control mb-2' placeholder='Enter Name' value={flashRegister.username} onChange={(e) => setFlashRegister({ ...flashRegister, username: e.target.value })} />
                            }                            <input type="text" className='form-control mb-2' placeholder='Enter Email' value={flashRegister.email} onChange={(e) => setFlashRegister({ ...flashRegister, email: e.target.value })} />
                            <input type="text" className='form-control' placeholder='Enter Password' value={flashRegister.password} onChange={(e) => setFlashRegister({ ...flashRegister, password: e.target.value })} />


                            {register ?
                                <div>

                                    <button type="submit" className='w-75 mt-5 px-5' onClick={handleRegister}>Register</button>
                                    <p>Already a User ? Click here to <Link to={"/login"}>Login</Link></p>
                                </div> :
                                <div>
                                    <button type="submit" className='w-75 mt-5 px-5' onClick={handleLogin}>Login </button>
                                    <p>New User ? Click here  to <Link to={"/register"}>Register</Link></p>
                                </div>

                            }






                        </Col>

                        <Col md={6} lg={6} sm={12}>


                            <h6 className='w-100'>The creative writing starts from this desk</h6>
                            {/* <img width={"300px"} src="https://img.freepik.com/premium-vector/vintage-old-book-open-engraved-sketch-hand-drawn-vector-illustration_666729-648.jpg" alt="" /> */}
                            <img className='img-fluid' src="https://previews.123rf.com/images/anomalisa/anomalisa1910/anomalisa191000001/131979796-one-line-drawing-continuous-line-art-pile-of-books-drawn-with-single-line-hand-drawn-minimalistic.jpg" alt="" />
                        </Col>
                    </Row>
                </Navbar>
            </div>

            <ToastContainer autoClose={2000} position={"top-center"} />

        </>
    )
}

export default Authenticate