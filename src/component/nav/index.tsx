import { Nav, NavLink } from 'react-bootstrap'
import { menuLinks } from '../../router'

const NavComponent = () => {
  return (
    <Nav>
      {menuLinks.map((m: any, index: number) => {
        return (
          <NavLink className="px-3" href={m.path} key={index}>
            {m.id}
          </NavLink>
        )
      })}
    </Nav>
  )
}

export default NavComponent
