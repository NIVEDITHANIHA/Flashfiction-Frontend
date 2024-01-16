import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import baseurl from '../service/baseurl';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import EditFlashfictions from './EditFlashfictions';
import { deleteFlashFiction } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteShareContext } from '../context/Contextshared';

const ProjectCard = ({ project, isPresent }) => {

    const { deleteContext, setDeleteContext } = useContext(deleteShareContext)
    console.log(project, isPresent);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handledelete = async (_id) => {
        const flashId = project._id
        console.log(flashId);

        const token = sessionStorage.getItem("token")

        const header = {
            "Content-Type": "Content-Type",
            "Authorization": `Bearer ${token}`
        }


        const result = await deleteFlashFiction(flashId, header)
        console.log(result.data);
        setDeleteContext(result.data)
        if (result.status === 200) {
            toast.success(`Succesfully Deleted ${project.fictionTitle}`)
        } else {
            console.log(result.response.data);
        }

    }

    return (
        < >




            {isPresent ?
                <Card style={{ width: '100%', height: '100%' }} className='rounded shadow p-2 border border-secondary'>
                    <Card.Img className='img-fluid' height={"5rem"} variant="top" src={project.fictionImage ? `${baseurl}/uploads/${project.fictionImage}` : <img></img>} />
                    <Card.Body >
                        <p>{project.fictionDate} </p>

                        <p className='fs-2 d-flex align-items-center justify-content-center'>{project.fictionTitle}</p>


                        <h6 >
                            {project.fictionContent.slice(0, 100)} <Link className='text-danger ' style={{ textDecoration: "none" }} onClick={handleShow}>.....readmore</Link>
                        </h6>
                    </Card.Body>
                    <div className='d-flex justify-between align-items-center w-100'>
                        <EditFlashfictions project={project} />
                        <button className='ms-auto btn btn-white'><i class="fa-solid fa-trash" onClick={() => handledelete(project._id)}></i></button>
                    </div>
                </Card>
                :

                <Card style={{ width: '40rem', height: '100%' }} className='rounded shadow p-2 border border-secondary'>
                    <Card.Img className='img-fluid' height={"5rem"} variant="top" src={project.fictionImage ? `${baseurl}/uploads/${project.fictionImage}` : <img></img>} />
                    <Card.Body >
                        <p>{project.fictionDate} </p>

                        <p className='fs-2 d-flex align-items-center justify-content-center'>{project.fictionTitle}</p>


                        <h6 >
                            {project.fictionContent.slice(0, 100)} <Link className='text-danger ' style={{ textDecoration: "none" }} onClick={handleShow}>.....readmore</Link>
                        </h6>
                    </Card.Body>
                </Card>
            }

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton className='d-flex flex-column '>
                    <h1>{project.fictionTitle}</h1>
                    <img className='img-fluid' height={"5rem"} variant="top" src={project.fictionImage ? `${baseurl}/uploads/${project.fictionImage}` : <img></img>} alt="" />
                </Modal.Header>
                <Modal.Body>{project.fictionContent}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer autoClose={2000} position={"top-center"} />

        </>
    )
}

export default ProjectCard