import React from 'react'
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
      <Navbar bg="#151515" variant="dark" expand="md">
        <Navbar.Brand href="/"><b>Game Relay</b></Navbar.Brand>
        <Form onSubmit={ e=> {e.preventDefault(); e.target.firstChild.value=''; console.log(e.target)}}>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={props.searchHandler}  />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/library">Game Library</Link>
            <Link to="/creators">Creators</Link>
            <Link to="/developers">Developers</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header