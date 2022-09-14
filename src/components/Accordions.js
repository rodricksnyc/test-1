import React, {useState} from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';


import RadioButton from "./RadioButton";
import Field from "./Field";
import Head from "./Head";
import Html from "./Html";
import Css from "./Css";
import Navigation from "./Navigation";
import Images from "./Images";
import Copy from "./Copy";
import Accessibility from "./Accessibility";
import UserExperience from "./UserExperience";
import Technical from "./Technical";
import MultichannelExcellence from "./MultichannelExcellence";
import Measurement from "./Measurement";
import WEO from "./WEO";


import TooltipButton from "./TooltipButton";



function Accordions(props) {



  var selectedCards = [

      {
        header: 'HEAD',
        body: <Head eventKey={props.eventKey}/>,
      },
      {
        header: 'HTML',
        body: <Html eventKey={props.eventKey}/>,
      },
      {
        header: 'CSS',
        body: <Css eventKey={props.eventKey}/>,
      },
      {
        header: 'NAVIGATION',
        body:  <Navigation eventKey={props.eventKey}/>,
      },
      {
        header: 'IMAGES',
        body: <Images eventKey={props.eventKey}/>,
      },
      {
        header: 'COPY',
        body: <Copy eventKey={props.eventKey}/>,
      },
      {
        header: 'ACCESSIBILITY',
        body: <Accessibility eventKey={props.eventKey}/>,
      },
      {
        header: 'USER EXPERIENCE',
        body:  <UserExperience eventKey={props.eventKey}/>,
      },
      {
        header: 'TECHNICAL',
        body: <Technical eventKey={props.eventKey}/>,
      },
      {
        header: 'TEAM SPECIFIC: MULTICHANNEL EXCELLENCE',
        body: <MultichannelExcellence eventKey={props.eventKey}/>,
      },
      {
        header: 'TEAM SPECIFIC: MEASUREMENT',
        body: <Measurement eventKey={props.eventKey}/>,
      },
      {
        header: 'TEAM SPECIFIC: WEO',
        body:  <WEO eventKey={props.eventKey}/>,
      },
  ];

var cards = [];


selectedCards.forEach(function(selectedCard, i){
    cards.push(
   <Accordion defaultActiveKey={0} key={i}>

      <Accordion.Item eventKey={i}>
      <Accordion.Header>{selectedCard.header}</Accordion.Header>
        <Accordion.Body>

        {selectedCard.body}

      </Accordion.Body>
      </Accordion.Item>


  </Accordion>
    )
  });



  return (


<div>

{cards}

</div>


  );



}

export default Accordions;
