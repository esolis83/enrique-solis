
import React from 'react';
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { AboutMePhoto, LeftSection, RightSection, Section, SectionText } from "./AboutStyles";


const About = () => (
  <Section id="about">
    <SectionDivider />

    <LeftSection>
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        <p>I’m a front-end engineer with 11+ years of experience building fast, scalable, and user-focused web applications. I specialize in turning complex ideas into intuitive, high-performing interfaces that deliver real business impact.
        </p>
        <p>My core stack includes JavaScript, React, Vue, HTML, CSS, and PHP, and I’m comfortable owning projects end-to-end—from architecture to polished UI. Over the years, I’ve helped launch and improve products by focusing on performance, accessibility, and clean, maintainable code.</p>
        <p>I learn quickly and adapt even faster, whether that means picking up new frameworks or refining workflows to ship better products.</p>
        <p>Currently based in Los Angeles, I’m looking for a front-end role where I can contribute to meaningful products, collaborate with strong teams, and continue growing as an engineer.</p>
        <p>Outside of work, you’ll usually find me at a live concert or keeping up with sports—both of which keep me energized and inspired.</p>
      </SectionText>
    </LeftSection>
    <RightSection>
      <AboutMePhoto>
        <img src="/images/avatar-one.png" alt="Avatar of Enrique Solis" />
      </AboutMePhoto>
    </RightSection>
  </Section>
);

export default About;
