import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, ModuleModel, TrackModel } from "../models";

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
        return this.get<TrackModel[]>('tracks');
    }

    getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
    }

    getTrack(trackId: string) {
        return this.get<TrackModel>(`track/${encodeURIComponent(trackId)}`)
    }

    getTrackModules(trackId: string) {
        return this.get<ModuleModel[]>(`track/${encodeURIComponent(trackId)}/modules`)
    }

    getModule(moduleId: string) {
        return this.get<ModuleModel>(`module/${encodeURIComponent(moduleId)}`)
    }

    incrementTrackViews(trackId: string) {
        return this.patch<TrackModel>(`track/${encodeURIComponent(trackId)}/numberOfViews`);
    }
}