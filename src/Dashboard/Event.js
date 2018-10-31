import React from 'react';
import magasco_image from './../images/magasco.jpeg';
import muzikol_front_image5 from './../background-images/muzikol_front_image5.png';
import muzikol_front_image6 from './../background-images/muzikol_front_image6.jpg';
import { Container, Col, Row, Button} from 'mdbreact';
import './Mechandise.css';
import './Release.css';
import ArtistDashboardHeader from './ArtistDashboardHeader';
import magasco_sokoto from './../images/magasco_sokoto.jpeg';

export default class Event extends React.Component {
    render() {
        return (
            <Container fluid>
                <ArtistDashboardHeader />
                <div className="text-center mechandise-title">Events</div>
                <Row className="event-bg">
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={muzikol_front_image6} alt="something" />
                            <div className="release-col1">
                                <div className="release-col1-text1">Again</div>
                                <div className="release-col1-text2">moments</div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={muzikol_front_image5} alt="something" />
                            <div className="release-col2 ml-3">
                                <div className="release-col2-text1">Taiyon</div>
                                <div className="release-col2-text2">Paradise</div>
                                <Button size="sm" color="white">Norrow Nv</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={magasco_sokoto} alt="something" />
                            <div className="release-col3">
                                <div className="release-col3-text1">Armez</div>
                                <div className="release-col3-text2">How people move</div>
                                <Button size="sm">New Single</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={magasco_image} alt="something" />
                            <div className="release-col3">
                                <div className="release-col3-text1">Armez</div>
                                <div className="release-col3-text2">How people move</div>
                                <Button size="sm">New Single</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row className="event-bg">
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={muzikol_front_image6} alt="something" />
                            <div className="release-col1">
                                <div className="release-col1-text1">Again</div>
                                <div className="release-col1-text2">moments</div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={muzikol_front_image5} alt="something" />
                            <div className="release-col2 ml-3">
                                <div className="release-col2-text1">Taiyon</div>
                                <div className="release-col2-text2">Paradise</div>
                                <Button size="sm" color="white">Norrow Nv</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={magasco_sokoto} alt="something" />
                            <div className="release-col3">
                                <div className="release-col3-text1">Armez</div>
                                <div className="release-col3-text2">How people move</div>
                                <Button size="sm">New Single</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={magasco_image} alt="something" />
                            <div className="release-col3">
                                <div className="release-col3-text1">Armez</div>
                                <div className="release-col3-text2">How people move</div>
                                <Button size="sm">New Single</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row className="event-bg">
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={muzikol_front_image6} alt="something" />
                            <div className="release-col1">
                                <div className="release-col1-text1">Again</div>
                                <div className="release-col1-text2">moments</div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={muzikol_front_image5} alt="something" />
                            <div className="release-col2 ml-3">
                                <div className="release-col2-text1">Taiyon</div>
                                <div className="release-col2-text2">Paradise</div>
                                <Button size="sm" color="white">Norrow Nv</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={magasco_sokoto} alt="something" />
                            <div className="release-col3">
                                <div className="release-col3-text1">Armez</div>
                                <div className="release-col3-text2">How people move</div>
                                <Button size="sm">New Single</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mechandise-item">
                            <img className="" src={magasco_image} alt="something" />
                            <div className="release-col3">
                                <div className="release-col3-text1">Armez</div>
                                <div className="release-col3-text2">How people move</div>
                                <Button size="sm">New Single</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}