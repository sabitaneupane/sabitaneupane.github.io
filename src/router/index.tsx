import { AboutPage } from '../component/pages/about'
import { AcademicPage } from '../component/pages/academic'
import { ProfessionalPage } from '../component/pages/professional'
import { TechCommunityPage } from '../component/pages/tech-community'
import { ContentPage } from '../component/pages/content'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { NewsPage } from '../component/pages/news'

export const menuLinks = [
  {
    id: 'About Me',
    path: '/',
    element: <AboutPage />,
  },
  {
    id: 'Academic',
    path: '/academic',
    element: <AcademicPage />,
  },
  {
    id: 'Professional',
    path: '/professional',
    element: <ProfessionalPage />,
  },
  {
    id: 'Tech Community',
    path: '/tech-community',
    element: <TechCommunityPage />,
  },
  // {
  //   id: 'Content',
  //   path: '/content',
  //   element: <ContentPage />,
  // },
  // {
  //   id: 'News',
  //   path: '/news',
  //   element: <NewsPage />,
  // },
]
const router = createBrowserRouter(menuLinks)

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
