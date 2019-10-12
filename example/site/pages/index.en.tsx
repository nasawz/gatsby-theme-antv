import React from 'react';
import { Skeleton } from 'antd';
import Layout from '@antv/gatsby-theme-antv/site/components/layout';
import SEO from '@antv/gatsby-theme-antv/site/components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="en" />
    <div style={{ margin: '0 auto', padding: '0 80px' }}>
      Home Page
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </Layout>
);

export default IndexPage;