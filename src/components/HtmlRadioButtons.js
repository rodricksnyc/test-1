import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


var selectedButtons = [

    {
      comment:"Link check: All internal and external links are working as intended with no errors (e.g. 404's and 503's)",
      tooltip: <TooltipButton title='Can be easily tested with a browser extension such as <a href="https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf?hl=en" target="_blank">Check My Links for Chrome</a>, or using a tool such as Screaming Frog.'/>,
      name: 'link',
      value1: "Link_Pass",
      id1: "Link_Pass",
      for1: "Link_Pass",
      label1: "Pass",
      value2: "Link_Unsure",
      id2: "Link_Unsure",
      for2: "Link_Unsure",
      label2: "Unsure",
      value3: "Link_Fail",
      id3: "Link_Fail",
      for3: "Link_Fail",
      label3: "Fail",
      value4: "Link_NA",
      id4: "Link_NA",
      for4: "Link_NA",
      label4: "N/A",
    },

    {
      comment:'Link targets: All external links should open in a new tab',
      tooltip: <TooltipButton text='Internal links should not unless there is a specific business reason.'/>,
      name: 'targets',
      value1: "Targets_Pass",
      id1: "Targets_Pass",
      for1: "Targets_Pass",
      label1: "Pass",
      value2: "Targets_Unsure",
      id2: "Targets_Unsure",
      for2: "Targets_Unsure",
      label2: "Unsure",
      value3: "Targets_Fail",
      id3: "Targets_Fail",
      for3: "Targets_Fail",
      label3: "Fail",
      value4: "Targets_NA",
      id4: "Targets_NA",
      for4: "Targets_NA",
      label4: "N/A",
    },

    {
      comment:'Comments: Unnecessary code has been removed and any complicated functions are documented',
      tooltip: <TooltipButton text='Keep your code tidy and easily readable for the next person who has to touch this page!'/>,
      name: 'comments',
      value1: "Comments_Pass",
      id1: "Comments_Pass",
      for1: "Comments_Pass",
      label1: "Pass",
      value2: "Comments_Unsure",
      id2: "Comments_Unsure",
      for2: "Comments_Unsure",
      label2: "Unsure",
      value3: "Comments_Fail",
      id3: "Comments_Fail",
      for3: "Comments_Fail",
      label3: "Fail",
      value4: "Comments_NA",
      id4: "Comments_NA",
      for4: "Comments_NA",
      label4: "N/A",
    },

    {
      comment: 'Adblock test: Content renders correctly with adblockers enabled',
      tooltip: <TooltipButton text="uBlock Origin and AdBlock are the most common"/>,
      name: 'adblock',
      value1: "Adblock_Pass",
      id1: "Adblock_Pass",
      for1: "Adblock_Pass",
      label1: "Pass",
      value2: "Adblock_Unsure",
      id2: "Adblock_Unsure",
      for2: "Adblock_Unsure",
      label2: "Unsure",
      value3: "Adblock_Fail",
      id3: "Adblock_Fail",
      for3: "Adblock_Fail",
      label3: "Fail",
      value4: "Adblock_NA",
      id4: "Adblock_NA",
      for4: "Adblock_NA",
      label4: "N/A",
    },




];

function HtmlRadioButtons(props) {


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

export default HtmlRadioButtons;
