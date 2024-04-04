export const TAGS_ASC = [
  {
    "count": 0,
    "name": "md-crypt",
  },
  {
    "count": 0,
    "name": "puro",
  },
  {
    "count": 0,
    "name": "dart-tool",
  },
  {
    "count": 0,
    "name": ".net8",
  },
  {
    "count": 0,
    "name": "blazor-ssr",
  },
  {
    "count": 0,
    "name": "mini",
  },
  {
    "count": 0,
    "name": "microsoft.graph",
  },
  {
    "count": 0,
    "name": "announcement",
  },
  {
    "count": 1,
    "name": "ratatui",
  },
  {
    "count": 1,
    "name": "runtime-api",
  },
  {
    "count": 1,
    "name": "setlocationrelativeto",
  },
  {
    "count": 1,
    "name": "dm-crypt",
  },
  {
    "count": 1,
    "name": "gymnasium",
  },
  {
    "count": 1,
    "name": "stablebaseline3",
  },
  {
    "count": 1,
    "name": "azure-network-function-manager",
  },
  {
    "count": 1,
    "name": "azure-route-server",
  },
  {
    "count": 1,
    "name": "contentview+swift",
  },
  {
    "count": 1,
    "name": "back-navigation",
  },
  {
    "count": 1,
    "name": "swift-confidential",
  },
  {
    "count": 1,
    "name": "winui-xaml",
  },
  {
    "count": 1,
    "name": "pyzbar",
  },
  {
    "count": 1,
    "name": "langchain-together",
  },
  {
    "count": 1,
    "name": "retrievalqa",
  },
  {
    "count": 1,
    "name": "lenis",
  },
  {
    "count": 1,
    "name": "gcp-tracing",
  },
  {
    "count": 1,
    "name": "pdf.mjs",
  },
  {
    "count": 1,
    "name": "postbank-pdf2csv",
  },
  {
    "count": 1,
    "name": "openai-gymretro",
  },
  {
    "count": 1,
    "name": "velato",
  },
  {
    "count": 1,
    "name": "cloudsql",
  }
];

export const TAGS_ASC_FIRST_15 = TAGS_ASC.filter((_tag, index) => index < 15);
export const TAGS_ASC_LAST_15 = TAGS_ASC.filter((_tag, index) => index >= 15);

export const TAGS_ASC_FIRST_10 = TAGS_ASC.filter((_tag, index) => index < 10);
export const TAGS_ASC_MIDDLE_10 = TAGS_ASC.filter(
  (_tag, index) => index >= 10 && index < 20);
export const TAGS_ASC_LAST_10 = TAGS_ASC.filter((_tag, index) => index >= 20);

export const TAGS_DESC = [
  {
    "count": 2528878,
    "name": "javascript",
  },
  {
    "count": 2192363,
    "name": "python",
  },
  {
    "count": 1917311,
    "name": "java",
  },
  {
    "count": 1615073,
    "name": "c#",
  },
  {
    "count": 1464462,
    "name": "php",
  },
  {
    "count": 1417225,
    "name": "android",
  },
  {
    "count": 1187330,
    "name": "html",
  },
  {
    "count": 1034792,
    "name": "jquery",
  },
  {
    "count": 806773,
    "name": "c++",
  },
  {
    "count": 804229,
    "name": "css",
  },
  {
    "count": 687251,
    "name": "ios",
  },
  {
    "count": 670789,
    "name": "sql",
  },
  {
    "count": 662013,
    "name": "mysql",
  },
  {
    "count": 505631,
    "name": "r",
  },
  {
    "count": 476697,
    "name": "reactjs",
  },
  {
    "count": 472009,
    "name": "node.js",
  },
  {
    "count": 416708,
    "name": "arrays",
  },
  {
    "count": 403966,
    "name": "c",
  },
  {
    "count": 374612,
    "name": "asp.net",
  },
  {
    "count": 360340,
    "name": "json",
  },
  {
    "count": 343643,
    "name": "python-3.x",
  },
  {
    "count": 338052,
    "name": "ruby-on-rails",
  },
  {
    "count": 337895,
    "name": ".net",
  },
  {
    "count": 334552,
    "name": "sql-server",
  },
  {
    "count": 333416,
    "name": "swift",
  },
  {
    "count": 311823,
    "name": "django",
  },
  {
    "count": 304122,
    "name": "angular",
  },
  {
    "count": 292327,
    "name": "objective-c",
  },
  {
    "count": 286649,
    "name": "pandas",
  },
  {
    "count": 286493,
    "name": "excel",
  }
];

export const TAGS_DESC_FIRST_15 = TAGS_DESC.filter(
  (_tag, index) => index < 15
);
export const TAGS_DESC_LAST_15 = TAGS_DESC.filter(
  (_tag, index) => index >= 15
);

export const TAGS_DESC_FIRST_10 = TAGS_DESC.filter(
  (_tag, index) => index < 10
);
export const TAGS_DESC_MIDDLE_10 = TAGS_DESC.filter(
  (_tag, index) => index >= 10 && index < 20
);
export const TAGS_DESC_LAST_10 = TAGS_DESC.filter(
  (_tag, index) => index >= 20
);

export const TITLES = {
  FETCHING: 'Feching tags. Please wait!',
  ERROR: 'An error occured',
  LOADED: 'List of tags with posts from Stackoverflow',
  'BAD_SORT': 'Bad sort value.',
  'INCORRECT_PAGES_CONFIG': 'Page number is greater than pages count.',
  'BAD_PAGES': 'Bad pages value.',
  'BAD_PAGE': 'Bad page value.',
};

export const KEYS = {
  SORT: 'sort',
  PAGES: 'pages',
  PAGE: 'page',
  TAGS: 'tags',
};

export const VALUES = {
  'SORT_ASC': 'asc',
  'SORT_DESC': 'desc',
  'PAGE_1': '1',
  'PAGE_2': '2',
  'PAGE_3': '3',
};

export const POSSIBLE_PAGES = [
  VALUES['PAGE_1'],
  VALUES['PAGE_2'],
  VALUES['PAGE_3'],
];