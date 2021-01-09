import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import "../../assest/style.css"

const DeatilsComponent=(propData)=>{
    return <Accordion>
    <Card className="card-body">
      <Accordion.Toggle as={Card.Header}eventKey="0"> <b>Nutrition fact</b> </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body >
            <NutritionFactTable />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
}

const NutritionFactTable=(propsData)=>{
    return <table className="mainTable">
        <tbody>
            <tr style={{ borderBottom:"2px solid", fontSize: "smaller"}}>
                <td>Serving size</td>
                <td style={{textAlign:"right", float:"right"}}>100 g</td>
            </tr>
            <tr style={{ borderTop:"2px solid", fontSize: "smaller"}}>
                <td>Amount per serving </td>
                <td></td>
            </tr>
            <tr style={{ borderBottom:"2px solid"}}>
                <td style={{fontSize:30}}>Calories</td>
                <td style={{float:"right", fontSize:20}}>89</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td></td>
                <td style={{float:"right"}}>% Daily value*</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td><b>Totalfat</b>&nbsp;0.3g</td>
                <td style={{float:"right"}}>0%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td>&nbsp;&nbsp;&nbsp;Saturated fat&nbsp;0.1g</td>
                <td style={{float:"right"}}>0%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td><b>Sodium</b>&nbsp;1mg</td>
                <td style={{float:"right"}}>0%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td><b>Total carbohydrate</b>&nbsp;23g</td>
                <td style={{float:"right"}}>8%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td>&nbsp;&nbsp;&nbsp;Dietary fiber&nbsp;2.6g</td>
                <td style={{float:"right"}}>9%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td>&nbsp;&nbsp;&nbsp;Sugar&nbsp;12g</td>
                <td style={{float:"right"}}></td>
            </tr>
            <tr style={{ borderBottom:"2px solid", fontSize:10}}>
                <td><b>Protein</b>&nbsp;1.1g</td>
                <td style={{float:"right"}}>2%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td>Vitamin D &nbsp;0.00mcg</td>
                <td style={{float:"right"}}>0%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td>Calcium&nbsp;5.00mg</td>
                <td style={{float:"right"}}>0%</td>
            </tr>
            <tr style={{ borderBottom:"1px solid #BFC6BB", fontSize:10}}>
                <td>Iron&nbsp;0.26mg</td>
                <td style={{float:"right"}}>1%</td>
            </tr>
            <tr style={{ borderBottom:"2px solid", fontSize:10}}>
                <td>Potassium&nbsp;358mg</td>
                <td style={{float:"right"}}>8%</td>
            </tr>
            <tr style={{ fontSize:10}}>
                <td>this is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</td>
            </tr>
        </tbody>
    </table>
}

export default DeatilsComponent;