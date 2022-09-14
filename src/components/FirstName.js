
import ReactDOM from "react-dom";
import React, { useRef, useState, setState } from "react";

import { db } from  "./Firebase";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

function FirstName() {


      const handleSubmit = (event) => {
        event.preventDefault();

        const elementsArray = [...event.target.elements]

        console.log(elementsArray)

        const formData = elementsArray.reduce((accumulator, currentValue) =>{
            if (currentValue.id){
              accumulator[currentValue.id] = currentValue.value
            }

            return accumulator;

        }, {})

         db.collection("project-name").add(formData);

      };


return (

  <Form.Group controlId="projectData">
     <Form.Label>ADVANTAGE ASSIGNMENT</Form.Label>
     <Form.Control/>
 </Form.Group>




)


}

export default FirstName;
