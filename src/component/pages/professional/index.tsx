export const ProfessionalPage = () => {
  return (
    <div>
      <h2 className="page-title">Professional Profile</h2> 
      <div>
        <h3 className="my-4 pt-4">Professional Experience</h3>
        <ul>
          <li>
            <b>Software Engineer, July 2020 - Present</b> <br /> CloudFactory
            (Sprout Technology Service Pvt. Ltd), Nepal
          </li>
          <ul>
            <li>
              Developed and designed scalable web applications using
              event-driven cloud-native solutions
            </li>
            <li>
              Ensured high software quality through thorough testing, including
              unit, integration, & end-to-end testing
            </li>
            <li>
              Optimized development and deployment processes through CI/CD
              workflows
            </li>
            <li>
              Improved code quality and project maintainability by leveraging
              code analysis tools, resulting in increased code coverage and
              enhanced project stability
            </li>
            <li>
              Provided mentorship to junior engineers, contributing to their
              professional growth
            </li>
          </ul>
        </ul>

        <ul>
          <li>
            <b>Associate Software Engineer, Jan 2019 - July 2020</b> <br />
            CloudFactory (Sprout Technology Service Pvt. Ltd), Nepal
          </li>
          <ul>
            <li>
              Design microservice and micro-frontend-based web applications for
              maximum efficiency and scalability{' '}
            </li>
            <li>
              Demonstrated proficiency in debugging and maintaining RoR-based
              legacy applications with ease{' '}
            </li>
          </ul>
        </ul>

        <ul>
          <li>
            <b>
              Engineering Apprentice, Quality Assurance, July 2018 - Jan 2019
            </b>
            <br />
            CloudFactory (Sprout Technology Service Pvt. Ltd), Nepal
          </li>
          <ul>
            <li>
              Conducted extensive testing including manual, regression,
              performance, and API testing
            </li>
            <li>
              Developed and maintained test plans and cases using diverse
              testing methodologies to ensure software reliability
            </li>
            <li>
              Played a key role in deploying and monitoring applications across
              staging and production environments
            </li>
          </ul>
        </ul>

        <ul>
          <li>
            <b>Frontend Developer, Apr 2018 – July 2018</b>
            <br />
            Swotah Travel and Adventure Pvt. Ltd, Nepal
          </li>
          <ul>
            <li>
              Designed and developed visually appealing and functional websites,
              prioritizing performance optimization for an improved user
              experience.
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <h3 className="mt-4 mb-1 pt-4">Skills and Expertise</h3>

        <ul>
          <li>
            <b>Backend Technologies:</b> NodeJS, ExpressJS, Golang
          </li>
          <li>
            <b>Frontend Technologies:</b> HTML, CSS, Bootstrap, JavaScript,
            TypeScript
          </li>
          <li>
            <b>Database:</b> MongoDB, MySQL
          </li>
          <li>
            <b>API Types:</b> Rest API, ElasticSearch
          </li>
          <li>
            <b>Testing Libraries:</b> Jest, React Testing Library (Unit
            Testing), Cypress (Automation Testing)
          </li>
          <li>
            <b>Testing Tools:</b> Postman (API testing), JMeter (Performance and
            stress testing)
          </li>
          <li>
            <b>AWS Services:</b> DynamoDB, DocumentDB, ElasticSearch,
            CloudFormation, Lambdas, S3, ECS, CloudWatch, SQS, SNS
          </li>
          <li>
            <b>Automation Workflow:</b> CI/CD pipelines using Github Action
          </li>
          <li>
            <b>Monitoring and Logging Tools:</b> Newrelic, AWS CloudWatch
          </li>
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
