import React from 'react';
import magasco_image from './../images/magasco.jpeg';
import muzik_talk from './../advertisement-images/237businesstalk.jpeg';
import { Card, CardTitle, Col, Row, Fa, Button, NavItem, Navbar, NavLink, NavbarNav} from 'mdbreact';
import './ArtistDashboard.css';
import Post from './Post';
//import Calendar from './Calendar';
import alain_parfait from './../images/alain_parfait.jpeg';
import magasco_sokoto from './../images/magasco_sokoto.jpeg';
import tenor from './../videos/tenor.mp4';
import { DefaultPlayer as Video } from 'react-html5video';
import "video-react/dist/video-react.css";

export default class ArtistDashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col md="4">
                    </Col>
                    <Col className="artist-nav2-col" md="8">
                        <Navbar color="indigo" dark expand="xs" scrolling>
                            <NavbarNav className="">
                                <NavItem active>
                                    <NavLink to="#"><Fa icon="calendar-times-o" className="artist-nav2-icon mb-2 d-flex justify-content-center" size="lg"/><p className="d-flex justify-content-center artist-nav2-text">Timeline</p></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="dollar" className="artist-nav2-icon mb-2 d-flex justify-content-center" size="lg"/><p className="d-flex justify-content-center artist-nav2-text">Financials</p></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="bitcoin" className="artist-nav2-icon mb-2 d-flex justify-content-center" size="lg"/><p className="d-flex justify-content-center artist-nav2-text">Block chain</p></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="gg" className="artist-nav2-icon fa-rotate-90 mb-2 d-flex justify-content-center" size="lg"/><p className="d-flex justify-content-center artist-nav2-text">Statistics</p></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="heart" className="artist-nav2-icon mb-2 d-flex justify-content-center" size="lg"/><p className="d-flex justify-content-center artist-nav2-text">Job area</p></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"><Fa icon="heart" className="artist-nav2-icon mb-2 d-flex justify-content-center" size="lg"/><p className="d-flex justify-content-center artist-nav2-text">Discoveries</p></NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <div className="artist-profile-picture-div">
                            <div className="text-center">
                                <img src={magasco_image} className="artist-profile-picture img-fluid z-depth-1 rounded-circle" alt="profile pic" />
                                <div>
                                    Magasco Esfi
                                </div>
                                <div>
                                    @magascoofficial
                                </div>
                                <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                                    <Button href="#" className="mt-2" color="primary">Verified</Button>
                                    <Button href="#" className="mt-2" color="green">Premium</Button>
                                    <Button href="#" className="mt-2" color="warning">Block Magasco</Button>
                                </div>
                            </div>
                            <div className="artist-stats">
                                <div className="mt-2 ml-auto mr-auto artist-stats-items">
                                    <div className="artist-stats-item">
                                        <div>200 - Songs on Playlist</div>
                                        <div>5000 - Mechandise bought</div>
                                        <div>10 - Event attending</div>
                                        <div>2000 - Followers</div>
                                        <div>100 - Following</div>
                                        <div>10 - Clubs Owned</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <br />
                                <Card className="card-body">
                                    <CardTitle>
                                        <div><span className="limeGreen-border ml-1"></span><span className="ml-1 category-title">Advertisements</span></div>
                                    </CardTitle>
                                    <div className="Advertisement">
                                        <img src={muzik_talk} className="Advertisement-img" alt="something" />
                                        <div className="Advertisement-text">Pascal - NEW MUSIC ALERT</div>
                                    </div>
                                </Card>
                            </div>
                            <div className="mt-2 text-center mr-auto ml-auto" style={{height: "500px", width: "400px"}}>
                                <Video 
                                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                    poster={magasco_sokoto}
                                    onCanPlayThrough={() => {
                                        // Do stuff
                                    }}>
                                    <source src={tenor} />
                                    <track label="English" kind="subtitles" srcLang="en" style={{width: "100%", height: "100%"}} src="http://source.vtt" default />
                                </Video>
                            </div>
                        </div>
                    </Col>
                    <Col className="posts-column" md="4">
                        <Post />
                    </Col>
                    <Col md="4">
                        <div className="text-center">
                            <div className="management">
                                <div className="">Management Area</div>
                                <hr className="management-line" />
                                <div className="">My music corner</div>
                                <hr className="management-line" />
                                <div className="">Mechandise corner</div>
                                <hr className="management-line" />
                                <div className="">My jobs corner</div>
                                <hr className="management-line" />
                                <div className="">My special corner</div>
                            </div>
                        </div>
                        <div className="mt-2 text-center mr-auto ml-auto" style={{height: "500px", width: "400px"}}>
                            <Video 
                                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                poster={alain_parfait}
                                onCanPlayThrough={() => {
                                    // Do stuff
                                }}>
                                <source src={tenor} />
                                <track label="English" kind="subtitles" srcLang="en" style={{width: "100%", height: "100%"}} src="http://source.vtt" default />
                            </Video>
                        </div>
                        {/*<div>
                            <Calendar />
                        </div>*/}
                    </Col>
                </Row>
            </div>
        );
    }
}