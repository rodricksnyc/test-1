import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


var selectedButtons = [

    {

      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:"Console: Console is clear of errors",
      tooltip: <TooltipButton text="Some errors that are due to running on localhost or staging can be ignored if the root cause is known."/>,
      name: 'console',
      value1: "Console_Pass",
      id1: "Console_Pass",
      for1: "Console_Pass",
      label1: "Pass",
      value2: "Console_Unsure",
      id2: "Console_Unsure",
      for2: "Console_Unsure",
      label2: "Unsure",
      value3: "Console_Fail",
      id3: "Console_Fail",
      for3: "Console_Fail",
      label3: "Fail",
      value4: "Console_NA",
      id4: "Console_NA",
      for4: "Console_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:'Legal year: Year is up to date and automatically populated by JavaScript',
      tooltip: <TooltipButton text='<script type="text/javascript">document.write(new Date().getFullYear());</script>'/>,
      name: 'legalYear',
      value1: "LegalYear_Pass",
      id1: "LegalYear_Pass",
      for1: "LegalYear_Pass",
      label1: "Pass",
      value2: "LegalYear_Unsure",
      id2: "LegalYear_Unsure",
      for2: "LegalYear_Unsure",
      label2: "Unsure",
      value3: "LegalYear_Fail",
      id3: "LegalYear_Fail",
      for3: "LegalYear_Fail",
      label3: "Fail",
      value4: "LegalYear_NA",
      id4: "LegalYear_NA",
      for4: "LegalYear_NA",
      label4: "N/A",
    },

    {
      showOnly:0,
      showOnly1:1,
      showOnly2:2,
      showOnly3:3,
      comment:"ID Attributes: Verify that each ID on the page is unique and that all interactive elements have ID's associated with them to more easily facilitate measurement",
      tooltip: <TooltipButton title='Using the <a href="https://www.ssa.gov/accessibility/andi/help/install.html" target="_blank">ANDI</a> browser extension can help you audit any 508 issues.'/>,
      name: 'idAttributes',
      value1: "IDAttributes_Pass",
      id1: "IDAttributes_Pass",
      for1: "IDAttributes_Pass",
      label1: "Pass",
      value2: "IDAttributes_Unsure",
      id2: "IDAttributes_Unsure",
      for2: "IDAttributes_Unsure",
      label2: "Unsure",
      value3: "IDAttributes_Fail",
      id3: "IDAttributes_Fail",
      for3: "IDAttributes_Fail",
      label3: "Fail",
      value4: "IDAttributes_NA",
      id4: "IDAttributes_NA",
      for4: "IDAttributes_NA",
      label4: "N/A",
    },

    {

      showOnly2:2,

      comment:'Check "Discourage search engines": In the WordPress dashboard, under Settings > Reading uncheck the box that says "Discourage search engines from indexing this site',

      name: 'idAttributes',
      value1: "IDAttributes_Pass",
      id1: "IDAttributes_Pass",
      for1: "IDAttributes_Pass",
      label1: "Pass",
      value2: "IDAttributes_Unsure",
      id2: "IDAttributes_Unsure",
      for2: "IDAttributes_Unsure",
      label2: "Unsure",
      value3: "IDAttributes_Fail",
      id3: "IDAttributes_Fail",
      for3: "IDAttributes_Fail",
      label3: "Fail",
      value4: "IDAttributes_NA",
      id4: "IDAttributes_NA",
      for4: "IDAttributes_NA",
      label4: "N/A",
    },

    {

      showOnly2:2,

      comment:"Check Plugins: All actively used plugins are up to date. Any unused plugins are deactivated or uninstalled",

      name: 'idAttributes',
      value1: "IDAttributes_Pass",
      id1: "IDAttributes_Pass",
      for1: "IDAttributes_Pass",
      label1: "Pass",
      value2: "IDAttributes_Unsure",
      id2: "IDAttributes_Unsure",
      for2: "IDAttributes_Unsure",
      label2: "Unsure",
      value3: "IDAttributes_Fail",
      id3: "IDAttributes_Fail",
      for3: "IDAttributes_Fail",
      label3: "Fail",
      value4: "IDAttributes_NA",
      id4: "IDAttributes_NA",
      for4: "IDAttributes_NA",
      label4: "N/A",
    },




];

function TechnicalRadioButtons(props) {


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

export default TechnicalRadioButtons;
