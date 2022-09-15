
import ReactDOM from "react-dom";
import React, { useRef, useState, setState, useEffect } from "react";

import { db, firebase } from  "./components/Firebase";
import { v4 as uuid } from "uuid/";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

import RadioButton from "./components/RadioButton";
import Field from "./components/Field";
import Head from "./components/Head";
import Html from "./components/Html";
import Css from "./components/Css";
import Navigation from "./components/Navigation";
import Images from "./components/Images";
import Copy from "./components/Copy";
import Accessibility from "./components/Accessibility";
import UserExperience from "./components/UserExperience";
import Technical from "./components/Technical";
import MultichannelExcellence from "./components/MultichannelExcellence";
import Measurement from "./components/Measurement";
import WEO from "./components/WEO";
import TooltipButton from "./components/TooltipButton";
import ToTopButton from "./components/ToTopButton";
import Accordions from "./components/Accordions";

import SelectTabs from "./components/SelectTabs";
import SubmitDisplay from "./components/SubmitDisplay";



import "./styles.css";

const current = new Date();
const thisDate = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


const App = () => {

  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };




//this will take a snapshot of everything on the page and send to Firebase

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //
  //   const elementsArray = [...event.target.elements]
  //   const formData = elementsArray.reduce((accumulator, currentValue) =>{
  //       if (currentValue.id){
  //         accumulator[currentValue.id] = currentValue.value
  //       }
  //
  //       return accumulator;
  //
  //   }, {})
  //
  //    db.collection("project-data").add(formData);
  //
  //     console.log(formData)
  //
  // };

//this will take a snapshot of everything on the page and send to Firebase


//finding radio button radioValues










const [todos, setTodos] = useState([]);

const [projectData, setProjectData] = useState(null);
const [tester, setTester] = useState(null);
const [url, setURL] = useState(null);

const [text, setText] = useState(null);





const [radioValues, setRadioValues] = useState([
  {
    generic: {},
    syngenta: {},
    wordpress: {},
    marketingCloud: {},
  },
]);



const handleSubmit = (e) => {
  e.preventDefault();
  saveTodo(projectData, tester, url, text, radioValues);
  setProjectData("");
  setTester("");
  setURL("");
  setText("");
  setRadioValues("")


  console.log(projectData,tester, url, text, radioValues);


};


useEffect(() => {
  getTodos();
}, []);

const saveTodo = (projectData, tester, url, text, radioValues) => {

  console.log(radioValues);
  const saveToFirebase = firebase.firestore();
  saveToFirebase.collection("input-field1").add({
    id: uuid(),
    ProjectName: projectData,
    Tester: tester,
    Url: url,
    Textarea: text,
    RadioButtons: radioValues
  });
};


const getTodos = () => {
  const getFromFirebase = firebase.firestore().collection("input-field1");
  getFromFirebase.onSnapshot((querySnapShot) => {
    const saveFirebaseTodos = [];
    querySnapShot.forEach((doc) => {
      saveFirebaseTodos.push(doc.data());
    });
    setTodos(saveFirebaseTodos);
  });
};

const handleInputChange = (e) => {
       const {id , value} = e.target;
       if(id === "projectData"){
           setProjectData(value);
       }
       if(id === "tester"){
           setTester(value);
       }
       if(id === "url"){
           setURL(value);
       }

       if(id === "textArea1"){
           setText(value);
       }

   }


    return (


    <div className="main overflow-hidden" id="overview">
    <Container fluid className="padding-0">
      <div className="header d-flex align-items-center EEO1">
        <div className="hdr-container">
          <a href={'https://www.gscommunications.com'}>

          <img src={'https://assets.syngentaebiz.com/images/media/G S_New_Logo_Circle_7545C_CMYK-600x600-950dd6f.png'} className="img-responsive eeoc" />

          </a>

          <h1>Web Experience &amp; Optimization QA Checklist</h1>

        </div>

        <div className="end">
          <object type="image/svg+xml" data={"./images/Selena.svg"} className="img-fluid avatar" alt=""></object>

        </div>

      </div>




  <div className="firstdiv" style={{ display: hide ? "none" : "block" }}>
    <Form onSubmit={handleSubmit}>

    <Container fluid className="addMargin">

      <Row className="mt-5">
        <Col xs={12} md={9}>


          <Form.Group controlId="projectData" saveTodo={saveTodo} getTodos={getTodos}>
             <Form.Label>ADVANTAGE ASSIGNMENT</Form.Label>
             <Form.Control
             value={projectData}
             onChange = {(e) => handleInputChange(e)}/>
         </Form.Group>

        </Col>

        <Col xs={12} md={3}>

          <Form.Group controlId="tester" saveTodo={saveTodo} getTodos={getTodos}>
             <Form.Label>QA TESTER(S)</Form.Label>
             <Form.Control
             value={tester}
             onChange = {(e) => handleInputChange(e)}/>
         </Form.Group>


        </Col>

      </Row>

    <Row className="mt-2">
      <Col xs={12} lg={9} md={12}>

        <Form.Group controlId="url" saveTodo={saveTodo} getTodos={getTodos}>
           <Form.Label>URL OF PAGE</Form.Label>
           <Form.Control
           value={url}
           onChange = {(e) => handleInputChange(e)}/>
       </Form.Group>


      </Col>

      <Col xs={12} lg={3} md={12}>


        <Form.Group controlId="date">
           <Form.Label>INITIAL TEST DATE</Form.Label>
           <Form.Control value={thisDate} placeholder={thisDate}
          />
       </Form.Group>


      </Col>

    </Row>



    <Row className="d-flex justify-content-md-around flex-wrap options">

      <i className="fas fa-circle"><span>Pass</span></i>

      <i className="fas fa-circle"><span>Unsure/Needs Attention</span></i>

      <i className="fas fa-circle"><span>Fail</span></i>

      <i className="fas fa-circle"><span>Not Applicable</span></i>

    </Row>



    <SelectTabs saveTodo={saveTodo} getTodos={getTodos} setRadioValues={setRadioValues} radioValues={radioValues}/>



  <Row className="mt-5 mb-5">
    <Col xs={12} md={2}>

      <object type="image/svg+xml" data={"./images/Christophe.svg"} className="img-fluid avatar" alt=""></object>

    </Col>

    <Col xs={12} md={10}>

        <Form.Group className="mb-3" controlId="textArea1" saveTodo={saveTodo} getTodos={getTodos}>
          <Form.Label>Please feel free to use the text field below to add any comments you think are necessary regarding issues you may have seen!</Form.Label>
          <Form.Control as="textarea" rows={3}
          value={text}
          onChange = {(e) => handleInputChange(e)}/>
      </Form.Group>

      </Col>
  </Row>

  <Row className="mt-5 mb-5">
    <Col xs={12}>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" onClick={toggleHide}>
          Submit

        </Button>

      </div>
    </Col>
  </Row>

    </Container>


  </Form>
</div>

<div className="Seconddiv" style={{ display: hide ? "block" : "none" }}>
<Container fluid className="showOnSubmit">

  <Row className="mt-5 mb-5">
    <Col xs={12}>
      <div className="d-flex justify-content-center">

        <h2>Thank you for submitting your data!</h2>


      </div>
    </Col>
  </Row>
</ Container>
</div>

        <div className="footer">
        </div>


    </ Container>


        <ToTopButton />


    </div>



)



};





export default App;
