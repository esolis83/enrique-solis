export const skillCycler = {
  title: 'Skill Phrase Cycler — Fade & Swap Pattern',
  description: 'The trick is two state values working together: phraseVisible drives the CSS opacity, and a setTimeout waits for the fade-out to finish before swapping the text. The interval fires every 2.6s, kicks off a 380ms fade-out, then swaps and fades back in.',
  sections: [
    {
      name: 'Cycle Logic',
      language: 'javascript',
      code: `const skillCycle = [
  'React 18 + TypeScript',
  'Next.js App Router',
  'AI Agents & Claude Code',
  'GitHub Copilot',
  'Shopify & WordPress',
  'Figma & Accessible UI',
];

const [skillIndex, setSkillIndex] = useState(0);
const [phraseVisible, setPhraseVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    // 1. Fade out the current phrase
    setPhraseVisible(false);

    // 2. Wait for the CSS transition to finish,
    //    then swap the text and fade back in
    setTimeout(() => {
      setSkillIndex(i => (i + 1) % skillCycle.length);
      setPhraseVisible(true);
    }, 380); // matches the CSS transition duration

  }, 2600); // how long each phrase stays visible

  // Cleanup: stop the interval when component unmounts
  return () => clearInterval(interval);
}, []);`
    },
    {
      name: 'CSS Transition',
      language: 'css',
      code: `export const SkillCyclerWrap = styled.div\`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #8d8f91;
  font-weight: 500;
  /* min-height prevents layout shift as text swaps */
  min-height: 22px;
\`;

export const SkillPhrase = styled.span\`
  color: #bf4956;
  font-weight: 700;

  /* The entire animation lives here —
     visible prop toggles between 1 and 0 */
  opacity: \${props => props.visible ? 1 : 0};
  transition: opacity 0.35s ease;
\`;`
    },
    {
      name: 'JSX',
      language: 'jsx',
      code: `// The rendered output is just two elements.
// All the animation logic stays in state + CSS.

<SkillCyclerWrap>
  Currently working with:&nbsp;
  <SkillPhrase visible={ phraseVisible }>
    { skillCycle[skillIndex] }
  </SkillPhrase>
</SkillCyclerWrap>`
    }
  ]
};
