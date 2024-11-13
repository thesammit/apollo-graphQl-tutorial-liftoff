import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { TrackAPI } from "./datasources/track-api";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    trackAPI: new TrackAPI({ cache }),
                },
            };
        },
        listen: {
            port: 4000,
        },
    });
    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
    `)
}

startApolloServer();