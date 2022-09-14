import React from "react";
import UserExperienceRadioButtons from "./UserExperienceRadioButtons";
import TooltipButton from "./TooltipButton";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



const UserExperience = (props) => {
  return (


    <Row>
    <Col xs={12} md={12}>

    <div className="survey-wrapper el-S">

    <div className="ques-wrapper radiobuttons">

    <fieldset>
    <legend>

    </legend>


    <Table role="presentation" className="mx">
    <thead>
    <tr>
    <td className=""></td>
    <td width="100"><i className="fas fa-circle" style={{color: '#02fa49'}}></i> Pass</td>
    <td width="100"><i className="fas fa-circle" style={{color: '#f7ea94'}}></i> Unsure</td>
    <td width="100"><i className="fas fa-circle" style={{color: '#f50505'}}></i> Fail</td>
    <td width="100"><i className="fas fa-circle" style={{color: '#adadad'}}></i> N/A</td>

    </tr>
    </thead>
    <tbody>
    <UserExperienceRadioButtons eventKey={props.eventKey}/>

    </tbody>
    </Table>

    </fieldset>


    </div>


    </div>


    </Col>

    </Row>


  );
};

export default UserExperience;
