import React from 'react';
import { FaCode, FaServer, FaBrain, FaPalette } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import {
  SkillsGrid, SkillCard, CardHeader, CardIcon, CardTitle,
  TagGrid, SkillTag, LegendRow, LegendItem, LegendDot, LegendHint
} from './SkillsStyles';

const skillCategories = [
  {
    icon: FaCode,
    title: 'Frontend Engineering',
    skills: [
      { name: 'HTML5 / CSS3', level: 'Expert' },
      { name: 'React 18', level: 'Intermediate' },
      { name: 'Styled Components', level: 'Intermediate' },
      { name: 'Bootstrap', level: 'Expert' },
      { name: 'Next.js App Router', level: 'Intermediate' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'Vue.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
    ]
  },
  {
    icon: FaServer,
    title: 'Backend & DevOps',
    skills: [
      { name: 'WordPress', level: 'Expert' },
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'GitLab', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Intermediate' },
      { name: 'CI/CD Pipelines', level: 'Intermediate' },
      { name: 'FTP Deployment', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Familiar' },
      { name: 'Vercel', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'MySQL', level: 'Familiar' },
    ]
  },
  {
    icon: FaBrain,
    title: 'AI & Developer Tooling',
    skills: [
      { name: 'VS Code', level: 'Expert' },
      { name: 'Claude AI', level: 'Intermediate' },
      { name: 'GitHub Copilot', level: 'Intermediate' },
      { name: 'Claude Code', level: 'Familiar' },
      { name: 'Cursor', level: 'Familiar' },
      { name: 'AI Agents', level: 'Familiar' },
      { name: 'Prompt Engineering', level: 'Familiar' },
    ]
  },
  {
    icon: FaPalette,
    title: 'Design & UX',
    skills: [
      { name: 'Responsive Design', level: 'Expert' },
      { name: 'Figma', level: 'Advanced' },
      { name: 'Component Libraries', level: 'Advanced' },
      { name: 'Adobe Photoshop', level: 'Advanced' },
      { name: 'Accessibility (a11y)', level: 'Advanced' },
    ]
  }
];

const levels = [
  { label: 'Expert', color: '#22c55e' },
  { label: 'Advanced', color: '#bf4956' },
  { label: 'Intermediate', color: '#f59e0b' },
  { label: 'Familiar', color: '#8d8f91' },
];

const Skills = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Skills & Tech</SectionTitle>
    <SectionText>
      A full-stack toolkit built for modern product teams — from React and TypeScript on the frontend to AI-assisted workflows and developer tooling.
    </SectionText>

    <LegendRow>
      <LegendHint>Hover a skill to see proficiency →</LegendHint>
      { levels.map(({ label, color }) => (
        <LegendItem key={ label }>
          <LegendDot color={ color } />
          { label }
        </LegendItem>
      )) }
    </LegendRow>

    <SkillsGrid>
      { skillCategories.map(({ icon: Icon, title, skills }) => (
        <SkillCard key={ title }>
          <CardHeader>
            <CardIcon><Icon /></CardIcon>
            <CardTitle>{ title }</CardTitle>
          </CardHeader>
          <TagGrid>
            { skills.map(({ name, level }) => (
              <SkillTag key={ name } data-level={ level }>{ name }</SkillTag>
            )) }
          </TagGrid>
        </SkillCard>
      )) }
    </SkillsGrid>
  </Section>
);

export default Skills;
