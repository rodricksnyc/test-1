import React, { useState, useRef } from 'react';

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

import Accordions from "./Accordions";

var selectedButtons = [

    {
      comment:"Mega-menu: Hover states are working as intended",
      tooltip: '',
      name: 'hover',
      value1: "Hover_Pass",
      id1: "Hover_Pass",
      for1: "Hover_Pass",
      label1: "Pass",
      value2: "Hover_Unsure",
      id2: "Hover_Unsure",
      for2: "Hover_Unsure",
      label2: "Unsure",
      value3: "Hover_Fail",
      id3: "Hover_Fail",
      for3: "Hover_Fail",
      label3: "Fail",
      value4: "Hover_NA",
      id4: "Hover_NA",
      for4: "Hover_NA",
      label4: "N/A",
    },

    {

      comment:'Breadcrumbs: Are populated correctly.',
      tooltip: '',
      name: 'breadcrumbs',
      value1: "Breadcrumbs_Pass",
      id1: "Breadcrumbs_Pass",
      for1: "Breadcrumbs_Pass",
      label1: "Pass",
      value2: "Breadcrumbs_Unsure",
      id2: "Breadcrumbs_Unsure",
      for2: "Breadcrumbs_Unsure",
      label2: "Unsure",
      value3: "Breadcrumbs_Fail",
      id3: "Breadcrumbs_Fail",
      for3: "Breadcrumbs_Fail",
      label3: "Fail",
      value4: "Breadcrumbs_NA",
      id4: "Breadcrumbs_NA",
      for4: "Breadcrumbs_NA",
      label4: "N/A",
    },

    {

      comment:'In-page navigation: Meets style guide specifications and sticks if needed.',
      tooltip: '',
      name: 'navigation',
      value1: "Navigation_Pass",
      id1: "Navigation_Pass",
      for1: "Navigation_Pass",
      label1: "Pass",
      value2: "Navigation_Unsure",
      id2: "Navigation_Unsure",
      for2: "Navigation_Unsure",
      label2: "Unsure",
      value3: "Navigation_Fail",
      id3: "Navigation_Fail",
      for3: "Navigation_Fail",
      label3: "Fail",
      value4: "Navigation_NA",
      id4: "Navigation_NA",
      for4: "Navigation_NA",
      label4: "N/A",
    },



];

function NavigationRadioButtons(props) {
  const [isVisible, setIsVisible] = useState(true);

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

export default NavigationRadioButtons;
