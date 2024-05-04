import { siteInfo } from '../../utils'

const AppComponent = () => {
  return (
    <>
      <div>
        <h1 className="main-title">{siteInfo.authorName}'s Personal site</h1>
      </div>
    </>
  )
}

export default AppComponent
