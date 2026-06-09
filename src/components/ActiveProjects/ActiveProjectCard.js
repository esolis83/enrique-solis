import React from 'react';
import { trackEvent } from '../../utils/analytics';
import {
  ProjectCard,
  ProjectImageWrapper,
  ProjectImage,
  ProjectContent,
  ProjectStatus,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechLabel,
  TagContainer,
  Tag,
  FeaturesSection,
  FeaturesList,
  FeatureItem,
  HeroImagePlaceholder,
  DemoButton,
} from './ActiveProjectsCard.styles';
import {
  CodeSection,
  CodeTitle,
  CodeBlock,
  CodeLanguage,
  CodeSectionTabs,
  CodeTab,
  ContactButton,
  ExternalLinkButton,
} from './ActiveProjectsCode.styles';
import { codeExamples } from '../../constants/codeExamples';

const ProjectCardImage = ({ project, onDemoClick }) => {
  if (project.isInteractive) {
    return (
      <HeroImagePlaceholder
        style={ {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.heroImage || '/fallback-hero.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        } }
      >
        <div style={ { position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
          <div style={ { fontSize: '3rem', marginBottom: '1rem' } }>✨</div>
          <DemoButton onClick={ () => onDemoClick(project.demoType) }>
            Click to See Animation
          </DemoButton>
        </div>
      </HeroImagePlaceholder>
    );
  }
  if (project.heroImage) {
    return <ProjectImage src={ project.heroImage } alt={ project.title } />;
  }
  return <HeroImagePlaceholder>{ project.title.charAt(0) }</HeroImagePlaceholder>;
};

const ExternalLinkSection = ({ project, onExternalLink }) => (
  <CodeSection>
    <CodeTitle>Live Demo</CodeTitle>
    <p style={ { fontSize: '1.1rem', color: '#666', margin: '0.8rem 0 1rem 0', lineHeight: '1.6' } }>
      Click below to view the live { project.title.toLowerCase() } in action.
    </p>
    <ExternalLinkButton onClick={ () => onExternalLink(project) }>
      Visit Live Site →
    </ExternalLinkButton>
    { project.disclaimer && (
      <p style={ { fontSize: '1rem', color: '#888', marginTop: '0.5rem', fontStyle: 'italic' } }>
        { project.disclaimer }
      </p>
    ) }
  </CodeSection>
);

const CodeToggleSection = ({ codeExample, isExpanded, currentTab, onToggleCode, onTabChange, projectTitle }) => (
  <CodeSection>
    <CodeTitle style={ { cursor: 'pointer' } } onClick={ onToggleCode }>
      { isExpanded ? '▼ ' : '▶ ' }
      How it Works
    </CodeTitle>

    { isExpanded && (
      <>
        <p style={ { fontSize: '1.1rem', color: '#666', margin: '0.8rem 0 0.5rem 0', lineHeight: '1.6' } }>
          { codeExample.description }
        </p>

        { codeExample.sections ? (
          <>
            <CodeSectionTabs>
              { codeExample.sections.map((section, idx) => (
                <CodeTab
                  key={ idx }
                  active={ currentTab === idx }
                  onClick={ () => onTabChange(idx, section.name) }
                >
                  { section.name }
                </CodeTab>
              )) }
            </CodeSectionTabs>
            <CodeLanguage>{ codeExample.sections[currentTab].language }</CodeLanguage>
            <CodeBlock>{ codeExample.sections[currentTab].code }</CodeBlock>
          </>
        ) : (
          <>
            <CodeLanguage>{ codeExample.language }</CodeLanguage>
            <CodeBlock>{ codeExample.code }</CodeBlock>
          </>
        ) }

        <ContactButton
          href="mailto:e_solis83@yahoo.com?subject=Question about your code"
          onClick={ () => trackEvent('contact_click', { method: 'email_code_question', project_title: projectTitle }) }
        >
          📧 Questions? Email me
        </ContactButton>
      </>
    ) }
  </CodeSection>
);

const ProjectCardCode = ({ project, codeExample, isExpanded, currentTab, onToggleCode, onTabChange, onExternalLink }) => {
  if (project.externalLink) return <ExternalLinkSection project={ project } onExternalLink={ onExternalLink } />;
  if (!codeExample) return null;
  return (
    <CodeToggleSection
      codeExample={ codeExample }
      isExpanded={ isExpanded }
      currentTab={ currentTab }
      onToggleCode={ onToggleCode }
      onTabChange={ onTabChange }
      projectTitle={ project.title }
    />
  );
};

const ActiveProjectCard = ({
  project,
  isExpanded,
  currentTab,
  onToggleCode,
  onTabChange,
  onExternalLink,
  onDemoClick,
}) => {
  const codeExample = codeExamples[project.codeExample];

  return (
    <ProjectCard>
      <ProjectImageWrapper>
        <ProjectCardImage project={ project } onDemoClick={ onDemoClick } />
      </ProjectImageWrapper>

      <ProjectContent>
        <ProjectStatus status={ project.status }>
          { project.status }
        </ProjectStatus>

        <ProjectTitle>{ project.title }</ProjectTitle>
        <ProjectDescription>{ project.description }</ProjectDescription>

        <TechStack>
          <TechLabel>Technologies</TechLabel>
          <TagContainer>
            { project.technologies.map((tech, idx) => (
              <Tag key={ idx }>{ tech }</Tag>
            )) }
          </TagContainer>
        </TechStack>

        <FeaturesSection>
          <TechLabel>Key Features</TechLabel>
          <FeaturesList>
            { project.features.map((feature, idx) => (
              <FeatureItem key={ idx }>{ feature }</FeatureItem>
            )) }
          </FeaturesList>
        </FeaturesSection>

        <ProjectCardCode
          project={ project }
          codeExample={ codeExample }
          isExpanded={ isExpanded }
          currentTab={ currentTab }
          onToggleCode={ onToggleCode }
          onTabChange={ onTabChange }
          onExternalLink={ onExternalLink }
        />
      </ProjectContent>
    </ProjectCard>
  );
};

export default ActiveProjectCard;
