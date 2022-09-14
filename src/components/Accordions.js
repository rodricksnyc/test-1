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
  const [radioValues, setRadioValues] = useState([
    {
      generic: {},
      syngenta: {},
      wordpress: {},
      marketingCloud: {},
    },
  ]);


  var selectedCards = [

      {
        header: 'HEAD',
        body: <Head
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>,
      },
      {
        header: 'HTML',
        body: <Html
          eventKey={props.eventKey}
          radioValues={radioValues}
          setRadioValues={setRadioValues}/>,
      },
      {
        header: 'CSS',
        body: <Css
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>,
      },
      {
        header: 'NAVIGATION',
        body:  <Navigation
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>,
      },
      {
        header: 'IMAGES',
        body: <Images
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>,
      },
      {
        header: 'COPY',
        body: <Copy
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>,
      },
      {
        header: 'ACCESSIBILITY',
        body: <Accessibility
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>,
      },
      {
        header: 'USER EXPERIENCE',
        body:  <UserExperience
          eventKey={props.eventKey}
          radioValues={radioValues}
          setRadioValues={setRadioValues}/>,
      },
      {
        header: 'TECHNICAL',
        body: <Technical
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>
      },
      {
        header: 'TEAM SPECIFIC: MULTICHANNEL EXCELLENCE',
        body: <MultichannelExcellence
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>
      },
      {
        header: 'TEAM SPECIFIC: MEASUREMENT',
        body: <Measurement
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>
      },
      {
        header: 'TEAM SPECIFIC: WEO',
        body:  <WEO
        eventKey={props.eventKey}
        radioValues={radioValues}
        setRadioValues={setRadioValues}/>
      },
  ];


const filteredCards = selectedCards.filter((card) => {
  if (props.eventKey === "marketingCloud") {
    if (card.header !== "NAVIGATION") {
      return card;
    }
  } else {
    return selectedCards;
  }
});


var cards = [];


filteredCards.forEach(function(selectedCard, i){
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
