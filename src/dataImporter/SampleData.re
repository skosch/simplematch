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

let residents: list(sideDataEntry) = [{name: "F. Morris", canMatchWith: 1, selectedNames: [("Eastman Medical", 1), ("Princeton-Plainsboro", 2), ("Seattle Grace", 3), ("Sacred Heart Hospital", 4), ("Springfield General", 5), ("St. Sebastian's Hospital", 6), ("Gotham General", 7), ("Frankenstein & Associates", 8)]},
{name: "X. Ward", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Gotham General", 2), ("St. Sebastian's Hospital", 3), ("Sacred Heart Hospital", 4), ("Frankenstein & Associates", 5), ("Eastman Medical", 6), ("Princeton-Plainsboro", 7), ("Seattle Grace", 8)]},
{name: "Q. Harris", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Springfield General", 2), ("Eastman Medical", 3), ("Gotham General", 4), ("St. Sebastian's Hospital", 5), ("Frankenstein & Associates", 6), ("Sacred Heart Hospital", 7), ("Princeton-Plainsboro", 8)]},
{name: "C. Anderson", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Springfield General", 2), ("Gotham General", 3), ("St. Sebastian's Hospital", 4), ("Frankenstein & Associates", 5), ("Sacred Heart Hospital", 6), ("Seattle Grace", 7), ("Eastman Medical", 8)]},
{name: "W. Bennett", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Seattle Grace", 2), ("St. Sebastian's Hospital", 3), ("Eastman Medical", 4), ("Springfield General", 5), ("Gotham General", 6), ("Princeton-Plainsboro", 7), ("Frankenstein & Associates", 8)]},
{name: "Q. Cox", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("St. Sebastian's Hospital", 2), ("Sacred Heart Hospital", 3), ("Frankenstein & Associates", 4), ("Seattle Grace", 5), ("Eastman Medical", 6), ("Gotham General", 7), ("Springfield General", 8)]},
{name: "S. Cooper", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Gotham General", 2), ("Seattle Grace", 3), ("St. Sebastian's Hospital", 4), ("Springfield General", 5), ("Sacred Heart Hospital", 6), ("Princeton-Plainsboro", 7), ("Eastman Medical", 8)]},
{name: "G. Wilson", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Frankenstein & Associates", 2), ("Eastman Medical", 3), ("Princeton-Plainsboro", 4), ("Gotham General", 5), ("Seattle Grace", 6), ("Springfield General", 7), ("Sacred Heart Hospital", 8)]},
{name: "X. Miller", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("St. Sebastian's Hospital", 2), ("Sacred Heart Hospital", 3), ("Princeton-Plainsboro", 4), ("Springfield General", 5), ("Frankenstein & Associates", 6), ("Gotham General", 7), ("Eastman Medical", 8)]},
{name: "J. Wright", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Sacred Heart Hospital", 2), ("Eastman Medical", 3), ("Gotham General", 4), ("Frankenstein & Associates", 5), ("Seattle Grace", 6), ("St. Sebastian's Hospital", 7), ("Princeton-Plainsboro", 8)]},
{name: "A. Phillips", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("St. Sebastian's Hospital", 2), ("Springfield General", 3), ("Frankenstein & Associates", 4), ("Seattle Grace", 5), ("Gotham General", 6), ("Sacred Heart Hospital", 7), ("Eastman Medical", 8)]},
{name: "L. Turner", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Springfield General", 2), ("Frankenstein & Associates", 3), ("Gotham General", 4), ("Eastman Medical", 5), ("Princeton-Plainsboro", 6), ("Sacred Heart Hospital", 7), ("Seattle Grace", 8)]},
{name: "X. James", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Sacred Heart Hospital", 2), ("Eastman Medical", 3), ("Seattle Grace", 4), ("Frankenstein & Associates", 5), ("Springfield General", 6), ("St. Sebastian's Hospital", 7), ("Gotham General", 8)]},
{name: "O. Martinez", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Gotham General", 2), ("Seattle Grace", 3), ("Princeton-Plainsboro", 4), ("St. Sebastian's Hospital", 5), ("Sacred Heart Hospital", 6), ("Springfield General", 7), ("Eastman Medical", 8)]},
{name: "U. Hall", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Sacred Heart Hospital", 2), ("Gotham General", 3), ("Springfield General", 4), ("St. Sebastian's Hospital", 5), ("Seattle Grace", 6), ("Eastman Medical", 7), ("Princeton-Plainsboro", 8)]},
{name: "H. Butler", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Princeton-Plainsboro", 2), ("Sacred Heart Hospital", 3), ("Gotham General", 4), ("Springfield General", 5), ("Frankenstein & Associates", 6), ("Eastman Medical", 7), ("St. Sebastian's Hospital", 8)]},
{name: "I. Sullivan", canMatchWith: 1, selectedNames: [("Eastman Medical", 1), ("Frankenstein & Associates", 2), ("Seattle Grace", 3), ("Princeton-Plainsboro", 4), ("Sacred Heart Hospital", 5), ("Springfield General", 6), ("Gotham General", 7), ("St. Sebastian's Hospital", 8)]},
{name: "W. Perry", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Gotham General", 2), ("Sacred Heart Hospital", 3), ("Eastman Medical", 4), ("Princeton-Plainsboro", 5), ("Frankenstein & Associates", 6), ("Springfield General", 7), ("Seattle Grace", 8)]},
{name: "G. Stewart", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Sacred Heart Hospital", 2), ("Springfield General", 3), ("Seattle Grace", 4), ("Gotham General", 5), ("Princeton-Plainsboro", 6), ("Eastman Medical", 7), ("St. Sebastian's Hospital", 8)]},
{name: "V. Richardson", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Eastman Medical", 2), ("Springfield General", 3), ("Princeton-Plainsboro", 4), ("Sacred Heart Hospital", 5), ("Gotham General", 6), ("Frankenstein & Associates", 7), ("St. Sebastian's Hospital", 8)]},
{name: "H. Green", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Princeton-Plainsboro", 2), ("Eastman Medical", 3), ("Springfield General", 4), ("Frankenstein & Associates", 5), ("Gotham General", 6), ("Seattle Grace", 7), ("St. Sebastian's Hospital", 8)]},
{name: "Z. Ross", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Seattle Grace", 2), ("Gotham General", 3), ("Eastman Medical", 4), ("Princeton-Plainsboro", 5), ("Springfield General", 6), ("St. Sebastian's Hospital", 7), ("Sacred Heart Hospital", 8)]},
{name: "S. Cook", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("St. Sebastian's Hospital", 2), ("Gotham General", 3), ("Seattle Grace", 4), ("Sacred Heart Hospital", 5), ("Princeton-Plainsboro", 6), ("Frankenstein & Associates", 7), ("Eastman Medical", 8)]},
{name: "H. Bailey", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Gotham General", 2), ("Frankenstein & Associates", 3), ("Springfield General", 4), ("Eastman Medical", 5), ("Sacred Heart Hospital", 6), ("St. Sebastian's Hospital", 7), ("Princeton-Plainsboro", 8)]},
{name: "A. Wood", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("St. Sebastian's Hospital", 2), ("Princeton-Plainsboro", 3), ("Eastman Medical", 4), ("Sacred Heart Hospital", 5), ("Frankenstein & Associates", 6), ("Seattle Grace", 7), ("Springfield General", 8)]},
{name: "Z. Johnson", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Gotham General", 2), ("Princeton-Plainsboro", 3), ("Frankenstein & Associates", 4), ("Springfield General", 5), ("St. Sebastian's Hospital", 6), ("Eastman Medical", 7), ("Seattle Grace", 8)]},
{name: "T. Campbell", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Princeton-Plainsboro", 2), ("Sacred Heart Hospital", 3), ("Seattle Grace", 4), ("Frankenstein & Associates", 5), ("Gotham General", 6), ("Springfield General", 7), ("Eastman Medical", 8)]},
{name: "J. Roberts", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Frankenstein & Associates", 2), ("Springfield General", 3), ("Princeton-Plainsboro", 4), ("Seattle Grace", 5), ("Gotham General", 6), ("Eastman Medical", 7), ("Sacred Heart Hospital", 8)]},
{name: "I. Gomez", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Princeton-Plainsboro", 2), ("Springfield General", 3), ("Sacred Heart Hospital", 4), ("Gotham General", 5), ("Eastman Medical", 6), ("Seattle Grace", 7), ("Frankenstein & Associates", 8)]},
{name: "V. Howard", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Frankenstein & Associates", 2), ("Eastman Medical", 3), ("Princeton-Plainsboro", 4), ("Seattle Grace", 5), ("St. Sebastian's Hospital", 6), ("Gotham General", 7), ("Sacred Heart Hospital", 8)]},
{name: "L. Kelly", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("St. Sebastian's Hospital", 2), ("Eastman Medical", 3), ("Gotham General", 4), ("Springfield General", 5), ("Seattle Grace", 6), ("Frankenstein & Associates", 7), ("Princeton-Plainsboro", 8)]},
{name: "U. Lee", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Eastman Medical", 2), ("Frankenstein & Associates", 3), ("St. Sebastian's Hospital", 4), ("Springfield General", 5), ("Gotham General", 6), ("Princeton-Plainsboro", 7), ("Seattle Grace", 8)]},
{name: "U. Sanders", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("Seattle Grace", 2), ("Princeton-Plainsboro", 3), ("Sacred Heart Hospital", 4), ("Eastman Medical", 5), ("Springfield General", 6), ("Frankenstein & Associates", 7), ("St. Sebastian's Hospital", 8)]},
{name: "R. Watson", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Princeton-Plainsboro", 2), ("Gotham General", 3), ("Eastman Medical", 4), ("Sacred Heart Hospital", 5), ("Frankenstein & Associates", 6), ("Springfield General", 7), ("Seattle Grace", 8)]},
{name: "N. Murphy", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Springfield General", 2), ("Gotham General", 3), ("Sacred Heart Hospital", 4), ("Frankenstein & Associates", 5), ("Princeton-Plainsboro", 6), ("Eastman Medical", 7), ("St. Sebastian's Hospital", 8)]},
{name: "D. Williams", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Gotham General", 2), ("Springfield General", 3), ("Frankenstein & Associates", 4), ("St. Sebastian's Hospital", 5), ("Seattle Grace", 6), ("Eastman Medical", 7), ("Princeton-Plainsboro", 8)]},
{name: "Z. Scott", canMatchWith: 1, selectedNames: [("Eastman Medical", 1), ("Gotham General", 2), ("St. Sebastian's Hospital", 3), ("Princeton-Plainsboro", 4), ("Seattle Grace", 5), ("Sacred Heart Hospital", 6), ("Springfield General", 7), ("Frankenstein & Associates", 8)]},
{name: "Z. Evans", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("Seattle Grace", 2), ("St. Sebastian's Hospital", 3), ("Eastman Medical", 4), ("Princeton-Plainsboro", 5), ("Frankenstein & Associates", 6), ("Sacred Heart Hospital", 7), ("Springfield General", 8)]},
{name: "T. Fisher", canMatchWith: 1, selectedNames: [("Eastman Medical", 1), ("Springfield General", 2), ("Gotham General", 3), ("Princeton-Plainsboro", 4), ("Sacred Heart Hospital", 5), ("St. Sebastian's Hospital", 6), ("Frankenstein & Associates", 7), ("Seattle Grace", 8)]},
{name: "Y. Myers", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("St. Sebastian's Hospital", 2), ("Gotham General", 3), ("Frankenstein & Associates", 4), ("Sacred Heart Hospital", 5), ("Eastman Medical", 6), ("Springfield General", 7), ("Princeton-Plainsboro", 8)]},
{name: "A. Collins", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Gotham General", 2), ("Seattle Grace", 3), ("Frankenstein & Associates", 4), ("Eastman Medical", 5), ("Springfield General", 6), ("Sacred Heart Hospital", 7), ("St. Sebastian's Hospital", 8)]},
{name: "K. Peterson", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Eastman Medical", 2), ("Princeton-Plainsboro", 3), ("Sacred Heart Hospital", 4), ("Springfield General", 5), ("Gotham General", 6), ("Frankenstein & Associates", 7), ("Seattle Grace", 8)]},
{name: "M. Torres", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Springfield General", 2), ("Princeton-Plainsboro", 3), ("Eastman Medical", 4), ("Gotham General", 5), ("Frankenstein & Associates", 6), ("Seattle Grace", 7), ("St. Sebastian's Hospital", 8)]},
{name: "G. Moore", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Sacred Heart Hospital", 2), ("St. Sebastian's Hospital", 3), ("Eastman Medical", 4), ("Princeton-Plainsboro", 5), ("Frankenstein & Associates", 6), ("Seattle Grace", 7), ("Gotham General", 8)]},
{name: "R. Baker", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Sacred Heart Hospital", 2), ("Gotham General", 3), ("St. Sebastian's Hospital", 4), ("Frankenstein & Associates", 5), ("Seattle Grace", 6), ("Springfield General", 7), ("Eastman Medical", 8)]},
{name: "H. Parker", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("St. Sebastian's Hospital", 2), ("Seattle Grace", 3), ("Princeton-Plainsboro", 4), ("Frankenstein & Associates", 5), ("Eastman Medical", 6), ("Springfield General", 7), ("Gotham General", 8)]},
{name: "Q. Brown", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Eastman Medical", 2), ("Gotham General", 3), ("Seattle Grace", 4), ("St. Sebastian's Hospital", 5), ("Sacred Heart Hospital", 6), ("Frankenstein & Associates", 7), ("Springfield General", 8)]},
{name: "I. Hughes", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("St. Sebastian's Hospital", 2), ("Eastman Medical", 3), ("Sacred Heart Hospital", 4), ("Springfield General", 5), ("Princeton-Plainsboro", 6), ("Seattle Grace", 7), ("Frankenstein & Associates", 8)]},
{name: "X. Carter", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("Seattle Grace", 2), ("Frankenstein & Associates", 3), ("Springfield General", 4), ("St. Sebastian's Hospital", 5), ("Sacred Heart Hospital", 6), ("Princeton-Plainsboro", 7), ("Eastman Medical", 8)]},
{name: "W. Robinson", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Seattle Grace", 2), ("Springfield General", 3), ("St. Sebastian's Hospital", 4), ("Eastman Medical", 5), ("Sacred Heart Hospital", 6), ("Gotham General", 7), ("Frankenstein & Associates", 8)]},
{name: "X. Young", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Gotham General", 2), ("Seattle Grace", 3), ("Springfield General", 4), ("Princeton-Plainsboro", 5), ("Sacred Heart Hospital", 6), ("Frankenstein & Associates", 7), ("Eastman Medical", 8)]},
{name: "I. Clark", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Springfield General", 2), ("Princeton-Plainsboro", 3), ("St. Sebastian's Hospital", 4), ("Seattle Grace", 5), ("Frankenstein & Associates", 6), ("Gotham General", 7), ("Eastman Medical", 8)]},
{name: "R. Rogers", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Princeton-Plainsboro", 2), ("St. Sebastian's Hospital", 3), ("Springfield General", 4), ("Sacred Heart Hospital", 5), ("Eastman Medical", 6), ("Frankenstein & Associates", 7), ("Gotham General", 8)]},
{name: "M. Foster", canMatchWith: 1, selectedNames: [("Eastman Medical", 1), ("Gotham General", 2), ("Seattle Grace", 3), ("Frankenstein & Associates", 4), ("Princeton-Plainsboro", 5), ("St. Sebastian's Hospital", 6), ("Sacred Heart Hospital", 7), ("Springfield General", 8)]},
{name: "D. Jackson", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Seattle Grace", 2), ("Springfield General", 3), ("Eastman Medical", 4), ("Gotham General", 5), ("St. Sebastian's Hospital", 6), ("Frankenstein & Associates", 7), ("Princeton-Plainsboro", 8)]},
{name: "Q. Russell", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Eastman Medical", 2), ("Frankenstein & Associates", 3), ("Gotham General", 4), ("St. Sebastian's Hospital", 5), ("Sacred Heart Hospital", 6), ("Princeton-Plainsboro", 7), ("Springfield General", 8)]},
{name: "B. Reed", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("St. Sebastian's Hospital", 2), ("Seattle Grace", 3), ("Eastman Medical", 4), ("Princeton-Plainsboro", 5), ("Gotham General", 6), ("Springfield General", 7), ("Frankenstein & Associates", 8)]},
{name: "O. Brooks", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("Seattle Grace", 2), ("Eastman Medical", 3), ("St. Sebastian's Hospital", 4), ("Princeton-Plainsboro", 5), ("Frankenstein & Associates", 6), ("Springfield General", 7), ("Sacred Heart Hospital", 8)]},
{name: "J. Hill", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Eastman Medical", 2), ("Frankenstein & Associates", 3), ("Seattle Grace", 4), ("Springfield General", 5), ("St. Sebastian's Hospital", 6), ("Gotham General", 7), ("Sacred Heart Hospital", 8)]},
{name: "G. Adams", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Eastman Medical", 2), ("Gotham General", 3), ("Sacred Heart Hospital", 4), ("St. Sebastian's Hospital", 5), ("Seattle Grace", 6), ("Princeton-Plainsboro", 7), ("Frankenstein & Associates", 8)]},
{name: "Y. Barnes", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Springfield General", 2), ("Gotham General", 3), ("St. Sebastian's Hospital", 4), ("Sacred Heart Hospital", 5), ("Princeton-Plainsboro", 6), ("Frankenstein & Associates", 7), ("Eastman Medical", 8)]},
{name: "T. Garcia", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Springfield General", 2), ("Seattle Grace", 3), ("Eastman Medical", 4), ("Sacred Heart Hospital", 5), ("Frankenstein & Associates", 6), ("Gotham General", 7), ("Princeton-Plainsboro", 8)]},
{name: "U. Morgan", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Eastman Medical", 2), ("Princeton-Plainsboro", 3), ("Gotham General", 4), ("Frankenstein & Associates", 5), ("Springfield General", 6), ("St. Sebastian's Hospital", 7), ("Seattle Grace", 8)]},
{name: "X. Martin", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Gotham General", 2), ("Springfield General", 3), ("St. Sebastian's Hospital", 4), ("Eastman Medical", 5), ("Sacred Heart Hospital", 6), ("Seattle Grace", 7), ("Frankenstein & Associates", 8)]},
{name: "P. White", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Princeton-Plainsboro", 2), ("Springfield General", 3), ("Eastman Medical", 4), ("Seattle Grace", 5), ("St. Sebastian's Hospital", 6), ("Frankenstein & Associates", 7), ("Gotham General", 8)]},
{name: "T. Allen", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Princeton-Plainsboro", 2), ("Seattle Grace", 3), ("St. Sebastian's Hospital", 4), ("Springfield General", 5), ("Eastman Medical", 6), ("Sacred Heart Hospital", 7), ("Gotham General", 8)]},
{name: "W. Powell", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Gotham General", 2), ("Frankenstein & Associates", 3), ("Sacred Heart Hospital", 4), ("Eastman Medical", 5), ("Seattle Grace", 6), ("Princeton-Plainsboro", 7), ("Springfield General", 8)]},
{name: "D. Gray", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Princeton-Plainsboro", 2), ("Seattle Grace", 3), ("Frankenstein & Associates", 4), ("Eastman Medical", 5), ("Gotham General", 6), ("Sacred Heart Hospital", 7), ("Springfield General", 8)]},
{name: "P. King", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Princeton-Plainsboro", 2), ("Gotham General", 3), ("Sacred Heart Hospital", 4), ("Eastman Medical", 5), ("Frankenstein & Associates", 6), ("Springfield General", 7), ("Seattle Grace", 8)]},
{name: "F. Smith", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Frankenstein & Associates", 2), ("Gotham General", 3), ("Seattle Grace", 4), ("Princeton-Plainsboro", 5), ("Eastman Medical", 6), ("Sacred Heart Hospital", 7), ("Springfield General", 8)]},
{name: "Q. Jones", canMatchWith: 1, selectedNames: [("Eastman Medical", 1), ("Sacred Heart Hospital", 2), ("Springfield General", 3), ("St. Sebastian's Hospital", 4), ("Seattle Grace", 5), ("Princeton-Plainsboro", 6), ("Frankenstein & Associates", 7), ("Gotham General", 8)]},
{name: "S. Bell", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Eastman Medical", 2), ("Gotham General", 3), ("St. Sebastian's Hospital", 4), ("Princeton-Plainsboro", 5), ("Sacred Heart Hospital", 6), ("Springfield General", 7), ("Seattle Grace", 8)]},
{name: "K. Nelson", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("Seattle Grace", 2), ("Princeton-Plainsboro", 3), ("Sacred Heart Hospital", 4), ("Frankenstein & Associates", 5), ("Springfield General", 6), ("Eastman Medical", 7), ("St. Sebastian's Hospital", 8)]},
{name: "S. Davis", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Frankenstein & Associates", 2), ("Springfield General", 3), ("Gotham General", 4), ("Eastman Medical", 5), ("St. Sebastian's Hospital", 6), ("Sacred Heart Hospital", 7), ("Princeton-Plainsboro", 8)]},
{name: "R. Taylor", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Frankenstein & Associates", 2), ("Gotham General", 3), ("St. Sebastian's Hospital", 4), ("Eastman Medical", 5), ("Princeton-Plainsboro", 6), ("Seattle Grace", 7), ("Sacred Heart Hospital", 8)]},
{name: "V. Edwards", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("St. Sebastian's Hospital", 2), ("Springfield General", 3), ("Sacred Heart Hospital", 4), ("Frankenstein & Associates", 5), ("Eastman Medical", 6), ("Gotham General", 7), ("Seattle Grace", 8)]},
{name: "X. Jenkins", canMatchWith: 1, selectedNames: [("Gotham General", 1), ("Seattle Grace", 2), ("Princeton-Plainsboro", 3), ("Sacred Heart Hospital", 4), ("St. Sebastian's Hospital", 5), ("Frankenstein & Associates", 6), ("Eastman Medical", 7), ("Springfield General", 8)]},
{name: "X. Walker", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Seattle Grace", 2), ("Sacred Heart Hospital", 3), ("Gotham General", 4), ("Princeton-Plainsboro", 5), ("Eastman Medical", 6), ("Frankenstein & Associates", 7), ("Springfield General", 8)]},
{name: "F. Lopez", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Sacred Heart Hospital", 2), ("Frankenstein & Associates", 3), ("Seattle Grace", 4), ("Springfield General", 5), ("Gotham General", 6), ("St. Sebastian's Hospital", 7), ("Eastman Medical", 8)]},
{name: "V. Perez", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Sacred Heart Hospital", 2), ("Gotham General", 3), ("Frankenstein & Associates", 4), ("Princeton-Plainsboro", 5), ("St. Sebastian's Hospital", 6), ("Eastman Medical", 7), ("Springfield General", 8)]},
{name: "M. Lewis", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Princeton-Plainsboro", 2), ("Frankenstein & Associates", 3), ("Springfield General", 4), ("Eastman Medical", 5), ("Gotham General", 6), ("Seattle Grace", 7), ("Sacred Heart Hospital", 8)]},
{name: "O. Thompson", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("St. Sebastian's Hospital", 2), ("Sacred Heart Hospital", 3), ("Gotham General", 4), ("Springfield General", 5), ("Seattle Grace", 6), ("Eastman Medical", 7), ("Princeton-Plainsboro", 8)]},
{name: "W. Thomas", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Seattle Grace", 2), ("Gotham General", 3), ("Springfield General", 4), ("St. Sebastian's Hospital", 5), ("Princeton-Plainsboro", 6), ("Eastman Medical", 7), ("Sacred Heart Hospital", 8)]},
{name: "Z. Price", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Sacred Heart Hospital", 2), ("Princeton-Plainsboro", 3), ("Gotham General", 4), ("St. Sebastian's Hospital", 5), ("Seattle Grace", 6), ("Eastman Medical", 7), ("Frankenstein & Associates", 8)]},
{name: "F. Mitchell", canMatchWith: 1, selectedNames: [("Princeton-Plainsboro", 1), ("Springfield General", 2), ("Gotham General", 3), ("Frankenstein & Associates", 4), ("Eastman Medical", 5), ("Seattle Grace", 6), ("Sacred Heart Hospital", 7), ("St. Sebastian's Hospital", 8)]},
{name: "O. Sanchez", canMatchWith: 1, selectedNames: [("St. Sebastian's Hospital", 1), ("Princeton-Plainsboro", 2), ("Seattle Grace", 3), ("Frankenstein & Associates", 4), ("Gotham General", 5), ("Sacred Heart Hospital", 6), ("Springfield General", 7), ("Eastman Medical", 8)]},
{name: "H. Barrett", canMatchWith: 1, selectedNames: [("Eastman Medical", 1), ("Frankenstein & Associates", 2), ("Gotham General", 3), ("Seattle Grace", 4), ("Springfield General", 5), ("St. Sebastian's Hospital", 6), ("Princeton-Plainsboro", 7), ("Sacred Heart Hospital", 8)]},
{name: "G. Cohen", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Princeton-Plainsboro", 2), ("Gotham General", 3), ("Frankenstein & Associates", 4), ("St. Sebastian's Hospital", 5), ("Eastman Medical", 6), ("Sacred Heart Hospital", 7), ("Seattle Grace", 8)]},
{name: "Y. Conrad", canMatchWith: 1, selectedNames: [("Seattle Grace", 1), ("Sacred Heart Hospital", 2), ("Eastman Medical", 3), ("St. Sebastian's Hospital", 4), ("Springfield General", 5), ("Frankenstein & Associates", 6), ("Gotham General", 7), ("Princeton-Plainsboro", 8)]},
{name: "V. Kaye", canMatchWith: 1, selectedNames: [("Springfield General", 1), ("Sacred Heart Hospital", 2), ("St. Sebastian's Hospital", 3), ("Eastman Medical", 4), ("Gotham General", 5), ("Princeton-Plainsboro", 6), ("Frankenstein & Associates", 7), ("Seattle Grace", 8)]},
{name: "L. Tanner", canMatchWith: 1, selectedNames: [("Sacred Heart Hospital", 1), ("Springfield General", 2), ("St. Sebastian's Hospital", 3), ("Gotham General", 4), ("Princeton-Plainsboro", 5), ("Eastman Medical", 6), ("Seattle Grace", 7), ("Frankenstein & Associates", 8)]},
{name: "Q. Eddy", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("Eastman Medical", 2), ("Seattle Grace", 3), ("Springfield General", 4), ("Sacred Heart Hospital", 5), ("Princeton-Plainsboro", 6), ("Gotham General", 7), ("St. Sebastian's Hospital", 8)]},
{name: "T. Rodger", canMatchWith: 1, selectedNames: [("Frankenstein & Associates", 1), ("St. Sebastian's Hospital", 2), ("Princeton-Plainsboro", 3), ("Springfield General", 4), ("Seattle Grace", 5), ("Eastman Medical", 6), ("Gotham General", 7), ("Sacred Heart Hospital", 8)]}];

let hospitals: list(sideDataEntry) = [
{name: "Gotham General", canMatchWith: 23, selectedNames: []},
{name: "Sacred Heart Hospital", canMatchWith: 18, selectedNames: []},
{name: "Eastman Medical", canMatchWith: 16, selectedNames: []},
{name: "Princeton-Plainsboro", canMatchWith: 15, selectedNames: []},
{name: "Frankenstein & Associates", canMatchWith: 4, selectedNames: []},
{name: "Springfield General", canMatchWith: 19, selectedNames: []},
{name: "Seattle Grace", canMatchWith: 8, selectedNames: []},
{name: "St. Sebastian's Hospital", canMatchWith: 12, selectedNames: []}];
                                      
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

