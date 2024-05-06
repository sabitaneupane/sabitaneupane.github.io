import { Nav } from 'react-bootstrap'
import { pageSections } from '../app'

const NavComponent = () => {
  return (
    <Nav>
      {pageSections.map((m: any, index: number) => {
        return (
          <Nav.Link className="px-3" href={m.path} key={index}>
            {m.id}
          </Nav.Link>
        )
      })}
    </Nav>
  )
}

export default NavComponent
