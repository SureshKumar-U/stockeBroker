
import {Client}  from '@opensearch-project/opensearch'
const OpenSearchClient = new Client({
  node: process.env.OPENSEARCH_SERVICE_URI
});

export default OpenSearchClient