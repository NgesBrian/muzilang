import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import About from './About/About.js';
import FooterPage from './Footer/Footer.js';
import { I18nProvider } from '@lingui/react';

class App extends Component {
    
    state = {
        catalogs: {},
         loading: true // appears after page has loaded
    }
  loadCatalog = async (language) => {
    const catalog = await import(
      './locales/'+language+'/messages.json')
    this.setState(state => ({
      catalogs: {
        ...state.catalogs,
        [language]: catalog
      }
    }))
  }
  componentDidMount() {
    this.loadCatalog(this.props.language);
     setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { language } = nextProps
    const { catalogs } = nextState
    if (language !== this.props.language && !catalogs[language]) {
      this.loadCatalog(language)
      return false
    }
    return true
  }
    render() {
        const { loading } = this.state;
        const { language } = this.props;
        const { catalogs } = this.state;
        if (!catalogs[language]) return null;
        if(loading) {
            return null;
        }

        return (
            <I18nProvider language={language} catalogs={catalogs} >
                 <div className="">
                    <About/>
                    <FooterPage />
                </div>
            </I18nProvider>
            
        );
    }
}
function mapStateToProps(state) {
  const { loggingIn, user, userType} = state.authentication;
  console.log('another ',state);
  const { language } = state.languagetion;
    return {
        loggingIn,
        user,
        userType,
        language,
    };
}

export default connect(
  mapStateToProps,
)(App)
