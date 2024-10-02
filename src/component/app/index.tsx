import AppRouter from '../../router'
import FooterComponent from '../footer'
import ContactComponent from '../contact'
import HeaderComponent from '../header'

const AppComponent = () => {
  return (
    <>
      <div className="header-container">
        <HeaderComponent />
      </div>
      <div className="body-container">
        <div className="body-content">
          <AppRouter />
        </div>
      </div>
      <div className="contact-container">
        <ContactComponent />
      </div>
      <div className="footer-container">
        <FooterComponent />
      </div>
    </>
  )
}

export default AppComponent
