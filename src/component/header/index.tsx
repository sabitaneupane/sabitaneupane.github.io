import { Container, Nav, Navbar } from 'react-bootstrap'
import { menuLinks, siteInfo } from '../../utils'

const HeaderComponent = () => {
  const collapsibleNavbar = () => {
    return (
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          {menuLinks.map((m: any) => {
            return (
              <Nav.Link className="px-3" href="/">
                {m.text}
              </Nav.Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    )
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary page-navbar">
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
