import React from 'react';
import magasco_image from './../images/magasco.jpeg';
import {Col, Row, Fa, NavItem, Navbar, NavLink, NavbarNav} from 'mdbreact';
import './ArtistDashboard.css';
import './ArtistDashboardHeader.css';

export default class ArtistDashboardHeader extends React.Component {
    render() {
        return (
            <div className="">
                <Row>
                    <Col md="3">
                        <div className="text-center">
                            <img src={magasco_image} className="artist-profile-picture img-fluid z-depth-1 rounded-circle" alt="profile pic" />
                            <div>
                                Magasco Esfi
                            </div>
                            <div>
                                @magascoofficial
                            </div>
                        </div>
                    </Col>
                    <Col className="artist-nav2-col" md="9">
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
            </div>
        );
    }
}