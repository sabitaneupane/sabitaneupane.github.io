import FooterComponent from '../footer'
import HeaderComponent from '../header'
import { AboutPage } from '../../component/pages/about'
import { AcademicPage } from '../../component/pages/academic'
import { ProfessionalPage } from '../../component/pages/professional'
import { TechCommunityPage } from '../../component/pages/tech-community'
import { ContentPage } from '../../component/pages/content'
import { NewsPage } from '../../component/pages/news'

export const pageSections = [
  {
    id: 'About Me',
    path: '#about-me',
    element: <AboutPage />,
    featureFlag: true,
  },
  {
    id: 'Academic',
    path: '#academic',
    element: <AcademicPage />,
    featureFlag: true,
  },
  {
    id: 'Professional',
    path: '#professional',
    element: <ProfessionalPage />,
    featureFlag: true,
  },
  {
    id: 'Tech Community',
    path: '#tech-community',
    element: <TechCommunityPage />,
    featureFlag: true,
  },
  {
    id: 'Content',
    path: '',
    element: <ContentPage />,
    featureFlag: false,
  },
  {
    id: 'News',
    path: '',
    element: <NewsPage />,
    featureFlag: false,
  },
  {
    id: 'Contact Me',
    path: '#contact-me',
    element: null,
    featureFlag: true,
  },
]

const AppComponent = () => {
  return (
    <>
      <div className="header-container">
        <HeaderComponent />
      </div>
      <div className="body-container">
        <div className="body-content">
          {pageSections.map((page: any) => {
            if (!page.featureFlag) {
              return
            }
            return <div key={page.path}>{page.element}</div>
          })}
        </div>
      </div>
      <div className="footer-container">
        <FooterComponent />
      </div>
    </>
  )
}

export default AppComponent
