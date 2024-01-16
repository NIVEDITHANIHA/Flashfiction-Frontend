import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCard from '../components/ProjectCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { getAllFlashFiction } from '../service/allapi';
const Dashboard = () => {
    const [getAPI, setGEtAPI] = useState([])
    const getAllProject = async () => {
        const results = await getAllFlashFiction()
        setGEtAPI(results.data)
    }
    console.log(getAPI);



    useEffect(() => {
        getAllProject()
    }, [])
    return (
        <>
            <Header />


            <div className='d-flex align-items-center justify-content-center bg-body-tertiary' >
                <div className='card border border-white d-flex align-items-center justify-content-center m-5 w-75 shadow ' >
                    <button className='fs-2 ms-5  p-3 bg-white border border-white'> Start to Explore Your Boundless Imagination <Link to={"/Userdashboard"}> <i class="fa-solid fa-pen-nib ms-1"></i></Link></button>

                </div>
            </div>


            <div>
                <div className='w-100 bg-body-tertiary ' style={{ height: "100vh" }}>

                    <Row className='p-5 w-100'>
                        {getAPI?.length > 0 ? getAPI.map((items) => (
                            <Col md={12} className='d-flex justify-content-center align-items-center w-100 p-4' >

                                <ProjectCard project={items} />

                            </Col>


                        )) : null}
                    </Row>
                </div>
            </div>




            <Footer />
        </>
    )
}

export default Dashboard