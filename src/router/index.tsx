import { AboutPage } from '../component/pages/about'
import { AcademicPage } from '../component/pages/academic'
import { ProfessionalPage } from '../component/pages/professional'
import { TechCommunityPage } from '../component/pages/tech-community'
import { RouterProvider, createHashRouter } from 'react-router-dom'

export const menuLinks = [
  {
    id: 'About Me',
    path: '/',
    link: '/',
    element: <AboutPage />,
  },
  {
    id: 'Academic',
    path: '/academic',
    link: '/#academic',
    element: <AcademicPage />,
  },
  {
    id: 'Professional',
    path: '/professional',
    link: '/#professional',
    element: <ProfessionalPage />,
  },
  {
    id: 'Tech Community',
    path: '/tech-community',
    link: '/#tech-community',
    element: <TechCommunityPage />,
  },
]

const router = createHashRouter(menuLinks)

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
