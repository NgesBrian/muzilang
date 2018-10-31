import React from 'react';
import mr_leo_image from './../images/mr_leo.jpeg';
import muzik_talk from './../advertisement-images/237businesstalk.jpeg';
import davido from './../advertisement-images/davido_ad.jpeg';
import muzikol_front_image1 from './../background-images/muzikol_front_image1.jpeg';
import muzikol_front_image2 from './../background-images/muzikol_front_image2.jpg';
import muzikol_front_image3 from './../background-images/muzikol_front_image3.jpeg';
import muzikol_front_image5 from './../background-images/muzikol_front_image5.png';
import muzikol_front_image6 from './../background-images/muzikol_front_image6.jpg';
import muzikol_front_image7 from './../background-images/muzikol_front_image7.jpg';
import { Modal, ModalBody, Media, Col, Row, Button, Fa, Card, CardTitle, Table, TableBody, TableHead } from 'mdbreact';
import './UserDashboard.css';
import Post from './Post';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { userActions } from '../_actions';

class UserDashboard extends React.Component {

    constructor(props) {
        super(props);
         const { user} = this.props;
        console.log('user', user.name);
        this.state = {
            artist_following: false,
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      thumbnailPosition: 'bottom',
      showVideo: {},

        };
        this.toggle_artist_following = this.toggle_artist_following.bind(this);
    }

    toggle_artist_following() {
        this.setState({
            artist_following: !this.state.artist_following
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col md="4">
                        <div>
                            <div>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-top-left" src={muzikol_front_image1} alt="something" /></a>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-top-right" src={davido} alt="something"/></a>
                            </div>
                            <div>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-sm" src={muzikol_front_image2} alt="something" /></a>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-lg" src={muzikol_front_image3} alt="something" /></a>
                            </div>
                            <div>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-lg" src={mr_leo_image} alt="something" /></a>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-sm" src={muzikol_front_image6} alt="something" /></a>
                            </div>
                            <div>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-sm" src={muzikol_front_image5} alt="something" /></a>
                                <a onClick={this.toggle_artist_following} href="#one"><img className="d-inline left-corner-img-lg" src={muzikol_front_image7} alt="something" /></a>
                            </div>
                            <div>
                                <Modal id="one" isOpen={this.state.artist_following} toggle={this.toggle_artist_following} style={{marginTop: "55px"}} size="lg" className="artist-following-modal">
{/*                                 <ModalHeader toggle={this.post_toggle}>Modal title</ModalHeader>*/}
                                    <ModalBody style={{background: "#E6E6FA"}}>
                                        <Button class="close" data-dismiss="modal" aria-label="Close" onClick={this.toggle_artist_following} size="sm">
                                            <span aria-hidden="true">&times;</span>
                                        </Button>
                                        <Media>
                                            <Media left className="mr-3" href="#">
                                                <Media object src={muzikol_front_image5} className="left-corner-modal-img" alt="Generic placeholder image" />
                                            </Media>
                                            <Media body>
                                                <div className="artist-following-modal-content">
                                                    <p><span className="artist-following-options">Name:</span> Tzy Panchak</p>
                                                    <p><span className="artist-following-options">Gender:</span> Male </p>
                                                    <p><span className="artist-following-options">Country:</span> Cameroon</p>
                                                    <p><span className="artist-following-options">Genre(s):</span> R&B, Pop, Afro</p>
                                                </div>
                                            </Media>
                                        </Media>
                                        <div className="artist-following-modal-description">Lorem ipsum dolor sit amet, consectatur adipiscing elit, sed do eiusmod tempor incididuant ut labore et dolore magna aliqua.</div>
                                        <div className="clearfix platform-tracks-div">
                                            <span className="float-left"><span className="limeGreen-border ml-1"></span><span className="ml-1">Platform Tracks</span></span>
                                            <span className="float-right"><Fa icon="heart-o" size="lg"/></span>
                                        </div>
                                        <Media>
                                            <Media left className="" href="#">
                                                <Media object src={mr_leo_image} className="img-fluid z-depth-1 rounded-circle" style={{width:"60px", height:"60px"}} alt="username" />
                                            </Media>
                                            <Media body className="d-flex align-self-center mr-3">
                                                <div className="artist-following-modal-content">La femme de ma galere ft <a href="/" className="mr-3" style={{color: "#333"}}> Ngoma</a>
                                                    <span className="mr-3 platform-tracks-download"><Fa icon="download" size="lg"/> Download</span>
                                                    <span className="mr-3 platform-tracks-play"><Fa icon="music" size="lg"/> play</span>
                                                </div>
                                            </Media>
                                        </Media>
                                    </ModalBody>
                                </Modal>
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
                        <div>
                            <br />
                            <Card className="card-body">
                                <CardTitle>
                                    <div className="clearfix">
                                        <span className="float-left"><span className="limeGreen-border"></span><span className="ml-1 category-title">Upcoming Events</span></span>
                                        <span className="float-right"><Fa icon="eye" size="sm" style={{color: "#000000"}} /></span>
                                    </div>
                                </CardTitle>
                                <Table className="Upcoming-events">
                                    <TableHead>
                                        <tr>
                                            <th>Title</th>
                                            <th>By</th>
                                            <th>Date</th>
                                        </tr>
                                    </TableHead>
                                    <TableBody>
                                        <tr>
                                            <td><i>Birthday party</i></td>
                                            <td><i>Nges B</i></td>
                                            <td><i>24 August 2018</i></td>
                                        </tr>
                                        <tr>
                                            <td><i>Birthday party</i></td>
                                            <td><i>Nges B</i></td>
                                            <td><i>24 August 2018</i></td>
                                        </tr>
                                        <tr>
                                            <td><i>Birthday party</i></td>
                                            <td><i>Nges B</i></td>
                                            <td><i>24 August 2018</i></td>
                                        </tr>
                                        <tr>
                                            <td><i>Birthday party</i></td>
                                            <td><i>Nges B</i></td>
                                            <td><i>24 August 2018</i></td>
                                        </tr>
                                        <tr>
                                            <td><i>Birthday party</i></td>
                                            <td><i>Nges B</i></td>
                                            <td><i>24 August 2018</i></td>
                                        </tr>
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </Col>
                    <Col className="posts-column" md="4">
                        <h4><span className="limeGreen-border ml-1"></span><span className="ml-1 category-title">My Posts</span></h4>
                        <Post />
                    </Col>
                    <Col md="4">
                        <Card className="card-body">
                            <CardTitle><span className="limeGreen-border ml-1"></span><span className="ml-1 category-title">Latest Hits</span></CardTitle>
                            <Table className="Latest-hits table-responsive">
                                <TableHead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Artist</th>
                                        <th>Type</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    <tr>
                                        <td>1</td>
                                        <td>Love Letter</td>
                                        <td>Lil Nero</td>
                                        <td>Single</td>
                                        <td><Button color="elegant" size="sm">free</Button></td>
                                        <td>3 weeks ago</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Love Letter</td>
                                        <td>Lil Nero</td>
                                        <td>Single</td>
                                        <td><Button color="primary" size="sm">500</Button></td>
                                        <td>3 weeks ago</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Love Letter</td>
                                        <td>Lil Nero</td>
                                        <td>Single</td>
                                        <td><Button color="elegant" size="sm">free</Button></td>
                                        <td>3 weeks ago</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Love Letter</td>
                                        <td>Lil Nero</td>
                                        <td>Single</td>
                                        <td><Button color="primary" size="sm">500</Button></td>
                                        <td>3 weeks ago</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Love Letter</td>
                                        <td>Lil Nero</td>
                                        <td>Single</td>
                                        <td><Button color="elegant" size="sm">free</Button></td>
                                        <td>3 weeks ago</td>
                                    </tr>
                                </TableBody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user,
    };
}
function mapDispatchToProps(dispatch) {
   let actions = bindActionCreators({ ...userActions });
  return { ...actions, dispatch };

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard)
