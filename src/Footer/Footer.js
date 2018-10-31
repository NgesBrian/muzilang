import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { languageActions } from '../_actions';
import './Footer.css';

class FooterPage extends React.Component {

    constructor(props) {   
        super(props);
        this.state = {
            language: this.props.language,
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event){
        event.preventDefault();
        const {value } = event.target;
         this.setState({
            language:value
         });
        const { dispatch } = this.props;
        dispatch(languageActions.setLanguage(this.state.language));
    }
    render(){
        return(
            <Footer color="grey lighten-3" className="font-small pt-3">
                <Container fluid>
                <button value='en' onClick={this.changeLanguage} >English</button>
                <button value='fr' onClick={this.changeLanguage} >French</button>
                <button value='ar' onClick={this.changeLanguage} >Arabic</button>
                <button value='ce' onClick={this.changeLanguage} >Chineese</button>
                    <Row>
                        <Col md="12">
                            <div className="muweb-footer-inside">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><b className="text-dark">MUZIKOL</b></li>
                                    <li className="list-inline-item"><span className="text-dark footer-item-copywrite">&copy; Copyright {(new Date().getFullYear())}</span></li>
                                    <li className="list-inline-item"><Link to="/" className="text-dark footer-item-home">Home</Link></li> 
                                    <li className="list-inline-item"><Link to="about" className="text-dark footer-item-slight-seperation">About Us</Link></li>
                                    <li className="list-inline-item"><Link to="contact" className="text-dark footer-item-slight-seperation">Contact</Link></li>
                                    <li className="list-inline-item"><Link to="terms" className="text-dark footer-item-terms">Terms | Policy</Link></li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

function mapStateToProps(state) {
   const { language} = state.languagetion;
    return {
        language
    };
}
function mapDispatchToProps(dispatch) {
   let actions = bindActionCreators({ ...languageActions });
  return { ...actions, dispatch };

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterPage)
//export default FooterPage;