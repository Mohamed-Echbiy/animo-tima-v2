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

export interface fullData {
  data: {
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
