import React, { useContext, useEffect, useState } from 'react'
import Addfiction from '../components/Addfiction'
import { getSpecificFlashFiction } from '../service/allapi'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { createShareContext, deleteShareContext, editShareContext } from '../context/Contextshared'

const Userdashboard = () => {
    const { deleteContext, setDeleteContext } = useContext(deleteShareContext)
    const { createContext, setCreateContext } = useContext(createShareContext)
    const { editContext, setEditContext } = useContext(editShareContext)

    const [userfiction, setuserFiction] = useState([])


    const getUserFunction = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")


            const header = {
                "Authorization": `Bearer ${token}`,
                " Content-Type": "application/json"
            }
            const results = await getSpecificFlashFiction(header)
            setuserFiction(results.data)
        }
    }
    console.log(userfiction);


    useEffect(() => {
        getUserFunction();
    }, [deleteContext, createContext, editContext])
    return (
        <>


            <Header />

            <Addfiction />


            <div className='w-100 card shadow-lg border border-white' >
                <Row className='p-5 w-100'>
                    {userfiction?.length > 0 ? userfiction.map((items) => (
                        <Col lg={3} md={6} sm={6} className='p-2' >

                            <ProjectCard project={items} isPresent={true} />

                        </Col>


                    )) : null}
                </Row>
            </div>
            <Footer />
        </>
    )
}

export default Userdashboard