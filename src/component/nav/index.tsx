import { Nav } from 'react-bootstrap'
import { pageSections } from '../app'

const NavComponent = () => {
  return (
    <Nav>
      {pageSections.map((m: any) => {
        if (!m.featureFlag) {
          return
        }
        return (
          <Nav.Link className="px-3" href={m.path} key={m.path}>
            {m.id}
          </Nav.Link>
        )
      })}
    </Nav>
  )
}

export default NavComponent
