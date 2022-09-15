import React, { useState, useRef } from 'react';

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



var selectedButtons = [

    {

      comment:"SEO review: Align with DE lead to ensure all SEO components have been considered",
      tooltip: <TooltipButton title="See <a target='_blank' href='https://gibbssoellinc.sharepoint.com/:x:/r/sites/PMPCTown/_layouts/15/Doc.aspx?sourcedoc=%7B77E83676-290F-4C05-AB0C-A7884E218359%7D&file=Account_Delegations_2021.xlsx&action=default&mobileredirect=true'>Account Delegations spreadsheet</a> to confirm who the DE lead is."/>,
      name: 'seoReview',
      value1: "SEOReview_Pass",
      id1: "SEOReview_Pass",
      for1: "SEOReview_Pass",
      label1: "Pass",
      value2: "SEOReview_Unsure",
      id2: "SEOReview_Unsure",
      for2: "SEOReview_Unsure",
      label2: "Unsure",
      value3: "SEOReview_Fail",
      id3: "SEOReview_Fail",
      for3: "SEOReview_Fail",
      label3: "Fail",
      value4: "SEOReview_NA",
      id4: "SEOReview_NA",
      for4: "SEOReview_NA",
      label4: "N/A",
    },

    {

      comment:'Verify design: Compare rendered page against Creative wireframes. Note/remind Creative of deviations',
      tooltip: '',
      name: 'verifyDesign',
      value1: "VerifyDesign_Pass",
      id1: "VerifyDesign_Pass",
      for1: "VerifyDesign_Pass",
      label1: "Pass",
      value2: "VerifyDesign_Unsure",
      id2: "VerifyDesign_Unsure",
      for2: "VerifyDesign_Unsure",
      label2: "Unsure",
      value3: "VerifyDesign_Fail",
      id3: "VerifyDesign_Fail",
      for3: "VerifyDesign_Fail",
      label3: "Fail",
      value4: "VerifyDesign_NA",
      id4: "VerifyDesign_NA",
      for4: "VerifyDesign_NA",
      label4: "N/A",
    },

    {

      comment:'Pipelines passed: Ensure that all pipeline steps completed successfully',
      name: 'pipelinePassed',
      value1: "pipelinePassed_Pass",
      id1: "pipelinePassed_Pass",
      for1: "pipelinePassed_Pass",
      label1: "Pass",
      value2: "pipelinePassed_Unsure",
      id2: "pipelinePassed_Unsure",
      for2: "pipelinePassed_Unsure",
      label2: "Unsure",
      value3: "pipelinePassed_Fail",
      id3: "pipelinePassed_Fail",
      for3: "pipelinePassed_Fail",
      label3: "Fail",
      value4: "pipelinePassed_NA",
      id4: "pipelinePassed_NA",
      for4: "pipelinePassed_NA",
      label4: "N/A",
    },

    {

      comment:'Resolve URL: Resolve URL syntax used for asset/page links where applicable',
      tooltip: <TooltipButton text="<%=ResolveUrl('path/to/file.css') %>"/>,
      name: 'resolveURL',
      value1: "resolveURL_Pass",
      id1: "resolveURL_Pass",
      for1: "resolveURL_Pass",
      label1: "Pass",
      value2: "resolveURL_Unsure",
      id2: "resolveURL_Unsure",
      for2: "resolveURL_Unsure",
      label2: "Unsure",
      value3: "resolveURL_Fail",
      id3: "resolveURL_Fail",
      for3: "resolveURL_Fail",
      label3: "Fail",
      value4: "resolveURL_NA",
      id4: "resolveURL_NA",
      for4: "resolveURL_NA",
      label4: "N/A",
    },



];

function WEORadioButtons({radioValues, setRadioValues, eventKey}) {

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

  // console.log(radioValues);

var buttons = [];



const filteredSelectedButtons = selectedButtons.filter((button) => {
  if (eventKey === "generic" || eventKey === "wordpress" || eventKey === "marketingCloud") {
    if (
      button.name !== "resolveURL" &&
      button.name !== "pipelinePassed"

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

export default WEORadioButtons;
