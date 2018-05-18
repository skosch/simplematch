'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");
var SharedTypes = require("../SharedTypes.bs.js");

function sampleDataToRaw(rowFormat, sampleParticipants) {
  if (rowFormat) {
    return Belt_List.toArray(Belt_List.flatten(Belt_List.map(sampleParticipants, (function (p) {
                          if (Belt_List.length(p[/* selectedNames */2]) > 0) {
                            return Belt_List.map(p[/* selectedNames */2], (function (param) {
                                          return Belt_List.toArray(/* :: */[
                                                      p[/* name */0],
                                                      /* :: */[
                                                        String(p[/* canMatchWith */1]),
                                                        /* :: */[
                                                          param[0],
                                                          /* :: */[
                                                            String(param[1]),
                                                            /* [] */0
                                                          ]
                                                        ]
                                                      ]
                                                    ]);
                                        }));
                          } else {
                            return /* :: */[
                                    /* array */[
                                      p[/* name */0],
                                      String(p[/* canMatchWith */1])
                                    ],
                                    /* [] */0
                                  ];
                          }
                        }))));
  } else {
    return Belt_List.toArray(Belt_List.map(sampleParticipants, (function (p) {
                      return Belt_List.toArray(Belt_List.flatten(/* :: */[
                                      /* :: */[
                                        p[/* name */0],
                                        /* :: */[
                                          String(p[/* canMatchWith */1]),
                                          /* [] */0
                                        ]
                                      ],
                                      /* :: */[
                                        Belt_List.map(p[/* selectedNames */2], (function (param) {
                                                return param[0];
                                              })),
                                        /* [] */0
                                      ]
                                    ]));
                    })));
  }
}

var IntCmp = SharedTypes.IntCmp;

var StrCmp = SharedTypes.StrCmp;

var OptIntCmp = SharedTypes.OptIntCmp;

var imperialPositions = /* :: */[
  /* record */[
    /* name */"Stormtrooper (Soldier)",
    /* canMatchWith */6,
    /* selectedNames : :: */[
      /* tuple */[
        "Lama Derlin",
        1
      ],
      /* :: */[
        /* tuple */[
          "Cut Rex",
          1
        ],
        /* :: */[
          /* tuple */[
            "Shaak Tekka",
            1
          ],
          /* :: */[
            /* tuple */[
              "Pooja Hutt",
              2
            ],
            /* :: */[
              /* tuple */[
                "Sabine Darklighter",
                3
              ],
              /* :: */[
                /* tuple */[
                  "Orn Trench",
                  4
                ],
                /* :: */[
                  /* tuple */[
                    "Che Maul Mandrell",
                    5
                  ],
                  /* :: */[
                    /* tuple */[
                      "Lyra Papanoida",
                      6
                    ],
                    /* :: */[
                      /* tuple */[
                        "Shaak Tekka",
                        7
                      ],
                      /* :: */[
                        /* tuple */[
                          "Roos Eval",
                          8
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ],
  /* :: */[
    /* record */[
      /* name */"Stormtrooper (Sargeant)",
      /* canMatchWith */2,
      /* selectedNames : :: */[
        /* tuple */[
          "Lyra Papanoida",
          1
        ],
        /* :: */[
          /* tuple */[
            "Roos Eval",
            2
          ],
          /* :: */[
            /* tuple */[
              "Lama Derlin",
              2
            ],
            /* :: */[
              /* tuple */[
                "Pooja Hutt",
                2
              ],
              /* :: */[
                /* tuple */[
                  "Orn Aak",
                  3
                ],
                /* :: */[
                  /* tuple */[
                    "Orn Trench",
                    3
                  ],
                  /* :: */[
                    /* tuple */[
                      "Sabine Darklighter",
                      4
                    ],
                    /* :: */[
                      /* tuple */[
                        "Cut Rex",
                        5
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ],
    /* :: */[
      /* record */[
        /* name */"Stormtrooper (Commander)",
        /* canMatchWith */1,
        /* selectedNames : :: */[
          /* tuple */[
            "Zan Gallia",
            1
          ],
          /* :: */[
            /* tuple */[
              "Rae Nu",
              2
            ],
            /* :: */[
              /* tuple */[
                "Lok Clovis",
                3
              ],
              /* :: */[
                /* tuple */[
                  "Orn Trench",
                  4
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ],
      /* :: */[
        /* record */[
          /* name */"Starfighter Pilot",
          /* canMatchWith */2,
          /* selectedNames : :: */[
            /* tuple */[
              "Rae Nu",
              1
            ],
            /* :: */[
              /* tuple */[
                "Roos Eval",
                2
              ],
              /* :: */[
                /* tuple */[
                  "Lok Clovis",
                  3
                ],
                /* :: */[
                  /* tuple */[
                    "Pooja Hutt",
                    4
                  ],
                  /* :: */[
                    /* tuple */[
                      "Sabine Darklighter",
                      5
                    ],
                    /* :: */[
                      /* tuple */[
                        "Shaak Tekka",
                        6
                      ],
                      /* :: */[
                        /* tuple */[
                          "Jax Antilles",
                          7
                        ],
                        /* :: */[
                          /* tuple */[
                            "Che Maul Mandrell",
                            8
                          ],
                          /* :: */[
                            /* tuple */[
                              "Orn Aak",
                              8
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ],
        /* :: */[
          /* record */[
            /* name */"Imperial Guard",
            /* canMatchWith */4,
            /* selectedNames : :: */[
              /* tuple */[
                "Jax Antilles",
                1
              ],
              /* :: */[
                /* tuple */[
                  "Lama Derlin",
                  2
                ],
                /* :: */[
                  /* tuple */[
                    "Cut Rex",
                    3
                  ],
                  /* :: */[
                    /* tuple */[
                      "Orn Trench",
                      4
                    ],
                    /* :: */[
                      /* tuple */[
                        "Zan Gallia",
                        5
                      ],
                      /* :: */[
                        /* tuple */[
                          "Shaak Tekka",
                          6
                        ],
                        /* :: */[
                          /* tuple */[
                            "Pooja Hutt",
                            7
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ],
          /* [] */0
        ]
      ]
    ]
  ]
];

var imperialCandidates = /* :: */[
  /* record */[
    /* name */"Orn Aak",
    /* canMatchWith */2,
    /* selectedNames : :: */[
      /* tuple */[
        "Imperial Guard",
        1
      ],
      /* :: */[
        /* tuple */[
          "Stormtrooper (Commander)",
          2
        ],
        /* :: */[
          /* tuple */[
            "Starfighter Pilot",
            3
          ],
          /* [] */0
        ]
      ]
    ]
  ],
  /* :: */[
    /* record */[
      /* name */"Lyra Papanoida",
      /* canMatchWith */2,
      /* selectedNames : :: */[
        /* tuple */[
          "Stormtrooper (Sargeant)",
          1
        ],
        /* :: */[
          /* tuple */[
            "Stormtrooper (Soldier)",
            2
          ],
          /* :: */[
            /* tuple */[
              "Starfighter Pilot",
              3
            ],
            /* :: */[
              /* tuple */[
                "Imperial Guard",
                4
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ],
    /* :: */[
      /* record */[
        /* name */"Pooja Hutt",
        /* canMatchWith */1,
        /* selectedNames : :: */[
          /* tuple */[
            "Starfighter Pilot",
            1
          ],
          /* :: */[
            /* tuple */[
              "Stormtrooper (Soldier)",
              2
            ],
            /* :: */[
              /* tuple */[
                "Imperial Guard",
                3
              ],
              /* :: */[
                /* tuple */[
                  "Stormtrooper (Sargeant)",
                  4
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ],
      /* :: */[
        /* record */[
          /* name */"Lama Derlin",
          /* canMatchWith */1,
          /* selectedNames : :: */[
            /* tuple */[
              "Starfighter Pilot",
              1
            ],
            /* :: */[
              /* tuple */[
                "Stormtrooper (Soldier)",
                2
              ],
              /* :: */[
                /* tuple */[
                  "Imperial Guard",
                  3
                ],
                /* :: */[
                  /* tuple */[
                    "Stormtrooper (Sargeant)",
                    4
                  ],
                  /* [] */0
                ]
              ]
            ]
          ]
        ],
        /* :: */[
          /* record */[
            /* name */"Cut Rex",
            /* canMatchWith */3,
            /* selectedNames : :: */[
              /* tuple */[
                "Imperial Guard",
                1
              ],
              /* :: */[
                /* tuple */[
                  "Stormtrooper (Soldier)",
                  2
                ],
                /* :: */[
                  /* tuple */[
                    "Stormtrooper (Sargeant)",
                    2
                  ],
                  /* :: */[
                    /* tuple */[
                      "Stormtrooper (Commander)",
                      3
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]
          ],
          /* :: */[
            /* record */[
              /* name */"Zan Gallia",
              /* canMatchWith */2,
              /* selectedNames : :: */[
                /* tuple */[
                  "Imperial Guard",
                  1
                ],
                /* :: */[
                  /* tuple */[
                    "Stormtrooper (Sargeant)",
                    2
                  ],
                  /* :: */[
                    /* tuple */[
                      "Stormtrooper (Commander)",
                      3
                    ],
                    /* :: */[
                      /* tuple */[
                        "Stormtrooper (Soldier)",
                        2
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ],
            /* :: */[
              /* record */[
                /* name */"Jax Antilles",
                /* canMatchWith */4,
                /* selectedNames : :: */[
                  /* tuple */[
                    "Imperial Guard",
                    1
                  ],
                  /* :: */[
                    /* tuple */[
                      "Stormtrooper (Soldier)",
                      2
                    ],
                    /* :: */[
                      /* tuple */[
                        "Starfighter Pilot",
                        3
                      ],
                      /* :: */[
                        /* tuple */[
                          "Stormtrooper (Sargeant)",
                          4
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ],
              /* :: */[
                /* record */[
                  /* name */"Sabine Darklighter",
                  /* canMatchWith */1,
                  /* selectedNames : :: */[
                    /* tuple */[
                      "Stormtrooper (Soldier)",
                      1
                    ],
                    /* :: */[
                      /* tuple */[
                        "Starfighter Pilot",
                        2
                      ],
                      /* :: */[
                        /* tuple */[
                          "Stormtrooper (Sargeant)",
                          3
                        ],
                        /* :: */[
                          /* tuple */[
                            "Stormtrooper (Commander)",
                            4
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ],
                /* :: */[
                  /* record */[
                    /* name */"Rae Nu",
                    /* canMatchWith */2,
                    /* selectedNames : :: */[
                      /* tuple */[
                        "Starfighter Pilot",
                        1
                      ],
                      /* :: */[
                        /* tuple */[
                          "Stormtrooper (Commander)",
                          2
                        ],
                        /* :: */[
                          /* tuple */[
                            "Stormtrooper (Sargeant)",
                            3
                          ],
                          /* :: */[
                            /* tuple */[
                              "Imperial Guard",
                              4
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ],
                  /* :: */[
                    /* record */[
                      /* name */"Lok Clovis",
                      /* canMatchWith */3,
                      /* selectedNames : :: */[
                        /* tuple */[
                          "Stormtrooper (Commander)",
                          1
                        ],
                        /* :: */[
                          /* tuple */[
                            "Stormtrooper (Sargeant)",
                            2
                          ],
                          /* :: */[
                            /* tuple */[
                              "Starfighter Pilot",
                              3
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ],
                    /* :: */[
                      /* record */[
                        /* name */"Che Maul Mandrell",
                        /* canMatchWith */2,
                        /* selectedNames : :: */[
                          /* tuple */[
                            "Stormtrooper (Sargeant)",
                            1
                          ],
                          /* :: */[
                            /* tuple */[
                              "Stormtrooper (Soldier)",
                              2
                            ],
                            /* :: */[
                              /* tuple */[
                                "Imperial Guard",
                                3
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Starfighter Pilot",
                                  4
                                ],
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ],
                      /* :: */[
                        /* record */[
                          /* name */"Orn Trench",
                          /* canMatchWith */1,
                          /* selectedNames : :: */[
                            /* tuple */[
                              "Stormtrooper (Soldier)",
                              1
                            ],
                            /* :: */[
                              /* tuple */[
                                "Stormtrooper (Sargeant)",
                                2
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Starfighter Pilot",
                                  3
                                ],
                                /* [] */0
                              ]
                            ]
                          ]
                        ],
                        /* :: */[
                          /* record */[
                            /* name */"Shaak Tekka",
                            /* canMatchWith */2,
                            /* selectedNames : :: */[
                              /* tuple */[
                                "Imperial Guard",
                                1
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Starfighter Pilot",
                                  2
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Stormtrooper (Soldier)",
                                    3
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Stormtrooper (Sargeant)",
                                      4
                                    ],
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ],
                          /* :: */[
                            /* record */[
                              /* name */"Roos Eval",
                              /* canMatchWith */2,
                              /* selectedNames : :: */[
                                /* tuple */[
                                  "Starfighter Pilot",
                                  1
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Imperial Guard",
                                    2
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Stormtrooper (Soldier)",
                                      3
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Stormtrooper (Sargeant)",
                                        4
                                      ],
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var marriageMen = /* :: */[
  /* record */[
    /* name */"Peter",
    /* canMatchWith */1,
    /* selectedNames : :: */[
      /* tuple */[
        "Marion",
        1
      ],
      /* :: */[
        /* tuple */[
          "Pam",
          2
        ],
        /* :: */[
          /* tuple */[
            "Melody",
            3
          ],
          /* :: */[
            /* tuple */[
              "Anna",
              4
            ],
            /* [] */0
          ]
        ]
      ]
    ]
  ],
  /* :: */[
    /* record */[
      /* name */"Alfred",
      /* canMatchWith */1,
      /* selectedNames : :: */[
        /* tuple */[
          "Pam",
          1
        ],
        /* :: */[
          /* tuple */[
            "Lora",
            2
          ],
          /* :: */[
            /* tuple */[
              "Elena",
              3
            ],
            /* :: */[
              /* tuple */[
                "Sherry",
                4
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ],
    /* :: */[
      /* record */[
        /* name */"Bernard",
        /* canMatchWith */1,
        /* selectedNames : :: */[
          /* tuple */[
            "Anna",
            1
          ],
          /* :: */[
            /* tuple */[
              "Marion",
              2
            ],
            /* :: */[
              /* tuple */[
                "Elena",
                3
              ],
              /* :: */[
                /* tuple */[
                  "Tanya",
                  4
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ],
      /* :: */[
        /* record */[
          /* name */"Allan",
          /* canMatchWith */1,
          /* selectedNames : :: */[
            /* tuple */[
              "Elena",
              1
            ],
            /* :: */[
              /* tuple */[
                "Lora",
                2
              ],
              /* :: */[
                /* tuple */[
                  "Marion",
                  3
                ],
                /* :: */[
                  /* tuple */[
                    "Tanya",
                    4
                  ],
                  /* [] */0
                ]
              ]
            ]
          ]
        ],
        /* :: */[
          /* record */[
            /* name */"Hugh",
            /* canMatchWith */1,
            /* selectedNames : :: */[
              /* tuple */[
                "Tanya",
                1
              ],
              /* :: */[
                /* tuple */[
                  "Anna",
                  2
                ],
                /* :: */[
                  /* tuple */[
                    "Melody",
                    3
                  ],
                  /* :: */[
                    /* tuple */[
                      "Marion",
                      4
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]
          ],
          /* :: */[
            /* record */[
              /* name */"Felipe",
              /* canMatchWith */1,
              /* selectedNames : :: */[
                /* tuple */[
                  "Lora",
                  1
                ],
                /* :: */[
                  /* tuple */[
                    "Pam",
                    2
                  ],
                  /* :: */[
                    /* tuple */[
                      "Sherry",
                      3
                    ],
                    /* :: */[
                      /* tuple */[
                        "Sandy",
                        4
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ],
            /* :: */[
              /* record */[
                /* name */"Richard",
                /* canMatchWith */1,
                /* selectedNames : :: */[
                  /* tuple */[
                    "Anna",
                    1
                  ],
                  /* :: */[
                    /* tuple */[
                      "Tanya",
                      2
                    ],
                    /* :: */[
                      /* tuple */[
                        "Josephine",
                        3
                      ],
                      /* :: */[
                        /* tuple */[
                          "Melody",
                          4
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ],
              /* :: */[
                /* record */[
                  /* name */"Ryan",
                  /* canMatchWith */1,
                  /* selectedNames : :: */[
                    /* tuple */[
                      "Marion",
                      1
                    ],
                    /* :: */[
                      /* tuple */[
                        "Elena",
                        2
                      ],
                      /* :: */[
                        /* tuple */[
                          "Josephine",
                          3
                        ],
                        /* :: */[
                          /* tuple */[
                            "Tanya",
                            4
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ],
                /* :: */[
                  /* record */[
                    /* name */"Gilbert",
                    /* canMatchWith */1,
                    /* selectedNames : :: */[
                      /* tuple */[
                        "Elena",
                        1
                      ],
                      /* :: */[
                        /* tuple */[
                          "Sandy",
                          2
                        ],
                        /* :: */[
                          /* tuple */[
                            "Anna",
                            3
                          ],
                          /* :: */[
                            /* tuple */[
                              "Melody",
                              4
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ],
                  /* :: */[
                    /* record */[
                      /* name */"Eric",
                      /* canMatchWith */1,
                      /* selectedNames : :: */[
                        /* tuple */[
                          "Anna",
                          1
                        ],
                        /* :: */[
                          /* tuple */[
                            "Sandy",
                            2
                          ],
                          /* :: */[
                            /* tuple */[
                              "Sherry",
                              3
                            ],
                            /* :: */[
                              /* tuple */[
                                "Lora",
                                4
                              ],
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var marriageWomen = /* :: */[
  /* record */[
    /* name */"Elena",
    /* canMatchWith */1,
    /* selectedNames : :: */[
      /* tuple */[
        "Richard",
        1
      ],
      /* :: */[
        /* tuple */[
          "Ryan",
          2
        ],
        /* :: */[
          /* tuple */[
            "Hugh",
            3
          ],
          /* :: */[
            /* tuple */[
              "Peter",
              4
            ],
            /* [] */0
          ]
        ]
      ]
    ]
  ],
  /* :: */[
    /* record */[
      /* name */"Melody",
      /* canMatchWith */1,
      /* selectedNames : :: */[
        /* tuple */[
          "Peter",
          1
        ],
        /* :: */[
          /* tuple */[
            "Eric",
            2
          ],
          /* :: */[
            /* tuple */[
              "Felipe",
              3
            ],
            /* :: */[
              /* tuple */[
                "Gilbert",
                4
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ],
    /* :: */[
      /* record */[
        /* name */"Marion",
        /* canMatchWith */1,
        /* selectedNames : :: */[
          /* tuple */[
            "Hugh",
            1
          ],
          /* :: */[
            /* tuple */[
              "Richard",
              2
            ],
            /* :: */[
              /* tuple */[
                "Peter",
                3
              ],
              /* :: */[
                /* tuple */[
                  "Bernard",
                  4
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ],
      /* :: */[
        /* record */[
          /* name */"Sherry",
          /* canMatchWith */1,
          /* selectedNames : :: */[
            /* tuple */[
              "Ryan",
              1
            ],
            /* :: */[
              /* tuple */[
                "Allan",
                2
              ],
              /* :: */[
                /* tuple */[
                  "Hugh",
                  3
                ],
                /* :: */[
                  /* tuple */[
                    "Bernard",
                    4
                  ],
                  /* [] */0
                ]
              ]
            ]
          ]
        ],
        /* :: */[
          /* record */[
            /* name */"Anna",
            /* canMatchWith */1,
            /* selectedNames : :: */[
              /* tuple */[
                "Eric",
                1
              ],
              /* :: */[
                /* tuple */[
                  "Peter",
                  2
                ],
                /* :: */[
                  /* tuple */[
                    "Felipe",
                    3
                  ],
                  /* :: */[
                    /* tuple */[
                      "Alfred",
                      4
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]
          ],
          /* :: */[
            /* record */[
              /* name */"Tanya",
              /* canMatchWith */1,
              /* selectedNames : :: */[
                /* tuple */[
                  "Hugh",
                  1
                ],
                /* :: */[
                  /* tuple */[
                    "Richard",
                    2
                  ],
                  /* :: */[
                    /* tuple */[
                      "Ryan",
                      3
                    ],
                    /* :: */[
                      /* tuple */[
                        "Peter",
                        2
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ],
            /* :: */[
              /* record */[
                /* name */"Lora",
                /* canMatchWith */1,
                /* selectedNames : :: */[
                  /* tuple */[
                    "Allan",
                    1
                  ],
                  /* :: */[
                    /* tuple */[
                      "Bernard",
                      2
                    ],
                    /* :: */[
                      /* tuple */[
                        "Gilbert",
                        3
                      ],
                      /* :: */[
                        /* tuple */[
                          "Hugh",
                          4
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ],
              /* :: */[
                /* record */[
                  /* name */"Pam",
                  /* canMatchWith */1,
                  /* selectedNames : :: */[
                    /* tuple */[
                      "Bernard",
                      1
                    ],
                    /* :: */[
                      /* tuple */[
                        "Felipe",
                        2
                      ],
                      /* :: */[
                        /* tuple */[
                          "Hugh",
                          3
                        ],
                        /* :: */[
                          /* tuple */[
                            "Gilbert",
                            4
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ],
                /* :: */[
                  /* record */[
                    /* name */"Josephine",
                    /* canMatchWith */1,
                    /* selectedNames : :: */[
                      /* tuple */[
                        "Bernard",
                        1
                      ],
                      /* :: */[
                        /* tuple */[
                          "Eric",
                          2
                        ],
                        /* :: */[
                          /* tuple */[
                            "Hugh",
                            3
                          ],
                          /* :: */[
                            /* tuple */[
                              "Felipe",
                              4
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ],
                  /* :: */[
                    /* record */[
                      /* name */"Sandy",
                      /* canMatchWith */1,
                      /* selectedNames : :: */[
                        /* tuple */[
                          "Hugh",
                          1
                        ],
                        /* :: */[
                          /* tuple */[
                            "Peter",
                            2
                          ],
                          /* :: */[
                            /* tuple */[
                              "Alfred",
                              3
                            ],
                            /* :: */[
                              /* tuple */[
                                "Eric",
                                4
                              ],
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

exports.IntCmp = IntCmp;
exports.StrCmp = StrCmp;
exports.OptIntCmp = OptIntCmp;
exports.imperialPositions = imperialPositions;
exports.imperialCandidates = imperialCandidates;
exports.marriageMen = marriageMen;
exports.marriageWomen = marriageWomen;
exports.sampleDataToRaw = sampleDataToRaw;
/* SharedTypes Not a pure module */
