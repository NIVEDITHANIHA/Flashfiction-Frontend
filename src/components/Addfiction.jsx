import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { flashStoriesApi } from '../service/allapi';
import { createShareContext } from '../context/Contextshared';
const Addfiction = () => {
    const { createContext, setCreateContext } = useContext(createShareContext)
    const [show, setShow] = useState(false);

    /* Token Identitification */
    const [token, setToken] = useState("")
    useEffect(() => {

        const getToken = sessionStorage.getItem("token")

        getToken && setToken(getToken)

    }, [])

    console.log(token);
    const handleSubmit = async () => {
        setShow(false);
        const { fictionTitle, fictionDate, fictionContent, fictionImage, } = fictions
        if (!fictionTitle || !fictionDate || !fictionContent || !fictionImage) {
            toast.info("fill the Forms")
        } else {
            const reqbody = new FormData();
            reqbody.append("fictionTitle", fictionTitle)
            reqbody.append("fictionDate", fictionDate)
            reqbody.append("fictionContent", fictionContent)
            reqbody.append("fictionImage", fictionImage)


            if (token) {
                const header = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,

                }

                const results = await flashStoriesApi(reqbody, header)
                console.log(results);
                setCreateContext(results.data)
                if (results.status === 200) {
                    toast.success("FlashStory Created")
                } else {
                    toast.error(results.request.response)
                }


            }

        }
    }

    const handleClose = () => {
        setShow(false);
        setFictions({
            fictionTitle: "",
            fictionDate: "",
            fictionContent: "",
            fictionImage: "",

        })
        setPreviews("")
    }
    const handleShow = () => setShow(true);



    const [fictions, setFictions] = useState({
        fictionTitle: "",
        fictionDate: "",
        fictionContent: "",
        fictionImage: "",

    })
    console.log(fictions);

    const [previews, setPreviews] = useState("")
    useEffect(() => {
        fictions.fictionImage && setPreviews(URL.createObjectURL(fictions.fictionImage))
    }, [fictions.fictionImage])
    return (
        <>

            <div className='d-flex align-items-center justify-content-center' onClick={handleShow}>
                <div className=' d-flex align-items-center justify-content-center card border border-white m-5 w-50 shadow ' >
                    <button className='fs-2 ms-3 p-2 bg-white border border-white'> Add Your Imagination  <i class="fa-solid fa-pen-nib ms-1"></i></button>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} className='w-100'>
                <Modal.Header closeButton>
                    <Modal.Title>Flash FIction</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column  align-items-center justify-content-center w-100'>
                    <label htmlFor="flashfiction">
                        <img className='img-fluid mb-2 rounded' src={previews ? previews : "https://images.freecreatives.com/wp-content/uploads/2017/01/Camera-Outline-Clip-Art.jpg"} alt="" height={"10%"} width={"50%"} />

                        <input type="file" id='flashfiction' style={{ display: "none" }} onChange={(e) => setFictions({ ...fictions, fictionImage: e.target.files[0] })} />
                    </label>

                    <input type="text" className='form-control mb-3' placeholder='Story Title' value={fictions.fictionTitle} onChange={(e) => setFictions({ ...fictions, fictionTitle: e.target.value })} />
                    <input type="date" className='form-control mb-3' placeholder='Date' value={fictions.fictionDate} onChange={(e) => setFictions({ ...fictions, fictionDate: e.target.value })} />
                    <textarea cols="160" rows="8" className='form-control' placeholder=' ........... Fiction begins' value={fictions.fictionContent} onChange={(e) => setFictions({ ...fictions, fictionContent: e.target.value })}></textarea>
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

export default Addfiction