import React from 'react';
import { Link } from 'react-router-dom';
import magasco_image from './../images/magasco.jpeg';
import muzikol_front_image5 from './../background-images/muzikol_front_image5.png';
import muzikol_front_image6 from './../background-images/muzikol_front_image6.jpg';
import muzikol_front_image7 from './../background-images/muzikol_front_image7.jpg';
import { Container, Col, Row, Fa, Button, Media} from 'mdbreact';
import './Mechandise.css';
import './Release.css';
import ArtistDashboardHeader from './ArtistDashboardHeader';
import magasco_sokoto from './../images/magasco_sokoto.jpeg';

export default class Release extends React.Component {
    render() {
        return (
            <Container fluid>
                <ArtistDashboardHeader />
                <div className="text-center mechandise-title">My release</div>
                <Row>
                    <Col md="3">
                        <div className="release-stats">
                            <div className="mt-2 ml-auto mr-auto release-stats-items">
                                <div className="release-stats-item">
                                    <div>200 - Songs on release</div>
                                    <div>5000 - Mechandise bought</div>
                                    <div>10 - Event attending</div>
                                    <div>2000 - Followers</div>
                                    <div>100 - Following</div>
                                    <div>10 - Clubs Owned</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="9">
                        <Row className="mechandise-bg">
                            <Col md="3" style={{marginLeft: "0px", paddingLeft: "0px"}}>
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
                        <Row>
                            <Col md="4" style={{marginLeft: "0px", paddingLeft: "0px"}}>
                                <div className="mechandise-item">
                                    <img className="" src={magasco_image} alt="something" />
                                    <div className="release-col1">
                                        <div className="release-col1-text1">Again</div>
                                        <div className="release-col1-text2">moments</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={muzikol_front_image6} alt="something" />
                                    <div className="release-col2 ml-3">
                                        <div className="release-col2-text1">Taiyon</div>
                                        <div className="release-col2-text2">Paradise</div>
                                        <Button size="sm" color="white">Norrow Nv</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={magasco_sokoto} alt="something" />
                                    <div className="release-col3">
                                        <div className="release-col3-text1">Armez</div>
                                        <div className="release-col3-text2">How people move</div>
                                        <Button size="sm">New Single</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md="4" style={{marginLeft: "0px", paddingLeft: "0px"}}>
                                <div className="mechandise-item">
                                    <img className="" src={muzikol_front_image5} alt="something" />
                                    <div className="release-col1">
                                        <div className="release-col1-text1">Again</div>
                                        <div className="release-col1-text2">moments</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={muzikol_front_image6} alt="something" />
                                    <div className="release-col2 ml-3">
                                        <div className="release-col2-text1">Taiyon</div>
                                        <div className="release-col2-text2">Paradise</div>
                                        <Button size="sm" color="white">Norrow Nv</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mechandise-item">
                                    <img className="" src={muzikol_front_image7} alt="something" />
                                    <div className="release-col3">
                                        <div className="release-col3-text1">Armez</div>
                                        <div className="release-col3-text2">How people move</div>
                                        <Button size="sm">New Single</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="mt-2 mb-2">
                        <div className="pull-right">
                            <Fa icon="heart-o" className="display-4" size="lg" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="9">
                        <div className="" style={{background: "#666"}}>
                            <div className="ml-2 mr-2 pt-4 mb-3">
                                <span className="justify-content-left">
                                    <Fa icon="play" size="sm" />
                                    <span className="ml-2" style={{color: "#fff"}}>Recent Played</span>
                                </span>
                                <span className="pull-right badge">
                                    <Link key="2" to="/" >
                                        <span className="ml-1 mr-1" style={{color: "#fff"}}>SEE All</span>
                                    </Link>
                                </span>
                            </div>
                            <Media className="ml-2 mr-2">
                                <Media left className="" href="#">
                                    <Media object src={muzikol_front_image7} className="img-fluid z-depth-1" style={{width:"60px", height:"60px"}} alt="username" />
                                </Media>
                                <Media body className="">
                                    <div>
                                        <div className="song-title justify-content-left">We need peace</div>
                                        <div className="pull-right"><Fa icon="heart-o" size="lg" /><span className="ml-3">4:45</span></div>
                                    </div>
                                    <div className="song-author">Alpha Beta records</div>
                                </Media>
                            </Media>
                            <hr />
                            <Media className="ml-1 mr-2">
                                <Media left className="" href="#">
                                    <Media object src={muzikol_front_image7} className="img-fluid z-depth-1" style={{width:"60px", height:"60px"}} alt="username" />
                                </Media>
                                <Media body className="">
                                    <div>
                                        <div className="song-title justify-content-left">We need peace</div>
                                        <div className="pull-right"><Fa icon="heart-o" size="lg" /><span className="ml-3">4:45</span></div>
                                    </div>
                                    <div className="song-author">Alpha Beta records</div>
                                </Media>
                            </Media>
                            <hr />
                            <Media className="ml-1 mr-2">
                                <Media left className="" href="#">
                                    <Media object src={muzikol_front_image7} className="img-fluid z-depth-1" style={{width:"60px", height:"60px"}} alt="username" />
                                </Media>
                                <Media body className="">
                                    <div>
                                        <div className="song-title justify-content-left">We need peace</div>
                                        <div className="pull-right"><Fa icon="heart-o" size="lg" /><span className="ml-3">4:45</span></div>
                                    </div>
                                    <div className="song-author">Alpha Beta records</div>
                                </Media>
                            </Media>
                            <hr />
                            <Media className="ml-2 mr-2">
                                <Media left className="" href="#">
                                    <Media object src={muzikol_front_image7} className="img-fluid z-depth-1" style={{width:"60px", height:"60px"}} alt="username" />
                                </Media>
                                <Media body className="">
                                    <div>
                                        <div className="song-title justify-content-left">We need peace</div>
                                        <div className="pull-right"><Fa icon="heart-o" size="lg" /><span className="ml-3">4:45</span></div>
                                    </div>
                                    <div className="song-author">Alpha Beta records</div>
                                </Media>
                            </Media>
                            <hr />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}