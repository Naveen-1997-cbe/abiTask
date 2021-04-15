import React from "react"
import "./project.css";
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import test from "./test.jpg";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Arrivals from './arrivals';
import {
    AiOutlineTwitter,
    AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF,FaShoppingCart } from "react-icons/fa";
class Project extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <section id="header">
                    <Container className="test-container">
                        <Row>
                            <Col md={6}>
                                <p className="header-fonts"> Welcome to our store</p>
                            </Col>
                            <Col md={6}>
                                <ul className="header-first-list">
                                    <li>English</li>
                                    <li>USD</li>
                                    <li>Setting</li>
                                    <li>Wishlist</li>
                                    <li>Compare</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                    <section className="third-header">
                        <Container className="test-container">
                            <div>
                                <Row>
                                    <Col md={4}>
                                        <h2>Esther</h2>
                                    </Col>
                                    <Col md={4}>
                                        <input type="text" className="form-control" />
                                    </Col>
                                    <Col md={4} className="text-center">
                                        <p>Customer Support</p>
                                        <h4>(08)12345678</h4>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </section>

                </section>
                <section>
                    <Container className="test-container">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                   
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Shop</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog
        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Papers
        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            About Us
        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Contact Us
        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                <FaShoppingCart className=" icons-footer ml-n2" size={20} />
                                <p className="m-0 ml-1">69.50</p>
                                </form>
                            </div>
                        </nav>
                    </Container>
                </section>


                <section id="section-second">
                    <Container className="test-container">
                        <div className="carousal-item">
                            <Row>
                                <Col md={6} sm={6}>
                                    <div className="section-two">
                                        <h5>WORLD NO.1 POWER</h5>
                                        <h2>Power Tools</h2>
                                        <p>Lorem Ipsum Dolor Sit Amet</p>
                                        <button>Shopping Now</button>
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <img src={test} className="img-fluid" />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section>
                    <Container className="test-container">
                        <Row className="center-big-sale">
                            <Col md={4} className="card-cover">
                                <Row>
                                    <Col md={6}>
                                        <div className="big-sale">
                                            <p className="title1">High End</p>
                                            <h6>Power Tools</h6>
                                            <p className="content-from">from</p>
                                            <h5>$129.99</h5>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <img src={test} className="img-fluid" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} className="card-cover ">
                                <Row>
                                    <Col md={6}>
                                        <div className="big-sale">
                                            <p className="title1">Hand Tools</p>
                                            <h6>Big Sale</h6>
                                            <p className="content-from">Up to</p>
                                            <h5>75%</h5>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <img src={test} className="img-fluid" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} className="card-cover">
                                <Row>
                                    <Col md={6}>
                                        <div className="big-sale">
                                            <p className="title1">Lawn</p>
                                            <h6>Mower Parts</h6>
                                            <p className="content-from">from</p>
                                            <h5>$109.99</h5>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <img src={test} className="img-fluid" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="hot-deals">
                    <Container className="test-container">
                        <h3 className="mb-5">Hot Deals</h3>
                        <Row>
                            <Col md={2} className="center">
                                <div className="img-center">
                                    <img src={test} className="img-fluid resize" />
                                </div>
                                <div className="offer-time-cover">
                                    <Row>
                                        <Col md={3} sm={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">268</p>
                                                <p className="align-bottom">Days</p>
                                            </div>
                                        </Col>
                                        <Col md={3} sm={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">14</p>
                                                <p className="align-bottom">Hours</p>
                                            </div>
                                        </Col>
                                        <Col md={3} sm={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">22</p>
                                                <p className="align-bottom">Mins</p>
                                            </div>
                                        </Col>
                                        <Col md={3} sm={3} className="p-0">
                                            <div className="border-rigt2">
                                                <p className="align-bottom1">53</p>
                                                <p className="align-bottom">Secs</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="offer-content-cover">
                                    <h6 className="mt-4">Studio Design</h6>
                                    <p className="para-link">New fresh Juicy</p>
                                    <strike>$18.50</strike>
                                    <span className="offer-price">    $10.95</span>
                                </div>
                            </Col>
                            <Col md={2} className="center">
                                <div className="img-center">
                                    <img src={test} className="img-fluid resize" />
                                </div>
                                <div className="offer-time-cover">
                                    <Row>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">268</p>
                                                <p className="align-bottom">Days</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">14</p>
                                                <p className="align-bottom">Hours</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">22</p>
                                                <p className="align-bottom">Mins</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt2">
                                                <p className="align-bottom1">53</p>
                                                <p className="align-bottom">Secs</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="offer-content-cover">
                                    <h6 className="mt-4">Studio Design</h6>
                                    <p className="para-link">New fresh Juicy</p>
                                    <strike>$18.50</strike>
                                    <span className="offer-price">    $10.95</span>
                                </div>
                            </Col>
                            <Col md={2} className="center">
                                <div className="img-center">
                                    <img src={test} className="img-fluid resize" />
                                </div>
                                <div className="offer-time-cover">
                                    <Row>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">268</p>
                                                <p className="align-bottom">Days</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">14</p>
                                                <p className="align-bottom">Hours</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">22</p>
                                                <p className="align-bottom">Mins</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt2">
                                                <p className="align-bottom1">53</p>
                                                <p className="align-bottom">Secs</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="offer-content-cover">
                                <h6 className="mt-4">Studio Design</h6>
                                <p className="para-link">New fresh Juicy</p>
                                <strike>$18.50</strike>
                                <span className="offer-price">    $10.95</span>
                                </div>
                            </Col>
                            <Col md={2} className="center">
                                <div className="img-center">
                                    <img src={test} className="img-fluid resize" />
                                </div>
                                <div className="offer-time-cover">
                                    <Row>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">268</p>
                                                <p className="align-bottom">Days</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">14</p>
                                                <p className="align-bottom">Hours</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">22</p>
                                                <p className="align-bottom">Mins</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt2">
                                                <p className="align-bottom1">53</p>
                                                <p className="align-bottom">Secs</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="offer-content-cover">
                                <h6 className="mt-4">Studio Design</h6>
                                <p className="para-link">New fresh Juicy</p>
                                <strike>$18.50</strike>
                                <span className="offer-price">    $10.95</span>
                                </div>
                            </Col>
                            <Col md={2} className="center">
                                <div className="img-center">
                                    <img src={test} className="img-fluid resize" />
                                </div>
                                <div className="offer-time-cover">
                                    <Row>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">268</p>
                                                <p className="align-bottom">Days</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">14</p>
                                                <p className="align-bottom">Hours</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt">
                                                <p className="align-bottom1">22</p>
                                                <p className="align-bottom">Mins</p>
                                            </div>
                                        </Col>
                                        <Col md={3} className="p-0">
                                            <div className="border-rigt2">
                                                <p className="align-bottom1">53</p>
                                                <p className="align-bottom">Secs</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="offer-content-cover">
                                <h6 className="mt-4">Studio Design</h6>
                                <p className="para-link">New fresh Juicy</p>
                                <strike>$18.50</strike>
                                <span className="offer-price">    $10.95</span>
                                </div> 
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="test-container">


                        <h3>New Arrivals</h3>


                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Automobiles">
                                <Arrivals />
                            </Tab>
                            <Tab eventKey="profile" title="Beauty Health">

                            </Tab>
                            <Tab eventKey="contact" title="Games Consoles" disabled>

                            </Tab>
                        </Tabs>




                    </Container>

                </section>


                <section>
                    <div className="footer-section">
                        <Container>
                            <Row>
                                <Col md={3}>
                                    <div className="abt_footer">
                                        <h6>About us</h6>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="abt_footer">
                                        <h6>Quick Links</h6>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                        <p className="mb-n1">Lorem Ipsum</p>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="abt_footer">
                                        <h6>Medias</h6>
                                        <div className="cover_icons">
                                            <FaFacebookF className=" icons-footer ml-n2" size={20} />
                                            <AiOutlineTwitter
                                                className=" icons-footer ml-2"
                                                size={20}
                                            />
                                            <AiFillLinkedin
                                                className=" icons-footer ml-2"
                                                size={20}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="abt_footer">
                                        <h5 className="logo-footer">Logo</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        );
    }
}

export default Project;