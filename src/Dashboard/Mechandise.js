import React from 'react';
import magasco_image from './../images/magasco.jpeg';
import muzik_talk from './../advertisement-images/237businesstalk.jpeg';
import muzikol_front_image5 from './../background-images/muzikol_front_image5.png';
import muzikol_front_image6 from './../background-images/muzikol_front_image6.jpg';
import muzikol_front_image7 from './../background-images/muzikol_front_image7.jpg';
import { Col, Row} from 'mdbreact';
import './Mechandise.css';
import ArtistDashboardHeader from './ArtistDashboardHeader';
import alain_parfait from './../images/alain_parfait.jpeg';
import magasco_sokoto from './../images/magasco_sokoto.jpeg';

export default class Mechandise extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <ArtistDashboardHeader />
                <div className="text-center mechandise-title">Mechandise</div>
                <Row>
                    <Col md="3">
                        <div className="">My Mechandise</div>
                    </Col>
                    <Col md="9">
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="9">
                        <Row className="mechandise-bg">
                            <Col md="3" style={{marginLeft: "0px", paddingLeft: "0px"}}>
                                <div className="mechandise-item">
                                    <img className="" src={muzik_talk} alt="something" />
                                    <div className="mechandise-item-text">moments</div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="mechandise-item">
                                    <img className="" src={magasco_image} alt="something" />
                                    <div className="mechandise-item-text">comedy</div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="mechandise-item">
                                    <img className="" src={magasco_sokoto} alt="something" />
                                    <div className="mechandise-item-text">womanly</div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="mechandise-item">
                                    <img className="" src={magasco_image} alt="something" />
                                    <div className="mechandise-item-text">movies</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <div className="">Trending Mechandise</div>
                    </Col>
                    <Col md="9" className="mechandise-bg">
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="9" className="mechandise-bg">
                        <Row>
                            <Col md="4" style={{marginLeft: "0px", paddingLeft: "0px"}}>
                                <div className="mechandise-item">
                                    <img className="" src={alain_parfait} alt="something" />
                                    <div className="mechandise-item-text">Movies</div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={magasco_sokoto} alt="something" />
                                    <div className="mechandise-item-text">Music</div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={magasco_image} alt="something" />
                                    <div className="mechandise-item-text">Celebs</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <div className="">Discover Mechandise</div>
                    </Col>
                    <Col md="9" className="mechandise-bg">
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="9" className="mechandise-bg">
                        <Row>
                            <Col md="4" style={{marginLeft: "0px", paddingLeft: "0px"}}>
                                <div className="mechandise-item">
                                    <img className="" src={muzikol_front_image5} alt="something" />
                                    <div className="mechandise-item-text">Sports</div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={muzikol_front_image6} alt="something" />
                                    <div className="mechandise-item-text">Technology</div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={muzikol_front_image7} alt="something" />
                                    <div className="mechandise-item-text">News</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}