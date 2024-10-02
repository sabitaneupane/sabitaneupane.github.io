import { siteInfo } from '../../constant'

const FooterComponent = () => {
  return (
    <div className="footer-content">
      <div className="copyright-info-content pb-2">
        <p className="text-muted">
          All Rights Reserved © {siteInfo.authorName}
        </p>
      </div>
    </div>
  )
}

export default FooterComponent
