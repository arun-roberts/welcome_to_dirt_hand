export type Record = {
    title: string;
    lyrics: {
        title: string;
        text: (string | JSX.Element)[];
    }[];
    linerNotes: string;
    bandcampEmbed: {
        src: string;
        href: string;
    };
};

export type What = { 
    title: string; 
    lyrics: { 
        title: string; 
        text: (string | JSX.Element)[]; 
    }[]; 
    linerNotes: string; 
    bandcampEmbed: { 
        src: string; 
        href: string; 
    }; 
}[];

export type Gig = {
    date: string; 
    title: string; 
    venue: string; 
    link?: string; 
    venueLink?: string
};

export type Thumbnails = {
    url: string;
    width: number;
    height: number;
  };

export type Playlist = {
    kind: string;
    etag: string;
    items: {
        kind: string;
        etag: string;
        id: string;
        snippet: {
            publishedAt: string;
            channelId: string;
            title: string;
            description: string;
            thumbnails: {
              default: Thumbnails;
              medium: Thumbnails;
              high: Thumbnails;
              standard: Thumbnails;
              maxres: Thumbnails;
            };
            channelTitle: string;
            playlistId: string;
            position: number;
            resourceId: { kind: string; videoId: string; };
            videoOwnerChannelTitle: string;
            videoOwnerChannelId: string;
          };
    }[];
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
};