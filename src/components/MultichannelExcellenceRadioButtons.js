import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


var selectedButtons = [

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:"Form reviewed: Make sure Kerry has signed off on the fields that are included in the form",
      tooltip: '',
      name: 'formReview',
      value1: "FormReview_Pass",
      id1: "FormReview_Pass",
      for1: "FormReview_Pass",
      label1: "Pass",
      value2: "FormReview_Unsure",
      id2: "FormReview_Unsure",
      for2: "FormReview_Unsure",
      label2: "Unsure",
      value3: "FormReview_Fail",
      id3: "FormReview_Fail",
      for3: "FormReview_Fail",
      label3: "Fail",
      value4: "FormReview_NA",
      id4: "FormReview_NA",
      for4: "FormReview_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:'Text messages: If a message is supposed to be sent to the user upon form submission, ensure it is working as intended',
      tooltip: '',
      name: 'textMessages',
      value1: "TextMessages_Pass",
      id1: "TextMessages_Pass",
      for1: "TextMessages_Pass",
      label1: "Pass",
      value2: "TextMessages_Unsure",
      id2: "TextMessages_Unsure",
      for2: "TextMessages_Unsure",
      label2: "Unsure",
      value3: "TextMessages_Fail",
      id3: "TextMessages_Fail",
      for3: "TextMessages_Fail",
      label3: "Fail",
      value4: "TextMessages_NA",
      id4: "TextMessages_NA",
      for4: "TextMessages_NA",
      label4: "N/A",
    },

    {

      showOnly1:1,

      showOnly3:3,

      comment:"Cloud page: Ensure it has a title, GTM, and it's name/location is documented in the assignment",

      name: 'textMessages',
      value1: "TextMessages_Pass",
      id1: "TextMessages_Pass",
      for1: "TextMessages_Pass",
      label1: "Pass",
      value2: "TextMessages_Unsure",
      id2: "TextMessages_Unsure",
      for2: "TextMessages_Unsure",
      label2: "Unsure",
      value3: "TextMessages_Fail",
      id3: "TextMessages_Fail",
      for3: "TextMessages_Fail",
      label3: "Fail",
      value4: "TextMessages_NA",
      id4: "TextMessages_NA",
      for4: "TextMessages_NA",
      label4: "N/A",
    },

    {

      showOnly1:1,

      showOnly3:3,

      comment:"Data extension: Ensure it has been cleared of test data and it's name/location is documented in the assignment",

      name: 'textMessages',
      value1: "TextMessages_Pass",
      id1: "TextMessages_Pass",
      for1: "TextMessages_Pass",
      label1: "Pass",
      value2: "TextMessages_Unsure",
      id2: "TextMessages_Unsure",
      for2: "TextMessages_Unsure",
      label2: "Unsure",
      value3: "TextMessages_Fail",
      id3: "TextMessages_Fail",
      for3: "TextMessages_Fail",
      label3: "Fail",
      value4: "TextMessages_NA",
      id4: "TextMessages_NA",
      for4: "TextMessages_NA",
      label4: "N/A",
    },

    {


      showOnly2:2,

      comment:"Clear test submissions: Ensure any test submissions generated during testing has been cleared out",

      name: 'textMessages',
      value1: "TextMessages_Pass",
      id1: "TextMessages_Pass",
      for1: "TextMessages_Pass",
      label1: "Pass",
      value2: "TextMessages_Unsure",
      id2: "TextMessages_Unsure",
      for2: "TextMessages_Unsure",
      label2: "Unsure",
      value3: "TextMessages_Fail",
      id3: "TextMessages_Fail",
      for3: "TextMessages_Fail",
      label3: "Fail",
      value4: "TextMessages_NA",
      id4: "TextMessages_NA",
      for4: "TextMessages_NA",
      label4: "N/A",
    },





];

function MultichannelExcellenceRadioButtons(props) {


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
  });




    return (
      <>
    {buttons}
      </>
    );




}

export default MultichannelExcellenceRadioButtons;
