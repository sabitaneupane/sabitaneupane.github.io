import {
  socialMediaInfo,
  socialMediaStaticInfo,
} from '../../constant/socialMediaList'

const ContactComponent = () => {
  const socialMediaContent = () => {
    return Object.keys(socialMediaInfo).map((key) => {
      const socialInfo = socialMediaInfo[key]
      const image = socialMediaStaticInfo[key]

      if (!socialInfo.featureFlag) {
        return null
      }

      return (
        <a
          href={socialInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 py-2"
          key={key}
        >
          <img src={image} alt={key} />
        </a>
      )
    })
  }

  return (
    <div className="contact-content">
      <div id="contact-me" className="social-media-content py-4">
        {socialMediaContent()}
      </div>
    </div>
  )
}

export default ContactComponent
