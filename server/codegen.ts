import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema/index.ts",
    generates: {
        "./src/models/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: "./context#DataSourceContext",
                mappers: {
                    Track: "./rest-models#TrackModel",
                    Author: "./rest-models#AuthorModel",
                    Module: "./rest-models#ModuleModel"
                },
            },
        },
    }
};

export default config;