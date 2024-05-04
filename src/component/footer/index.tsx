import { siteInfo, socialMediaInfo } from '../../utils'

const FooterComponent = () => {
  const socialMediaContent = () => {
    return socialMediaInfo.map((sm: any, index: number) => {
      return (
        <a href={sm.url} target="_blank" className="px-1 py-2" key={index}>
          <img src={sm.image} alt={sm.name} />
        </a>
      )
    })
  }

  const copyrightContent = () => {
    return (
      <p className="text-muted">All Rights Reserved © {siteInfo.authorName}</p>
    )
  }

  return (
    <div className="footer-content">
      <div className="social-media-content py-4"> {socialMediaContent()}</div>
      <div className="copyright-info-content pb-2"> {copyrightContent()} </div>
    </div>
  )
}

export default FooterComponent
