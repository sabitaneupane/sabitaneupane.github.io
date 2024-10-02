import { skillsAndExpertise } from '../../../utils/skills'
import { experienceData } from '../../../utils/workExperience'

export const ProfessionalPage = () => {
  return (
    <div>
      <h2 className="page-title">Professional Profile</h2>
      <div>
        <h3 className="my-4 pt-4">Professional Experience</h3>
        {experienceData.map((experience, index) => (
          <div key={index}>
            <ul>
              <li>
                <b>
                  {experience.position}, {experience.duration}
                </b>{' '}
                <br />
                {experience.company}
              </li>
              <ul>
                {experience.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="my-4 pt-4">Skills and Expertise</h3>
        <p>
          🌱 I'm familiar with JavaScript, Typescript, React, Golang, and AWS{' '}
        </p>

        <ul>
          {skillsAndExpertise.map((s, index) => {
            return (
              <li key={index}>
                <b>{s.name}:</b> {s.skills.join(', ')}
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="my-4 pt-4">Certification & Training</h3>

        <ul>
          <li>
            <b>Google Cloud Certified - Associate Cloud Engineer</b> <br />{' '}
            Issued Apr 2021 - Expires Apr 2023
          </li>
          <li>
            <b>AWS Cloud Practitioner Training</b> <br /> 1 month, 40 hours
            training, Genese Cloud Academy, Nepal
          </li>
        </ul>
      </div>

      <div>
        <h3 className="my-4 pt-4">Awards</h3>
        <div>
          <ul>
            <li>Engineering Quarterly Recognition 2022, CloudFactory</li>
            <li>
              Most Innovative Award, Engineering Wallboard Hackathon,
              CloudFactory
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
