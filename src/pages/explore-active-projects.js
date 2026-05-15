import React from 'react';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ActiveProjects from '../components/ActiveProjects/ActiveProjects';

const ExploreActiveProjects = () => {
  return (
    <Layout>
      <Section>
        <ActiveProjects />
      </Section>
    </Layout>
  );
};

export default ExploreActiveProjects;
