import { Container, Nav, Navbar } from 'react-bootstrap'
import { siteInfo } from '../../utils'
import NavComponent from '../nav'
import logo from '../../assets/sabitaneupane-logo.png'

const HeaderComponent = () => {
  const collapsibleNavbar = () => {
    return (
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <NavComponent />
      </Navbar.Collapse>
    )
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary page-navbar p-3"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Sabita Neupane Logo"
              width="26"
              className="mx-1 logo-image"
            />
            <span className="mt-1">{siteInfo.authorName}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {collapsibleNavbar()}
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderComponent
