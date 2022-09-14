import React, { useState, useRef } from 'react';

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


var selectedButtons = [

    {

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


      comment:"Cloud page: Ensure it has a title, GTM, and it's name/location is documented in the assignment",

      name: 'cloudPage',
      value1: "cloudPage_Pass",
      id1: "cloudPage_Pass",
      for1: "cloudPage_Pass",
      label1: "Pass",
      value2: "cloudPage_Unsure",
      id2: "cloudPage_Unsure",
      for2: "cloudPage_Unsure",
      label2: "Unsure",
      value3: "cloudPage_Fail",
      id3: "cloudPage_Fail",
      for3: "cloudPage_Fail",
      label3: "Fail",
      value4: "cloudPage_NA",
      id4: "cloudPage_NA",
      for4: "cloudPage_NA",
      label4: "N/A",
    },

    {


      comment:"Data extension: Ensure it has been cleared of test data and it's name/location is documented in the assignment",

      name: 'dataExtension',
      value1: "dataExtension_Pass",
      id1: "dataExtension_Pass",
      for1: "dataExtension_Pass",
      label1: "Pass",
      value2: "dataExtension_Unsure",
      id2: "dataExtension_Unsure",
      for2: "dataExtension_Unsure",
      label2: "Unsure",
      value3: "dataExtension_Fail",
      id3: "dataExtension_Fail",
      for3: "dataExtension_Fail",
      label3: "Fail",
      value4: "dataExtension_NA",
      id4: "dataExtension_NA",
      for4: "dataExtension_NA",
      label4: "N/A",
    },

    {


      comment:"Clear test submissions: Ensure any test submissions generated during testing has been cleared out",

      name: 'clearSubmissionTest',
      value1: "clearSubmissionTest_Pass",
      id1: "clearSubmissionTest_Pass",
      for1: "clearSubmissionTest_Pass",
      label1: "Pass",
      value2: "clearSubmissionTest_Unsure",
      id2: "clearSubmissionTest_Unsure",
      for2: "clearSubmissionTest_Unsure",
      label2: "Unsure",
      value3: "clearSubmissionTest_Fail",
      id3: "clearSubmissionTest_Fail",
      for3: "clearSubmissionTest_Fail",
      label3: "Fail",
      value4: "clearSubmissionTest_NA",
      id4: "clearSubmissionTest_NA",
      for4: "clearSubmissionTest_NA",
      label4: "N/A",
    },





];

function MultichannelExcellenceRadioButtons({radioValues, setRadioValues, eventKey}) {


  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setRadioValues([
      {
        ...radioValues[0],
        [eventKey]: {
          ...radioValues[0][eventKey],
          [e.target.name]: e.target.value,
        },
      },
    ]);
  };

  console.log(radioValues);

var buttons = [];



const filteredSelectedButtons = selectedButtons.filter((button) => {
  if (eventKey === "generic") {
    if (
      button.name !== "cloudPage" &&
      button.name !== "dataExtension" &&
      button.name !== "clearSubmissionTest"


    )
    {

      return button;
    }
  }

  else if (eventKey === "syngenta") {
    if (

      button.name !== "clearSubmissionTest"


    ){

      return button;
    }
  }

  else if (eventKey === "wordpress") {
    if (

      button.name !== "dataExtension" &&
      button.name !== "cloudPage"


    ){

      return button;
    }
  }

  else if (eventKey === "marketingCloud") {
    if (

      button.name !== "clearSubmissionTest"


    ){

      return button;
    }
  }
  else {
    return selectedButtons;
  }
});

return (
  <>

  {filteredSelectedButtons.map((selectedButton) => (
          <tr className="mx-row">
            <td align="top" className="mx-question">
              <p className="prompt gray">
                <span>{selectedButton.comment}</span>
                {selectedButton.tooltip}
              </p>
            </td>

            <td className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name={selectedButton.name}
                value={selectedButton.value1}
                id={selectedButton.id1}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={selectedButton.for1}>
                {selectedButton.label1}
              </label>
            </td>

            <td className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name={selectedButton.name}
                value={selectedButton.value2}
                id={selectedButton.id2}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={selectedButton.for2}>
                {selectedButton.label2}
              </label>
            </td>

            <td className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name={selectedButton.name}
                value={selectedButton.value3}
                id={selectedButton.id3}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={selectedButton.for3}>
                {selectedButton.label3}
              </label>
            </td>

            <td className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name={selectedButton.name}
                value={selectedButton.value4}
                id={selectedButton.id4}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={selectedButton.for4}>
                {selectedButton.label4}
              </label>
            </td>
          </tr>
        ))}


  </>
);




}

export default MultichannelExcellenceRadioButtons;
