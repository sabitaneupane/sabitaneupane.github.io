import { siteInfo } from '../../utils'
import FooterComponent from '../footer'
import HeaderComponent from '../header'

const AppComponent = () => {
  return (
    <>
      <div className="header-container">
        <HeaderComponent />
      </div>
      <div className="body-container">
        <div className="body-content">
          <h1 className="main-title">{siteInfo.authorName}'s Personal site</h1>
        </div>
      </div>
      <div className="footer-container">
        <FooterComponent />
      </div>
    </>
  )
}

export default AppComponent
