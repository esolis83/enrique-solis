import React from 'react';
import {
  ActiveProjectsContainer,
  PageTitle,
  PageSubtitle,
  ProjectsGrid,
  FilterBar,
  FilterButton,
  EmptyState
} from './ActiveProjectsLayout.styles';
import AvatarModal from './AvatarModal';
import SkillCyclerModal from './SkillCyclerModal';
import ExternalLinkModal from './ExternalLinkModal';
import ActiveProjectCard from './ActiveProjectCard';
import ActiveProjectsPagination from './ActiveProjectsPagination';
import { useActiveProjects, PROJECTS_PER_PAGE } from '../../hooks/useActiveProjects';

const ProjectModals = ({ showAvatarModal, showCyclerModal, showExternalModal, selectedProject, setShowAvatarModal, setShowCyclerModal, setShowExternalModal }) => (
  <>
    <AvatarModal isOpen={ showAvatarModal } onClose={ () => setShowAvatarModal(false) } />
    <SkillCyclerModal isOpen={ showCyclerModal } onClose={ () => setShowCyclerModal(false) } />
    <ExternalLinkModal isOpen={ showExternalModal } onClose={ () => setShowExternalModal(false) } project={ selectedProject } />
  </>
);

const ActiveProjects = () => {
  const {
    containerRef, allTags, activeTag, currentPage, filteredProjects,
    totalPages, pageStart, visibleProjects, expandedCode, activeCodeTab,
    showAvatarModal, showCyclerModal, showExternalModal, selectedProject,
    setShowAvatarModal, setShowCyclerModal, setShowExternalModal,
    handleTagFilter, handlePageChange, toggleCodeExample, setCodeTab,
    openExternalLink, handleDemoClick,
  } = useActiveProjects();

  return (
    <>
      <ProjectModals
        showAvatarModal={ showAvatarModal } showCyclerModal={ showCyclerModal }
        showExternalModal={ showExternalModal } selectedProject={ selectedProject }
        setShowAvatarModal={ setShowAvatarModal } setShowCyclerModal={ setShowCyclerModal }
        setShowExternalModal={ setShowExternalModal }
      />
      <ActiveProjectsContainer ref={ containerRef }>
        <PageTitle>Active Projects</PageTitle>
        <PageSubtitle>
          A living collection of projects, snippets, and experiments — each built to sharpen a specific skill. Browse by tag to explore CSS tricks, JavaScript techniques, best practices, and the latest trends in modern web development.
        </PageSubtitle>
        <FilterBar>
          { allTags.map(tag => (
            <FilterButton key={ tag } active={ activeTag === tag } onClick={ () => handleTagFilter(tag) }>
              { tag }
            </FilterButton>
          )) }
        </FilterBar>
        <ProjectsGrid>
          { visibleProjects.length === 0 && <EmptyState>No projects match the selected tag.</EmptyState> }
          { visibleProjects.map((project) => (
            <ActiveProjectCard
              key={ project.id }
              project={ project }
              isExpanded={ expandedCode === project.id }
              currentTab={ activeCodeTab[project.id] || 0 }
              onToggleCode={ () => toggleCodeExample(project.id, project.title) }
              onTabChange={ (idx, name) => setCodeTab(project.id, idx, name) }
              onExternalLink={ openExternalLink }
              onDemoClick={ handleDemoClick }
            />
          )) }
        </ProjectsGrid>
        { totalPages > 1 && (
          <ActiveProjectsPagination
            currentPage={ currentPage } totalPages={ totalPages } pageStart={ pageStart }
            projectsPerPage={ PROJECTS_PER_PAGE } totalCount={ filteredProjects.length }
            activeTag={ activeTag } onPageChange={ handlePageChange }
          />
        ) }
      </ActiveProjectsContainer>
    </>
  );
};

export default ActiveProjects;
