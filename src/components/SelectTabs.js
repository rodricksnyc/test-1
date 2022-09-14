import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


import Accordions from "./Accordions";

function SelectTabs() {
  const [key, setKey] = useState(0);



  return (

    <Tabs
    defaultActiveKey={0}
    activeKey={key}

    onSelect={(key) => setKey(key)}
    className="mb-5">
    <Tab eventKey={0} title="GENERIC" value="Generic">

    <Accordions eventKey={0}/>


    </Tab>
    <Tab eventKey={1} title="SYNGENTA" value="Syngenta">

      <Accordions eventKey={1}/>

    </Tab>

    <Tab eventKey={2} title="WORDPRESS" value="Wordpress">
    <Accordions eventKey={2}/>
    </Tab>
    <Tab eventKey={3} title="MARKETING CLOUD" value="MC">
      <Accordions eventKey={3}/>
    </Tab>
    </Tabs>


  );
}

export default SelectTabs;
