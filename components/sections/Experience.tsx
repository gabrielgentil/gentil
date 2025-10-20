'use client'

import React, { useState } from 'react'
import Section from '@/components/ui/Section'
import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Sami',
    position: 'Senior Software Developer @ Sami',
    period: '2022 - Presente',
    description:
      '- Construi e escalei o gateway financeiro da empresa, permitindo operações bancárias autônomas e aumentando as taxas de arrecadação por boleto e cartão de crédito.\n\n- Desenvolvi um sistema dinâmico de gestão de campanhas, permitindo que o time de vendas criasse e gerenciasse campanhas de desconto aplicadas automaticamente aos planos de saúde no sistema de checkout. \n\n- Criei uma API de IA agnóstica, automatizando processos em múltiplos produtos e reduzindo o trabalho manual.\n\n- Elevei a qualidade da engenharia ao introduzir métricas, padrões de código, práticas de teste, observabilidade e pipelines de CI/CD, aumentando a confiabilidade e escalabilidade do software.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'RabbitMQ', 'GCP', 'MySQL', 'Oracle', 'Nestjs', 'MongoDB', 'Redis', 'OpenTelemetry', 'Microservices Architecture'],
  },
  {
    id: '2',
    company: 'Vitta',
    position: 'Senior Software Developer @ Vitta',
    period: '2019 - 2022',
    description: 
    `- Contribuí para o desenvolvimento de uma plataforma de CRM voltada para saúde, com suporte a prontuário eletrônico (EMR), gestão de convênios, agendamento e teleconsultas. \n\n 
    - Desenvolvi o módulo de cadastro de beneficiários, cobrindo toda a jornada — desde a triagem via WhatsApp até a consolidação centralizada dos dados no CRM.
    Esse fluxo otimizou o onboarding, melhorando a precisão dos dados e reduzindo o trabalho manual da equipe de operações.\n\n
    - Liderei o desenvolvimento do módulo de agendamento de teleconsultas, que exibia a disponibilidade em tempo real de clínicas e médicos, integrando-se a parceiros externos para confirmação dos atendimentos. Isso resultou em um processo de agendamento mais eficiente e confiável para pacientes e prestadores.\n\n
    - Construí o módulo de agendamento de exames laboratoriais, permitindo que beneficiários marcassem exames com prestadores externos de forma integrada e sem fricção.\n\n
    - Desenvolvi um chatbot no WhatsApp para autoatendimento de agendamentos, reduzindo significativamente o trabalho manual das enfermeiras e contribuindo para um aumento exponencial no número de consultas.
    `,
    technologies: ['Vuejs', 'NodeJs', 'AWS', 'MongoDB', 'Kafka', 'Typescript', 'Microservices Architecture'],
  },
   {
     id: '3',
     company: 'BTB Telecom',
     position: 'Software Developer @ BTB Telecom',
     period: '2019 - 2019',
     description: 
     '- Trabalhei no desenvolvimento de um novo sistema interno de faturamento, migrando de uma solução legada para uma plataforma moderna e de alta performance, o que melhorou significativamente a velocidade, usabilidade e produtividade dos times de suporte, vendas e financeiro.\n\n- Liderei toda a migração de um sistema monolítico legado para uma arquitetura escalável e de fácil manutenção, reduzindo a dívida técnica e aumentando o desempenho da plataforma.\n\n- Construí uma interface responsiva e focada no usuário com React.js, aprimorando a usabilidade e proporcionando uma experiência fluida para as equipes internas.\n\n- Liderei o desenvolvimento de APIs em Node.js integrando bancos de dados relacionais (MySQL) e não relacionais (MongoDB) para dar suporte a operações financeiras complexas com alta confiabilidade.\n\n- Desenvolvi um módulo de relatórios que agregava dados de diversas unidades de negócio da América Latina, processando consultas complexas e grandes volumes de dados.\n\n- Implementei o Elasticsearch para permitir painéis analíticos em tempo real e geração rápida de relatórios, acelerando drasticamente a tomada de decisão.',
     technologies: ['React', 'NodeJs', 'MongoDB','MySQL','Elasticsearch', 'Typescript', 'Microservices Architecture'],
    },
    {
     id: '4',
     company: 'Dr Consulta',
     position: 'Software Developer @ Dr Consulta',
     period: '2017 - 2018',
     description: 
     '- Contribuí para o desenvolvimento e manutenção de uma plataforma web voltada para saúde, aprimorando módulos principais e garantindo a confiabilidade do sistema.\n\n- Trabalhei em funcionalidades centrais utilizando JavaScript, PHP e MySQL, melhorando a performance e sustentando o crescimento da plataforma.\n\n- Liderei o suporte de nível 3 (L3), realizando a triagem de solicitações de novas funcionalidades e coordenando melhorias no sistema de prontuário eletrônico (EMR), assegurando o bom funcionamento para clínicas e profissionais de saúde.\n\n- Desenhei e desenvolvi um sistema de relatórios que consolidava dados de receita, performance e metas de vendas de diversas clínicas, permitindo que o time comercial tomasse decisões baseadas em dados.\n\n- Atuei como ponte entre as equipes de suporte e desenvolvimento, ministrando treinamentos técnicos e sessões de onboarding sobre novas funcionalidades, o que aumentou a adoção e reduziu chamados recorrentes de suporte.',
     technologies: ['JavaScript', 'PHP', 'MySQL'],
    },
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  )

  return (
    <Section
      id="experience"
      title="Experiência Profissional"
      bgColor="bg-background"
    >
      <div className="grid md:grid-cols-[300px_1fr] gap-8 animate-slide-up">
        {/* Lista de Empresas */}
        <div className="space-y-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-mono ${
                selectedExperience.id === exp.id
                  ? 'bg-primary-600/20 text-primary-300 border-l-4 border-primary-500'
                  : 'bg-secondary-800/30 text-secondary-400 hover:bg-secondary-800/50 hover:text-secondary-300 border-l-4 border-transparent'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Detalhes da Experiência */}
        <div className="card p-6">
          <h3 className="text-2xl font-semibold text-white mb-2 font-mono">
            {selectedExperience.position.split('@').map((part, index) => 
              index === 0 ? (
                <span key={index}>{part}</span>
              ) : (
                <span key={index}>
                  <span className="text-[#4ca6ff]">@</span>
                  <span className="text-[#4ca6ff]">{part}</span>
                </span>
              )
            )}
          </h3>
          <p className="text-lg text-primary-400 mb-4 font-mono">
            {selectedExperience.period}
          </p>
          <p className="text-secondary-300 mb-6 font-mono leading-relaxed whitespace-pre-line">
            {selectedExperience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedExperience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm border border-primary-600/30 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

