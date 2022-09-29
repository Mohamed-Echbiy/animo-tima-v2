export interface searchResult {
  searchResult: {
    data: [
      {
        mal_id: number;
        url: "string";
        images: {
          jpg: {
            image_url: "string";
            small_image_url: "string";
            large_image_url: "string";
          };
          webp: {
            image_url: "string";
            small_image_url: "string";
            large_image_url: "string";
          };
        };
        trailer: {
          youtube_id: "string";
          url: "string";
          embed_url: "string";
        };
        approved: boolean;
        titles: ["string"];
        title: "string";
        title_english: "string";
        title_japanese: "string";
        title_synonyms: ["string"];
        type: "TV";
        source: "string";
        episodes: number;
        status: "Finished Airing";
        airing: boolean;
        aired: {
          from: "string";
          to: "string";
          prop: {
            from: {
              day: number;
              month: number;
              year: number;
            };
            to: {
              day: number;
              month: number;
              year: number;
            };
            string: "string";
          };
        };
        duration: "string";
        rating: "G - All Ages";
        score: number;
        scored_by: number;
        rank: number;
        popularity: number;
        members: number;
        favorites: number;
        synopsis: "string";
        background: "string";
        season: "summer";
        year: number;
        broadcast: {
          day: "string";
          time: "string";
          timezone: "string";
          string: "string";
        };
        producers: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
        licensors: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
        studios: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
        genres: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
        explicit_genres: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
        themes: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
        demographics: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
      }
    ];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: {
        count: number;
        per_page: number;
        total: number;
      };
      last_visible_page: number;
    };
  };
}

export interface dataOb {
  data: {
    mal_id: number;
    url: "string";
    images: {
      jpg: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
      webp: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
    };
    trailer: {
      youtube_id: "string";
      url: "string";
      embed_url: "string";
    };
    approved: boolean;
    titles: ["string"];
    title: "string";
    title_english: "string";
    title_japanese: "string";
    title_synonyms: ["string"];
    type: "TV";
    source: "string";
    episodes: number;
    status: "Finished Airing";
    airing: boolean;
    aired: {
      from: "string";
      to: "string";
      prop: {
        from: {
          day: number;
          month: number;
          year: number;
        };
        to: {
          day: number;
          month: number;
          year: number;
        };
        string: "string";
      };
    };
    duration: "string";
    rating: "G - All Ages";
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: "string";
    background: "string";
    season: "summer";
    year: number;
    broadcast: {
      day: "string";
      time: "string";
      timezone: "string";
      string: "string";
    };
    producers: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    licensors: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    studios: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    genres: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    explicit_genres: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    themes: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    demographics: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
  };
}
export interface anilistInfo {
  type: string;
  synonyms: any;
  id: "string";
  title: {
    romaji: "string";
    english: "string";
    native: "string";
    userPreferred: "string";
  };
  malId: "string";
  trailer: {
    site: "string";
    id: "string";
    thumbnail: "string";
  };
  cover: "string";
  image: "string";
  description: "string";
  genres: ["string"];
  releaseDate: "string";
  status: "Ongoing";
  rating: number;
  duration: number;
  studios: ["string"];
  subOrDub: "sub";
  episodes: [
    {
      id: "string";
      number: number;
      title: "string";
      image: "string";
      description: "string";
    }
  ];
  characters: [
    {
      id: number;
      image: string;
      name: {
        first: string;
        full: string | undefined;
        last: string | undefined;
        userPreferred: string;
        native: string;
      };
      role: string;
      voiceActors: [
        {
          id: number;
          name: {
            first: string;
            full: string | undefined;
            last: string | undefined;
            userPreferred: string;
            native: string;
          };
          image: string;
        }
      ];
    }
  ];

  recommendations: [
    {
      cover: string;
      episodes: number;
      id: number;
      image: string;
      malId: number;
      rating: number;
      status: string;
      type: string;
      title: {
        english: string;
        native: string;
        romaji: string;
        userPreferred: string;
      };
    }
  ];
  relations: {
    color: string;
    cover: string;
    episodes: number;
    id: number;
    image: string;
    malId: number;
    rating: number;
    relationType: string;
    status: string;
    title: {
      english: string;
      native: string;
      romaji: string;
      userPreferred: string;
    };
  };
  totalEpisodes: number;
}
export interface RecommendationAnilist {
  cover: string;
  episodes: number;
  id: number;
  image: string;
  malId: number;
  rating: number;
  status: string;
  type: string;
  title: {
    english: string;
    native: string;
    romaji: string;
    userPreferred: string;
  };
}
export interface charactersAnilist {
  id: number;
  image: string;
  name: {
    first: string;
    full: string | undefined;
    last: string | undefined;
    userPreferred: string;
    native: string;
  };
  role: string;
  voiceActors: [
    {
      id: number;
      name: {
        first: string;
        full: string | undefined;
        last: string | undefined;
        userPreferred: string;
        native: string;
      };
      image: string;
    }
  ];
}

export interface fullData {
  pagination: any;
  data: {
    [x: string]: any;
    data: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
        webp: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
      };
      trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
      };
      approved: boolean;
      titles: ["string"];
      title: "string";
      title_english: "string";
      title_japanese: "string";
      title_synonyms: ["string"];
      type: "TV";
      source: "string";
      episodes: number;
      status: "Finished Airing";
      airing: boolean;
      aired: {
        from: "string";
        to: "string";
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
          string: "string";
        };
      };
      duration: "string";
      rating: "G - All Ages";
      score: number;
      scored_by: number;
      rank: number;
      popularity: number;
      members: number;
      favorites: number;
      synopsis: "string";
      background: "string";
      season: "summer";
      year: number;
      broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
      };
      producers: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      studios: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      genres: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      themes: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      relations: [
        {
          relation: "string";
          entry: [
            {
              mal_id: number;
              type: "string";
              name: "string";
              url: "string";
            }
          ];
        }
      ];
      theme: {
        openings: ["string"];
        endings: ["string"];
      };
      external: [
        {
          name: "string";
          url: "string";
        }
      ];
      streaming: [
        {
          name: "string";
          url: "string";
        }
      ];
    };
  };
}

export interface EpisodeVideos {
  mal_id: number;
  title: "string";
  episode: "string";
  url: "string";
  images: {
    jpg: {
      image_url: "string";
    };
  };

  // pagination: {
  //   last_visible_page: number;
  //   has_next_page: boolean;
  // };
}

export interface anime {
  releaseDate: any;
  id: any;
  cover: string;
  description: string;
  malId: number;
  totalEpisodes: number;
  image: string | any;
  mal_id: number;
  url: "string";
  images: {
    jpg: {
      image_url: "string";
      small_image_url: "string";
      large_image_url: "string";
    };
    webp: {
      image_url: "string";
      small_image_url: "string";
      large_image_url: "string";
    };
  };
  trailer: {
    images: {
      large_image_url: string;
      image_url: string;
      small_image_url: string;
    };
    youtube_id: "string";
    url: "string";
    embed_url: "string";
  };
  approved: boolean;
  titles: ["string"];
  title: { userPreferred: string } | any;
  title_english: "string";
  title_japanese: "string";
  title_synonyms: ["string"];
  type: "TV";
  source: "string";
  episodes: number;
  status: "Finished Airing";
  airing: boolean;
  aired: {
    from: "string";
    to: "string";
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: "string";
    };
  };
  duration: "string";
  rating: "G - All Ages";
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: "string";
  background: "string";
  season: "summer";
  year: number;
  broadcast: {
    day: "string";
    time: "string";
    timezone: "string";
    string: "string";
  };
  producers: [
    {
      mal_id: number;
      type: "string";
      name: "string";
      url: "string";
    }
  ];
  licensors: [
    {
      mal_id: number;
      type: "string";
      name: "string";
      url: "string";
    }
  ];
  studios: [
    {
      mal_id: number;
      type: "string";
      name: "string";
      url: "string";
    }
  ];
  genres: [
    {
      mal_id: number;
      type: "string";
      name: "string";
      url: "string";
    }
  ];
  explicit_genres: [
    {
      mal_id: number;
      type: "string";
      name: "string";
      url: "string";
    }
  ];
  themes: [
    {
      mal_id: number;
      type: "string";
      name: "string";
      url: "string";
    }
  ];
  demographics: [
    {
      mal_id: number;
      type: "string";
      name: "string";
      url: "string";
    }
  ];
}
export interface recentEp {
  id: "string";
  malId: number;
  title: {
    romaji: "string";
    english: "string";
    native: "string";
    userPreferred: "string";
  };
  episodeId: "string";
  episodeTitle: "string";
  episodeNumber: number;
  image: "string";
  rating: number;

  entry: {
    mal_id: number;
    url: "string";
    images: {
      jpg: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
      webp: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
    };
    title: "string";
  };
  episodes: [
    {
      mal_id: "string";
      url: "string";
      title: "string";
      premium: true;
    }
  ];
  region_locked: true;
}
