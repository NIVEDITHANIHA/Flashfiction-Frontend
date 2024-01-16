import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className='d-flex p-2'>
                        <img
                            alt=""
                            src="https://th.bing.com/th?id=OSK.e3a008c2ff33be7eddce5b6777c1e66c&w=117&h=82&c=7&o=6&pid=SANGAM"
                            width="60"
                            height="60"
                            className="img-fluid me-2"
                        />
                        <h4>FLASH FICTION</h4>

                    </div>

                    <Col md={3}>
                        <p>Flash fiction is a type of prose narrative that takes the form of very brief, self-contained stories. Its word count ranges from 5 to 1,000 words on average, and tops out at 1,500. Also called a short short, micro-story, or nanotale, a work of flash fiction isn’t just a pared-back short story. The form is unique in that, rather than focusing on plot or character development, it focuses on movement: each sentence (or even word) peels back a layer and progresses the story.</p>
                    </Col>
                    <Col md={3}>
                        <p>LINKS</p>
                    </Col>
                    <Col md={3}>
                        <p> GUIDES</p>
                        <Link to={'https://bootswatch.com/'} style={{ textDecoration: "none" }}> <h6>Bootwatch</h6></Link>
                        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: "none" }}> <h6>Bootstrap</h6></Link>



                    </Col>
                    <Col md={3}>
                        <p>CONTACT</p>

                        <i class="fa-brands fa-instagram me-2 fs-3"></i>
                        <i class="fa-brands fa-linkedin me-2 fs-3"></i>
                        <i class="fa-brands fa-facebook me-2 fs-3"></i>
                        <i class="fa-regular fa-envelope fs-3" ></i>


                    </Col>




                </Row>

                <Row>
                    <h6 className='d-flex align-items-center justify-content-center w-100'>©Copyright 2024 FlashFiction@N All rights reserved.</h6>

                </Row>
            </Container>
        </div>
    )
}

export default Footer