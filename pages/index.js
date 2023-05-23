import ElasticsearchAPIConnector from '@elastic/search-ui-elasticsearch-connector';
import EnginesAPIConnector from '@elastic/search-ui-engines-connector';
import { SearchProvider, Results, } from '@elastic/react-search-ui';

const elasticsearchA = {
  apiConnector: new ElasticsearchAPIConnector({
    host: 'https://enterprise-search-8-8-cors.es.europe-west1.gcp.cloud.es.io',
    apiKey: 'UGIwalNvZ0JhVHA3Q2lULWhBY206c3ZXeEVBQjBTUnEwcktiUjVrRVZTZw==',
    index: 'search-a',
  }),
  searchQuery: {
    search_fields: {
      name: {},
    },
    result_fields: {
      name: {
        raw: {},
      },
    },
  },
};

const elasticsearchB = {
  apiConnector: new ElasticsearchAPIConnector({
    host: 'https://enterprise-search-8-8-cors.es.europe-west1.gcp.cloud.es.io',
    apiKey: 'UGIwalNvZ0JhVHA3Q2lULWhBY206c3ZXeEVBQjBTUnEwcktiUjVrRVZTZw==',
    index: 'search-b',
  }),
  searchQuery: {
    search_fields: {
      name: {},
    },
    result_fields: {
      name: {
        raw: {},
      },
    },
  },
};

const searchApplication = {
  apiConnector: new EnginesAPIConnector({
    host: 'https://enterprise-search-8-8-cors.es.europe-west1.gcp.cloud.es.io',
    apiKey: 'UGIwalNvZ0JhVHA3Q2lULWhBY206c3ZXeEVBQjBTUnEwcktiUjVrRVZTZw==',
    engineName: 'ab',
  }),
  searchQuery: {
    search_fields: {
      name: {},
    },
    result_fields: {
      name: {
        raw: {},
      },
    },
  },
};

export default function HomePage () {
  return (
    <table border="1">
      <tbody>
        <tr>
          <th>Index: search-a</th>
          <th>Index: search-b</th>
          <th>Search application</th>
        </tr>
        <tr>
          <td>
            <SearchProvider config={elasticsearchA}><Results /></SearchProvider>
          </td>
          <td>
            <SearchProvider config={elasticsearchB}><Results /></SearchProvider>
          </td>
          <td>
            <SearchProvider config={searchApplication}><Results /></SearchProvider>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
