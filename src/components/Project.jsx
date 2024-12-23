function Project() {
    const experiences = [
        {
            company_name: "Cubastion Consulting Pvt. Ltd.",
            location: "Gurgaon, India",
            duration: "Jan 2022 - Present",
            project_name: "Digital Asset Finance Network",
            position : "Full Stack Developer",
            descriptions: [
                "Built a microservices-based digital platform using Angular and Spring Boot to streamline lending and borrowing of digital assets, improving transaction tracking and liquidity management.",
                "Designed and implemented an onboarding module and backend RESTful API, increasing real-time negotiation efficiency by 25% through automated RFQ creation and margin calls.",
                "Integrated Copper payment API to secure loan transactions and implemented AWS KMS for data encryption, ensuring compliance and security.",
                "Mentored junior developers, conducting code reviews and providing best practices, increasing the team's overall coding standards.",
                "Implemented caching strategies using Memcached and database optimization, reducing API loading times by 30%, managing concurrent requests to prevent timeouts and duplicate transactions with lock mechanisms."
            ],
            tech_stack: [
                "Angular","Spring Boot", "Node.js", "PostgreSQL", "Express.js", "S3", "AWS KMS", "Kafka", "HTML", "CSS"
            ]
        },
        {
            company_name: "Cubastion Consulting Pvt. Ltd.",
            location: "Gurgaon, India",
            duration: "Jan 2022 - Present",
            project_name: "Insurance Claims Platform",
            position: "Full Stack Developer",
            descriptions: [
                "Developed a responsive claims surveyor platform using Angular and Spring Boot, increasing claims processing efficiency by 30%.",
                "Automated claim generation through a REST API, reducing manual data entry by 50% and controlling operational costs.",
                "Incorporated OEM API updates to enhance motor insurance claim processes, streamlining workflows and decreasing manual effort by 40%."
            ],
            tech_stack: [
                "Angular", "TypeScript", "HTML", "CSS", "Bootstrap 4", "Spring Boot", "Java", "DataJPA", "Hibernate"
            ]
        },
        {
            company_name: "Cubastion Consulting Pvt. Ltd.",
            location: "Gurgaon, India",
            duration: "Jan 2022 - Present",
            project_name: "HRMS Portal",
            position : "Full Stack Developer",
            descriptions: [
                "Designed and implemented a Human Resource Management System, increasing operational efficiency by 25% through streamlined employee lifecycle and payroll processes.",
                "Automated recruitment workflows and payroll calculations, achieving annual savings of 20 lakh INR while enhancing security with Azure OAuth2 integration.",
                "Developed an internal pre-onboarding portal with RESTful API and Keycloak integration, reducing recruitment costs by 30%."
            ],
            tech_stack: [
                "Angular", "TypeScript", "HTML", "CSS", "Bootstrap 4", "Node.js", "Express.js","Spring Boot", "ReactJS"
            ]
        },
        {
            company_name: "Tutree India Pvt Ltd",
            location: "India",
            duration: "Jul 2021 - Jan 2022",
            project_name: "Job Portal",
            position : "Front end Developer",
            descriptions: [
                "Developed a Delivery Job Portal, resulting in a 20% increase in user engagement and traffic.",
                "Optimized the job listing page to improve user experience and streamline job searches.",
                "Created responsive HTML email templates to notify users of new delivery job postings, enhancing user retention."
            ],
            tech_stack: [
                "JavaScript", "jQuery", "HTML", "CSS"
            ]
        }
    ];

    return (
        <section>
            <div className="skill-header">
                <h1>Code : Work</h1>
            </div>
            <div className="project-wrapper">
                {
                    experiences.map((exp, ind) => (
                        <div className="card" key={ind}>
                            <div className="timeline pb-0">
                                <div className="location-period"><span>{exp.location ? exp.location : ""}</span> | {exp.duration}</div>
                                <div className="company-name">{exp.company_name}
                                <span className="position-title">&nbsp;({exp.position})</span>
                                </div>
                            </div>
                            <h2 className="project-title">{exp.project_name}</h2>
                            <div className="bullet-point">
                                {
                                    exp.descriptions.map((e, k) => (
                                        <li key={ind + k}> {e} </li>
                                    ))
                                }
                            </div>
                            <div className="tech-stack-used">
                                Tech Used : &nbsp;
                                {
                                    exp.tech_stack.map((s, j) => (
                                        <span key={ind + j}>{s}
                                            {j < exp.tech_stack.length - 1 ? ', ' : ''}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Project;