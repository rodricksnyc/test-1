import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

const comment1 = `Font Awesome ARIA: If applicable, make sure that font awesome icons have the <span class="highlight pink">aria-hidden="true"</span> attribute`

var selectedButtons = [

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:'Color contrast: All copy and UI elements have sufficient color contrast and pass at WCAG AA level or higher',
      tooltip: <TooltipButton title='Can utilize the <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Contrast checker</a> or Chrome developer tools.'/>,
      name: 'colorcontrast',
      value1: "ColorContrast_Pass",
      id1: "ColorContrast_Pass",
      for1: "ColorContrast_Pass",
      label1: "Pass",
      value2: "ColorContrast_Unsure",
      id2: "ColorContrast_Unsure",
      for2: "ColorContrast_Unsure",
      label2: "Unsure",
      value3: "ColorContrast_Fail",
      id3: "ColorContrast_Fail",
      for3: "ColorContrast_Fail",
      label3: "Fail",
      value4: "ColorContrast_NA",
      id4: "ColorContrast_NA",
      for4: "ColorContrast_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:'Colorblind friendly: Page checked for potential issues for the three most common types of imparement',
      tooltip: <TooltipButton text='A great iOS app is called "CVSimulator"'/>,
      name: 'colorblind',
      value1: "Colorblind_Pass",
      id1: "Colorblind_Pass",
      for1: "Colorblind_Pass",
      label1: "Pass",
      value2: "Colorblind_Unsure",
      id2: "Colorblind_Unsure",
      for2: "Colorblind_Unsure",
      label2: "Unsure",
      value3: "Colorblind_Fail",
      id3: "Colorblind_Fail",
      for3: "Colorblind_Fail",
      label3: "Fail",
      value4: "Colorblind_NA",
      id4: "Colorblind_NA",
      for4: "Colorblind_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:'Input types: Any form input fields are using the appropriate input type for the information being requested',
      tooltip: <TooltipButton text='text, email, tel, number, password, date, datetime, month, search'/>,
      name: 'inputTypes',
      value1: "InputTypes_Pass",
      id1: "InputTypes_Pass",
      for1: "InputTypes_Pass",
      label1: "Pass",
      value2: "InputTypes_Unsure",
      id2: "InputTypes_Unsure",
      for2: "InputTypes_Unsure",
      label2: "Unsure",
      value3: "InputTypes_Fail",
      id3: "InputTypes_Fail",
      for3: "InputTypes_Fail",
      label3: "Fail",
      value4: "InputTypes_NA",
      id4: "InputTypes_NA",
      for4: "InputTypes_NA",
      label4: "N/A",
    },

    { showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment: 'Input labels: A label is associated with each input form element',
      tooltip: <TooltipButton text="In case a label can't be displayed, use aria-label instead."/>,
      name: 'inputLabels',
      value1: "InputLabels_Pass",
      id1: "InputLabels_Pass",
      for1: "InputLabels_Pass",
      label1: "Pass",
      value2: "InputLabels_Unsure",
      id2: "InputLabels_Unsure",
      for2: "InputLabels_Unsure",
      label2: "Unsure",
      value3: "InputLabels_Fail",
      id3: "InputLabels_Fail",
      for3: "InputLabels_Fail",
      label3: "Fail",
      value4: "InputLabels_NA",
      id4: "InputLabels_NA",
      for4: "InputLabels_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment: "Focus states: Input fields, buttons, and other interactive elements should have a focus style",
      tooltip: <TooltipButton text='This helps users who tab through fields to know where they are at a glance. If using bootstrap, these are included by default. Make sure they have not been overridden.'/>,
      name: 'focusStates',
      value1: "FocusStates_Pass",
      id1: "FocusStates_Pass",
      for1: "FocusStates_Pass",
      label1: "Pass",
      value2: "FocusStates_Unsure",
      id2: "FocusStates_Unsure",
      for2: "FocusStates_Unsure",
      label2: "Unsure",
      value3: "FocusStates_Fail",
      id3: "FocusStates_Fail",
      for3: "FocusStates_Fail",
      label3: "Fail",
      value4: "FocusStates_NA",
      id4: "FocusStates_NA",
      for4: "FocusStates_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment: "Tap targets: Items intended to be interacted with on mobile are at least 44x44px in size",
      tooltip: <TooltipButton text='iOS Human Interface Guidelines'/>,
      name: 'tapTargets',
      value1: "TapTargets_Pass",
      id1: "TapTargets_Pass",
      for1: "TapTargets_Pass",
      label1: "Pass",
      value2: "TapTargets_Unsure",
      id2: "TapTargets_Unsure",
      for2: "TapTargets_Unsure",
      label2: "Unsure",
      value3: "TapTargets_Fail",
      id3: "TapTargets_Fail",
      for3: "TapTargets_Fail",
      label3: "Fail",
      value4: "TapTargets_NA",
      id4: "TapTargets_NA",
      for4: "TapTargets_NA",
      label4: "N/A",
    },
    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment: "Skip Nav: If the page has navigation, an invisible skip nav should be placed at the top of the page",
      tooltip: <TooltipButton title='This should be built using CSS and only show on focus. <a href="https://www.w3.org/TR/WCAG20-TECHS/G1.html" target="_blank">W3 Documentation</a>'/>,
      name: 'skipnav',
      value1: "SkipNav_Pass",
      id1: "SkipNav_Pass",
      for1: "SkipNav_Pass",
      label1: "Pass",
      value2: "SkipNav_Unsure",
      id2: "SkipNav_Unsure",
      for2: "SkipNav_Unsure",
      label2: "Unsure",
      value3: "SkipNav_Fail",
      id3: "SkipNav_Fail",
      for3: "SkipNav_Fail",
      label3: "Fail",
      value4: "SkipNav_NA",
      id4: "SkipNav_NA",
      for4: "SkipNav_NA",
      label4: "N/A",
    },
    {
      showOnly:0,

      comment: "508 Check: If applicable, check the page against Section 508 standards",
      tooltip: <TooltipButton title='Using the <a href="https://www.ssa.gov/accessibility/andi/help/install.html" target="_blank">ANDI</a> browser extension can help you audit any 508 issues.'/>,
      name: 'section508Check',
      value1: "Section508Check_Pass",
      id1: "Section508Check_Pass",
      for1: "Section508Check_Pass",
      label1: "Pass",
      value2: "Section508Check_Unsure",
      id2: "Section508Check_Unsure",
      for2: "Section508Check_Unsure",
      label2: "Unsure",
      value3: "Section508Check_Fail",
      id3: "Section508Check_Fail",
      for3: "Section508Check_Fail",
      label3: "Fail",
      value4: "Section508Check_NA",
      id4: "Section508Check_NA",
      for4: "Section508Check_NA",
      label4: "N/A",
    },
    {
     showOnly:0,
      comment: <div dangerouslySetInnerHTML={{__html:comment1}} />,
      tooltip: '',
      name: 'fontAwesomeAria',
      value1: "FontAwesomeAria_Pass",
      id1: "FontAwesomeAria_Pass",
      for1: "FontAwesomeAria_Pass",
      label1: "Pass",
      value2: "FontAwesomeAria_Unsure",
      id2: "FontAwesomeAria_Unsure",
      for2: "FontAwesomeAria_Unsure",
      label2: "Unsure",
      value3: "FontAwesomeAria_Fail",
      id3: "FontAwesomeAria_Fail",
      for3: "FontAwesomeAria_Fail",
      label3: "Fail",
      value4: "FontAwesomeAria_NA",
      id4: "FontAwesomeAria_NA",
      for4: "FontAwesomeAria_NA",
      label4: "N/A",
    },



];

function AccessibilityRadioButtons(props) {


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

export default AccessibilityRadioButtons;
