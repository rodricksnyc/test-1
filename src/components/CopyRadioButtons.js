import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

const comment1 = `<sup>&trade;</sup> and <sup>&reg;</sup>: All trademark and registration symbols are using &trade; and &reg; syntax and superscripted`

var selectedButtons = [

    {
      comment:"H1-H6 Headings: Page includes H1-H3s as appropriate. There should only be one H1 and it should not be the title of the website",
      tooltip: <TooltipButton text='Do not overuse headings. In most cases, content editors will not need more than <h2> rank headings and the occasional <h3> rank. Only for exceptionally long or complex pages would <h5> and <h6> be necessary.'/>,
      name: 'headings',
      value1: "Headings_Pass",
      id1: "Headings_Pass",
      for1: "Headings_Pass",
      label1: "Pass",
      value2: "Headings_Unsure",
      id2: "Headings_Unsure",
      for2: "Headings_Unsure",
      label2: "Unsure",
      value3: "Headings_Fail",
      id3: "Headings_Fail",
      for3: "Headings_Fail",
      label3: "Fail",
      value4: "Headings_NA",
      id4: "Headings_NA",
      for4: "Headings_NA",
      label4: "N/A",
    },

    {
      comment: <div dangerouslySetInnerHTML={{__html:comment1}} />,
      tooltip: '',
      name: 'superscript',
      value1: "Superscript_Pass",
      id1: "Superscript_Pass",
      for1: "Superscript_Pass",
      label1: "Pass",
      value2: "Superscript_Unsure",
      id2: "Superscript_Unsure",
      for2: "Superscript_Unsure",
      label2: "Unsure",
      value3: "Superscript_Fail",
      id3: "Superscript_Fail",
      for3: "Superscript_Fail",
      label3: "Fail",
      value4: "Superscript_NA",
      id4: "Superscript_NA",
      for4: "Superscript_NA",
      label4: "N/A",
    },

    {
      comment:'Word breaks Brand names and other key terminology should use &nbsp; to prevent unwanted breaks',
      tooltip: <TooltipButton text="There's also a non-breaking hyphen: &#8209;"/>,
      name: 'non-breaking',
      value1: "Non-breaking_Pass",
      id1: "Non-breaking_Pass",
      for1: "Non-breaking_Pass",
      label1: "Pass",
      value2: "Non-breaking_Unsure",
      id2: "Non-breaking_Unsure",
      for2: "Non-breaking_Unsure",
      label2: "Unsure",
      value3: "Non-breaking_Fail",
      id3: "Non-breaking_Fail",
      for3: "Non-breaking_Fail",
      label3: "Fail",
      value4: "Non-breaking_NA",
      id4: "Non-breaking_NA",
      for4: "Non-breaking_NA",
      label4: "N/A",
    },

    {
      comment: 'Remove placeholders: All placeholder text such as "Lorem ipsum" has been removed and replaced with actual client-approved content.',
      tooltip: '',
      name: 'loremipsum',
      value1: "Loremipsum_Pass",
      id1: "Loremipsum_Pass",
      for1: "Loremipsum_Pass",
      label1: "Pass",
      value2: "Loremipsum_Unsure",
      id2: "Loremipsum_Unsure",
      for2: "Loremipsum_Unsure",
      label2: "Unsure",
      value3: "Loremipsum_Fail",
      id3: "Loremipsum_Fail",
      for3: "Loremipsum_Fail",
      label3: "Fail",
      value4: "Loremipsum_NA",
      id4: "Loremipsum_NA",
      for4: "Loremipsum_NA",
      label4: "N/A",
    },




];

function CopyRadioButtons(props) {


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

export default CopyRadioButtons;
