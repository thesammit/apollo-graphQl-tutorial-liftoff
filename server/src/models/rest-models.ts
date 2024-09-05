export type TrackModel = {
    id: string;
    title: string;
    authorId: string;
    thumbnail: string;
    length: number;
    modulesCount: number;
    description: string;
    numberOfViews: number;
    topic: string;
    numberOfLikes: 0;
    createdAt: string;
    modules: string[]
};

export type AuthorModel = {
    id: string;
    name: string;
    photo: string;
};

export type ModuleModel = {
    id: string;
    title: string;
    length: number;
    trackId: string;
    authorId: string;
    topic: string;
    content: string;
    videoUrl: string;
};
