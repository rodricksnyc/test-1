import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


import Accordions from "./Accordions";

function SelectTabs({setRadioValues, radioValues}) {
  const [key, setKey] = useState("generic");

  return (
    <Tabs
      defaultActiveKey={key}
      onSelect={(key) => setKey(key)}
      className="mb-5">
      <Tab eventKey="generic" title="GENERIC" value="Generic">
        <Accordions eventKey={key}
        setRadioValues={setRadioValues}
        radioValues={radioValues} />
      </Tab>
      <Tab eventKey="syngenta" title="SYNGENTA" value="Syngenta">
        <Accordions eventKey={key}
        setRadioValues={setRadioValues}
        radioValues={radioValues} />
      </Tab>
      <Tab eventKey="wordpress" title="WORDPRESS" value="Wordpress">
        <Accordions eventKey={key}
        setRadioValues={setRadioValues}
        radioValues={radioValues} />
      </Tab>
      <Tab eventKey="marketingCloud" title="MARKETING CLOUD" value="MC">
        <Accordions eventKey={key}
        setRadioValues={setRadioValues}
        radioValues={radioValues} />
      </Tab>
    </Tabs>
  );
}

export default SelectTabs;
