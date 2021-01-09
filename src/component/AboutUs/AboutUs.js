import React from 'react';
import "../../assest/style.css"
const AboutUs=(propsData)=>{
    return<div>
        <ul> <li className="ul-modify">Delivering with love and care for you to relish</li></ul>
        <LoadAboutUsContent />
    </div>
}

const LoadAboutUsContent=(propsData)=>{
    return <div>
        <hr className="hr-border-top" />
        <p className="p-text" style={{fontWeight:"bold"}}>About Demo Group</p>
        <p className="p-text">Leading the Crops Division for Demo Group is india best branded fruit company and a market leader in controlled cultivation and marketing of high quality fruits to demoestic and international customer in a socially responsible manner.</p>
        <p className="p-text">We are happy to serve fresh & delicious fruits.</p>
        <hr className="hr-border-top"/>
    </div>
}

export default AboutUs;