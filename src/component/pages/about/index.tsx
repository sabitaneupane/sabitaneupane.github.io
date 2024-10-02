import authorImage from '../../../assets/sabitaneupane-image.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { researchInterest } from '../../../utils/researchInterest'
import { siteInfo } from '../../../utils'

export const AboutPage = () => {
  const calculateWorkExperience = () => {
    const careerStartYear = 2018
    const currentYear = new Date().getFullYear()
    return currentYear - careerStartYear
  }

  return (
    <div>
      <h2 className="page-title">About Me</h2>

      <div className="mt-4">
        <Row>
          <Col md={8} xs={12}>
            <div>
              👋 Hi, I'm {siteInfo.authorName}, a {siteInfo.currentWorkPosition}{' '}
              from Nepal, with {calculateWorkExperience()}+ years of experience.
              I specialized in building robust and scalable web applications. I
              mostly work with JavaScript, React, Typescript, AWS, and Golang.
              <br />
              <br />
              With a Bachelor's degree in Computer Science and Information
              Technology from Butwal Multiple Campus, Tribhuvan University, she
              graduated with distinction, showcasing her dedication and
              expertise in the field.
              <br />
              <br />
              Additionally, I am also actively involved in Tech Communities with
              the mission to inspire and encourage young minds. And during my
              Bachelor's degree, I also founded an organization "Butwal Coder
              Girls" with a mission to inspire and encourage young girls to take
              an interest in the IT sector and also to accelerate the growth of
              innovative girls entering the tech industry.
            </div>

            <div>
              <h4 className="my-4 pt-4">Research Interest</h4>
              <ul>
                {researchInterest.map((e) => {
                  return <li key={e}>{e}</li>
                })}
              </ul>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <img
              src={authorImage}
              alt={siteInfo.authorName}
              width="300"
              className="author-image"
            />
            <p className="my-2 py-4"></p>
          </Col>
        </Row>
      </div>
    </div>
  )
}
