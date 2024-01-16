import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editFlashFictionAPI } from '../service/allapi';
import baseurl from '../service/baseurl';
import { editShareContext } from '../context/Contextshared';
const EditFlashfictions = ({ project }) => {

    const { editContext, setEditContext } = useContext(editShareContext)
    console.log(project);
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
        const flashId = project._id
        console.log(flashId);
        const { fictionTitle, fictionDate, fictionContent, fictionImage, } = editFictions
        if (!fictionTitle || !fictionDate || !fictionContent) {
            toast.info("fill the Forms")
        } else {
            const reqbody = new FormData();
            reqbody.append("fictionTitle", fictionTitle)
            reqbody.append("fictionDate", fictionDate)
            reqbody.append("fictionContent", fictionContent)
            previews ? reqbody.append("fictionImage", fictionImage) : reqbody.append("fictionImage", project.fictionImage)


            if (previews) {
                if (token) {
                    const header = {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,

                    }

                    const results = await editFlashFictionAPI(flashId, reqbody, header)
                    console.log(results);
                    setEditContext(results.data)
                    if (results.status === 200) {
                        toast.success(`${fictionTitle} Updated`)
                    } else {
                        toast.error(results.request.response)
                    }


                }
            } else {
                if (token) {
                    const header = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,

                    }

                    const results = await editFlashFictionAPI(flashId, reqbody, header)
                    console.log(results);
                    setEditContext(results.data)

                    if (results.status === 200) {
                        toast.success(`${fictionTitle} Updated`)
                    } else {
                        toast.error(results.request.response)
                    }


                }
            }


        }
    }

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);



    const [editFictions, setFictions] = useState({
        fictionTitle: project.fictionTitle,
        fictionDate: project.fictionDate,
        fictionContent: project.fictionContent,
        fictionImage: ""

    })
    console.log(editFictions);

    const [previews, setPreviews] = useState("")
    useEffect(() => {
        editFictions.fictionImage && setPreviews(URL.createObjectURL(editFictions.fictionImage))
    }, [editFictions.fictionImage])
    return (
        <>

            <div className='d-flex align-items-center justify-content-center' >

                <button className='btn btn-white' onClick={handleShow}> <i class="fa-solid fa-pen" ></i></button >


            </div>



            <Modal show={show} onHide={handleClose} className='w-100'>
                <Modal.Header closeButton>
                    <Modal.Title>Update Flash FIction</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column  align-items-center justify-content-center w-100'>
                    <label htmlFor="flashfiction">
                        <img className='img-fluid mb-2 rounded' src={previews ? previews : `${baseurl}/uploads/${project.fictionImage}`} alt="" height={"10%"} width={"50%"} />

                        <input type="file" id='flashfiction' style={{ display: "none" }} onChange={(e) => setFictions({ ...editFictions, fictionImage: e.target.files[0] })} />
                    </label>

                    <input type="text" className='form-control mb-3' placeholder='Story Title' value={editFictions.fictionTitle} onChange={(e) => setFictions({ ...editFictions, fictionTitle: e.target.value })} />
                    <input type="date" className='form-control mb-3' placeholder='Date' value={editFictions.fictionDate} onChange={(e) => setFictions({ ...editFictions, fictionDate: e.target.value })} />
                    <textarea cols="160" rows="8" className='form-control' placeholder=' ........... Fiction begins' value={editFictions.fictionContent} onChange={(e) => setFictions({ ...editFictions, fictionContent: e.target.value })}></textarea>
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

export default EditFlashfictions