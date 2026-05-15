import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';
import {
  LogoStripContainer,
  LogoOrbit,
  LogoItem,
  LogoLabel
} from './LogoStripStyles';

const LogoStrip = () => {
  const technologies = [
    { icon: SiJavascript, color: '#bf4956', label: 'JavaScript' },
    { icon: SiTypescript, color: '#8d8f91', label: 'TypeScript' },
    { icon: SiReact, color: '#bf4956', label: 'React' },
    { icon: SiNextdotjs, color: '#8d8f91', label: 'Next.js' },
    { icon: SiVuedotjs, color: '#bf4956', label: 'Vue.js' },
    { icon: SiTailwindcss, color: '#8d8f91', label: 'Tailwind CSS' },
    { icon: SiHtml5, color: '#bf4956', label: 'HTML5' },
    { icon: SiCss3, color: '#8d8f91', label: 'CSS3' },
  ];

  return (
    <LogoStripContainer>
      <LogoOrbit>
        { technologies.map((tech, index) => {
          const Icon = tech.icon;
          const delay = `-${index * 2}s`;
          return (
            <LogoItem
              key={ index }
              delay={ delay }
            >
              <Icon size={ 42 } color={ tech.color } />
              <LogoLabel>{ tech.label }</LogoLabel>
            </LogoItem>
          );
        }) }
      </LogoOrbit>
    </LogoStripContainer>
  );
};

export default LogoStrip;
