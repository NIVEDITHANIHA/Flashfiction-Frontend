import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseurl from "../service/baseurl"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editprofileFictionAPI } from '../service/allapi';
import { useNavigate } from 'react-router-dom';
import { isAuthShareContext } from '../context/Contextshared';

const Profile = () => {
    const { isAuthContext, setisAuthContext } = useContext(isAuthShareContext)
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [existedPreviews, setExistedPreviews] = useState("")
    console.log(existedPreviews);

    const [getprofile, setProfile] = useState({

        username: "",
        email: "",
        password: "",
        bio: "",
        profile: "",

    })
    console.log(getprofile);


    useEffect(() => {

        const existedUser = JSON.parse(sessionStorage.getItem("existedUser"))
        console.log(existedUser);
        setProfile({
            ...getprofile, username: existedUser.username, email: existedUser.email, password: existedUser.password, bio: existedUser.bio, profile: ""
        })
        setExistedPreviews(existedUser.profile)

    }, [])


    useEffect(() => {
        if (getprofile.profile) {

            setPreview(URL.createObjectURL(getprofile.profile))
        } else {
            setPreview("")
        }
    }, [getprofile.profile])
    console.log(preview);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, email, password, bio, profile } = getprofile
        if (!username, !email, !password, !bio, !profile) {
            toast.info("Fill the  forms")

        }
        else {


            const reqbody = new FormData();
            reqbody.append("username", username)
            reqbody.append("email", email)
            reqbody.append("password", password)
            reqbody.append("bio", bio)
            preview ? reqbody.append("profile", profile) : reqbody.append("profile", existedPreviews)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const header = {

                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`

                }

                const result = await editprofileFictionAPI(reqbody, header)
                console.log(result.data);
                if (result.status === 200) {

                    toast.success("Succesfully Updated  Profile")
                    sessionStorage.setItem("existedUser", JSON.stringify(result.data))

                } else {
                    console.log(result.response);
                }
            }
            else {
                const header = {

                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`

                }

                const result = await editprofileFictionAPI(reqbody, header)
                if (result.status === 200) {
                    toast.success("Succesfully Updated  Profile")

                } else {
                    console.log(result.response);
                }
            }



        }
        setShow(false);



    }


    const logedout = () => {
        navigate("/")
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("existedUser")
        setisAuthContext(false)
        document.body.scrollTop = document.documentElement.scrollTop = 0;


    }

    return (
        <>
            <div onClick={handleShow} className='d-flex justify-content-end w-100 align-items-center' >

                {existedPreviews === "" ?
                    <img className='img-fluid ms-5' src="https://th.bing.com/th/id/R.8bae116c0651d5937de444c5fbc5848c?rik=GgZlMsJYTvgfYA&riu=http%3a%2f%2fnayyarhospital.com%2fassets%2fimages%2fdoctors%2fdr-dummy.jpg&ehk=uxCn9JdaHjINIVI7tiI1U%2fZ4OIV8cF3EZdXE2rNQh7E%3d&risl=&pid=ImgRaw&r=0" alt="" height={"30%"} width={"30%"} />
                    : <img className='img-fluid mb-2 rounded-circle' src={preview ? preview : `${baseurl}/uploads/${existedPreviews}`} alt="" height={"10%"} width={"10%"} />

                }
            </div>



            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column  align-items-center justify-content-center w-100'>
                    <label htmlFor="profileimage">
                        {existedPreviews === "" ?
                            <img className='img-fluid mb-2 rounded' src={preview ? preview : "https://th.bing.com/th/id/R.8bae116c0651d5937de444c5fbc5848c?rik=GgZlMsJYTvgfYA&riu=http%3a%2f%2fnayyarhospital.com%2fassets%2fimages%2fdoctors%2fdr-dummy.jpg&ehk=uxCn9JdaHjINIVI7tiI1U%2fZ4OIV8cF3EZdXE2rNQh7E%3d&risl=&pid=ImgRaw&r=0"} alt="" height={"60%"} width={"60%"} />
                            : <img className='img-fluid mb-2 rounded' src={preview ? preview : `${baseurl}/uploads/${existedPreviews}`} alt="" height={"60%"} width={"60%"} />
                        }
                        <input type="file" id='profileimage' onChange={(e) => setProfile({ ...getprofile, profile: e.target.files[0] })} style={{ display: "none" }} />
                    </label>
                    <input type="text" className='form-control mb-2' placeholder='Enter Name' value={getprofile.username} onChange={(e) => { setProfile({ ...getprofile, username: e.target.value }) }} />
                    <textarea className='form-control mb-2' cols="30" rows="7" placeholder='Enter Bio' value={getprofile.bio} onChange={(e) => { setProfile({ ...getprofile, bio: e.target.value }) }}></textarea>
                    <button className='btn btn-secondary w-100 mb-2 me-2' onClick={() => navigate("/register")}>Add Account <i class="fa-solid fa-user-plus" ></i></button>
                    <button className='btn btn-secondary w-100 mb-2 me-2' onClick={logedout}>Log Out <i class="fa-solid fa-power-off"></i></button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer autoClose={2000} position={"top-center"} />

        </>
    )
}

export default Profile