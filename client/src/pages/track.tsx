import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Layout, QueryResult } from "../components";
import { gql } from "../__generated__";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql(`
query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    author {
      id
      name
      photo
    }
    modulesCount
    numberOfViews
    title
    description
    length
    thumbnail
    modules {
      id
      title
      length
    }
  }
}
`);

const Track = () => {
  const { trackId = "" } = useParams();
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId }
  });
  return <Layout>
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track} />
    </QueryResult>
  </Layout>
}

export default Track;