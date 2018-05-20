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

var PairingCmp = SharedTypes.PairingCmp;

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

var residents = /* :: */[
  /* record */[
    /* name */"F. Morris",
    /* canMatchWith */1,
    /* selectedNames : :: */[
      /* tuple */[
        "Eastman Medical",
        1
      ],
      /* :: */[
        /* tuple */[
          "Princeton-Plainsboro",
          2
        ],
        /* :: */[
          /* tuple */[
            "Seattle Grace",
            3
          ],
          /* :: */[
            /* tuple */[
              "Sacred Heart Hospital",
              4
            ],
            /* :: */[
              /* tuple */[
                "Springfield General",
                5
              ],
              /* :: */[
                /* tuple */[
                  "St. Sebastian's Hospital",
                  6
                ],
                /* :: */[
                  /* tuple */[
                    "Gotham General",
                    7
                  ],
                  /* :: */[
                    /* tuple */[
                      "Frankenstein & Associates",
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
  ],
  /* :: */[
    /* record */[
      /* name */"X. Ward",
      /* canMatchWith */1,
      /* selectedNames : :: */[
        /* tuple */[
          "Springfield General",
          1
        ],
        /* :: */[
          /* tuple */[
            "Gotham General",
            2
          ],
          /* :: */[
            /* tuple */[
              "St. Sebastian's Hospital",
              3
            ],
            /* :: */[
              /* tuple */[
                "Sacred Heart Hospital",
                4
              ],
              /* :: */[
                /* tuple */[
                  "Frankenstein & Associates",
                  5
                ],
                /* :: */[
                  /* tuple */[
                    "Eastman Medical",
                    6
                  ],
                  /* :: */[
                    /* tuple */[
                      "Princeton-Plainsboro",
                      7
                    ],
                    /* :: */[
                      /* tuple */[
                        "Seattle Grace",
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
    ],
    /* :: */[
      /* record */[
        /* name */"Q. Harris",
        /* canMatchWith */1,
        /* selectedNames : :: */[
          /* tuple */[
            "Seattle Grace",
            1
          ],
          /* :: */[
            /* tuple */[
              "Springfield General",
              2
            ],
            /* :: */[
              /* tuple */[
                "Eastman Medical",
                3
              ],
              /* :: */[
                /* tuple */[
                  "Gotham General",
                  4
                ],
                /* :: */[
                  /* tuple */[
                    "St. Sebastian's Hospital",
                    5
                  ],
                  /* :: */[
                    /* tuple */[
                      "Frankenstein & Associates",
                      6
                    ],
                    /* :: */[
                      /* tuple */[
                        "Sacred Heart Hospital",
                        7
                      ],
                      /* :: */[
                        /* tuple */[
                          "Princeton-Plainsboro",
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
      ],
      /* :: */[
        /* record */[
          /* name */"C. Anderson",
          /* canMatchWith */1,
          /* selectedNames : :: */[
            /* tuple */[
              "Princeton-Plainsboro",
              1
            ],
            /* :: */[
              /* tuple */[
                "Springfield General",
                2
              ],
              /* :: */[
                /* tuple */[
                  "Gotham General",
                  3
                ],
                /* :: */[
                  /* tuple */[
                    "St. Sebastian's Hospital",
                    4
                  ],
                  /* :: */[
                    /* tuple */[
                      "Frankenstein & Associates",
                      5
                    ],
                    /* :: */[
                      /* tuple */[
                        "Sacred Heart Hospital",
                        6
                      ],
                      /* :: */[
                        /* tuple */[
                          "Seattle Grace",
                          7
                        ],
                        /* :: */[
                          /* tuple */[
                            "Eastman Medical",
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
        ],
        /* :: */[
          /* record */[
            /* name */"W. Bennett",
            /* canMatchWith */1,
            /* selectedNames : :: */[
              /* tuple */[
                "Sacred Heart Hospital",
                1
              ],
              /* :: */[
                /* tuple */[
                  "Seattle Grace",
                  2
                ],
                /* :: */[
                  /* tuple */[
                    "St. Sebastian's Hospital",
                    3
                  ],
                  /* :: */[
                    /* tuple */[
                      "Eastman Medical",
                      4
                    ],
                    /* :: */[
                      /* tuple */[
                        "Springfield General",
                        5
                      ],
                      /* :: */[
                        /* tuple */[
                          "Gotham General",
                          6
                        ],
                        /* :: */[
                          /* tuple */[
                            "Princeton-Plainsboro",
                            7
                          ],
                          /* :: */[
                            /* tuple */[
                              "Frankenstein & Associates",
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
          ],
          /* :: */[
            /* record */[
              /* name */"Q. Cox",
              /* canMatchWith */1,
              /* selectedNames : :: */[
                /* tuple */[
                  "Princeton-Plainsboro",
                  1
                ],
                /* :: */[
                  /* tuple */[
                    "St. Sebastian's Hospital",
                    2
                  ],
                  /* :: */[
                    /* tuple */[
                      "Sacred Heart Hospital",
                      3
                    ],
                    /* :: */[
                      /* tuple */[
                        "Frankenstein & Associates",
                        4
                      ],
                      /* :: */[
                        /* tuple */[
                          "Seattle Grace",
                          5
                        ],
                        /* :: */[
                          /* tuple */[
                            "Eastman Medical",
                            6
                          ],
                          /* :: */[
                            /* tuple */[
                              "Gotham General",
                              7
                            ],
                            /* :: */[
                              /* tuple */[
                                "Springfield General",
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
            ],
            /* :: */[
              /* record */[
                /* name */"S. Cooper",
                /* canMatchWith */1,
                /* selectedNames : :: */[
                  /* tuple */[
                    "Frankenstein & Associates",
                    1
                  ],
                  /* :: */[
                    /* tuple */[
                      "Gotham General",
                      2
                    ],
                    /* :: */[
                      /* tuple */[
                        "Seattle Grace",
                        3
                      ],
                      /* :: */[
                        /* tuple */[
                          "St. Sebastian's Hospital",
                          4
                        ],
                        /* :: */[
                          /* tuple */[
                            "Springfield General",
                            5
                          ],
                          /* :: */[
                            /* tuple */[
                              "Sacred Heart Hospital",
                              6
                            ],
                            /* :: */[
                              /* tuple */[
                                "Princeton-Plainsboro",
                                7
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Eastman Medical",
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
              ],
              /* :: */[
                /* record */[
                  /* name */"G. Wilson",
                  /* canMatchWith */1,
                  /* selectedNames : :: */[
                    /* tuple */[
                      "St. Sebastian's Hospital",
                      1
                    ],
                    /* :: */[
                      /* tuple */[
                        "Frankenstein & Associates",
                        2
                      ],
                      /* :: */[
                        /* tuple */[
                          "Eastman Medical",
                          3
                        ],
                        /* :: */[
                          /* tuple */[
                            "Princeton-Plainsboro",
                            4
                          ],
                          /* :: */[
                            /* tuple */[
                              "Gotham General",
                              5
                            ],
                            /* :: */[
                              /* tuple */[
                                "Seattle Grace",
                                6
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Springfield General",
                                  7
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Sacred Heart Hospital",
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
                ],
                /* :: */[
                  /* record */[
                    /* name */"X. Miller",
                    /* canMatchWith */1,
                    /* selectedNames : :: */[
                      /* tuple */[
                        "Seattle Grace",
                        1
                      ],
                      /* :: */[
                        /* tuple */[
                          "St. Sebastian's Hospital",
                          2
                        ],
                        /* :: */[
                          /* tuple */[
                            "Sacred Heart Hospital",
                            3
                          ],
                          /* :: */[
                            /* tuple */[
                              "Princeton-Plainsboro",
                              4
                            ],
                            /* :: */[
                              /* tuple */[
                                "Springfield General",
                                5
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Frankenstein & Associates",
                                  6
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Gotham General",
                                    7
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Eastman Medical",
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
                  ],
                  /* :: */[
                    /* record */[
                      /* name */"J. Wright",
                      /* canMatchWith */1,
                      /* selectedNames : :: */[
                        /* tuple */[
                          "Springfield General",
                          1
                        ],
                        /* :: */[
                          /* tuple */[
                            "Sacred Heart Hospital",
                            2
                          ],
                          /* :: */[
                            /* tuple */[
                              "Eastman Medical",
                              3
                            ],
                            /* :: */[
                              /* tuple */[
                                "Gotham General",
                                4
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Frankenstein & Associates",
                                  5
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Seattle Grace",
                                    6
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "St. Sebastian's Hospital",
                                      7
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Princeton-Plainsboro",
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
                    ],
                    /* :: */[
                      /* record */[
                        /* name */"A. Phillips",
                        /* canMatchWith */1,
                        /* selectedNames : :: */[
                          /* tuple */[
                            "Princeton-Plainsboro",
                            1
                          ],
                          /* :: */[
                            /* tuple */[
                              "St. Sebastian's Hospital",
                              2
                            ],
                            /* :: */[
                              /* tuple */[
                                "Springfield General",
                                3
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Frankenstein & Associates",
                                  4
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Seattle Grace",
                                    5
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Gotham General",
                                      6
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Sacred Heart Hospital",
                                        7
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "Eastman Medical",
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
                      ],
                      /* :: */[
                        /* record */[
                          /* name */"L. Turner",
                          /* canMatchWith */1,
                          /* selectedNames : :: */[
                            /* tuple */[
                              "St. Sebastian's Hospital",
                              1
                            ],
                            /* :: */[
                              /* tuple */[
                                "Springfield General",
                                2
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Frankenstein & Associates",
                                  3
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Gotham General",
                                    4
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Eastman Medical",
                                      5
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Princeton-Plainsboro",
                                        6
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "Sacred Heart Hospital",
                                          7
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "Seattle Grace",
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
                        ],
                        /* :: */[
                          /* record */[
                            /* name */"X. James",
                            /* canMatchWith */1,
                            /* selectedNames : :: */[
                              /* tuple */[
                                "Princeton-Plainsboro",
                                1
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Sacred Heart Hospital",
                                  2
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Eastman Medical",
                                    3
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Seattle Grace",
                                      4
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Frankenstein & Associates",
                                        5
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "Springfield General",
                                          6
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "St. Sebastian's Hospital",
                                            7
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "Gotham General",
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
                          ],
                          /* :: */[
                            /* record */[
                              /* name */"O. Martinez",
                              /* canMatchWith */1,
                              /* selectedNames : :: */[
                                /* tuple */[
                                  "Frankenstein & Associates",
                                  1
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "Gotham General",
                                    2
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Seattle Grace",
                                      3
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Princeton-Plainsboro",
                                        4
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "St. Sebastian's Hospital",
                                          5
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "Sacred Heart Hospital",
                                            6
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "Springfield General",
                                              7
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "Eastman Medical",
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
                            ],
                            /* :: */[
                              /* record */[
                                /* name */"U. Hall",
                                /* canMatchWith */1,
                                /* selectedNames : :: */[
                                  /* tuple */[
                                    "Frankenstein & Associates",
                                    1
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "Sacred Heart Hospital",
                                      2
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Gotham General",
                                        3
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "Springfield General",
                                          4
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "St. Sebastian's Hospital",
                                            5
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "Seattle Grace",
                                              6
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "Eastman Medical",
                                                7
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "Princeton-Plainsboro",
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
                              ],
                              /* :: */[
                                /* record */[
                                  /* name */"H. Butler",
                                  /* canMatchWith */1,
                                  /* selectedNames : :: */[
                                    /* tuple */[
                                      "Seattle Grace",
                                      1
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "Princeton-Plainsboro",
                                        2
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "Sacred Heart Hospital",
                                          3
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "Gotham General",
                                            4
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "Springfield General",
                                              5
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "Frankenstein & Associates",
                                                6
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "Eastman Medical",
                                                  7
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "St. Sebastian's Hospital",
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
                                ],
                                /* :: */[
                                  /* record */[
                                    /* name */"I. Sullivan",
                                    /* canMatchWith */1,
                                    /* selectedNames : :: */[
                                      /* tuple */[
                                        "Eastman Medical",
                                        1
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "Frankenstein & Associates",
                                          2
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "Seattle Grace",
                                            3
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "Princeton-Plainsboro",
                                              4
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "Sacred Heart Hospital",
                                                5
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "Springfield General",
                                                  6
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "Gotham General",
                                                    7
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "St. Sebastian's Hospital",
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
                                  ],
                                  /* :: */[
                                    /* record */[
                                      /* name */"W. Perry",
                                      /* canMatchWith */1,
                                      /* selectedNames : :: */[
                                        /* tuple */[
                                          "St. Sebastian's Hospital",
                                          1
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "Gotham General",
                                            2
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "Sacred Heart Hospital",
                                              3
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "Eastman Medical",
                                                4
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "Princeton-Plainsboro",
                                                  5
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "Frankenstein & Associates",
                                                    6
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "Springfield General",
                                                      7
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "Seattle Grace",
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
                                    ],
                                    /* :: */[
                                      /* record */[
                                        /* name */"G. Stewart",
                                        /* canMatchWith */1,
                                        /* selectedNames : :: */[
                                          /* tuple */[
                                            "Frankenstein & Associates",
                                            1
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "Sacred Heart Hospital",
                                              2
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "Springfield General",
                                                3
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "Seattle Grace",
                                                  4
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "Gotham General",
                                                    5
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "Princeton-Plainsboro",
                                                      6
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "Eastman Medical",
                                                        7
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "St. Sebastian's Hospital",
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
                                      ],
                                      /* :: */[
                                        /* record */[
                                          /* name */"V. Richardson",
                                          /* canMatchWith */1,
                                          /* selectedNames : :: */[
                                            /* tuple */[
                                              "Seattle Grace",
                                              1
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "Eastman Medical",
                                                2
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "Springfield General",
                                                  3
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "Princeton-Plainsboro",
                                                    4
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "Sacred Heart Hospital",
                                                      5
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "Gotham General",
                                                        6
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "Frankenstein & Associates",
                                                          7
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "St. Sebastian's Hospital",
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
                                        ],
                                        /* :: */[
                                          /* record */[
                                            /* name */"H. Green",
                                            /* canMatchWith */1,
                                            /* selectedNames : :: */[
                                              /* tuple */[
                                                "Sacred Heart Hospital",
                                                1
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "Princeton-Plainsboro",
                                                  2
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "Eastman Medical",
                                                    3
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "Springfield General",
                                                      4
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "Frankenstein & Associates",
                                                        5
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "Gotham General",
                                                          6
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "Seattle Grace",
                                                            7
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "St. Sebastian's Hospital",
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
                                          ],
                                          /* :: */[
                                            /* record */[
                                              /* name */"Z. Ross",
                                              /* canMatchWith */1,
                                              /* selectedNames : :: */[
                                                /* tuple */[
                                                  "Frankenstein & Associates",
                                                  1
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "Seattle Grace",
                                                    2
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "Gotham General",
                                                      3
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "Eastman Medical",
                                                        4
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "Princeton-Plainsboro",
                                                          5
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "Springfield General",
                                                            6
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "St. Sebastian's Hospital",
                                                              7
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "Sacred Heart Hospital",
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
                                            ],
                                            /* :: */[
                                              /* record */[
                                                /* name */"S. Cook",
                                                /* canMatchWith */1,
                                                /* selectedNames : :: */[
                                                  /* tuple */[
                                                    "Springfield General",
                                                    1
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "St. Sebastian's Hospital",
                                                      2
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "Gotham General",
                                                        3
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "Seattle Grace",
                                                          4
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "Sacred Heart Hospital",
                                                            5
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "Princeton-Plainsboro",
                                                              6
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "Frankenstein & Associates",
                                                                7
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "Eastman Medical",
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
                                              ],
                                              /* :: */[
                                                /* record */[
                                                  /* name */"H. Bailey",
                                                  /* canMatchWith */1,
                                                  /* selectedNames : :: */[
                                                    /* tuple */[
                                                      "Seattle Grace",
                                                      1
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "Gotham General",
                                                        2
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "Frankenstein & Associates",
                                                          3
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "Springfield General",
                                                            4
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "Eastman Medical",
                                                              5
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "Sacred Heart Hospital",
                                                                6
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "St. Sebastian's Hospital",
                                                                  7
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "Princeton-Plainsboro",
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
                                                ],
                                                /* :: */[
                                                  /* record */[
                                                    /* name */"A. Wood",
                                                    /* canMatchWith */1,
                                                    /* selectedNames : :: */[
                                                      /* tuple */[
                                                        "Gotham General",
                                                        1
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "St. Sebastian's Hospital",
                                                          2
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "Princeton-Plainsboro",
                                                            3
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "Eastman Medical",
                                                              4
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "Sacred Heart Hospital",
                                                                5
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "Frankenstein & Associates",
                                                                  6
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "Seattle Grace",
                                                                    7
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "Springfield General",
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
                                                  ],
                                                  /* :: */[
                                                    /* record */[
                                                      /* name */"Z. Johnson",
                                                      /* canMatchWith */1,
                                                      /* selectedNames : :: */[
                                                        /* tuple */[
                                                          "Sacred Heart Hospital",
                                                          1
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "Gotham General",
                                                            2
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "Princeton-Plainsboro",
                                                              3
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "Frankenstein & Associates",
                                                                4
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "Springfield General",
                                                                  5
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "St. Sebastian's Hospital",
                                                                    6
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "Eastman Medical",
                                                                      7
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "Seattle Grace",
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
                                                    ],
                                                    /* :: */[
                                                      /* record */[
                                                        /* name */"T. Campbell",
                                                        /* canMatchWith */1,
                                                        /* selectedNames : :: */[
                                                          /* tuple */[
                                                            "St. Sebastian's Hospital",
                                                            1
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "Princeton-Plainsboro",
                                                              2
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "Sacred Heart Hospital",
                                                                3
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "Seattle Grace",
                                                                  4
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "Frankenstein & Associates",
                                                                    5
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "Gotham General",
                                                                      6
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "Springfield General",
                                                                        7
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "Eastman Medical",
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
                                                      ],
                                                      /* :: */[
                                                        /* record */[
                                                          /* name */"J. Roberts",
                                                          /* canMatchWith */1,
                                                          /* selectedNames : :: */[
                                                            /* tuple */[
                                                              "St. Sebastian's Hospital",
                                                              1
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "Frankenstein & Associates",
                                                                2
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "Springfield General",
                                                                  3
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "Princeton-Plainsboro",
                                                                    4
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "Seattle Grace",
                                                                      5
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "Gotham General",
                                                                        6
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "Eastman Medical",
                                                                          7
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "Sacred Heart Hospital",
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
                                                        ],
                                                        /* :: */[
                                                          /* record */[
                                                            /* name */"I. Gomez",
                                                            /* canMatchWith */1,
                                                            /* selectedNames : :: */[
                                                              /* tuple */[
                                                                "St. Sebastian's Hospital",
                                                                1
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "Princeton-Plainsboro",
                                                                  2
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "Springfield General",
                                                                    3
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "Sacred Heart Hospital",
                                                                      4
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "Gotham General",
                                                                        5
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "Eastman Medical",
                                                                          6
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "Seattle Grace",
                                                                            7
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "Frankenstein & Associates",
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
                                                          ],
                                                          /* :: */[
                                                            /* record */[
                                                              /* name */"V. Howard",
                                                              /* canMatchWith */1,
                                                              /* selectedNames : :: */[
                                                                /* tuple */[
                                                                  "Springfield General",
                                                                  1
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "Frankenstein & Associates",
                                                                    2
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "Eastman Medical",
                                                                      3
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "Princeton-Plainsboro",
                                                                        4
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "Seattle Grace",
                                                                          5
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "St. Sebastian's Hospital",
                                                                            6
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "Gotham General",
                                                                              7
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "Sacred Heart Hospital",
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
                                                            ],
                                                            /* :: */[
                                                              /* record */[
                                                                /* name */"L. Kelly",
                                                                /* canMatchWith */1,
                                                                /* selectedNames : :: */[
                                                                  /* tuple */[
                                                                    "Sacred Heart Hospital",
                                                                    1
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "St. Sebastian's Hospital",
                                                                      2
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "Eastman Medical",
                                                                        3
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "Gotham General",
                                                                          4
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "Springfield General",
                                                                            5
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "Seattle Grace",
                                                                              6
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "Frankenstein & Associates",
                                                                                7
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "Princeton-Plainsboro",
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
                                                              ],
                                                              /* :: */[
                                                                /* record */[
                                                                  /* name */"U. Lee",
                                                                  /* canMatchWith */1,
                                                                  /* selectedNames : :: */[
                                                                    /* tuple */[
                                                                      "Sacred Heart Hospital",
                                                                      1
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "Eastman Medical",
                                                                        2
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "Frankenstein & Associates",
                                                                          3
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "St. Sebastian's Hospital",
                                                                            4
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "Springfield General",
                                                                              5
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "Gotham General",
                                                                                6
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "Princeton-Plainsboro",
                                                                                  7
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "Seattle Grace",
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
                                                                ],
                                                                /* :: */[
                                                                  /* record */[
                                                                    /* name */"U. Sanders",
                                                                    /* canMatchWith */1,
                                                                    /* selectedNames : :: */[
                                                                      /* tuple */[
                                                                        "Gotham General",
                                                                        1
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "Seattle Grace",
                                                                          2
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "Princeton-Plainsboro",
                                                                            3
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "Sacred Heart Hospital",
                                                                              4
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "Eastman Medical",
                                                                                5
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "Springfield General",
                                                                                  6
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "Frankenstein & Associates",
                                                                                    7
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "St. Sebastian's Hospital",
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
                                                                  ],
                                                                  /* :: */[
                                                                    /* record */[
                                                                      /* name */"R. Watson",
                                                                      /* canMatchWith */1,
                                                                      /* selectedNames : :: */[
                                                                        /* tuple */[
                                                                          "St. Sebastian's Hospital",
                                                                          1
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "Princeton-Plainsboro",
                                                                            2
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "Gotham General",
                                                                              3
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "Eastman Medical",
                                                                                4
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "Sacred Heart Hospital",
                                                                                  5
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "Frankenstein & Associates",
                                                                                    6
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "Springfield General",
                                                                                      7
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "Seattle Grace",
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
                                                                    ],
                                                                    /* :: */[
                                                                      /* record */[
                                                                        /* name */"N. Murphy",
                                                                        /* canMatchWith */1,
                                                                        /* selectedNames : :: */[
                                                                          /* tuple */[
                                                                            "Seattle Grace",
                                                                            1
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "Springfield General",
                                                                              2
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "Gotham General",
                                                                                3
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "Sacred Heart Hospital",
                                                                                  4
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "Frankenstein & Associates",
                                                                                    5
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "Princeton-Plainsboro",
                                                                                      6
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "Eastman Medical",
                                                                                        7
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "St. Sebastian's Hospital",
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
                                                                      ],
                                                                      /* :: */[
                                                                        /* record */[
                                                                          /* name */"D. Williams",
                                                                          /* canMatchWith */1,
                                                                          /* selectedNames : :: */[
                                                                            /* tuple */[
                                                                              "Sacred Heart Hospital",
                                                                              1
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "Gotham General",
                                                                                2
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "Springfield General",
                                                                                  3
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "Frankenstein & Associates",
                                                                                    4
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "St. Sebastian's Hospital",
                                                                                      5
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "Seattle Grace",
                                                                                        6
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "Eastman Medical",
                                                                                          7
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "Princeton-Plainsboro",
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
                                                                        ],
                                                                        /* :: */[
                                                                          /* record */[
                                                                            /* name */"Z. Scott",
                                                                            /* canMatchWith */1,
                                                                            /* selectedNames : :: */[
                                                                              /* tuple */[
                                                                                "Eastman Medical",
                                                                                1
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "Gotham General",
                                                                                  2
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "St. Sebastian's Hospital",
                                                                                    3
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "Princeton-Plainsboro",
                                                                                      4
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "Seattle Grace",
                                                                                        5
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "Sacred Heart Hospital",
                                                                                          6
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "Springfield General",
                                                                                            7
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "Frankenstein & Associates",
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
                                                                          ],
                                                                          /* :: */[
                                                                            /* record */[
                                                                              /* name */"Z. Evans",
                                                                              /* canMatchWith */1,
                                                                              /* selectedNames : :: */[
                                                                                /* tuple */[
                                                                                  "Gotham General",
                                                                                  1
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "Seattle Grace",
                                                                                    2
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "St. Sebastian's Hospital",
                                                                                      3
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "Eastman Medical",
                                                                                        4
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "Princeton-Plainsboro",
                                                                                          5
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "Frankenstein & Associates",
                                                                                            6
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "Sacred Heart Hospital",
                                                                                              7
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "Springfield General",
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
                                                                            ],
                                                                            /* :: */[
                                                                              /* record */[
                                                                                /* name */"T. Fisher",
                                                                                /* canMatchWith */1,
                                                                                /* selectedNames : :: */[
                                                                                  /* tuple */[
                                                                                    "Eastman Medical",
                                                                                    1
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "Springfield General",
                                                                                      2
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "Gotham General",
                                                                                        3
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "Princeton-Plainsboro",
                                                                                          4
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "Sacred Heart Hospital",
                                                                                            5
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "St. Sebastian's Hospital",
                                                                                              6
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "Frankenstein & Associates",
                                                                                                7
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "Seattle Grace",
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
                                                                              ],
                                                                              /* :: */[
                                                                                /* record */[
                                                                                  /* name */"Y. Myers",
                                                                                  /* canMatchWith */1,
                                                                                  /* selectedNames : :: */[
                                                                                    /* tuple */[
                                                                                      "Seattle Grace",
                                                                                      1
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "St. Sebastian's Hospital",
                                                                                        2
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "Gotham General",
                                                                                          3
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "Frankenstein & Associates",
                                                                                            4
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "Sacred Heart Hospital",
                                                                                              5
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "Eastman Medical",
                                                                                                6
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "Springfield General",
                                                                                                  7
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "Princeton-Plainsboro",
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
                                                                                ],
                                                                                /* :: */[
                                                                                  /* record */[
                                                                                    /* name */"A. Collins",
                                                                                    /* canMatchWith */1,
                                                                                    /* selectedNames : :: */[
                                                                                      /* tuple */[
                                                                                        "Princeton-Plainsboro",
                                                                                        1
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "Gotham General",
                                                                                          2
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "Seattle Grace",
                                                                                            3
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "Frankenstein & Associates",
                                                                                              4
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "Eastman Medical",
                                                                                                5
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "Springfield General",
                                                                                                  6
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "Sacred Heart Hospital",
                                                                                                    7
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "St. Sebastian's Hospital",
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
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* record */[
                                                                                      /* name */"K. Peterson",
                                                                                      /* canMatchWith */1,
                                                                                      /* selectedNames : :: */[
                                                                                        /* tuple */[
                                                                                          "St. Sebastian's Hospital",
                                                                                          1
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "Eastman Medical",
                                                                                            2
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "Princeton-Plainsboro",
                                                                                              3
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "Sacred Heart Hospital",
                                                                                                4
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "Springfield General",
                                                                                                  5
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "Gotham General",
                                                                                                    6
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "Frankenstein & Associates",
                                                                                                      7
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "Seattle Grace",
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
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* record */[
                                                                                        /* name */"M. Torres",
                                                                                        /* canMatchWith */1,
                                                                                        /* selectedNames : :: */[
                                                                                          /* tuple */[
                                                                                            "Sacred Heart Hospital",
                                                                                            1
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "Springfield General",
                                                                                              2
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "Princeton-Plainsboro",
                                                                                                3
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "Eastman Medical",
                                                                                                  4
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "Gotham General",
                                                                                                    5
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "Frankenstein & Associates",
                                                                                                      6
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "Seattle Grace",
                                                                                                        7
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "St. Sebastian's Hospital",
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
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* record */[
                                                                                          /* name */"G. Moore",
                                                                                          /* canMatchWith */1,
                                                                                          /* selectedNames : :: */[
                                                                                            /* tuple */[
                                                                                              "Springfield General",
                                                                                              1
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "Sacred Heart Hospital",
                                                                                                2
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "St. Sebastian's Hospital",
                                                                                                  3
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "Eastman Medical",
                                                                                                    4
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "Princeton-Plainsboro",
                                                                                                      5
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "Frankenstein & Associates",
                                                                                                        6
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "Seattle Grace",
                                                                                                          7
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "Gotham General",
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
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* record */[
                                                                                            /* name */"R. Baker",
                                                                                            /* canMatchWith */1,
                                                                                            /* selectedNames : :: */[
                                                                                              /* tuple */[
                                                                                                "Princeton-Plainsboro",
                                                                                                1
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "Sacred Heart Hospital",
                                                                                                  2
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "Gotham General",
                                                                                                    3
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "St. Sebastian's Hospital",
                                                                                                      4
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "Frankenstein & Associates",
                                                                                                        5
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "Seattle Grace",
                                                                                                          6
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "Springfield General",
                                                                                                            7
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "Eastman Medical",
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
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* record */[
                                                                                              /* name */"H. Parker",
                                                                                              /* canMatchWith */1,
                                                                                              /* selectedNames : :: */[
                                                                                                /* tuple */[
                                                                                                  "Sacred Heart Hospital",
                                                                                                  1
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "St. Sebastian's Hospital",
                                                                                                    2
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "Seattle Grace",
                                                                                                      3
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "Princeton-Plainsboro",
                                                                                                        4
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "Frankenstein & Associates",
                                                                                                          5
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "Eastman Medical",
                                                                                                            6
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "Springfield General",
                                                                                                              7
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "Gotham General",
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
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* record */[
                                                                                                /* name */"Q. Brown",
                                                                                                /* canMatchWith */1,
                                                                                                /* selectedNames : :: */[
                                                                                                  /* tuple */[
                                                                                                    "Princeton-Plainsboro",
                                                                                                    1
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "Eastman Medical",
                                                                                                      2
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "Gotham General",
                                                                                                        3
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "Seattle Grace",
                                                                                                          4
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "St. Sebastian's Hospital",
                                                                                                            5
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "Sacred Heart Hospital",
                                                                                                              6
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "Frankenstein & Associates",
                                                                                                                7
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Springfield General",
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
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* record */[
                                                                                                  /* name */"I. Hughes",
                                                                                                  /* canMatchWith */1,
                                                                                                  /* selectedNames : :: */[
                                                                                                    /* tuple */[
                                                                                                      "Gotham General",
                                                                                                      1
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* tuple */[
                                                                                                        "St. Sebastian's Hospital",
                                                                                                        2
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "Eastman Medical",
                                                                                                          3
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "Sacred Heart Hospital",
                                                                                                            4
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "Springfield General",
                                                                                                              5
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "Princeton-Plainsboro",
                                                                                                                6
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Seattle Grace",
                                                                                                                  7
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "Frankenstein & Associates",
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
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* record */[
                                                                                                    /* name */"X. Carter",
                                                                                                    /* canMatchWith */1,
                                                                                                    /* selectedNames : :: */[
                                                                                                      /* tuple */[
                                                                                                        "Gotham General",
                                                                                                        1
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* tuple */[
                                                                                                          "Seattle Grace",
                                                                                                          2
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "Frankenstein & Associates",
                                                                                                            3
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "Springfield General",
                                                                                                              4
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "St. Sebastian's Hospital",
                                                                                                                5
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Sacred Heart Hospital",
                                                                                                                  6
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "Princeton-Plainsboro",
                                                                                                                    7
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Eastman Medical",
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
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* record */[
                                                                                                      /* name */"W. Robinson",
                                                                                                      /* canMatchWith */1,
                                                                                                      /* selectedNames : :: */[
                                                                                                        /* tuple */[
                                                                                                          "Princeton-Plainsboro",
                                                                                                          1
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* tuple */[
                                                                                                            "Seattle Grace",
                                                                                                            2
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "Springfield General",
                                                                                                              3
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "St. Sebastian's Hospital",
                                                                                                                4
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Eastman Medical",
                                                                                                                  5
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "Sacred Heart Hospital",
                                                                                                                    6
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Gotham General",
                                                                                                                      7
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Frankenstein & Associates",
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
                                                                                                    ],
                                                                                                    /* :: */[
                                                                                                      /* record */[
                                                                                                        /* name */"X. Young",
                                                                                                        /* canMatchWith */1,
                                                                                                        /* selectedNames : :: */[
                                                                                                          /* tuple */[
                                                                                                            "St. Sebastian's Hospital",
                                                                                                            1
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* tuple */[
                                                                                                              "Gotham General",
                                                                                                              2
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "Seattle Grace",
                                                                                                                3
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Springfield General",
                                                                                                                  4
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "Princeton-Plainsboro",
                                                                                                                    5
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Sacred Heart Hospital",
                                                                                                                      6
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Frankenstein & Associates",
                                                                                                                        7
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "Eastman Medical",
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
                                                                                                      ],
                                                                                                      /* :: */[
                                                                                                        /* record */[
                                                                                                          /* name */"I. Clark",
                                                                                                          /* canMatchWith */1,
                                                                                                          /* selectedNames : :: */[
                                                                                                            /* tuple */[
                                                                                                              "Sacred Heart Hospital",
                                                                                                              1
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* tuple */[
                                                                                                                "Springfield General",
                                                                                                                2
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Princeton-Plainsboro",
                                                                                                                  3
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "St. Sebastian's Hospital",
                                                                                                                    4
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Seattle Grace",
                                                                                                                      5
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Frankenstein & Associates",
                                                                                                                        6
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "Gotham General",
                                                                                                                          7
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "Eastman Medical",
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
                                                                                                        ],
                                                                                                        /* :: */[
                                                                                                          /* record */[
                                                                                                            /* name */"R. Rogers",
                                                                                                            /* canMatchWith */1,
                                                                                                            /* selectedNames : :: */[
                                                                                                              /* tuple */[
                                                                                                                "Seattle Grace",
                                                                                                                1
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Princeton-Plainsboro",
                                                                                                                  2
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "St. Sebastian's Hospital",
                                                                                                                    3
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Springfield General",
                                                                                                                      4
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Sacred Heart Hospital",
                                                                                                                        5
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "Eastman Medical",
                                                                                                                          6
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "Frankenstein & Associates",
                                                                                                                            7
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "Gotham General",
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
                                                                                                          ],
                                                                                                          /* :: */[
                                                                                                            /* record */[
                                                                                                              /* name */"M. Foster",
                                                                                                              /* canMatchWith */1,
                                                                                                              /* selectedNames : :: */[
                                                                                                                /* tuple */[
                                                                                                                  "Eastman Medical",
                                                                                                                  1
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "Gotham General",
                                                                                                                    2
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Seattle Grace",
                                                                                                                      3
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Frankenstein & Associates",
                                                                                                                        4
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "Princeton-Plainsboro",
                                                                                                                          5
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "St. Sebastian's Hospital",
                                                                                                                            6
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "Sacred Heart Hospital",
                                                                                                                              7
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "Springfield General",
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
                                                                                                            ],
                                                                                                            /* :: */[
                                                                                                              /* record */[
                                                                                                                /* name */"D. Jackson",
                                                                                                                /* canMatchWith */1,
                                                                                                                /* selectedNames : :: */[
                                                                                                                  /* tuple */[
                                                                                                                    "Sacred Heart Hospital",
                                                                                                                    1
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Seattle Grace",
                                                                                                                      2
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Springfield General",
                                                                                                                        3
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "Eastman Medical",
                                                                                                                          4
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "Gotham General",
                                                                                                                            5
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "St. Sebastian's Hospital",
                                                                                                                              6
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "Frankenstein & Associates",
                                                                                                                                7
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "Princeton-Plainsboro",
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
                                                                                                              ],
                                                                                                              /* :: */[
                                                                                                                /* record */[
                                                                                                                  /* name */"Q. Russell",
                                                                                                                  /* canMatchWith */1,
                                                                                                                  /* selectedNames : :: */[
                                                                                                                    /* tuple */[
                                                                                                                      "Seattle Grace",
                                                                                                                      1
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Eastman Medical",
                                                                                                                        2
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "Frankenstein & Associates",
                                                                                                                          3
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "Gotham General",
                                                                                                                            4
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "St. Sebastian's Hospital",
                                                                                                                              5
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "Sacred Heart Hospital",
                                                                                                                                6
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "Princeton-Plainsboro",
                                                                                                                                  7
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Springfield General",
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
                                                                                                                ],
                                                                                                                /* :: */[
                                                                                                                  /* record */[
                                                                                                                    /* name */"B. Reed",
                                                                                                                    /* canMatchWith */1,
                                                                                                                    /* selectedNames : :: */[
                                                                                                                      /* tuple */[
                                                                                                                        "Sacred Heart Hospital",
                                                                                                                        1
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "St. Sebastian's Hospital",
                                                                                                                          2
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "Seattle Grace",
                                                                                                                            3
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "Eastman Medical",
                                                                                                                              4
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "Princeton-Plainsboro",
                                                                                                                                5
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "Gotham General",
                                                                                                                                  6
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Springfield General",
                                                                                                                                    7
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "Frankenstein & Associates",
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
                                                                                                                  ],
                                                                                                                  /* :: */[
                                                                                                                    /* record */[
                                                                                                                      /* name */"O. Brooks",
                                                                                                                      /* canMatchWith */1,
                                                                                                                      /* selectedNames : :: */[
                                                                                                                        /* tuple */[
                                                                                                                          "Gotham General",
                                                                                                                          1
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "Seattle Grace",
                                                                                                                            2
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "Eastman Medical",
                                                                                                                              3
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                4
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "Princeton-Plainsboro",
                                                                                                                                  5
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Frankenstein & Associates",
                                                                                                                                    6
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "Springfield General",
                                                                                                                                      7
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Sacred Heart Hospital",
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
                                                                                                                    ],
                                                                                                                    /* :: */[
                                                                                                                      /* record */[
                                                                                                                        /* name */"J. Hill",
                                                                                                                        /* canMatchWith */1,
                                                                                                                        /* selectedNames : :: */[
                                                                                                                          /* tuple */[
                                                                                                                            "Princeton-Plainsboro",
                                                                                                                            1
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "Eastman Medical",
                                                                                                                              2
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "Frankenstein & Associates",
                                                                                                                                3
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "Seattle Grace",
                                                                                                                                  4
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Springfield General",
                                                                                                                                    5
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "St. Sebastian's Hospital",
                                                                                                                                      6
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Gotham General",
                                                                                                                                        7
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Sacred Heart Hospital",
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
                                                                                                                      ],
                                                                                                                      /* :: */[
                                                                                                                        /* record */[
                                                                                                                          /* name */"G. Adams",
                                                                                                                          /* canMatchWith */1,
                                                                                                                          /* selectedNames : :: */[
                                                                                                                            /* tuple */[
                                                                                                                              "Springfield General",
                                                                                                                              1
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "Eastman Medical",
                                                                                                                                2
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "Gotham General",
                                                                                                                                  3
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Sacred Heart Hospital",
                                                                                                                                    4
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "St. Sebastian's Hospital",
                                                                                                                                      5
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Seattle Grace",
                                                                                                                                        6
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Princeton-Plainsboro",
                                                                                                                                          7
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "Frankenstein & Associates",
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
                                                                                                                        ],
                                                                                                                        /* :: */[
                                                                                                                          /* record */[
                                                                                                                            /* name */"Y. Barnes",
                                                                                                                            /* canMatchWith */1,
                                                                                                                            /* selectedNames : :: */[
                                                                                                                              /* tuple */[
                                                                                                                                "Seattle Grace",
                                                                                                                                1
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "Springfield General",
                                                                                                                                  2
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Gotham General",
                                                                                                                                    3
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "St. Sebastian's Hospital",
                                                                                                                                      4
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Sacred Heart Hospital",
                                                                                                                                        5
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Princeton-Plainsboro",
                                                                                                                                          6
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                            7
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "Eastman Medical",
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
                                                                                                                          ],
                                                                                                                          /* :: */[
                                                                                                                            /* record */[
                                                                                                                              /* name */"T. Garcia",
                                                                                                                              /* canMatchWith */1,
                                                                                                                              /* selectedNames : :: */[
                                                                                                                                /* tuple */[
                                                                                                                                  "St. Sebastian's Hospital",
                                                                                                                                  1
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Springfield General",
                                                                                                                                    2
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "Seattle Grace",
                                                                                                                                      3
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Eastman Medical",
                                                                                                                                        4
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Sacred Heart Hospital",
                                                                                                                                          5
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                            6
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "Gotham General",
                                                                                                                                              7
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "Princeton-Plainsboro",
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
                                                                                                                            ],
                                                                                                                            /* :: */[
                                                                                                                              /* record */[
                                                                                                                                /* name */"U. Morgan",
                                                                                                                                /* canMatchWith */1,
                                                                                                                                /* selectedNames : :: */[
                                                                                                                                  /* tuple */[
                                                                                                                                    "Sacred Heart Hospital",
                                                                                                                                    1
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "Eastman Medical",
                                                                                                                                      2
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Princeton-Plainsboro",
                                                                                                                                        3
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Gotham General",
                                                                                                                                          4
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                            5
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "Springfield General",
                                                                                                                                              6
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                                7
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "Seattle Grace",
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
                                                                                                                              ],
                                                                                                                              /* :: */[
                                                                                                                                /* record */[
                                                                                                                                  /* name */"X. Martin",
                                                                                                                                  /* canMatchWith */1,
                                                                                                                                  /* selectedNames : :: */[
                                                                                                                                    /* tuple */[
                                                                                                                                      "Princeton-Plainsboro",
                                                                                                                                      1
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Gotham General",
                                                                                                                                        2
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Springfield General",
                                                                                                                                          3
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "St. Sebastian's Hospital",
                                                                                                                                            4
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "Eastman Medical",
                                                                                                                                              5
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "Sacred Heart Hospital",
                                                                                                                                                6
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "Seattle Grace",
                                                                                                                                                  7
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Frankenstein & Associates",
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
                                                                                                                                ],
                                                                                                                                /* :: */[
                                                                                                                                  /* record */[
                                                                                                                                    /* name */"P. White",
                                                                                                                                    /* canMatchWith */1,
                                                                                                                                    /* selectedNames : :: */[
                                                                                                                                      /* tuple */[
                                                                                                                                        "Sacred Heart Hospital",
                                                                                                                                        1
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Princeton-Plainsboro",
                                                                                                                                          2
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "Springfield General",
                                                                                                                                            3
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "Eastman Medical",
                                                                                                                                              4
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "Seattle Grace",
                                                                                                                                                5
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "St. Sebastian's Hospital",
                                                                                                                                                  6
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Frankenstein & Associates",
                                                                                                                                                    7
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Gotham General",
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
                                                                                                                                  ],
                                                                                                                                  /* :: */[
                                                                                                                                    /* record */[
                                                                                                                                      /* name */"T. Allen",
                                                                                                                                      /* canMatchWith */1,
                                                                                                                                      /* selectedNames : :: */[
                                                                                                                                        /* tuple */[
                                                                                                                                          "Frankenstein & Associates",
                                                                                                                                          1
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "Princeton-Plainsboro",
                                                                                                                                            2
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "Seattle Grace",
                                                                                                                                              3
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                                4
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "Springfield General",
                                                                                                                                                  5
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Eastman Medical",
                                                                                                                                                    6
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                      7
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Gotham General",
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
                                                                                                                                    ],
                                                                                                                                    /* :: */[
                                                                                                                                      /* record */[
                                                                                                                                        /* name */"W. Powell",
                                                                                                                                        /* canMatchWith */1,
                                                                                                                                        /* selectedNames : :: */[
                                                                                                                                          /* tuple */[
                                                                                                                                            "St. Sebastian's Hospital",
                                                                                                                                            1
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "Gotham General",
                                                                                                                                              2
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "Frankenstein & Associates",
                                                                                                                                                3
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "Sacred Heart Hospital",
                                                                                                                                                  4
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Eastman Medical",
                                                                                                                                                    5
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Seattle Grace",
                                                                                                                                                      6
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Princeton-Plainsboro",
                                                                                                                                                        7
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "Springfield General",
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
                                                                                                                                      ],
                                                                                                                                      /* :: */[
                                                                                                                                        /* record */[
                                                                                                                                          /* name */"D. Gray",
                                                                                                                                          /* canMatchWith */1,
                                                                                                                                          /* selectedNames : :: */[
                                                                                                                                            /* tuple */[
                                                                                                                                              "St. Sebastian's Hospital",
                                                                                                                                              1
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "Princeton-Plainsboro",
                                                                                                                                                2
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "Seattle Grace",
                                                                                                                                                  3
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Frankenstein & Associates",
                                                                                                                                                    4
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Eastman Medical",
                                                                                                                                                      5
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Gotham General",
                                                                                                                                                        6
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "Sacred Heart Hospital",
                                                                                                                                                          7
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "Springfield General",
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
                                                                                                                                        ],
                                                                                                                                        /* :: */[
                                                                                                                                          /* record */[
                                                                                                                                            /* name */"P. King",
                                                                                                                                            /* canMatchWith */1,
                                                                                                                                            /* selectedNames : :: */[
                                                                                                                                              /* tuple */[
                                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                                1
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "Princeton-Plainsboro",
                                                                                                                                                  2
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Gotham General",
                                                                                                                                                    3
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                      4
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Eastman Medical",
                                                                                                                                                        5
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "Frankenstein & Associates",
                                                                                                                                                          6
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "Springfield General",
                                                                                                                                                            7
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Seattle Grace",
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
                                                                                                                                          ],
                                                                                                                                          /* :: */[
                                                                                                                                            /* record */[
                                                                                                                                              /* name */"F. Smith",
                                                                                                                                              /* canMatchWith */1,
                                                                                                                                              /* selectedNames : :: */[
                                                                                                                                                /* tuple */[
                                                                                                                                                  "St. Sebastian's Hospital",
                                                                                                                                                  1
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Frankenstein & Associates",
                                                                                                                                                    2
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Gotham General",
                                                                                                                                                      3
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Seattle Grace",
                                                                                                                                                        4
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "Princeton-Plainsboro",
                                                                                                                                                          5
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "Eastman Medical",
                                                                                                                                                            6
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Sacred Heart Hospital",
                                                                                                                                                              7
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "Springfield General",
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
                                                                                                                                            ],
                                                                                                                                            /* :: */[
                                                                                                                                              /* record */[
                                                                                                                                                /* name */"Q. Jones",
                                                                                                                                                /* canMatchWith */1,
                                                                                                                                                /* selectedNames : :: */[
                                                                                                                                                  /* tuple */[
                                                                                                                                                    "Eastman Medical",
                                                                                                                                                    1
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                      2
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Springfield General",
                                                                                                                                                        3
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "St. Sebastian's Hospital",
                                                                                                                                                          4
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "Seattle Grace",
                                                                                                                                                            5
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Princeton-Plainsboro",
                                                                                                                                                              6
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "Frankenstein & Associates",
                                                                                                                                                                7
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "Gotham General",
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
                                                                                                                                              ],
                                                                                                                                              /* :: */[
                                                                                                                                                /* record */[
                                                                                                                                                  /* name */"S. Bell",
                                                                                                                                                  /* canMatchWith */1,
                                                                                                                                                  /* selectedNames : :: */[
                                                                                                                                                    /* tuple */[
                                                                                                                                                      "Frankenstein & Associates",
                                                                                                                                                      1
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Eastman Medical",
                                                                                                                                                        2
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "Gotham General",
                                                                                                                                                          3
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "St. Sebastian's Hospital",
                                                                                                                                                            4
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Princeton-Plainsboro",
                                                                                                                                                              5
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "Sacred Heart Hospital",
                                                                                                                                                                6
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "Springfield General",
                                                                                                                                                                  7
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "Seattle Grace",
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
                                                                                                                                                ],
                                                                                                                                                /* :: */[
                                                                                                                                                  /* record */[
                                                                                                                                                    /* name */"K. Nelson",
                                                                                                                                                    /* canMatchWith */1,
                                                                                                                                                    /* selectedNames : :: */[
                                                                                                                                                      /* tuple */[
                                                                                                                                                        "Gotham General",
                                                                                                                                                        1
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "Seattle Grace",
                                                                                                                                                          2
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "Princeton-Plainsboro",
                                                                                                                                                            3
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Sacred Heart Hospital",
                                                                                                                                                              4
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "Frankenstein & Associates",
                                                                                                                                                                5
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "Springfield General",
                                                                                                                                                                  6
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "Eastman Medical",
                                                                                                                                                                    7
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "St. Sebastian's Hospital",
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
                                                                                                                                                  ],
                                                                                                                                                  /* :: */[
                                                                                                                                                    /* record */[
                                                                                                                                                      /* name */"S. Davis",
                                                                                                                                                      /* canMatchWith */1,
                                                                                                                                                      /* selectedNames : :: */[
                                                                                                                                                        /* tuple */[
                                                                                                                                                          "Seattle Grace",
                                                                                                                                                          1
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                                            2
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Springfield General",
                                                                                                                                                              3
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "Gotham General",
                                                                                                                                                                4
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "Eastman Medical",
                                                                                                                                                                  5
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "St. Sebastian's Hospital",
                                                                                                                                                                    6
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                                      7
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "Princeton-Plainsboro",
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
                                                                                                                                                    ],
                                                                                                                                                    /* :: */[
                                                                                                                                                      /* record */[
                                                                                                                                                        /* name */"R. Taylor",
                                                                                                                                                        /* canMatchWith */1,
                                                                                                                                                        /* selectedNames : :: */[
                                                                                                                                                          /* tuple */[
                                                                                                                                                            "Springfield General",
                                                                                                                                                            1
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Frankenstein & Associates",
                                                                                                                                                              2
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "Gotham General",
                                                                                                                                                                3
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "St. Sebastian's Hospital",
                                                                                                                                                                  4
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "Eastman Medical",
                                                                                                                                                                    5
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "Princeton-Plainsboro",
                                                                                                                                                                      6
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "Seattle Grace",
                                                                                                                                                                        7
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Sacred Heart Hospital",
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
                                                                                                                                                      ],
                                                                                                                                                      /* :: */[
                                                                                                                                                        /* record */[
                                                                                                                                                          /* name */"V. Edwards",
                                                                                                                                                          /* canMatchWith */1,
                                                                                                                                                          /* selectedNames : :: */[
                                                                                                                                                            /* tuple */[
                                                                                                                                                              "Princeton-Plainsboro",
                                                                                                                                                              1
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                                                2
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "Springfield General",
                                                                                                                                                                  3
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "Sacred Heart Hospital",
                                                                                                                                                                    4
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "Frankenstein & Associates",
                                                                                                                                                                      5
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "Eastman Medical",
                                                                                                                                                                        6
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Gotham General",
                                                                                                                                                                          7
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "Seattle Grace",
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
                                                                                                                                                        ],
                                                                                                                                                        /* :: */[
                                                                                                                                                          /* record */[
                                                                                                                                                            /* name */"X. Jenkins",
                                                                                                                                                            /* canMatchWith */1,
                                                                                                                                                            /* selectedNames : :: */[
                                                                                                                                                              /* tuple */[
                                                                                                                                                                "Gotham General",
                                                                                                                                                                1
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "Seattle Grace",
                                                                                                                                                                  2
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "Princeton-Plainsboro",
                                                                                                                                                                    3
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                                      4
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "St. Sebastian's Hospital",
                                                                                                                                                                        5
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Frankenstein & Associates",
                                                                                                                                                                          6
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "Eastman Medical",
                                                                                                                                                                            7
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Springfield General",
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
                                                                                                                                                          ],
                                                                                                                                                          /* :: */[
                                                                                                                                                            /* record */[
                                                                                                                                                              /* name */"X. Walker",
                                                                                                                                                              /* canMatchWith */1,
                                                                                                                                                              /* selectedNames : :: */[
                                                                                                                                                                /* tuple */[
                                                                                                                                                                  "St. Sebastian's Hospital",
                                                                                                                                                                  1
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "Seattle Grace",
                                                                                                                                                                    2
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                                      3
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "Gotham General",
                                                                                                                                                                        4
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Princeton-Plainsboro",
                                                                                                                                                                          5
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "Eastman Medical",
                                                                                                                                                                            6
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Frankenstein & Associates",
                                                                                                                                                                              7
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "Springfield General",
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
                                                                                                                                                            ],
                                                                                                                                                            /* :: */[
                                                                                                                                                              /* record */[
                                                                                                                                                                /* name */"F. Lopez",
                                                                                                                                                                /* canMatchWith */1,
                                                                                                                                                                /* selectedNames : :: */[
                                                                                                                                                                  /* tuple */[
                                                                                                                                                                    "Princeton-Plainsboro",
                                                                                                                                                                    1
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                                      2
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "Frankenstein & Associates",
                                                                                                                                                                        3
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Seattle Grace",
                                                                                                                                                                          4
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "Springfield General",
                                                                                                                                                                            5
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Gotham General",
                                                                                                                                                                              6
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                                                                7
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "Eastman Medical",
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
                                                                                                                                                              ],
                                                                                                                                                              /* :: */[
                                                                                                                                                                /* record */[
                                                                                                                                                                  /* name */"V. Perez",
                                                                                                                                                                  /* canMatchWith */1,
                                                                                                                                                                  /* selectedNames : :: */[
                                                                                                                                                                    /* tuple */[
                                                                                                                                                                      "Seattle Grace",
                                                                                                                                                                      1
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "Sacred Heart Hospital",
                                                                                                                                                                        2
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Gotham General",
                                                                                                                                                                          3
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                                                            4
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Princeton-Plainsboro",
                                                                                                                                                                              5
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                                                                6
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "Eastman Medical",
                                                                                                                                                                                  7
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "Springfield General",
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
                                                                                                                                                                ],
                                                                                                                                                                /* :: */[
                                                                                                                                                                  /* record */[
                                                                                                                                                                    /* name */"M. Lewis",
                                                                                                                                                                    /* canMatchWith */1,
                                                                                                                                                                    /* selectedNames : :: */[
                                                                                                                                                                      /* tuple */[
                                                                                                                                                                        "St. Sebastian's Hospital",
                                                                                                                                                                        1
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Princeton-Plainsboro",
                                                                                                                                                                          2
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                                                            3
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Springfield General",
                                                                                                                                                                              4
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "Eastman Medical",
                                                                                                                                                                                5
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "Gotham General",
                                                                                                                                                                                  6
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "Seattle Grace",
                                                                                                                                                                                    7
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "Sacred Heart Hospital",
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
                                                                                                                                                                  ],
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    /* record */[
                                                                                                                                                                      /* name */"O. Thompson",
                                                                                                                                                                      /* canMatchWith */1,
                                                                                                                                                                      /* selectedNames : :: */[
                                                                                                                                                                        /* tuple */[
                                                                                                                                                                          "Frankenstein & Associates",
                                                                                                                                                                          1
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "St. Sebastian's Hospital",
                                                                                                                                                                            2
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Sacred Heart Hospital",
                                                                                                                                                                              3
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "Gotham General",
                                                                                                                                                                                4
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "Springfield General",
                                                                                                                                                                                  5
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "Seattle Grace",
                                                                                                                                                                                    6
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "Eastman Medical",
                                                                                                                                                                                      7
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Princeton-Plainsboro",
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
                                                                                                                                                                    ],
                                                                                                                                                                    /* :: */[
                                                                                                                                                                      /* record */[
                                                                                                                                                                        /* name */"W. Thomas",
                                                                                                                                                                        /* canMatchWith */1,
                                                                                                                                                                        /* selectedNames : :: */[
                                                                                                                                                                          /* tuple */[
                                                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                                                            1
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Seattle Grace",
                                                                                                                                                                              2
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "Gotham General",
                                                                                                                                                                                3
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "Springfield General",
                                                                                                                                                                                  4
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "St. Sebastian's Hospital",
                                                                                                                                                                                    5
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "Princeton-Plainsboro",
                                                                                                                                                                                      6
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Eastman Medical",
                                                                                                                                                                                        7
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Sacred Heart Hospital",
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
                                                                                                                                                                      ],
                                                                                                                                                                      /* :: */[
                                                                                                                                                                        /* record */[
                                                                                                                                                                          /* name */"Z. Price",
                                                                                                                                                                          /* canMatchWith */1,
                                                                                                                                                                          /* selectedNames : :: */[
                                                                                                                                                                            /* tuple */[
                                                                                                                                                                              "Springfield General",
                                                                                                                                                                              1
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "Sacred Heart Hospital",
                                                                                                                                                                                2
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "Princeton-Plainsboro",
                                                                                                                                                                                  3
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "Gotham General",
                                                                                                                                                                                    4
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "St. Sebastian's Hospital",
                                                                                                                                                                                      5
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Seattle Grace",
                                                                                                                                                                                        6
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Eastman Medical",
                                                                                                                                                                                          7
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Frankenstein & Associates",
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
                                                                                                                                                                        ],
                                                                                                                                                                        /* :: */[
                                                                                                                                                                          /* record */[
                                                                                                                                                                            /* name */"F. Mitchell",
                                                                                                                                                                            /* canMatchWith */1,
                                                                                                                                                                            /* selectedNames : :: */[
                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                "Princeton-Plainsboro",
                                                                                                                                                                                1
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "Springfield General",
                                                                                                                                                                                  2
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "Gotham General",
                                                                                                                                                                                    3
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "Frankenstein & Associates",
                                                                                                                                                                                      4
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Eastman Medical",
                                                                                                                                                                                        5
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Seattle Grace",
                                                                                                                                                                                          6
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Sacred Heart Hospital",
                                                                                                                                                                                            7
                                                                                                                                                                                          ],
                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "St. Sebastian's Hospital",
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
                                                                                                                                                                          ],
                                                                                                                                                                          /* :: */[
                                                                                                                                                                            /* record */[
                                                                                                                                                                              /* name */"O. Sanchez",
                                                                                                                                                                              /* canMatchWith */1,
                                                                                                                                                                              /* selectedNames : :: */[
                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                  "St. Sebastian's Hospital",
                                                                                                                                                                                  1
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "Princeton-Plainsboro",
                                                                                                                                                                                    2
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "Seattle Grace",
                                                                                                                                                                                      3
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Frankenstein & Associates",
                                                                                                                                                                                        4
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Gotham General",
                                                                                                                                                                                          5
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Sacred Heart Hospital",
                                                                                                                                                                                            6
                                                                                                                                                                                          ],
                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "Springfield General",
                                                                                                                                                                                              7
                                                                                                                                                                                            ],
                                                                                                                                                                                            /* :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "Eastman Medical",
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
                                                                                                                                                                            ],
                                                                                                                                                                            /* :: */[
                                                                                                                                                                              /* record */[
                                                                                                                                                                                /* name */"H. Barrett",
                                                                                                                                                                                /* canMatchWith */1,
                                                                                                                                                                                /* selectedNames : :: */[
                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                    "Eastman Medical",
                                                                                                                                                                                    1
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "Frankenstein & Associates",
                                                                                                                                                                                      2
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Gotham General",
                                                                                                                                                                                        3
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Seattle Grace",
                                                                                                                                                                                          4
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Springfield General",
                                                                                                                                                                                            5
                                                                                                                                                                                          ],
                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "St. Sebastian's Hospital",
                                                                                                                                                                                              6
                                                                                                                                                                                            ],
                                                                                                                                                                                            /* :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "Princeton-Plainsboro",
                                                                                                                                                                                                7
                                                                                                                                                                                              ],
                                                                                                                                                                                              /* :: */[
                                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                                  "Sacred Heart Hospital",
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
                                                                                                                                                                              ],
                                                                                                                                                                              /* :: */[
                                                                                                                                                                                /* record */[
                                                                                                                                                                                  /* name */"G. Cohen",
                                                                                                                                                                                  /* canMatchWith */1,
                                                                                                                                                                                  /* selectedNames : :: */[
                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                      "Springfield General",
                                                                                                                                                                                      1
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Princeton-Plainsboro",
                                                                                                                                                                                        2
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Gotham General",
                                                                                                                                                                                          3
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Frankenstein & Associates",
                                                                                                                                                                                            4
                                                                                                                                                                                          ],
                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "St. Sebastian's Hospital",
                                                                                                                                                                                              5
                                                                                                                                                                                            ],
                                                                                                                                                                                            /* :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "Eastman Medical",
                                                                                                                                                                                                6
                                                                                                                                                                                              ],
                                                                                                                                                                                              /* :: */[
                                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                                  "Sacred Heart Hospital",
                                                                                                                                                                                                  7
                                                                                                                                                                                                ],
                                                                                                                                                                                                /* :: */[
                                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                                    "Seattle Grace",
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
                                                                                                                                                                                ],
                                                                                                                                                                                /* :: */[
                                                                                                                                                                                  /* record */[
                                                                                                                                                                                    /* name */"Y. Conrad",
                                                                                                                                                                                    /* canMatchWith */1,
                                                                                                                                                                                    /* selectedNames : :: */[
                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                        "Seattle Grace",
                                                                                                                                                                                        1
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Sacred Heart Hospital",
                                                                                                                                                                                          2
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Eastman Medical",
                                                                                                                                                                                            3
                                                                                                                                                                                          ],
                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "St. Sebastian's Hospital",
                                                                                                                                                                                              4
                                                                                                                                                                                            ],
                                                                                                                                                                                            /* :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "Springfield General",
                                                                                                                                                                                                5
                                                                                                                                                                                              ],
                                                                                                                                                                                              /* :: */[
                                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                                  "Frankenstein & Associates",
                                                                                                                                                                                                  6
                                                                                                                                                                                                ],
                                                                                                                                                                                                /* :: */[
                                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                                    "Gotham General",
                                                                                                                                                                                                    7
                                                                                                                                                                                                  ],
                                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                                      "Princeton-Plainsboro",
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
                                                                                                                                                                                  ],
                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                    /* record */[
                                                                                                                                                                                      /* name */"V. Kaye",
                                                                                                                                                                                      /* canMatchWith */1,
                                                                                                                                                                                      /* selectedNames : :: */[
                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                          "Springfield General",
                                                                                                                                                                                          1
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Sacred Heart Hospital",
                                                                                                                                                                                            2
                                                                                                                                                                                          ],
                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "St. Sebastian's Hospital",
                                                                                                                                                                                              3
                                                                                                                                                                                            ],
                                                                                                                                                                                            /* :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "Eastman Medical",
                                                                                                                                                                                                4
                                                                                                                                                                                              ],
                                                                                                                                                                                              /* :: */[
                                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                                  "Gotham General",
                                                                                                                                                                                                  5
                                                                                                                                                                                                ],
                                                                                                                                                                                                /* :: */[
                                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                                    "Princeton-Plainsboro",
                                                                                                                                                                                                    6
                                                                                                                                                                                                  ],
                                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                                      "Frankenstein & Associates",
                                                                                                                                                                                                      7
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                                        "Seattle Grace",
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
                                                                                                                                                                                    ],
                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                      /* record */[
                                                                                                                                                                                        /* name */"L. Tanner",
                                                                                                                                                                                        /* canMatchWith */1,
                                                                                                                                                                                        /* selectedNames : :: */[
                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                            "Sacred Heart Hospital",
                                                                                                                                                                                            1
                                                                                                                                                                                          ],
                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "Springfield General",
                                                                                                                                                                                              2
                                                                                                                                                                                            ],
                                                                                                                                                                                            /* :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "St. Sebastian's Hospital",
                                                                                                                                                                                                3
                                                                                                                                                                                              ],
                                                                                                                                                                                              /* :: */[
                                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                                  "Gotham General",
                                                                                                                                                                                                  4
                                                                                                                                                                                                ],
                                                                                                                                                                                                /* :: */[
                                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                                    "Princeton-Plainsboro",
                                                                                                                                                                                                    5
                                                                                                                                                                                                  ],
                                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                                      "Eastman Medical",
                                                                                                                                                                                                      6
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                                        "Seattle Grace",
                                                                                                                                                                                                        7
                                                                                                                                                                                                      ],
                                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                                          "Frankenstein & Associates",
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
                                                                                                                                                                                      ],
                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                        /* record */[
                                                                                                                                                                                          /* name */"Q. Eddy",
                                                                                                                                                                                          /* canMatchWith */1,
                                                                                                                                                                                          /* selectedNames : :: */[
                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                              "Frankenstein & Associates",
                                                                                                                                                                                              1
                                                                                                                                                                                            ],
                                                                                                                                                                                            /* :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "Eastman Medical",
                                                                                                                                                                                                2
                                                                                                                                                                                              ],
                                                                                                                                                                                              /* :: */[
                                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                                  "Seattle Grace",
                                                                                                                                                                                                  3
                                                                                                                                                                                                ],
                                                                                                                                                                                                /* :: */[
                                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                                    "Springfield General",
                                                                                                                                                                                                    4
                                                                                                                                                                                                  ],
                                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                                      "Sacred Heart Hospital",
                                                                                                                                                                                                      5
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                                        "Princeton-Plainsboro",
                                                                                                                                                                                                        6
                                                                                                                                                                                                      ],
                                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                                          "Gotham General",
                                                                                                                                                                                                          7
                                                                                                                                                                                                        ],
                                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                                            "St. Sebastian's Hospital",
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
                                                                                                                                                                                        ],
                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                          /* record */[
                                                                                                                                                                                            /* name */"T. Rodger",
                                                                                                                                                                                            /* canMatchWith */1,
                                                                                                                                                                                            /* selectedNames : :: */[
                                                                                                                                                                                              /* tuple */[
                                                                                                                                                                                                "Frankenstein & Associates",
                                                                                                                                                                                                1
                                                                                                                                                                                              ],
                                                                                                                                                                                              /* :: */[
                                                                                                                                                                                                /* tuple */[
                                                                                                                                                                                                  "St. Sebastian's Hospital",
                                                                                                                                                                                                  2
                                                                                                                                                                                                ],
                                                                                                                                                                                                /* :: */[
                                                                                                                                                                                                  /* tuple */[
                                                                                                                                                                                                    "Princeton-Plainsboro",
                                                                                                                                                                                                    3
                                                                                                                                                                                                  ],
                                                                                                                                                                                                  /* :: */[
                                                                                                                                                                                                    /* tuple */[
                                                                                                                                                                                                      "Springfield General",
                                                                                                                                                                                                      4
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    /* :: */[
                                                                                                                                                                                                      /* tuple */[
                                                                                                                                                                                                        "Seattle Grace",
                                                                                                                                                                                                        5
                                                                                                                                                                                                      ],
                                                                                                                                                                                                      /* :: */[
                                                                                                                                                                                                        /* tuple */[
                                                                                                                                                                                                          "Eastman Medical",
                                                                                                                                                                                                          6
                                                                                                                                                                                                        ],
                                                                                                                                                                                                        /* :: */[
                                                                                                                                                                                                          /* tuple */[
                                                                                                                                                                                                            "Gotham General",
                                                                                                                                                                                                            7
                                                                                                                                                                                                          ],
                                                                                                                                                                                                          /* :: */[
                                                                                                                                                                                                            /* tuple */[
                                                                                                                                                                                                              "Sacred Heart Hospital",
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
  ]
];

var hospitals = /* :: */[
  /* record */[
    /* name */"Gotham General",
    /* canMatchWith */23,
    /* selectedNames : [] */0
  ],
  /* :: */[
    /* record */[
      /* name */"Sacred Heart Hospital",
      /* canMatchWith */18,
      /* selectedNames : [] */0
    ],
    /* :: */[
      /* record */[
        /* name */"Eastman Medical",
        /* canMatchWith */16,
        /* selectedNames : [] */0
      ],
      /* :: */[
        /* record */[
          /* name */"Princeton-Plainsboro",
          /* canMatchWith */15,
          /* selectedNames : [] */0
        ],
        /* :: */[
          /* record */[
            /* name */"Frankenstein & Associates",
            /* canMatchWith */4,
            /* selectedNames : [] */0
          ],
          /* :: */[
            /* record */[
              /* name */"Springfield General",
              /* canMatchWith */19,
              /* selectedNames : [] */0
            ],
            /* :: */[
              /* record */[
                /* name */"Seattle Grace",
                /* canMatchWith */8,
                /* selectedNames : [] */0
              ],
              /* :: */[
                /* record */[
                  /* name */"St. Sebastian's Hospital",
                  /* canMatchWith */12,
                  /* selectedNames : [] */0
                ],
                /* [] */0
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
exports.PairingCmp = PairingCmp;
exports.OptIntCmp = OptIntCmp;
exports.imperialPositions = imperialPositions;
exports.imperialCandidates = imperialCandidates;
exports.marriageMen = marriageMen;
exports.marriageWomen = marriageWomen;
exports.residents = residents;
exports.hospitals = hospitals;
exports.sampleDataToRaw = sampleDataToRaw;
/* SharedTypes Not a pure module */
