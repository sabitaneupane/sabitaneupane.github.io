import FooterComponent from '../footer'
import HeaderComponent from '../header'
import { AboutPage } from '../../component/pages/about'
import { AcademicPage } from '../../component/pages/academic'
import { ProfessionalPage } from '../../component/pages/professional'
import { TechCommunityPage } from '../../component/pages/tech-community'
// import { ContentPage } from '../../component/pages/content'
// import { NewsPage } from '../../component/pages/news'

export const pageSections = [
  {
    id: 'About Me',
    path: '#about-me',
    element: <AboutPage />,
  },
  {
    id: 'Academic',
    path: '#academic',
    element: <AcademicPage />,
  },
  {
    id: 'Professional',
    path: '#professional',
    element: <ProfessionalPage />,
  },
  {
    id: 'Tech Community',
    path: '#tech-community',
    element: <TechCommunityPage />,
  },
  // {
  //   id: 'Content',
  //   path: "",
  //   element: <ContentPage />,
  // },
  // {
  //   id: 'News',
  //   path: "",
  //   element: <NewsPage />,
  // },
]

const AppComponent = () => {
  return (
    <>
      <div className="header-container">
        <HeaderComponent />
      </div>
      <div className="body-container">
        <div className="body-content">
          {pageSections.map((page: any, index: number) => {
            return <div key={index}>{page.element}</div>
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
