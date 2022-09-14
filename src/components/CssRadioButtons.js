import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



var selectedButtons = [

  {

    showOnly1:1,
    comment:'Load order: hf2017.css loads before any page specific styles',
    tooltip: <TooltipButton text='You will have a very bad time if this is incorrect.'/>,
    name: 'loadOrder',
    value1: "LoadOrder_Pass",
    id1: "LoadOrder_Pass",
    for1: "LoadOrder_Pass",
    label1: "Pass",
    value2: "LoadOrder_Unsure",
    id2: "LoadOrder_Unsure",
    for2: "LoadOrder_Unsure",
    label2: "Unsure",
    value3: "LoadOrder_Fail",
    id3: "LoadOrder_Fail",
    for3: "LoadOrder_Fail",
    label3: "Fail",
    value4: "LoadOrder_NA",
    id4: "LoadOrder_NA",
    for4: "LoadOrder_NA",
    label4: "N/A",
  },


    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,

      comment:"Responsive: Page responsively adapts at all supported viewport sizes",
      tooltip: <TooltipButton text='Standard range is from 1920px down to 375px.'/>,
      name: 'responsive',
      value1: "Responsive_Pass",
      id1: "Responsive_Pass",
      for1: "Responsive_Pass",
      label1: "Pass",
      value2: "Responsive_Unsure",
      id2: "Responsive_Unsure",
      for2: "Responsive_Unsure",
      label2: "Unsure",
      value3: "Responsive_Fail",
      id3: "Responsive_Fail",
      for3: "Responsive_Fail",
      label3: "Fail",
      value4: "Responsive_NA",
      id4: "Responsive_NA",
      for4: "Responsive_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,

      comment:'Desktop browsers: Page works as intended in Chrome, Firefox, Safari, and Edge',
      tooltip: <TooltipButton title='Test utilizing <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>'/>,
      name: 'desktop',
      value1: "Desktop_Pass",
      id1: "Desktop_Pass",
      for1: "Desktop_Pass",
      label1: "Pass",
      value2: "Desktop_Unsure",
      id2: "Desktop_Unsure",
      for2: "Desktop_Unsure",
      label2: "Unsure",
      value3: "Desktop_Fail",
      id3: "Desktop_Fail",
      for3: "Desktop_Fail",
      label3: "Fail",
      value4: "Desktop_NA",
      id4: "Desktop_NA",
      for4: "Desktop_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,

      comment:'Mobile browsers: Page works as intended in iOS Safari and Android Chrome',
      tooltip: <TooltipButton title='Test utilizing <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>'/>,
      name: 'mobile',
      value1: "Mobile_Pass",
      id1: "Mobile_Pass",
      for1: "Mobile_Pass",
      label1: "Pass",
      value2: "Mobile_Unsure",
      id2: "Mobile_Unsure",
      for2: "Mobile_Unsure",
      label2: "Unsure",
      value3: "Mobile_Fail",
      id3: "Mobile_Fail",
      for3: "Mobile_Fail",
      label3: "Fail",
      value4: "Mobile_NA",
      id4: "Mobile_NA",
      for4: "Mobile_NA",
      label4: "N/A",
    },




];

function CssRadioButtons(props) {

var buttons = [];


function handleClick(e) {
  console.log(e.target.value);
}

 selectedButtons.forEach(function(selectedButton, i){

  if(selectedButton.showOnly === props.eventKey || selectedButton.showOnly1 === props.eventKey || selectedButton.showOnly2 === props.eventKey || selectedButton.showOnly3 === props.eventKey) {
    buttons.push(

      <tr className="mx-row">
      <td align="top" className="mx-question">

      <p className="prompt gray"><span>{selectedButton.comment}</span>
      {selectedButton.tooltip}


      </p>
      </td>

      <td className="form-check">
        <input type="radio" className="form-check-input"
        name={selectedButton.name}
        value={selectedButton.value1}
        id={selectedButton.id1}
        onClick={(e) => handleClick(e)} />
        <label className="form-check-label" htmlFor={selectedButton.for1}>{selectedButton.label1}</label>
      </td>

      <td className="form-check">
        <input type="radio" className="form-check-input"
        name={selectedButton.name}
        value={selectedButton.value2}
        id={selectedButton.id2}
        onClick={(e) => handleClick(e)} />
        <label className="form-check-label" htmlFor={selectedButton.for2}>{selectedButton.label2}</label>
      </td>

      <td className="form-check">
        <input type="radio" className="form-check-input"
        name={selectedButton.name}
        value={selectedButton.value3}
        id={selectedButton.id3}
        onClick={(e) => handleClick(e)} />
        <label className="form-check-label" htmlFor={selectedButton.for3}>{selectedButton.label3}</label>
      </td>


      <td className="form-check">
        <input type="radio" className="form-check-input"
        name={selectedButton.name}
        value={selectedButton.value4}
        id={selectedButton.id4}
        onClick={(e) => handleClick(e)} />
        <label className="form-check-label" htmlFor={selectedButton.for4}>{selectedButton.label4}</label>
      </td>

      </tr>

    )

  }
  else{

  }
  });



      return (
        <>
      {buttons}
        </>
      );




}

export default CssRadioButtons;
