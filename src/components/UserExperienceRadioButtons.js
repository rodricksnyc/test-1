import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

const comment1 = `Lazy loading: Images below the fold have the <span class="highlight pink">loading="lazy"</span> attribute`

var selectedButtons = [

    {
      comment:'Feedback: Some form of feedback/reinforcement is provided when a task is completed',
      tooltip: <TooltipButton text='E.g.: A thank you/success message on form submission.'/>,
      name: 'feedbackMessage',
      value1: "FeedbackMessage_Pass",
      id1: "FeedbackMessage_Pass",
      for1: "FeedbackMessage_Pass",
      label1: "Pass",
      value2: "FeedbackMessage_Unsure",
      id2: "FeedbackMessage_Unsure",
      for2: "FeedbackMessage_Unsure",
      label2: "Unsure",
      value3: "FeedbackMessage_Fail",
      id3: "FeedbackMessage_Fail",
      for3: "FeedbackMessage_Fail",
      label3: "Fail",
      value4: "FeedbackMessage_NA",
      id4: "FeedbackMessage_NA",
      for4: "FeedbackMessage_NA",
      label4: "N/A",
    },

    {
      comment:'Input validation: Required fields are clearly labeled and any limits such as length are enforced',
      tooltip: <TooltipButton text="Don't let a zip code be 20 digits long."/>,
      name: 'inputValidation',
      value1: "InputValidation_Pass",
      id1: "InputValidation_Pass",
      for1: "InputValidation_Pass",
      label1: "Pass",
      value2: "InputValidation_Unsure",
      id2: "InputValidation_Unsure",
      for2: "InputValidation_Unsure",
      label2: "Unsure",
      value3: "InputValidation_Fail",
      id3: "InputValidation_Fail",
      for3: "InputValidation_Fail",
      label3: "Fail",
      value4: "InputValidation_NA",
      id4: "InputValidation_NA",
      for4: "InputValidation_NA",
      label4: "N/A",
    },

    {
      comment:'Input type & mode: Form inputs are the right type for their use case and have appropriate inputmode values',
      tooltip: <TooltipButton text='type: text, tel, email, phone, number, search, url, date, month, time, password, etc.<br>inputmode: text, tel, email, numeric, decimal, search, url<br>This helps mobile devices pull up the right keyboard variant.'/>,
      name: 'inputTypeMode',
      value1: "InputTypeMode_Pass",
      id1: "InputTypeMode_Pass",
      for1: "InputTypeMode_Pass",
      label1: "Pass",
      value2: "InputTypeMode_Unsure",
      id2: "InputTypeMode_Unsure",
      for2: "InputTypeMode_Unsure",
      label2: "Unsure",
      value3: "InputTypeMode_Fail",
      id3: "InputTypeMode_Fail",
      for3: "InputTypeMode_Fail",
      label3: "Fail",
      value4: "InputTypeMode_NA",
      id4: "InputTypeMode_NA",
      for4: "InputTypeMode_NA",
      label4: "N/A",
    },

    {
      comment: 'No dark patterns: Ensure all interactions, controls, and pre-selected options are user friendly',
      tooltip: <TooltipButton title='<a href="https://www.deceptive.design/types" target="_blank">Types of dark patterns</a>.'/>,
      name: 'noDarkPatterns',
      value1: "NoDarkPatterns_Pass",
      id1: "NoDarkPatterns_Pass",
      for1: "NoDarkPatterns_Pass",
      label1: "Pass",
      value2: "NoDarkPatterns_Unsure",
      id2: "NoDarkPatterns_Unsure",
      for2: "NoDarkPatterns_Unsure",
      label2: "Unsure",
      value3: "NoDarkPatterns_Fail",
      id3: "NoDarkPatterns_Fail",
      for3: "NoDarkPatterns_Fail",
      label3: "Fail",
      value4: "NoDarkPatterns_NA",
      id4: "NoDarkPatterns_NA",
      for4: "NoDarkPatterns_NA",
      label4: "N/A",
    },

    {
      comment: "Link text: Ensure all links and CTA's have unique, descriptive text",
      tooltip: <TooltipButton text='Do not use "Learn more" 5 times in a row.'/>,
      name: 'linkText',
      value1: "LinkText_Pass",
      id1: "LinkText_Pass",
      for1: "LinkText_Pass",
      label1: "Pass",
      value2: "LinkText_Unsure",
      id2: "LinkText_Unsure",
      for2: "LinkText_Unsure",
      label2: "Unsure",
      value3: "LinkText_Fail",
      id3: "LinkText_Fail",
      for3: "LinkText_Fail",
      label3: "Fail",
      value4: "LinkText_NA",
      id4: "LinkText_NA",
      for4: "LinkText_NA",
      label4: "N/A",
    },

    {
      comment: "CTA weight: Ensure any CTA's are weighted properly relative to the user journey",
      tooltip: <TooltipButton text='Not every CTA needs to be styled as a primary, use secondary styles where appropriate.'/>,
      name: 'ctaWeight',
      value1: "CTAWeight_Pass",
      id1: "CTAWeight_Pass",
      for1: "CTAWeight_Pass",
      label1: "Pass",
      value2: "CTAWeight_Unsure",
      id2: "CTAWeight_Unsure",
      for2: "CTAWeight_Unsure",
      label2: "Unsure",
      value3: "CTAWeight_Fail",
      id3: "CTAWeight_Fail",
      for3: "CTAWeight_Fail",
      label3: "Fail",
      value4: "CTAWeight_NA",
      id4: "CTAWeight_NA",
      for4: "CTAWeight_NA",
      label4: "N/A",
    },

    {
      comment: 'No false bottoms: Ensure that there is a little bit of content peeking up "above the fold"',
      tooltip: '',
      name: 'falseBottoms',
      value1: "FalseBottoms_Pass",
      id1: "FalseBottoms_Pass",
      for1: "FalseBottoms_Pass",
      label1: "Pass",
      value2: "FalseBottoms_Unsure",
      id2: "FalseBottoms_Unsure",
      for2: "FalseBottoms_Unsure",
      label2: "Unsure",
      value3: "FalseBottoms_Fail",
      id3: "FalseBottoms_Fail",
      for3: "FalseBottoms_Fail",
      label3: "Fail",
      value4: "FalseBottoms_NA",
      id4: "FalseBottoms_NA",
      for4: "FalseBottoms_NA",
      label4: "N/A",
    },
    {
      comment: "Back to top: Pages which are longer than 2-3x a standard viewport height should include a back to top",
      tooltip: <TooltipButton title='Anchor to the bottom right of the viewport. (Syngenta: These have not been standardized across the site yet.)'/>,
      name: 'backToTop',
      value1: "BackToTop_Pass",
      id1: "BackToTop_Pass",
      for1: "BackToTop_Pass",
      label1: "Pass",
      value2: "BackToTop_Unsure",
      id2: "BackToTop_Unsure",
      for2: "BackToTop_Unsure",
      label2: "Unsure",
      value3: "BackToTop_Fail",
      id3: "BackToTop_Fail",
      for3: "BackToTop_Fail",
      label3: "Fail",
      value4: "BackToTop_NA",
      id4: "BackToTop_NA",
      for4: "BackToTop_NA",
      label4: "N/A",
    },




];

function UserExperienceRadioButtons(props) {


var buttons = [];

function handleClick(e) {
  console.log(e.target.value);
}


selectedButtons.forEach(function(selectedButton, i){
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
  });




    return (
      <>
    {buttons}
      </>
    );




}

export default UserExperienceRadioButtons;
