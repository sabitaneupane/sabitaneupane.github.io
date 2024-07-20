import { pageRoutesConfig } from '../../utils/routes'
import FooterComponent from '../footer'
import HeaderComponent from '../header'
import { ContactPage } from '../pages/contact'

const AppComponent: React.FC = () => {
  return (
    <>
      <div className="header-container">
        <HeaderComponent />
      </div>
      <div className="body-container">
        <div>
          {pageRoutesConfig
            .filter((page) => page.featureFlag && page.element)
            .map((page) => {
              const PageComponent: any = page.element
              return (
                <div
                  key={page.path || page.id}
                  className={
                    PageComponent === ContactPage ? 'mt-4 pt-4' : `body-content`
                  }
                >
                  <PageComponent />
                </div>
              )
            })}
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default AppComponent
