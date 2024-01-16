import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from "../assets/homeimage.png"
import Footer from '../components/Footer';
import Header from "../components/Header"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const Home = () => {
    const [getToken, setGetToken] = useState("")
    useEffect(() => {

        const token = sessionStorage.getItem("token")
        setGetToken(token);

    }, [getToken])
    console.log(getToken);


    return (
        <>

            <Header />

            <div style={{ height: "100vh" }}>
                <Row>
                    <Col>
                        <div className='mt-5 p-5 d-flex flex-column justify-content-center align-items-center w-100' style={{ height: "100%" }}>
                            <p className='fs-1'>Unleash your creativity with the enchanting <i class="fa-solid fa-pen-to-square fa-3 text-danger"></i> pen-and-paper nostalgia on our Flash Fiction.</p>

                            {getToken ?
                                <button type='submit' className='btn btn-dark ' > Explore Your boundless imagination! <Link to={"/dashboard"}><i class="fa-solid fa-pen text-danger"></i></Link></button>
                                : <button type='submit' className='btn btn-dark ' > Explore Your boundless imagination! <Link to={"/login"}><i class="fa-solid fa-pen text-danger"></i></Link></button>
                            }
                        </div>

                    </Col>


                    <Col className='d-flex justify-content-center align-items-center w-100'>

                        <img src="https://i.giphy.com/dZnAEgiyCwFJay2Knu.webp" alt="Noimage" height={'100%'} width={"100%"} className='img-fluid' />
                        {/* <img src="https://cdn-images-1.medium.com/max/1200/1*2phwm-Wj_22avHjtB8PkEg.jpeg" alt="" /> */}
                    </Col>
                </Row>
            </div>


            <div className='container m-5' style={{ height: "100vh" }}>


                <div className='d-flex align-items-center justify-content-center w-100 fs-3 mb-5'>
                    Where beautiful books are made
                </div>


                <Row>
                    <Col lg={4} md={12}>
                        <Card style={{ width: '80%' }} className='border border-white shadow rounded p-2 mb-2'>
                            <Card.Img variant="top" className='img-fluid' src="https://th.bing.com/th/id/R.747649d4544c3ed2f922252743ab3c0c?rik=yicHPwYlrLwQGw&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f3600000%2fa-thoughtfull-pen-writing-3647581-2560-1702.jpg&ehk=PN0V6CepNx47uil9FtzHkNeNaY6gvwAuz33e7nlB9ys%3d&risl=&pid=ImgRaw&r=0" />
                            <Card.Body>
                                <Card.Title>Not written a Flash Fiction yet?</Card.Title>
                                <Card.Text>
                                    Put pen to paper to write FlashFiction and learn what it takes to write a novel in this Website.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>


                    <Col lg={4} md={12}>
                        <Card style={{ width: '80%' }} className='border border-white shadow rounded p-2 mb-2'>
                            <Card.Img variant="top" className='img-fluid' src="https://th.bing.com/th/id/R.876226eda0993abda9352a9883b8710e?rik=yZWGYH557e%2bzQw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fMTL%2fM8K%2fMTLM8Kdzc.png&ehk=lFPaeyLyXCm48y7RfsOslq1g1w%2byR2B5bKdPasXQpTM%3d&risl=&pid=ImgRaw&r=0" />
                            <Card.Body>
                                <Card.Title>What is Flash Fiction?</Card.Title>
                                <Card.Text>
                                    Flash fiction is like a burst of fireworks, short-lived but creating a lasting impact.                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>


                    <Col lg={4} md={12}>
                        <Card style={{ width: '80%' }} className='border border-white shadow rounded p-2 mb-2'>
                            <Card.Img variant="top" className='img-fluid' src="https://media.npr.org/assets/img/2016/08/08/gettyimages-175590398_wide-30355c6f6fe56c3907759582f4e7e8a81f7fc41c.jpg?s=1400" />
                            <Card.Body>
                                <Card.Title>Every sentence works harder than the last</Card.Title>
                                <Card.Text>
                                    Begin the story with an exciting action: For example, He jumped on the moving bus to save his life.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>



















            <div >
                <Row>
                    <Col md={6} >
                        <img src={image} className='img-fluid mt-5' width={'100%'} height={'100%'} alt="No-image" />
                    </Col>
                    <Col md={6}>

                        <div className='py-5'>
                            <h3>Flash fiction has fewer than 1,500 words</h3>

                            <h5>Flash fiction is like a burst of fireworks, short-lived but creating a lasting impact. If you want to know the basics of flash fiction, this article is for you! In this article, we’ve not only explained what is flash fiction but also given useful tips for creating the best flash fiction.

                            </h5>
                            <h3>Every sentence works harder than the last</h3>

                            <h5>Begin the story with an exciting action: For example, He jumped on the moving bus to save his life.
                                Ask an intriguing question: For example, What if we found the secret to stop time?
                                Highlight an interesting contradiction: For example; She was physically fragile as a flower but had an iron will. </h5>
                            <h3>As a creative exercise, they're practically perfect</h3>

                            <h5>
                                Micro-stories aren’t just great for readers who are short on time (or attention). They’re also a great way for writers to experiment in a low-stakes environment. Challenging you to spotlight a smaller story while hinting at a larger one, flash fiction teaches you to squeeze more out of every word.

                                What’s more, while writing flash fiction isn’t necessarily easy, it certainly isn’t as time-consuming as writing a novel. If you can write short shorts regularly — perhaps between bouts of writer’s block — you can share them quickly and build a fanbase that will yield dividends come publication time. But all of that isn’t to say that flash fiction is just a means to an end....
                            </h5>
                            <h3>Magazines and contests actively seek them out</h3>

                            <h5>Flash fiction is an art form with buckets of potential in and of itself. And if you decide that flash fiction is the form for you, there are plenty of publications looking to publish and celebrate small but mighty stories. (Some offer payments, too!) Here are six to get you started:</h5>
                        </div>
                    </Col>
                </Row>
            </div>




            <Footer />

        </>
    )
}

export default Home