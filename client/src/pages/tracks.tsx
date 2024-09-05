import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";

/** TRACKS query to retrieve all tracks */
const TRACKS = gql(`
  query getTracks {
  tracksForHome {
    id
    length
    title
    thumbnail
    author {
      id
      name
      photo
    }
    modulesCount
  }
}
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return <Layout grid>
    <QueryResult loading={loading} error={error} data={data}>
      {data?.tracksForHome?.map((track) => (
        <TrackCard track={track} key={track.id} />
      ))}
    </QueryResult>
  </Layout>;
};

export default Tracks;
