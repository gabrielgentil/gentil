import type { Translations } from './pt'

export const en: Translations = {
  hero: {
    greeting: "Hi! I'm",
    name: 'Gabriel Gentil',
    description: 'Building, learning and entrepreneuring — helping people with technology and',
    purpose: 'purpose',
    descriptionEnd: '👊🏾',
  },
  about: {
    title: 'About Me',
    paragraph1:
      'I am a Software Engineer, born in São Paulo, with 8 years of experience and passionate about technology, sports, and challenges.',
    paragraph2:
      'I like to be in motion, whether solving a complex problem in code or overcoming a new limit outside of it.',
    paragraph3:
      'Optimistic by nature, I believe that each challenge is an opportunity to evolve and that learning is in the journey, not just the result.',
    engineerHighlight: 'Software Engineer',
    optimistHighlight: 'Optimistic by nature',
  },
  experience: {
    title: 'Professional Experience',
    sami: {
      company: 'Sami',
      position: 'Senior Software Developer @ Sami',
      period: '2022 - Present',
      description:
        "- Built and scaled the company's financial gateway, enabling autonomous banking operations and increasing collection rates via bank slip and credit card.\n\n- Developed a dynamic campaign management system, allowing the sales team to create and manage discount campaigns automatically applied to health plans in the checkout system.\n\n- Created an agnostic AI API, automating processes across multiple products and reducing manual work.\n\n- Elevated engineering quality by introducing metrics, code standards, testing practices, observability, and CI/CD pipelines, increasing software reliability and scalability.",
    },
    vitta: {
      company: 'Vitta',
      position: 'Senior Software Developer @ Vitta',
      period: '2019 - 2022',
      description:
        '- Contributed to the development of a CRM platform focused on healthcare, with support for electronic health records (EMR), insurance management, scheduling, and teleconsultations.\n\n- Developed the beneficiary registration module, covering the entire journey — from WhatsApp screening to centralized data consolidation in the CRM. This flow optimized onboarding, improving data accuracy and reducing manual work for the operations team.\n\n- Led the development of the teleconsultation scheduling module, which displayed real-time availability of clinics and doctors, integrating with external partners for appointment confirmation. This resulted in a more efficient and reliable scheduling process for patients and providers.\n\n- Built the laboratory exam scheduling module, allowing beneficiaries to book exams with external providers in an integrated and frictionless way.\n\n- Developed a WhatsApp chatbot for self-service appointments, significantly reducing manual work for nurses and contributing to an exponential increase in the number of consultations.',
    },
    btb: {
      company: 'BTB Telecom',
      position: 'Software Developer @ BTB Telecom',
      period: '2019 - 2019',
      description:
        '- Worked on developing a new internal billing system, migrating from a legacy solution to a modern, high-performance platform, which significantly improved speed, usability, and productivity for support, sales, and finance teams.\n\n- Led the entire migration from a legacy monolithic system to a scalable and maintainable architecture, reducing technical debt and increasing platform performance.\n\n- Built a responsive, user-focused interface with React.js, improving usability and providing a smooth experience for internal teams.\n\n- Led the development of Node.js APIs integrating relational (MySQL) and non-relational (MongoDB) databases to support complex financial operations with high reliability.\n\n- Developed a reporting module that aggregated data from various business units across Latin America, processing complex queries and large data volumes.\n\n- Implemented Elasticsearch to enable real-time analytical dashboards and fast report generation, dramatically accelerating decision-making.',
    },
    drConsulta: {
      company: 'Dr Consulta',
      position: 'Software Developer @ Dr Consulta',
      period: '2017 - 2018',
      description:
        '- Contributed to the development and maintenance of a healthcare-focused web platform, improving core modules and ensuring system reliability.\n\n- Worked on core functionalities using JavaScript, PHP, and MySQL, improving performance and sustaining platform growth.\n\n- Led level 3 (L3) support, triaging feature requests and coordinating improvements to the electronic health record (EMR) system, ensuring proper operation for clinics and healthcare professionals.\n\n- Designed and developed a reporting system that consolidated revenue, performance, and sales target data from multiple clinics, enabling the sales team to make data-driven decisions.\n\n- Acted as a bridge between support and development teams, delivering technical training and onboarding sessions on new features, which increased adoption and reduced recurring support calls.',
    },
  },
  footer: {
    createdBy: 'Created by Gabriel Gentil using NextJs and TailwindCSS.',
    rights: '© All rights reserved.',
  },
}

