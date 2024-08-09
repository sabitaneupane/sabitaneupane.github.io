import { socialMediaInfo } from '../../utils/socialMediaList'

const ContactComponent = () => {
  const socialMediaContent = () => {
    return socialMediaInfo.map((sm: any) => {
      if (!sm.featureFlag) {
        return
      }
      return (
        <a href={sm.url} target="_blank" className="px-1 py-2" key={sm.name}>
          <img src={sm.image} alt={sm.name} />
        </a>
      )
    })
  }

  return (
    <div className="contact-content">
      <div id="contact-me" className="social-media-content py-4">
        {' '}
        {socialMediaContent()}
      </div>
    </div>
  )
}

export default ContactComponent
