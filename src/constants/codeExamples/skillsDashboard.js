export const skillsDashboard = {
  title: 'Skills Dashboard - Hover-Reveal Proficiency',
  description: 'Each skill tag hides its name on hover and slides up a color-coded proficiency label — driven entirely by a CSS ::after pseudo-element and a data-level attribute. No JavaScript required for the interaction.',
  sections: [
    {
      name: 'Data Structure',
      language: 'javascript',
      code: `const skillCategories = [
  {
    icon: FaCode,
    title: 'Frontend Engineering',
    skills: [
      { name: 'HTML5 / CSS3', level: 'Expert' },
      { name: 'React 18',     level: 'Intermediate' },
      { name: 'TypeScript',   level: 'Intermediate' },
      { name: 'Vue.js',       level: 'Intermediate' },
    ]
  },
  {
    icon: FaServer,
    title: 'Backend & DevOps',
    skills: [
      { name: 'WordPress', level: 'Expert' },
      { name: 'Git',       level: 'Advanced' },
      { name: 'Node.js',   level: 'Intermediate' },
      { name: 'REST APIs', level: 'Familiar' },
    ]
  },
  // ... AI Tooling, Design & UX
];`
    },
    {
      name: 'CSS Hover Trick',
      language: 'css',
      code: `export const SkillTag = styled.span\`
  position: relative;
  overflow: hidden;
  padding: 5px 13px;
  border-radius: 100px;
  transition: background 0.22s ease,
              border-color 0.22s ease,
              color 0.22s ease;

  /* Level label — hidden, sitting below */
  &::after {
    content: attr(data-level);   /* pulls from JSX prop */
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.22s ease,
                transform 0.22s ease;
  }

  /* On hover: fade name out, slide level in */
  &:hover {
    color: transparent;
    &::after { opacity: 1; transform: translateY(0); }
  }

  /* Color per level */
  &:hover[data-level="Expert"] {
    background: rgba(34, 197, 94, 0.14);
    border-color: rgba(34, 197, 94, 0.55);
    &::after { color: #22c55e; }
  }
  &:hover[data-level="Advanced"] {
    background: rgba(191, 73, 86, 0.18);
    border-color: rgba(191, 73, 86, 0.7);
    &::after { color: #bf4956; }
  }
  &:hover[data-level="Intermediate"] {
    background: rgba(245, 158, 11, 0.14);
    border-color: rgba(245, 158, 11, 0.55);
    &::after { color: #f59e0b; }
  }
  &:hover[data-level="Familiar"] {
    background: rgba(141, 143, 145, 0.14);
    border-color: rgba(141, 143, 145, 0.55);
    &::after { color: #8d8f91; }
  }
\`;`
    },
    {
      name: 'JSX Render',
      language: 'jsx',
      code: `const Skills = () => (
  <Section id="tech">
    <LegendRow>
      <LegendHint>Hover a skill to see proficiency →</LegendHint>
      { levels.map(({ label, color }) => (
        <LegendItem key={label}>
          <LegendDot color={color} />
          {label}
        </LegendItem>
      )) }
    </LegendRow>

    <SkillsGrid>
      { skillCategories.map(({ icon: Icon, title, skills }) => (
        <SkillCard key={title}>
          <CardHeader>
            <CardIcon><Icon /></CardIcon>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <TagGrid>
            { skills.map(({ name, level }) => (
              // data-level is read by CSS ::after content
              <SkillTag key={name} data-level={level}>
                {name}
              </SkillTag>
            )) }
          </TagGrid>
        </SkillCard>
      )) }
    </SkillsGrid>
  </Section>
);`
    }
  ]
};
