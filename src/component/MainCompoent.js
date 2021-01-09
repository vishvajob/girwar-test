import React, { Component } from 'react';
import DeatilsComponent from './DetailsCompoent/DetailsComponent';
import JumbotronEelement from './Jumbotron/JumbotronElement';
import "../assest/style.css"
class MainCompoent extends Component {
    state = {  }
    render() { 
        return <div className="mainBody">
        <JumbotronEelement />
        <DeatilsComponent />
        </div>
    }
}
 
export default MainCompoent;