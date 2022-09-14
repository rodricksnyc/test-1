import React, { useState } from "react";
import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


const Demo = () => {



    const [item, setItem] = useState({ kindOfStand: "", another: "another" });

    const { kindOfStand } = item;

    const handleChange = e => {
      e.persist();
      console.log(e.target.value);

      setItem(prevState => ({
        ...prevState,
        kindOfStand: e.target.value
      }));
    };



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

  <Form.Group controlId="kindOfStand">


  <tr className="mx-row">
  <td align="top" className="mx-question">

  <p className="prompt gray">eifubiwebifbiwbeibeibwib</p>




  </td>
        <td className="form-check">
          <Form.Check className="form-check-input"
            value="design"
            type="radio"
            aria-label="radio 1"
            label="Design"
            onChange={handleChange}
            checked={kindOfStand === "design"}
          />
      </td>
      <td className="form-check">
        <Form.Check className="form-check-input"
            value="food"
            type="radio"
            aria-label="radio 2"
            label="Food"
            onChange={handleChange}
            checked={kindOfStand === "food"}
          />
    </td>
          <td className="form-check">
            <Form.Check className="form-check-input"
            value="yes"
            type="radio"
            aria-label="radio 3"
            label="yes"
            onChange={handleChange}
            checked={kindOfStand === "yes"}
          />
              </td>
          <td className="form-check">
            <Form.Check className="form-check-input"
            value="thing"
            type="radio"
            aria-label="radio 4"
            label="Thing"
            onChange={handleChange}
            checked={kindOfStand === "thing"}
          />
              </td>

              </tr>
        </Form.Group>

        </tbody>
        </Table>

        </fieldset>


        </div>


        </div>


        </Col>

        </Row>

    );





}


export default Demo;
