include SharedTypes;

open Belt;

let imperialPositions: list(sideDataEntry) = [
  {
    name: "Stormtrooper (Soldier)",
    canMatchWith: 6,
    selectedNames: [
      ("Lama Derlin", 1),
      ("Cut Rex", 1),
      ("Shaak Tekka", 1),
      ("Pooja Hutt", 2),
      ("Sabine Darklighter", 3),
      ("Orn Trench", 4),
      ("Che Maul Mandrell", 5),
      ("Lyra Papanoida", 6),
      ("Shaak Tekka", 7),
      ("Roos Eval", 8),
    ],
  },
  {
    name: "Stormtrooper (Sargeant)",
    canMatchWith: 2,
    selectedNames: [
      ("Lyra Papanoida", 1),
      ("Roos Eval", 2),
      ("Lama Derlin", 2),
      ("Pooja Hutt", 2),
      ("Orn Aak", 3),
      ("Orn Trench", 3),
      ("Sabine Darklighter", 4),
      ("Cut Rex", 5),
    ],
  },
  {
    name: "Stormtrooper (Commander)",
    canMatchWith: 1,
    selectedNames: [
      ("Zan Gallia", 1),
      ("Rae Nu", 2),
      ("Lok Clovis", 3),
      ("Orn Trench", 4),
    ],
  },
  {
    name: "Starfighter Pilot",
    canMatchWith: 2,
    selectedNames: [
      ("Rae Nu", 1),
      ("Roos Eval", 2),
      ("Lok Clovis", 3),
      ("Pooja Hutt", 4),
      ("Sabine Darklighter", 5),
      ("Shaak Tekka", 6),
      ("Jax Antilles", 7),
      ("Che Maul Mandrell", 8),
      ("Orn Aak", 8),
    ],
  },
  {
    name: "Imperial Guard",
    canMatchWith: 4,
    selectedNames: [
      ("Jax Antilles", 1),
      ("Lama Derlin", 2),
      ("Cut Rex", 3),
      ("Orn Trench", 4),
      ("Zan Gallia", 5),
      ("Shaak Tekka", 6),
      ("Pooja Hutt", 7),
    ],
  },
];

let imperialCandidates: list(sideDataEntry) = [
  {
    name: "Orn Aak",
    canMatchWith: 2,
    selectedNames: [
      ("Imperial Guard", 1),
      ("Stormtrooper (Commander)", 2),
      ("Starfighter Pilot", 3),
    ],
  },
  {
    name: "Lyra Papanoida",
    canMatchWith: 2,
    selectedNames: [
      ("Stormtrooper (Sargeant)", 1),
      ("Stormtrooper (Soldier)", 2),
      ("Starfighter Pilot", 3),
      ("Imperial Guard", 4),
    ],
  },
  {
    name: "Pooja Hutt",
    canMatchWith: 1,
    selectedNames: [
      ("Starfighter Pilot", 1),
      ("Stormtrooper (Soldier)", 2),
      ("Imperial Guard", 3),
      ("Stormtrooper (Sargeant)", 4),
    ],
  },
  {
    name: "Lama Derlin",
    canMatchWith: 1,
    selectedNames: [
      ("Starfighter Pilot", 1),
      ("Stormtrooper (Soldier)", 2),
      ("Imperial Guard", 3),
      ("Stormtrooper (Sargeant)", 4),
    ],
  },
  {
    name: "Cut Rex",
    canMatchWith: 3,
    selectedNames: [
      ("Imperial Guard", 1),
      ("Stormtrooper (Soldier)", 2),
      ("Stormtrooper (Sargeant)", 2),
      ("Stormtrooper (Commander)", 3),
    ],
  },
  {
    name: "Zan Gallia",
    canMatchWith: 2,
    selectedNames: [
      ("Imperial Guard", 1),
      ("Stormtrooper (Sargeant)", 2),
      ("Stormtrooper (Commander)", 3),
      ("Stormtrooper (Soldier)", 2),
    ],
  },
  {
    name: "Jax Antilles",
    canMatchWith: 4,
    selectedNames: [
      ("Imperial Guard", 1),
      ("Stormtrooper (Soldier)", 2),
      ("Starfighter Pilot", 3),
      ("Stormtrooper (Sargeant)", 4),
    ],
  },
  {
    name: "Sabine Darklighter",
    canMatchWith: 1,
    selectedNames: [
      ("Stormtrooper (Soldier)", 1),
      ("Starfighter Pilot", 2),
      ("Stormtrooper (Sargeant)", 3),
      ("Stormtrooper (Commander)", 4),
    ],
  },
  {
    name: "Rae Nu",
    canMatchWith: 2,
    selectedNames: [
      ("Starfighter Pilot", 1),
      ("Stormtrooper (Commander)", 2),
      ("Stormtrooper (Sargeant)", 3),
      ("Imperial Guard", 4),
    ],
  },
  {
    name: "Lok Clovis",
    canMatchWith: 3,
    selectedNames: [
      ("Stormtrooper (Commander)", 1),
      ("Stormtrooper (Sargeant)", 2),
      ("Starfighter Pilot", 3),
    ],
  },
  {
    name: "Che Maul Mandrell",
    canMatchWith: 2,
    selectedNames: [
      ("Stormtrooper (Sargeant)", 1),
      ("Stormtrooper (Soldier)", 2),
      ("Imperial Guard", 3),
      ("Starfighter Pilot", 4),
    ],
  },
  {
    name: "Orn Trench",
    canMatchWith: 1,
    selectedNames: [
      ("Stormtrooper (Soldier)", 1),
      ("Stormtrooper (Sargeant)", 2),
      ("Starfighter Pilot", 3),
    ],
  },
  {
    name: "Shaak Tekka",
    canMatchWith: 2,
    selectedNames: [
      ("Imperial Guard", 1),
      ("Starfighter Pilot", 2),
      ("Stormtrooper (Soldier)", 3),
      ("Stormtrooper (Sargeant)", 4),
    ],
  },
  {
    name: "Roos Eval",
    canMatchWith: 2,
    selectedNames: [
      ("Starfighter Pilot", 1),
      ("Imperial Guard", 2),
      ("Stormtrooper (Soldier)", 3),
      ("Stormtrooper (Sargeant)", 4),
    ],
  },
];

let marriageMen: list(sideDataEntry) = [
  {
    name: "Peter",
    canMatchWith: 1,
    selectedNames: [
      ("Marion", 1),
      ("Pam", 2),
      ("Melody", 3),
      ("Anna", 4),
    ],
  },
  {
    name: "Alfred",
    canMatchWith: 1,
    selectedNames: [
      ("Pam", 1),
      ("Lora", 2),
      ("Elena", 3),
      ("Sherry", 4),
    ],
  },
  {
    name: "Bernard",
    canMatchWith: 1,
    selectedNames: [
      ("Anna", 1),
      ("Marion", 2),
      ("Elena", 3),
      ("Tanya", 4),
    ],
  },
  {
    name: "Allan",
    canMatchWith: 1,
    selectedNames: [
      ("Elena", 1),
      ("Lora", 2),
      ("Marion", 3),
      ("Tanya", 4),
    ],
  },
  {
    name: "Hugh",
    canMatchWith: 1,
    selectedNames: [
      ("Tanya", 1),
      ("Anna", 2),
      ("Melody", 3),
      ("Marion", 4),
    ],
  },
  {
    name: "Felipe",
    canMatchWith: 1,
    selectedNames: [
      ("Lora", 1),
      ("Pam", 2),
      ("Sherry", 3),
      ("Sandy", 4),
    ],
  },
  {
    name: "Richard",
    canMatchWith: 1,
    selectedNames: [
      ("Anna", 1),
      ("Tanya", 2),
      ("Josephine", 3),
      ("Melody", 4),
    ],
  },
  {
    name: "Ryan",
    canMatchWith: 1,
    selectedNames: [
      ("Marion", 1),
      ("Elena", 2),
      ("Josephine", 3),
      ("Tanya", 4),
    ],
  },
  {
    name: "Gilbert",
    canMatchWith: 1,
    selectedNames: [
      ("Elena", 1),
      ("Sandy", 2),
      ("Anna", 3),
      ("Melody", 4),
    ],
  },
  {
    name: "Eric",
    canMatchWith: 1,
    selectedNames: [
      ("Anna", 1),
      ("Sandy", 2),
      ("Sherry", 3),
      ("Lora", 4)
    ],
  },
];

let marriageWomen: list(sideDataEntry) = [
  {
    name: "Elena",
    canMatchWith: 1,
    selectedNames: [
      ("Richard", 1),
      ("Ryan", 2),
      ("Hugh", 3),
      ("Peter", 4),
    ],
  },
  {
    name: "Melody",
    canMatchWith: 1,
    selectedNames: [
      ("Peter", 1),
      ("Eric", 2),
      ("Felipe", 3),
      ("Gilbert", 4),
    ],
  },
  {
    name: "Marion",
    canMatchWith: 1,
    selectedNames: [
      ("Hugh", 1),
      ("Richard", 2),
      ("Peter", 3),
      ("Bernard", 4),
    ],
  },
  {
    name: "Sherry",
    canMatchWith: 1,
    selectedNames: [
      ("Ryan", 1),
      ("Allan", 2),
      ("Hugh", 3),
      ("Bernard", 4),
    ],
  },
  {
    name: "Anna",
    canMatchWith: 1,
    selectedNames: [
      ("Eric", 1),
      ("Peter", 2),
      ("Felipe", 3),
      ("Alfred", 4),
    ],
  },
  {
    name: "Tanya",
    canMatchWith: 1,
    selectedNames: [
      ("Hugh", 1),
      ("Richard", 2),
      ("Ryan", 3),
      ("Peter", 2),
    ],
  },
  {
    name: "Lora",
    canMatchWith: 1,
    selectedNames: [
      ("Allan", 1),
      ("Bernard", 2),
      ("Gilbert", 3),
      ("Hugh", 4),
    ],
  },
  {
    name: "Pam",
    canMatchWith: 1,
    selectedNames: [
      ("Bernard", 1),
      ("Felipe", 2),
      ("Hugh", 3),
      ("Gilbert", 4),
    ],
  },
  {
    name: "Josephine",
    canMatchWith: 1,
    selectedNames: [
      ("Bernard", 1),
      ("Eric", 2),
      ("Hugh", 3),
      ("Felipe", 4),
    ],
  },
  {
    name: "Sandy",
    canMatchWith: 1,
    selectedNames: [
      ("Hugh", 1),
      ("Peter", 2),
      ("Alfred", 3),
      ("Eric", 4),
    ],
  },
];

let sampleDataToRaw = (rowFormat, sampleParticipants) => {
  let rows =
    switch (rowFormat) {
    | SelectedInColumns =>
      List.map(sampleParticipants, p =>
        [
          [p.name, string_of_int(p.canMatchWith)],
          List.map(p.selectedNames, ((sn, _rank)) => sn),
        ]
        |> List.flatten
        |> List.toArray
      )
      |> List.toArray
    | SelectedInMultipleRows =>
      /* For every participant, create multiple rows */
      List.map(sampleParticipants, p =>
        if (List.length(p.selectedNames) > 0) {
          List.map(p.selectedNames, ((sn, rank)) =>
            [p.name, string_of_int(p.canMatchWith), sn, string_of_int(rank)]
            |> List.toArray
          );
        } else {
          [[|p.name, string_of_int(p.canMatchWith)|]];
        }
      )
      |> List.flatten
      |> List.toArray
    };
  rows;
};

