import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


var selectedButtons = [

    {
      comment:"Form Tracking: Ensure that the form has the apprpopriate ID, all inputs have names, and there is a data layer push on submit",
      tooltip: <TooltipButton title="Form IDs: For MC forms outside product pages, they’ll either receive the ID of ‘basic-form’ or ‘other-form’. The ‘other-form’ ID should be reserved for edge cases where there are multiple forms on a page (in general, the lead-gen should receive ‘basic-form’). Forms on product pages will receive the ID ‘performance-form’.<br>DataLayer Form Submission: In the success function of the form submission, include the following javascript:<br>var dataLayer = window.dataLayer = window.dataLayer || [];<br>dataLayer.push({<br>‘event’: ‘cFormSuccess’<br>});<br>The event ‘cFormSuccess’ should be used for campaigns. The event ‘pFormSuccess’ should be used for product pages. The event ‘oFormSuccess’ should be used for others."/>,
      name: 'formTracking',
      value1: "FormTracking_Pass",
      id1: "FormTracking_Pass",
      for1: "FormTracking_Pass",
      label1: "Pass",
      value2: "FormTracking_Unsure",
      id2: "FormTracking_Unsure",
      for2: "FormTracking_Unsure",
      label2: "Unsure",
      value3: "FormTracking_Fail",
      id3: "FormTracking_Fail",
      for3: "FormTracking_Fail",
      label3: "Fail",
      value4: "FormTracking_NA",
      id4: "FormTracking_NA",
      for4: "FormTracking_NA",
      label4: "N/A",
    },

    {
      comment:'Click Element Tracking: Ensure that all items outlined in the brief have been configured with click tracking',
      tooltip: <TooltipButton text='Consult with MCE to ensure components are tracking as intended. When in doubt, throw an ID on it.'/>,
      name: 'clickTracking',
      value1: "ClickTracking_Pass",
      id1: "ClickTracking_Pass",
      for1: "ClickTracking_Pass",
      label1: "Pass",
      value2: "ClickTracking_Unsure",
      id2: "ClickTracking_Unsure",
      for2: "ClickTracking_Unsure",
      label2: "Unsure",
      value3: "ClickTracking_Fail",
      id3: "ClickTracking_Fail",
      for3: "ClickTracking_Fail",
      label3: "Fail",
      value4: "ClickTracking_NA",
      id4: "ClickTracking_NA",
      for4: "ClickTracking_NA",
      label4: "N/A",
    },




];

function MeasurementRadioButtons(props) {


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

export default MeasurementRadioButtons;
