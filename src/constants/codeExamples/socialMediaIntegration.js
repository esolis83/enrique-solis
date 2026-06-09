export const socialMediaIntegration = {
  title: 'Social Media API Integration',
  description: 'Fetching and aggregating data from multiple social platforms',
  language: 'javascript',
  code: `// GraphQL query for aggregated social metrics
const GET_SOCIAL_METRICS = gql\`
  query getSocialMetrics($userId: ID!, $platform: String!) {
    socialMetrics(userId: $userId, platform: $platform) {
      followers
      engagement
      reachLastMonth
      posts {
        id
        content
        likes
        comments
        shares
        createdAt
      }
    }
  }
\`;

// React Hook to fetch metrics
const useSocialMetrics = (userId) => {
  const { data, loading, error } = useQuery(GET_SOCIAL_METRICS, {
    variables: { userId }
  });

  return { metrics: data?.socialMetrics, loading, error };
};`
};
