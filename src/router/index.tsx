import { AboutPage } from '../component/pages/about'
import { AcademicPage } from '../component/pages/academic'
import { ProfessionalPage } from '../component/pages/professional'
import { TechCommunityPage } from '../component/pages/tech-community'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { socialMediaInfo } from '../constant/socialMediaList'

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

if (socialMediaInfo.medium.featureFlag) {
  menuLinks.push({
    id: 'Blogs',
    path: '/blogs',
    link: socialMediaInfo.medium.url,
    element: <div>Redirecting to Blogs...</div>,
  })
}

const router = createHashRouter(menuLinks)

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
