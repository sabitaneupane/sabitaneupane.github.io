import { AboutPage } from '../component/pages/about'
import { AcademicPage } from '../component/pages/academic'
import { ContactPage } from '../component/pages/contact'
import { ContentPage } from '../component/pages/content'
import { NewsPage } from '../component/pages/news'
import { ProfessionalPage } from '../component/pages/professional'
import { TechCommunityPage } from '../component/pages/tech-community'

export const pageRoutesConfig = [
  {
    id: 'About Me',
    path: '#about-me',
    element: AboutPage,
    featureFlag: true,
  },
  {
    id: 'Academic',
    path: '#academic',
    element: AcademicPage,
    featureFlag: true,
  },
  {
    id: 'Professional',
    path: '#professional',
    element: ProfessionalPage,
    featureFlag: true,
  },
  {
    id: 'Tech Community',
    path: '#tech-community',
    element: TechCommunityPage,
    featureFlag: true,
  },
  {
    id: 'Content',
    path: '#content',
    element: ContentPage,
    featureFlag: false,
  },
  {
    id: 'News',
    path: '#news',
    element: NewsPage,
    featureFlag: false,
  },
  {
    id: 'Contact Me',
    path: '#contact-me',
    element: ContactPage,
    featureFlag: true,
  },
]
