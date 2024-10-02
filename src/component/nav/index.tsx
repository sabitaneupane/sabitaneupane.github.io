import { Nav, NavLink } from 'react-bootstrap'
import { menuLinks } from '../../router'

const NavComponent = () => {
  return (
    <Nav>
      {menuLinks.map((m: any) => {
        return (
          <NavLink className="px-3" href={m.link} key={m.path}>
            {m.id}
          </NavLink>
        )
      })}
    </Nav>
  )
}

export default NavComponent
