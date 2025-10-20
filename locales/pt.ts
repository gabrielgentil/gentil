export const pt = {
  hero: {
    greeting: 'Oi! Eu sou o',
    name: 'Gabriel Gentil',
    description: 'Construindo, aprendendo e empreendendo — ajudando pessoas com tecnologia e',
    purpose: 'propósito',
    descriptionEnd: '👊🏾',
  },
  about: {
    title: 'Sobre Mim',
    paragraph1:
      'Sou Engenheiro de Software, nascido em São Paulo, com 8 anos de experiência e apaixonado por tecnologia, esportes e desafios.',
    paragraph2:
      'Gosto de estar em movimento, seja resolvendo um problema complexo no código ou superando um novo limite fora dele.',
    paragraph3:
      'Otimista por natureza, acredito que cada desafio é uma oportunidade de evoluir e que o aprendizado está na jornada, não só no resultado.',
    engineerHighlight: 'Engenheiro de Software',
    optimistHighlight: 'Otimista por natureza',
  },
  experience: {
    title: 'Experiência Profissional',
    sami: {
      company: 'Sami',
      position: 'Senior Software Developer @ Sami',
      period: '2022 - Presente',
      description:
        '- Construi e escalei o gateway financeiro da empresa, permitindo operações bancárias autônomas e aumentando as taxas de arrecadação por boleto e cartão de crédito.\n\n- Desenvolvi um sistema dinâmico de gestão de campanhas, permitindo que o time de vendas criasse e gerenciasse campanhas de desconto aplicadas automaticamente aos planos de saúde no sistema de checkout. \n\n- Criei uma API de IA agnóstica, automatizando processos em múltiplos produtos e reduzindo o trabalho manual.\n\n- Elevei a qualidade da engenharia ao introduzir métricas, padrões de código, práticas de teste, observabilidade e pipelines de CI/CD, aumentando a confiabilidade e escalabilidade do software.',
    },
    vitta: {
      company: 'Vitta',
      position: 'Senior Software Developer @ Vitta',
      period: '2019 - 2022',
      description:
        '- Contribuí para o desenvolvimento de uma plataforma de CRM voltada para saúde, com suporte a prontuário eletrônico (EMR), gestão de convênios, agendamento e teleconsultas. \n\n - Desenvolvi o módulo de cadastro de beneficiários, cobrindo toda a jornada — desde a triagem via WhatsApp até a consolidação centralizada dos dados no CRM. Esse fluxo otimizou o onboarding, melhorando a precisão dos dados e reduzindo o trabalho manual da equipe de operações.\n\n - Liderei o desenvolvimento do módulo de agendamento de teleconsultas, que exibia a disponibilidade em tempo real de clínicas e médicos, integrando-se a parceiros externos para confirmação dos atendimentos. Isso resultou em um processo de agendamento mais eficiente e confiável para pacientes e prestadores.\n\n - Construí o módulo de agendamento de exames laboratoriais, permitindo que beneficiários marcassem exames com prestadores externos de forma integrada e sem fricção.\n\n - Desenvolvi um chatbot no WhatsApp para autoatendimento de agendamentos, reduzindo significativamente o trabalho manual das enfermeiras e contribuindo para um aumento exponencial no número de consultas.',
    },
    btb: {
      company: 'BTB Telecom',
      position: 'Software Developer @ BTB Telecom',
      period: '2019 - 2019',
      description:
        '- Trabalhei no desenvolvimento de um novo sistema interno de faturamento, migrando de uma solução legada para uma plataforma moderna e de alta performance, o que melhorou significativamente a velocidade, usabilidade e produtividade dos times de suporte, vendas e financeiro.\n\n- Liderei toda a migração de um sistema monolítico legado para uma arquitetura escalável e de fácil manutenção, reduzindo a dívida técnica e aumentando o desempenho da plataforma.\n\n- Construí uma interface responsiva e focada no usuário com React.js, aprimorando a usabilidade e proporcionando uma experiência fluida para as equipes internas.\n\n- Liderei o desenvolvimento de APIs em Node.js integrando bancos de dados relacionais (MySQL) e não relacionais (MongoDB) para dar suporte a operações financeiras complexas com alta confiabilidade.\n\n- Desenvolvi um módulo de relatórios que agregava dados de diversas unidades de negócio da América Latina, processando consultas complexas e grandes volumes de dados.\n\n- Implementei o Elasticsearch para permitir painéis analíticos em tempo real e geração rápida de relatórios, acelerando drasticamente a tomada de decisão.',
    },
    drConsulta: {
      company: 'Dr Consulta',
      position: 'Software Developer @ Dr Consulta',
      period: '2017 - 2018',
      description:
        '- Contribuí para o desenvolvimento e manutenção de uma plataforma web voltada para saúde, aprimorando módulos principais e garantindo a confiabilidade do sistema.\n\n- Trabalhei em funcionalidades centrais utilizando JavaScript, PHP e MySQL, melhorando a performance e sustentando o crescimento da plataforma.\n\n- Liderei o suporte de nível 3 (L3), realizando a triagem de solicitações de novas funcionalidades e coordenando melhorias no sistema de prontuário eletrônico (EMR), assegurando o bom funcionamento para clínicas e profissionais de saúde.\n\n- Desenhei e desenvolvi um sistema de relatórios que consolidava dados de receita, performance e metas de vendas de diversas clínicas, permitindo que o time comercial tomasse decisões baseadas em dados.\n\n- Atuei como ponte entre as equipes de suporte e desenvolvimento, ministrando treinamentos técnicos e sessões de onboarding sobre novas funcionalidades, o que aumentou a adoção e reduziu chamados recorrentes de suporte.',
    },
  },
  footer: {
    createdBy: 'Criado por Gabriel Gentil usando NextJs e TailwindCSS.',
    rights: '© Todos os direitos reservados.',
  },
}

export type Translations = typeof pt

