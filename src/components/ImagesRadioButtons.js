import React from "react";

import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

const comment1 = `Lazy loading: Images below the fold have the <span class="highlight pink">loading="lazy"</span> attribute`

var selectedButtons = [

    {
      comment:'RGB: All images are using the RGB color space',
      tooltip: <TooltipButton text='A logo using the CMYK color space will render incorrectly and violate brand guidelines.'/>,
      name: 'rgb',
      value1: "RGB_Pass",
      id1: "RGB_Pass",
      for1: "RGB_Pass",
      label1: "Pass",
      value2: "RGB_Unsure",
      id2: "RGB_Unsure",
      for2: "RGB_Unsure",
      label2: "Unsure",
      value3: "RGB_Fail",
      id3: "RGB_Fail",
      for3: "RGB_Fail",
      label3: "Fail",
      value4: "RGB_NA",
      id4: "RGB_NA",
      for4: "RGB_NA",
      label4: "N/A",
    },

    {
      comment:'Sized properly: Images have been resized down to something reasonable for where they are being used',
      tooltip: <TooltipButton text='No 1920x1080 images being used as thumbnails. Generally speaking body images should not exceed 750px in any dimension unless there is a specific design reason. Hero images should not exceed 1500px wide. Background images will vary based on page layout.'/>,
      name: 'size',
      value1: "Size_Pass",
      id1: "Size_Pass",
      for1: "Size_Pass",
      label1: "Pass",
      value2: "Size_Unsure",
      id2: "Size_Unsure",
      for2: "Size_Unsure",
      label2: "Unsure",
      value3: "Size_Fail",
      id3: "Size_Fail",
      for3: "Size_Fail",
      label3: "Fail",
      value4: "Size_NA",
      id4: "Size_NA",
      for4: "Size_NA",
      label4: "N/A",
    },

    {
      comment:'Bootstrap helper classes: On sites where Bootstrap 3 is used, apply the img-responsive class to images. On sites where Bootstrap 4 is used, apply the img-fluid class to images.',
      tooltip: <TooltipButton text='No 1920x1080 images being used as thumbnails. Generally speaking body images should not exceed 750px in any dimension unless there is a specific design reason. Hero images should not exceed 1500px wide. Background images will vary based on page layout.'/>,
      name: 'img-responsive',
      value1: "Img-responsive_Pass",
      id1: "Img-responsive_Pass",
      for1: "Img-responsive_Pass",
      label1: "Pass",
      value2: "Img-responsive_Unsure",
      id2: "Img-responsive_Unsure",
      for2: "Img-responsive_Unsure",
      label2: "Unsure",
      value3: "Img-responsive_Fail",
      id3: "Img-responsive_Fail",
      for3: "Img-responsive_Fail",
      label3: "Fail",
      value4: "Img-responsive_NA",
      id4: "Img-responsive_NA",
      for4: "Img-responsive_NA",
      label4: "N/A",
    },

    {
      comment: <div dangerouslySetInnerHTML={{__html:comment1}} />,
      tooltip: '',
      name: 'lazy',
      value1: "Lazy_Pass",
      id1: "Lazy_Pass",
      for1: "Lazy_Pass",
      label1: "Pass",
      value2: "Lazy_Unsure",
      id2: "Lazy_Unsure",
      for2: "Lazy_Unsure",
      label2: "Unsure",
      value3: "Lazy_Fail",
      id3: "Lazy_Fail",
      for3: "Lazy_Fail",
      label3: "Fail",
      value4: "Lazy_NA",
      id4: "Lazy_NA",
      for4: "Lazy_NA",
      label4: "N/A",
    },

    {
      comment: "Optimization: All images have been run through an optimization tool",
      tooltip: <TooltipButton title='<a href="https://kraken.io/web-interface" target="_blank">Kraken</a> (Web), <a href="https://imageoptim.com/mac" target="_blank">ImageOptim</a> (macOS), or <A href="https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer" target="_blank">FileOptimizer</a> (Windows)'/>,
      name: 'optimization',
      value1: "Optimization_Pass",
      id1: "Optimization_Pass",
      for1: "Optimization_Pass",
      label1: "Pass",
      value2: "Optimization_Unsure",
      id2: "Optimization_Unsure",
      for2: "Optimization_Unsure",
      label2: "Unsure",
      value3: "Optimization_Fail",
      id3: "Optimization_Fail",
      for3: "Optimization_Fail",
      label3: "Fail",
      value4: "Optimization_NA",
      id4: "Optimization_NA",
      for4: "Optimization_NA",
      label4: "N/A",
    },

    {
      comment: "ALT text: All non-decorative images have alt text which describes the image visually",
      tooltip: <TooltipButton title='<a href="https://blog.hubspot.com/marketing/image-alt-text" target="_blank">Hubspot reference</a>. For images that are purely decorative, include the alt attribute but do not include anything between the quotes. Do not start with "Image of", "Photo of", etc. Do not try to cram in SEO keywords. Do not use it for citations, such as the photographer. Keep it concise.'/>,
      name: 'alt',
      value1: "Alt_Pass",
      id1: "Alt_Pass",
      for1: "Alt_Pass",
      label1: "Pass",
      value2: "Alt_Unsure",
      id2: "Alt_Unsure",
      for2: "Alt_Unsure",
      label2: "Unsure",
      value3: "Alt_Fail",
      id3: "Alt_Fail",
      for3: "Alt_Fail",
      label3: "Fail",
      value4: "Alt_NA",
      id4: "Alt_NA",
      for4: "Alt_NA",
      label4: "N/A",
    },
    {
      comment: "Video captions: All videos have closed captioning",
      tooltip: <TooltipButton title='<a href="https://blog.hubspot.com/marketing/image-alt-text" target="_blank">Hubspot reference</a>. For images that are purely decorative, include the alt attribute but do not include anything between the quotes. Do not start with "Image of", "Photo of", etc. Do not try to cram in SEO keywords. Do not use it for citations, such as the photographer. Keep it concise.'/>,
      name: 'video',
      value1: "Video_Pass",
      id1: "Video_Pass",
      for1: "Video_Pass",
      label1: "Pass",
      value2: "Video_Unsure",
      id2: "Video_Unsure",
      for2: "Video_Unsure",
      label2: "Unsure",
      value3: "Video_Fail",
      id3: "Video_Fail",
      for3: "Video_Fail",
      label3: "Fail",
      value4: "Video_NA",
      id4: "Video_NA",
      for4: "Video_NA",
      label4: "N/A",
    },
    {
      comment: "SVG text: Any SVG's with text should have their text outlined",
      tooltip: <TooltipButton text='This ensures consistent rendering across different platforms.'/>,
      name: 'svg',
      value1: "SVG_Pass",
      id1: "SVG_Pass",
      for1: "SVG_Pass",
      label1: "Pass",
      value2: "SVG_Unsure",
      id2: "SVG_Unsure",
      for2: "SVG_Unsure",
      label2: "Unsure",
      value3: "SVG_Fail",
      id3: "SVG_Fail",
      for3: "SVG_Fail",
      label3: "Fail",
      value4: "SVG_NA",
      id4: "SVG_NA",
      for4: "SVG_NA",
      label4: "N/A",
    },
    {
      comment: "Remove placeholders: All placeholder/FPO images have been removed and replaced with actual client-approved images",
      tooltip: '',
      name: 'placeholders',
      value1: "Placeholders_Pass",
      id1: "Placeholders_Pass",
      for1: "Placeholders_Pass",
      label1: "Pass",
      value2: "Placeholders_Unsure",
      id2: "Placeholders_Unsure",
      for2: "Placeholders_Unsure",
      label2: "Unsure",
      value3: "Placeholders_Fail",
      id3: "Placeholders_Fail",
      for3: "Placeholders_Fail",
      label3: "Fail",
      value4: "Placeholders_NA",
      id4: "Placeholders_NA",
      for4: "Placeholders_NA",
      label4: "N/A",
    },



];

function ImagesRadioButtons(props) {


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

export default ImagesRadioButtons;
