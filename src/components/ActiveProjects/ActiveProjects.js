import React, { useState, useRef } from 'react';
import { trackEvent } from '../../utils/analytics';
import {
  ActiveProjectsContainer,
  PageTitle,
  PageSubtitle,
  ProjectsGrid,
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
  CodeSection,
  CodeTitle,
  CodeBlock,
  CodeLanguage,
  HeroImagePlaceholder,
  CodeSectionTabs,
  CodeTab,
  ContactButton,
  DemoButton,
  ExternalLinkButton,
  PaginationWrapper,
  PageButton,
  PageArrow,
  PageInfo
} from './ActiveProjectsStyles';
import { activeProjects } from '../../constants/activeProjectsData';
import { codeExamples } from '../../constants/codeExamples';
import AvatarModal from './AvatarModal';
import ExternalLinkModal from './ExternalLinkModal';

const PROJECTS_PER_PAGE = 4;

const ActiveProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCode, setExpandedCode] = useState(null);
  const [activeCodeTab, setActiveCodeTab] = useState({});
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showExternalModal, setShowExternalModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const totalPages = Math.ceil(activeProjects.length / PROJECTS_PER_PAGE);
  const pageStart = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = activeProjects.slice(pageStart, pageStart + PROJECTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    trackEvent('pagination_click', {
      section: 'active_projects',
      from_page: currentPage,
      to_page: page,
      total_pages: totalPages
    });
    setCurrentPage(page);
    setExpandedCode(null);
    setActiveCodeTab({});
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleCodeExample = (projectId, projectTitle) => {
    const isOpening = expandedCode !== projectId;
    trackEvent('active_project_code_toggle', { project_id: projectId, project_title: projectTitle, state: isOpening ? 'open' : 'close' });
    setExpandedCode(isOpening ? projectId : null);
    if (isOpening) {
      setActiveCodeTab({ ...activeCodeTab, [projectId]: 0 });
    }
  };

  const setCodeTab = (projectId, tabIndex, tabName) => {
    trackEvent('active_project_code_tab', { project_id: projectId, tab: tabName });
    setActiveCodeTab({ ...activeCodeTab, [projectId]: tabIndex });
  };

  const openExternalLink = (project) => {
    trackEvent('active_project_external_link', { project_title: project.title });
    setSelectedProject(project);
    setShowExternalModal(true);
  };

  return (
    <>
      <AvatarModal isOpen={ showAvatarModal } onClose={ () => setShowAvatarModal(false) } />
      <ExternalLinkModal
        isOpen={ showExternalModal }
        onClose={ () => setShowExternalModal(false) }
        project={ selectedProject }
      />

      <ActiveProjectsContainer ref={ containerRef }>
        <PageTitle>Active Projects</PageTitle>
        <PageSubtitle>
          Explore my current work in progress and completed projects. Each project showcases modern development practices, clean code, and innovative solutions.
        </PageSubtitle>

        <ProjectsGrid>
          { visibleProjects.map((project) => {
            const codeExample = codeExamples[project.codeExample];
            const currentTab = activeCodeTab[project.id] || 0;

            return (
              <ProjectCard key={ project.id }>
                <ProjectImageWrapper>
                  { project.isInteractive ? (
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
                        <DemoButton onClick={ () => { trackEvent('active_project_avatar_demo'); setShowAvatarModal(true); } }>
                          Click to See Animation
                        </DemoButton>
                      </div>
                    </HeroImagePlaceholder>
                  ) : project.heroImage ? (
                    <ProjectImage src={ project.heroImage } alt={ project.title } />
                  ) : (
                    <HeroImagePlaceholder>
                      { project.title.charAt(0) }
                    </HeroImagePlaceholder>
                  ) }
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

                  { project.externalLink ? (
                    <CodeSection>
                      <CodeTitle>Live Demo</CodeTitle>
                      <p style={ { fontSize: '1.1rem', color: '#666', margin: '0.8rem 0 1rem 0', lineHeight: '1.6' } }>
                        Click below to view the live { project.title.toLowerCase() } in action.
                      </p>
                      <ExternalLinkButton onClick={ () => openExternalLink(project) }>
                        Visit Live Site →
                      </ExternalLinkButton>
                      { project.disclaimer && (
                        <p style={ { fontSize: '1rem', color: '#888', marginTop: '0.5rem', fontStyle: 'italic' } }>
                          { project.disclaimer }
                        </p>
                      ) }
                    </CodeSection>
                  ) : codeExample && (
                    <CodeSection>
                      <CodeTitle
                        style={ { cursor: 'pointer' } }
                        onClick={ () => toggleCodeExample(project.id, project.title) }
                      >
                        { expandedCode === project.id ? '▼ ' : '▶ ' }
                        How it Works
                      </CodeTitle>

                      { expandedCode === project.id && (
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
                                    onClick={ () => setCodeTab(project.id, idx, section.name) }
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
                            onClick={ () => trackEvent('contact_click', { method: 'email_code_question', project_title: project.title }) }
                          >
                            📧 Questions? Email me
                          </ContactButton>
                        </>
                      ) }
                    </CodeSection>
                  ) }
                </ProjectContent>
              </ProjectCard>
            );
          }) }
        </ProjectsGrid>

        { totalPages > 1 && (
          <>
            <PaginationWrapper>
              <PageArrow
                type="button"
                disabled={ currentPage === 1 }
                onClick={ () => handlePageChange(currentPage - 1) }
                aria-label="Previous page"
              >
                ← Prev
              </PageArrow>

              { Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <PageButton
                  key={ page }
                  type="button"
                  active={ page === currentPage }
                  onClick={ () => handlePageChange(page) }
                  aria-label={ `Go to page ${page}` }
                  aria-current={ page === currentPage ? 'page' : undefined }
                >
                  { page }
                </PageButton>
              )) }

              <PageArrow
                type="button"
                disabled={ currentPage === totalPages }
                onClick={ () => handlePageChange(currentPage + 1) }
                aria-label="Next page"
              >
                Next →
              </PageArrow>
            </PaginationWrapper>

            <PageInfo>
              Showing { pageStart + 1 }–{ Math.min(pageStart + PROJECTS_PER_PAGE, activeProjects.length) } of { activeProjects.length } projects
            </PageInfo>
          </>
        ) }

      </ActiveProjectsContainer>
    </>
  );
};

export default ActiveProjects;
