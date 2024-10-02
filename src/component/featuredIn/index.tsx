import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import empoweringGirlsImage from '../../assets/featuredIn/Empowering Rural Girls Through Technology, Coder Girls.png'
import myStoryImage from '../../assets/featuredIn/My story of starting Butwal Coder Girls_ Sabita Neupane.png'
import ictCareerImage from '../../assets/featuredIn/Why ICT Career For Girls _ Sabita Neupane.png'
import { siteInfo } from '../../constant'

export const featuredIn = [empoweringGirlsImage, myStoryImage, ictCareerImage]

const showFeaturedIn = false

const FeaturedInComponent = () => {
  if (!showFeaturedIn) {
    return null
  }
  return (
    <div>
      <h3 className="my-4 pt-4">Featured In</h3>

      <Row>
        {featuredIn.map((image) => {
          return (
            <Col md={4} xs={12} key={image}>
              <img
                src={image}
                className="img-fluid"
                alt={`${siteInfo.authorName} Featured In`}
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
export default FeaturedInComponent
