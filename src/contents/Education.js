import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Web Developer" where="Wake Technical Community College" from="January 2019" to="Present"/>
            <Widecard title="Quantitative Analysis " where="Georgian University" from="2009" to="2011"/>
            </div>
            )
        }
    }
    
export default Education
    