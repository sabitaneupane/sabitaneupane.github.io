import { useEffect } from 'react'
import { scrollPageToTopOnHashChange } from '../../../utils'
import { academicProfile } from '../../../constant/academicProfile'
import { researchInterest } from '../../../constant/researchInterest'
import { featureFlags } from '../../../utils/featureflags'

export const AcademicPage = () => {
  useEffect(() => {
    scrollPageToTopOnHashChange()
  }, [])

  const getAdditionalContent = (edu: any) => {
    if (edu.additional_info.length === 0) {
      return null
    }

    return edu.additional_info.map((info: any) => {
      return (
        <li key={info.title} className="mt-2">
          <b>{info.title}</b>
          <ul>
            {info.description.map((desc: any) => (
              <li key={`${info.title}-${desc}`}>{desc}</li>
            ))}
          </ul>
        </li>
      )
    })
  }

  return (
    <div>
      <h2 className="page-title">Academic Profile</h2>

      <div>
        <h3 className="my-4 pt-4">Education</h3>

        {academicProfile.map((edu: any) => (
          <div key={edu.degree}>
            <b>{edu.degree}</b>
            <ul>
              <li>
                {edu.years}, {edu.institution}
              </li>

              {getAdditionalContent(edu)}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h4 className="my-4 pt-4">Research Interest</h4>
        <ul></ul>

        {researchInterest.map((e: any) => {
          {
            return featureFlags.showResearchInterestDescription ? (
              <>
                <h5> {e.topic} </h5>
                <p> {e.description} </p>
              </>
            ) : (
              <li>{e.topic}</li>
            )
          }
        })}
      </div>
    </div>
  )
}
