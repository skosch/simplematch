'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

function sampleDataToRaw(rowFormat, sampleParticipants) {
  if (rowFormat) {
    return Belt_List.toArray(Belt_List.flatten(Belt_List.map(sampleParticipants, (function (p) {
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

var positions = /* :: */[
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

var candidates = /* :: */[
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

exports.positions = positions;
exports.candidates = candidates;
exports.sampleDataToRaw = sampleDataToRaw;
/* No side effect */
