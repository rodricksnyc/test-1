import React, { useState, useRef } from 'react';

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


const word = '<title>';
const myHTML1 = `<!doctype html>`;
const myHTML2 = `<meta charset="utf-8">`;
const myHTML3 = `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">`;
const myHTML4 = `<link rel="icon" type="image/png" href="https://example.com/favicon.png">`;
const myHTML5 = `<link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html">`;
const myHTML6 = `<meta property="og:title" content="Lorem Ipsum Dolor">`
const myHTML7 = `<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,700&display=swap" rel="stylesheet" />`

const comment1 = `Title: Page includes a <span class="highlight pink">&#x3c;title&#x3e;</span> tag that is ≤60 characters, relevant to the content of the page, and follows standard naming conventions`

var selectedButtons = [

    {
      comment:'Doctype: The doctype is HTML5 and is at the top of all pages',
      tooltip: <TooltipButton text={myHTML1}/>,
      name: 'doctype',
      value1: "Doctype_Pass",
      id1: "Doctype_Pass",
      for1: "Doctype_Pass",
      label1: "Pass",
      value2: "Doctype_Unsure",
      id2: "Doctype_Unsure",
      for2: "Doctype_Unsure",
      label2: "Unsure",
      value3: "Doctype_Fail",
      id3: "Doctype_Fail",
      for3: "Doctype_Fail",
      label3: "Fail",
      value4: "Doctype_NA",
      id4: "Doctype_NA",
      for4: "Doctype_NA",
      label4: "N/A",
    },

    {
      comment:'Charset: The charset is UTF-8 and is at the top of all pages',
      tooltip: <TooltipButton text={myHTML2}/>,
      name: 'charset',
      value1: "Charset_Pass",
      id1: "Charset_Pass",
      for1: "Charset_Pass",
      label1: "Pass",
      value2: "Charset_Unsure",
      id2: "Charset_Unsure",
      for2: "Charset_Unsure",
      label2: "Unsure",
      value3: "Charset_Fail",
      id3: "Charset_Fail",
      for3: "Charset_Fail",
      label3: "Fail",
      value4: "Charset_NA",
      id4: "Charset_NA",
      for4: "Charset_NA",
      label4: "N/A",
    },

    {
      comment:'Viewport: The viewport is declared properly at the top of all pages',
      tooltip: <TooltipButton text={myHTML3}/>,
      name: 'viewport',
      value1: "Viewport_Pass",
      id1: "Viewport_Pass",
      for1: "Viewport_Pass",
      label1: "Pass",
      value2: "Viewport_Unsure",
      id2: "Viewport_Unsure",
      for2: "Viewport_Unsure",
      label2: "Unsure",
      value3: "Viewport_Fail",
      id3: "Viewport_Fail",
      for3: "Viewport_Fail",
      label3: "Fail",
      value4: "Viewport_NA",
      id4: "Viewport_NA",
      for4: "Viewport_NA",
      label4: "N/A",
    },

    {
      comment: <div dangerouslySetInnerHTML={{__html:comment1}} />,
      tooltip: <TooltipButton text="For example: Syngenta US and Thrive have different suffixes."/>,
      name: 'title',
      value1: "Title_Pass",
      id1: "Title_Pass",
      for1: "Title_Pass",
      label1: "Pass",
      value2: "Title_Unsure",
      id2: "Title_Unsure",
      for2: "Title_Unsure",
      label2: "Unsure",
      value3: "Title_Fail",
      id3: "Title_Fail",
      for3: "Title_Fail",
      label3: "Fail",
      value4: "Title_NA",
      id4: "Title_NA",
      for4: "Title_NA",
      label4: "N/A",
    },

    {
      comment: "Description: A meta description is provided, it is unique, and doesn't contain more than 160 characters",
      tooltip: <TooltipButton text="Each item should have four checkboxes indicating if they pass, need attention, fail, or are not applicable."/>,
      name: 'description',
      value1: "Description_Pass",
      id1: "Description_Pass",
      for1: "Description_Pass",
      label1: "Pass",
      value2: "Description_Unsure",
      id2: "Description_Unsure",
      for2: "Description_Unsure",
      label2: "Unsure",
      value3: "Description_Fail",
      id3: "Description_Fail",
      for3: "Description_Fail",
      label3: "Fail",
      value4: "Description_NA",
      id4: "Description_NA",
      for4: "Description_NA",
      label4: "N/A",
    },

    {
      comment: "Google Tag Manager: Script is included",
      tooltip: <TooltipButton text="Contact MCE if you need this snippet provided."/>,
      name: 'gtm',
      value1: "GTM_Pass",
      id1: "GTM_Pass",
      for1: "GTM_Pass",
      label1: "Pass",
      value2: "GTM_Unsure",
      id2: "GTM_Unsure",
      for2: "GTM_Unsure",
      label2: "Unsure",
      value3: "GTM_Fail",
      id3: "GTM_Fail",
      for3: "GTM_Fail",
      label3: "Fail",
      value4: "GTM_NA",
      id4: "GTM_NA",
      for4: "GTM_NA",
      label4: "N/A",
    },
    {
      showOnly:3,
      comment: "BugHerd: Script has been added or removed as needed",
      tooltip: <TooltipButton text="Contact your Project Manager if you need this snippet provided."/>,
      name: 'bugherd',
      value1: "BugHerd_Pass",
      id1: "BugHerd_Pass",
      for1: "BugHerd_Pass",
      label1: "Pass",
      value2: "BugHerd_Unsure",
      id2: "BugHerd_Unsure",
      for2: "BugHerd_Unsure",
      label2: "Unsure",
      value3: "BugHerd_Fail",
      id3: "BugHerd_Fail",
      for3: "BugHerd_Fail",
      label3: "Fail",
      value4: "BugHerd_NA",
      id4: "BugHerd_NA",
      for4: "BugHerd_NA",
      label4: "N/A",
    },
    {
      showOnly:3,
      comment: "Favicon: A favicon has been created and displays correctly",
      tooltip: <TooltipButton text={myHTML4}/>,
      name: 'favicon',
      value1: "Favicon_Pass",
      id1: "Favicon_Pass",
      for1: "Favicon_Pass",
      label1: "Pass",
      value2: "Favicon_Unsure",
      id2: "Favicon_Unsure",
      for2: "Favicon_Unsure",
      label2: "Unsure",
      value3: "Favicon_Fail",
      id3: "Favicon_Fail",
      for3: "Favicon_Fail",
      label3: "Fail",
      value4: "Favicon_NA",
      id4: "Favicon_NA",
      for4: "Favicon_NA",
      label4: "N/A",
    },
    {
      showOnly:3,
      comment: "Canonical: A canonical URL is specified if applicable",
      tooltip: <TooltipButton text={myHTML5}/>,
      name: 'canonical',
      value1: "Canonical_Pass",
      id1: "Canonical_Pass",
      for1: "Canonical_Pass",
      label1: "Pass",
      value2: "Canonical_Unsure",
      id2: "Canonical_Unsure",
      for2: "Canonical_Unsure",
      label2: "Unsure",
      value3: "Canonical_Fail",
      id3: "Canonical_Fail",
      for3: "Canonical_Fail",
      label3: "Fail",
      value4: "Canonical_NA",
      id4: "Canonical_NA",
      for4: "Canonical_NA",
      label4: "N/A",
    },
    {
    comment: "CSS order: All CSS files are loaded before any JavaScript files in the head",
    tooltip: <TooltipButton text="For reasons."/>,
    name: 'css',
    value1: "CSS_Pass",
    id1: "CSS_Pass",
    for1: "CSS_Pass",
    label1: "Pass",
    value2: "CSS_Unsure",
    id2: "CSS_Unsure",
    for2: "CSS_Unsure",
    label2: "Unsure",
    value3: "CSS_Fail",
    id3: "CSS_Fail",
    for3: "CSS_Fail",
    label3: "Fail",
    value4: "CSS_NA",
    id4: "CSS_NA",
    for4: "CSS_NA",
    label4: "N/A",
  },
  {
  showOnly:3,
  comment: "Facebook Open Graph: Basic tags are included and populated",
  tooltip: <TooltipButton text={myHTML6}/>,
  name: 'fb',
  value1: "FB_Pass",
  id1: "FB_Pass",
  for1: "FB_Pass",
  label1: "Pass",
  value2: "FB_Unsure",
  id2: "FB_Unsure",
  for2: "FB_Unsure",
  label2: "Unsure",
  value3: "FB_Fail",
  id3: "FB_Fail",
  for3: "FB_Fail",
  label3: "Fail",
  value4: "FB_NA",
  id4: "FB_NA",
  for4: "FB_NA",
  label4: "N/A",
  },
  {
  comment: "Google Font Swap: Any Google Font loaded in should have the display=swap attribute",
  tooltip: <TooltipButton text={myHTML7}/>,
  name: 'font',
  value1: "Font_Pass",
  id1: "Font_Pass",
  for1: "Font_Pass",
  label1: "Pass",
  value2: "Font_Unsure",
  id2: "Font_Unsure",
  for2: "Font_Unsure",
  label2: "Unsure",
  value3: "Font_Fail",
  id3: "Font_Fail",
  for3: "Font_Fail",
  label3: "Fail",
  value4: "Font_NA",
  id4: "Font_NA",
  for4: "Font_NA",
  label4: "N/A",
},
{
comment: "Types specified: CSS should be tagged as rel='stylesheet' or text/stylesheet and JavaScript with type/javascript",
tooltip: <TooltipButton text='It helps.' />,
name: 'types',
value1: "Types_Pass",
id1: "Types_Pass",
for1: "Types_Pass",
label1: "Pass",
value2: "Types_Unsure",
id2: "Types_Unsure",
for2: "Types_Unsure",
label2: "Unsure",
value3: "Types_Fail",
id3: "Types_Fail",
for3: "Types_Fail",
label3: "Fail",
value4: "Types_NA",
id4: "Types_NA",
for4: "Types_NA",
label4: "N/A",
},


];

function HeadRadioButtons({saveTodo, eventKey}) {


  const [input, setInput] = useState("");



var buttons = [];


selectedButtons.forEach(function(selectedButton, i){

  if(selectedButton.showOnly === eventKey) {
     return false;


  }

  else {

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

        onChange={(e) => setInput(e)}
         />
        <label className="form-check-label" htmlFor={selectedButton.for1}>{selectedButton.label1}</label>
      </td>

      <td className="form-check">
        <input type="radio" className="form-check-input"
        name={selectedButton.name}
        value={selectedButton.value2}
        id={selectedButton.id2}

        onChange={(e) => setInput(e)}
        />
        <label className="form-check-label" htmlFor={selectedButton.for2}>{selectedButton.label2}</label>
      </td>

      <td className="form-check">
        <input type="radio" className="form-check-input"
        name={selectedButton.name}
        value={selectedButton.value3}
        id={selectedButton.id3}

        onChange={(e) => setInput(e)} />
        <label className="form-check-label" htmlFor={selectedButton.for3}>{selectedButton.label3}</label>
      </td>


      <td className="form-check">
        <input type="radio" className="form-check-input"
        name={selectedButton.name}
        value={selectedButton.value4}
        id={selectedButton.id4}
        onChange={(e) => setInput(e)} />
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

export default HeadRadioButtons;
