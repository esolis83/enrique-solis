import { useState, useRef } from 'react';
import { trackEvent } from '../utils/analytics';
import { activeProjects } from '../constants/activeProjectsData';

export const PROJECTS_PER_PAGE = 4;
const ALL_TAG = 'All';

export const useActiveProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCode, setExpandedCode] = useState(null);
  const [activeCodeTab, setActiveCodeTab] = useState({});
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showCyclerModal, setShowCyclerModal] = useState(false);
  const [showExternalModal, setShowExternalModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTag, setActiveTag] = useState(ALL_TAG);
  const containerRef = useRef(null);
  const allTags = [ALL_TAG, ...Array.from(new Set(activeProjects.flatMap(p => p.tags || [])))];
  const filteredProjects = activeTag === ALL_TAG ? activeProjects : activeProjects.filter(p => (p.tags || []).includes(activeTag));
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const pageStart = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(pageStart, pageStart + PROJECTS_PER_PAGE);
  const handleTagFilter = (tag) => {
    if (tag === activeTag) return;
    trackEvent('active_project_tag_filter', { tag });
    setActiveTag(tag); setCurrentPage(1); setExpandedCode(null); setActiveCodeTab({});
  };
  const handlePageChange = (page) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    trackEvent('pagination_click', { section: 'active_projects', from_page: currentPage, to_page: page, total_pages: totalPages });
    setCurrentPage(page); setExpandedCode(null); setActiveCodeTab({});
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const toggleCodeExample = (projectId, projectTitle) => {
    const isOpening = expandedCode !== projectId;
    trackEvent('active_project_code_toggle', { project_id: projectId, project_title: projectTitle, state: isOpening ? 'open' : 'close' });
    setExpandedCode(isOpening ? projectId : null);
    if (isOpening) setActiveCodeTab({ ...activeCodeTab, [projectId]: 0 });
  };
  const setCodeTab = (projectId, tabIndex, tabName) => {
    trackEvent('active_project_code_tab', { project_id: projectId, tab: tabName });
    setActiveCodeTab({ ...activeCodeTab, [projectId]: tabIndex });
  };
  const openExternalLink = (project) => {
    trackEvent('active_project_external_link', { project_title: project.title });
    setSelectedProject(project); setShowExternalModal(true);
  };
  const handleDemoClick = (demoType) => {
    if (demoType === 'cycler') { trackEvent('active_project_cycler_demo'); setShowCyclerModal(true); }
    else { trackEvent('active_project_avatar_demo'); setShowAvatarModal(true); }
  };
  return {
    containerRef, allTags, activeTag, currentPage,
    filteredProjects, totalPages, pageStart, visibleProjects,
    expandedCode, activeCodeTab,
    showAvatarModal, showCyclerModal, showExternalModal, selectedProject,
    setShowAvatarModal, setShowCyclerModal, setShowExternalModal,
    handleTagFilter, handlePageChange, toggleCodeExample, setCodeTab,
    openExternalLink, handleDemoClick,
  };
};
