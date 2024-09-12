import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { gql } from "../__generated__";

export const GET_TRACK_MODULE = gql(`
query GetTrackModule($trackId: ID!, $moduleId: ID!) {
  track(id: $trackId) {
    id
    title
    modules {
      id
      title
      length
    }
  }
  module(id: $moduleId) {
    id
    title
    videoUrl
    content
  }
}
`);

const Module = () => {
    const { trackId = "", moduleId = "" } = useParams();
    const { loading, data, error } = useQuery(GET_TRACK_MODULE, {
        variables: {
            trackId,
            moduleId
        }
    })
    return <Layout fullWidth>
        <QueryResult loading={loading} error={error} data={data}>
            <ModuleDetail module={data?.module} track={data?.track} />
        </QueryResult>
    </Layout>
}

export default Module;

// to={`/track/${trackId}/module/${moduleId}`}