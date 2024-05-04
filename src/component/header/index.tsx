import { Container, Nav, Navbar } from 'react-bootstrap'
import { siteInfo } from '../../utils'
import NavComponent from '../nav'

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
        className="bg-body-tertiary page-navbar"
      >
        <Container>
          <Navbar.Brand href="/">{siteInfo.authorName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {collapsibleNavbar()}
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderComponent
