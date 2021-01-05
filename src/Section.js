import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import Menu from './Menus';
import Home from'./Home';
import AddCourse from './AddCourse';
import Allcourse from './AllCourses';
import Contact from './ContactUs';

import { BrowserRouter as Router,Route } from 'react-router-dom';
const Section=()=>{
    return(
        <Router>
       <Container>
          <Row>

              <Col md="4">
              
             <Menu/>
               </Col>

               <Col md="8">
            <Route path="/home" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/all-course" component={Allcourse} exact/>
            <Route path="/contact-us" component={Contact} exact/>

                </Col>

      </Row>
      </Container>
      </Router>
    )
}
export default Section;