import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { trackEvent } from '../../utils/analytics';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      { projects.map(({ id, image, title, description, tags, source, visit, alt }) => {
        return (
          <BlogCard key={ id }>
            <Img src={ image } alt={ alt } />
            <TitleContent>
              <HeaderThree title>{ title }</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{ description }</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                { tags.map((tags, id) => {
                  return <Tag key={ id }>{ tags }</Tag>;
                }) }
              </TagList>
            </div>
            <UtilityList>
              <li><ExternalLinks href={ visit } onClick={ () => trackEvent('project_link_click', { project_title: title, link_type: 'live' }) }>Live Site</ExternalLinks></li>
              <li><ExternalLinks href={ source } onClick={ () => trackEvent('project_link_click', { project_title: title, link_type: 'source' }) }>Source</ExternalLinks></li>
            </UtilityList>
          </BlogCard>
        );
      }) }
    </GridContainer>
  </Section>
);

export default Projects;