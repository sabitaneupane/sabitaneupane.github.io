import { useEffect } from 'react'
import { scrollPageToTopOnHashChange } from '../../../utils'
import { researchInterest } from '../../../constant/researchInterest'
import { featureFlags } from '../../../utils/featureflags'
import { paperExploration } from '../../../constant/paperExploration'

export const ResearchComponentPage = () => {
  useEffect(() => {
    scrollPageToTopOnHashChange()
  }, [])

  return (
    <div>
      <h2 className="page-title">Research</h2>
      <div>
        <h4 className="my-4 pt-4">Research Interest</h4>
        {researchInterest.map((e: any) =>
          featureFlags.showResearchInterestDescription ? (
            <>
              <h5> {e.topic} </h5>
              <p> {e.description} </p>
            </>
          ) : (
            <li key={e.topic}>{e.topic}</li>
          )
        )}
      </div>

      <div>
        <h4 className="my-4 pt-4">Paper Exploration</h4>
        <ul>
          {paperExploration.map((paper: any) => (
            <li key={paper.title}>
              <h4 className="mb-4"> {paper.title} </h4>
              {paper.tags.length > 0 && (
                <p>
                  <strong>Tags: </strong>
                  {paper.tags.join(', ')}
                </p>
              )}
              {paper.blogs.length > 0 && (
                <p>
                  <strong>Blogs: </strong>
                  <ul>
                    {paper.blogs.map((blogUrl: string) => (
                      <li key={blogUrl}>
                        <a
                          href={blogUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {blogUrl}
                        </a>
                      </li>
                    ))}
                  </ul>
                </p>
              )}
              <iframe
                src={`${paper.paper}#toolbar=0`}
                width="100%"
                height="800"
                title={paper.title}
              ></iframe>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
