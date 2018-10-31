import React, {Component} from "react";
import { Col, Row, Input, Button, Fa, Container, Media } from 'mdbreact';
import Map from 'react-js-google-maps';
import avata from './../images/default_avata.jpg';

const setMarker = (map) => {
    const uluru = { lat: 4.159302, lng: 9.243536 };
    const marker = new window.google.maps.Marker({
        position: uluru,
        map: map
    });
    window.google.maps.event.addListener(marker, 'click', function() {
        const infoWindow = new window.google.maps.InfoWindow({
            content: "<b>Header</b><div>Info Content</div>"
        });
        infoWindow.open(map, marker);
    })
};

const URL_CONTACT = "http://localhost/sayo/api/web/v1/beforeauths/contact";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                name: '',
                email: '',
                subject: '',
                body: '',
            },
            submitted: false,
            erroremail:'',
            response:{
                code:'',
                message:''
            }

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { contact } = this.state;
        this.setState({
            contact: {
                ...contact,
                [name]: value
            }
        });
    }

    //this function is to save data to the API
    saveContactUs = (contact) => {
        fetch(URL_CONTACT, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': "*"
        },
        body: JSON.stringify({
            name:contact.name,
            topic:contact.subject,
            email:contact.email,
            body:contact.body,
        })
        }).then(res=>res.json())
        .then(json => {
           this.setState({
            response: {
                code: json.isSuccess,
                message:json.message
            }
            });
            this.setState({
                contact: { 
                    name:'',
                    email:'',
                    subject:'',
                    body:'',
                },
                erroremail:'',
                success:true,
                submitted: false,
            })
        });
    }

    //Handling Submision
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.contact);
        this.setState({ submitted: true });
        const contact = this.state.contact;
        //const { dispatch } = this.props;
        if (contact.name && contact.email && contact.subject && contact.body) {
            console.log("afterfirst");
            //dispatch(userActions.register(contact));
           //for email validation
            let regex = /\S+@\S+\.\S+/;
            if(!regex.test(contact.email)){
                console.log('email validation failed');
                this.setState({ erroremail: 'error' });
                this.clearMessages()
            }
            else{
                console.log("before save call");
                this.saveContactUs(contact);
                console.log("after save call");
            }
        }
    }

   //to clear the error messages from the screen
    clearMessages() {
        setTimeout(function(){
                this.setState({
                    error:false,
                    success:false
                })
            }.bind(this),3000)
    }

	render() {
        const { contact, submitted, erroremail,response} = this.state;
        const mapOptions = {
          zoom: 4,
          center: { lat: 4.159302, lng: 9.243536 }
        }

		return (
            <div className="">
                <Container fluid>
            		<div className="mt-0">
                        <Row>
                            {/* location map */}
                            <Map
                              id="map1"
                              apiKey="AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"
                              mapOptions= {mapOptions}
                              style={{ width: "100%", height: 300, float: "left" }}
                              onLoad={setMarker}
                            />
                        </Row>
                    </div>
    		        <div className="mt-5">
    	                <Row>
                            <Col md="1">
                            </Col>
    	                    <Col md="4">
    	                        <div className="">
                                {response.message !=='' &&
                                    <div>
                                        <Media className="d-flex align-self-center" >
                                                <Media className="mx-auto d-block" href="#">
                                                    <Media object src={avata} className="img-fluid z-depth-1 rounded-circle center-image" style={{width:"250px", height:"250px" }} alt="username" />
                                                </Media>
                                        </Media>
                                        <div >
                                            <h1>
                                                <div className="help-block">Thank You!!!</div>
                                            </h1>
                                            <h5 className="text-center">
                                                {response.message}
                                             </h5>  
                                        </div>
                                    </div>
                                }
                                {response.message ==='' &&
                                    <div className="">
                                        <h3>Get in Touch</h3>
                                        <p>Please fill out the quick form and we will be in touch with lightening speed</p>
                                        {/* contact form */}
                                    <form>
                                        <div className="md-form">
                                            <Input label="Your name"  name="name" type="text" value={contact.name} onChange={this.handleChange} validate error="wrong" success="right" />
                                            {submitted && !contact.name &&
                                                <div className="help-block">Name is required</div>
                                            }
                                            <Input label="Your email"  name="email" type="text" value={contact.email} onChange={this.handleChange} validate error="wrong" success="right" />
                                            {submitted && !contact.email &&
                                                <div className="help-block">Email is required</div>
                                            }
                                            {submitted && erroremail === 'error' &&
                                                <div className="help-block">Invalid Email Format</div>
                                            }
                                            <Input label="Subject"  name="subject" type="text" value={contact.subject} onChange={this.handleChange} validate error="wrong" success="right" />
                                            {submitted && !contact.subject &&
                                                <div className="help-block">Subject is required</div>
                                            }
                                            <Input label="body"  name="body" type="textarea" value={contact.body} onChange={this.handleChange} validate error="wrong" success="right" />
                                            {submitted && !contact.body &&
                                                <div className="help-block">Body is required</div>
                                            }
                                            <div className="text-center">
                                                <Button type="submit" onClick={this.handleSubmit} className="btn-success">Submit</Button>
                                            </div>
                                        </div>
                                    </form>
                                    </div>  
                                }
    	                        </div>
                            </Col>
                            <Col md="2">
                            </Col>
    	                    <Col md="4">
                                {/* address and key reasons for contacting support */}
                                <div>
                                    <h4>Connect with us:</h4>
                                    <div className="mt-3">
                                        <p>For support or any question:</p>
                                        <p><Fa icon="phone" size="sm" /> Phone: (+237) 651781197</p>
                                        <p><Fa icon="envelope" size="sm" /> Email: abebohtech@gmail.com</p>
                                        <h4 className="mt-5 mb-3">Key reasons</h4>
                                        <p>Send your feedback</p>
                                        <p>Business inquiries</p>
                                        <p>Special account or special consideration</p>
                                        <p>Report a technical fault</p>
                                        <p>Suggest a functionality</p>
                                        <p>Any other reason</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}
export default Contact;
