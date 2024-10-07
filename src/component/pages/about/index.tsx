import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { siteInfo } from '../../../constant'
import { scrollPageToTopOnHashChange } from '../../../utils'
import authorImage from '../../../assets/sabitaneupane-image.png'

export const AboutPage = () => {
  useEffect(() => {
    scrollPageToTopOnHashChange()
  }, [])

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
              from Nepal with {calculateWorkExperience()}+ years of experience
              specializing in building robust and scalable web applications. I
              primarily work with JavaScript, React, TypeScript, AWS, and
              Golang.
              <br />
              <br />
              In addition to my technical career, I am actively involved in tech
              communities with a mission to inspire and encourage young minds.
              During my Bachelor's degree, I founded "Butwal Coder Girls," an
              organization dedicated to empowering young girls to pursue careers
              in technology and fostering the growth of innovative women
              entering the tech industry.
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
