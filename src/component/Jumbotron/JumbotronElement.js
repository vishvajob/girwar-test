import React from 'react';
import '../../assest/style.css'

const jumbotronData = [
    { backgroundColor: "#F5B21A", mainText: "Lorem Ipsum", text: "this is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.", img: "image/kiwi.png", imagePostion: "right" },
    { backgroundColor: "#FFFFFF", mainText: "Lorem Ipsum", text: "this is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.", img: "image/grapefruit.png", imagePostion: "left" },
    { backgroundColor: "#60FD00", mainText: "Lorem Ipsum", text: "this is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.", img: "image/pineapple.png", imagePostion: "right" }
]

const JumbotronEelement = (propsData) => {
    return (jumbotronData && jumbotronData.length > 0) && jumbotronData.map((item, key) => {
        return <div className="jumbotronOn" style={{ backgroundColor: item.backgroundColor}} key={key}>
            <img className="image" src={item.img} style={{ float: item.imagePostion}} />
            <p className="mainText" style={{ float: item.imagePostion === "right" ? "left" : "right" }}>{item.mainText}</p><br/>
            <p className="subText" style={{ float: item.imagePostion === "right" ? "left" : "right", color: item.backgroundColor !== "#FFFFFF" ? "#fff" :"#000" }}>{item.text}</p>
        </div>
    })
}

export default JumbotronEelement;