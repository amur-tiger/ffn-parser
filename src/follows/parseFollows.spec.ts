import { describe, expect, it } from "vitest";
import { loadTestCase } from "../testUtils.js";
import parseFollows from "./parseFollows.js";

describe("parseFollows", function () {
  it("should parse main page", async function () {
    const fragment = await loadTestCase("01-main-page.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse story page", async function () {
    const fragment = await loadTestCase("02-dreaming-of-sunshine.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse alerts page", async function () {
    const fragment = await loadTestCase("05-alerts.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toStrictEqual([
      {
        id: 14027500,
        title: "Hogwarts dragon",
        author: {
          id: 15054193,
          name: "valexto",
        },
        category: "Harry Potter",
        updated: new Date(2024, 8, 28),
        added: new Date(2024, 2, 24),
      },
      {
        id: 12790836,
        title: "Harry Potter and The Chance at a New Life",
        author: {
          id: 7098382,
          name: "kossboss",
        },
        category: "Stargate: SG-1",
        updated: new Date(2024, 8, 18),
        added: new Date(2021, 11, 30),
      },
      {
        id: 13714539,
        title: "Caterpillar",
        author: {
          id: 13354669,
          name: "grumpywolf",
        },
        category: "Naruto",
        updated: new Date(2024, 8, 9),
        added: new Date(2024, 2, 30),
      },
      {
        id: 5664828,
        title: "Harry Potter and Future's Past",
        author: {
          id: 2036266,
          name: "DriftWood1965",
        },
        category: "Harry Potter",
        updated: new Date(2024, 4, 6),
        added: new Date(2018, 3, 20),
      },
      {
        id: 13662564,
        title: "Rebirth of the strongest Magician",
        author: {
          id: 6889882,
          name: "TBM10",
        },
        category: "Harry Potter",
        updated: new Date(2024, 4, 3),
        added: new Date(2021, 4, 22),
      },
      {
        id: 13258001,
        title: "Voyage unto Infinity",
        author: {
          id: 8291327,
          name: "supertruckin",
        },
        category: "Mass Effect",
        updated: new Date(2024, 3, 26),
        added: new Date(2020, 0, 15),
      },
      {
        id: 13569822,
        title: "Place of Our Legacy",
        author: {
          id: 4034408,
          name: "firstprime1230",
        },
        category: "Stargate: SG-1",
        updated: new Date(2024, 2, 5),
        added: new Date(2024, 2, 10),
      },
      {
        id: 13812076,
        title: "Northern Wind",
        author: {
          id: 1668784,
          name: "Sage1988",
        },
        category: "Harry Potter",
        updated: new Date(2024, 1, 24),
        added: new Date(2022, 0, 15),
      },
      {
        id: 12377197,
        title: "On the Illusion of Might",
        author: {
          id: 4815698,
          name: "evevee",
        },
        category: "Halo",
        updated: new Date(2024, 1, 21),
        added: new Date(2020, 0, 20),
      },
      {
        id: 13276766,
        title: "Of Water and Salt",
        author: {
          id: 10880283,
          name: "Stellarys",
        },
        category: "Percy Jackson and the Olympians",
        updated: new Date(2024, 0, 15),
        added: new Date(2022, 1, 23),
      },
      {
        id: 12810031,
        title: "The Last King",
        author: {
          id: 9970685,
          name: "Greed720",
        },
        category: "Percy Jackson and the Olympians",
        updated: new Date(2023, 10, 21),
        added: new Date(2022, 6, 23),
      },
      {
        id: 12088294,
        title: "Animagus at War",
        author: {
          id: 5339762,
          name: "White Squirrel",
        },
        category: "Harry Potter",
        updated: new Date(2023, 10, 20),
        added: new Date(2018, 6, 29),
      },
      {
        id: 11596657,
        title: "Something Like That",
        author: {
          id: 4616147,
          name: "Raiju Tsuiga",
        },
        category: "Naruto",
        updated: new Date(2023, 8, 22),
        added: new Date(2021, 0, 10),
      },
      {
        id: 13025350,
        title: "From Ruin",
        author: {
          id: 11062375,
          name: "GraeFoxx",
        },
        category: "Harry Potter",
        updated: new Date(2023, 8, 19),
        added: new Date(2020, 10, 20),
      },
      {
        id: 11069765,
        title: "The Seven Words",
        author: {
          id: 3713666,
          name: "fan-xover",
        },
        category: "Harry Potter",
        updated: new Date(2023, 8, 13),
        added: new Date(2018, 7, 8),
      },
      {
        id: 14142346,
        title: "New Dimensions",
        author: {
          id: 10321175,
          name: "rscottdjr",
        },
        category: "StarTrek: The Next Generation",
        updated: new Date(2023, 8, 4),
        added: new Date(2022, 9, 19),
      },
      {
        id: 12228049,
        title: "Harry Potter and the Magical Tok'ra",
        author: {
          id: 2206906,
          name: "Tok'ra Operative",
        },
        category: "Stargate: SG-1",
        updated: new Date(2023, 7, 4),
        added: new Date(2022, 7, 19),
      },
      {
        id: 10642894,
        title: "Azuveya: Fury Oh Fury",
        author: {
          id: 1617744,
          name: "Kira Kyuu",
        },
        category: "Harry Potter",
        updated: new Date(2023, 6, 23),
        added: new Date(2020, 0, 8),
      },
      {
        id: 12997891,
        title: "Chills of the Living",
        author: {
          id: 8440917,
          name: "Tempest's Rain",
        },
        category: "Harry Potter",
        updated: new Date(2023, 3, 18),
        added: new Date(2022, 7, 2),
      },
      {
        id: 12026413,
        title: "Rebirth of the Founders",
        author: {
          id: 7108591,
          name: "DaSalvatore",
        },
        category: "Harry Potter",
        updated: new Date(2023, 2, 6),
        added: new Date(2018, 3, 30),
      },
      {
        id: 12317941,
        title: "Samsaric",
        author: {
          id: 6239869,
          name: "JJGrace42",
        },
        category: "Naruto",
        updated: new Date(2023, 0, 24),
        added: new Date(2021, 3, 5),
      },
      {
        id: 11503873,
        title: "Broken Reflection",
        author: {
          id: 2214591,
          name: "Xejis",
        },
        category: "Naruto",
        updated: new Date(2022, 11, 32),
        added: new Date(2020, 10, 31),
      },
      {
        id: 13527315,
        title: "A Shinobi Among Monsters",
        author: {
          id: 13003814,
          name: "euphoric image",
        },
        category: "Naruto",
        updated: new Date(2022, 11, 30),
        added: new Date(2022, 1, 6),
      },
      {
        id: 14178726,
        title: "Salvation",
        author: {
          id: 2928817,
          name: "NightLark93",
        },
        category: "Stargate: SG-1",
        updated: new Date(2022, 11, 28),
        added: new Date(2024, 5, 18),
      },
      {
        id: 12030727,
        title: "Book one of Thunder God Series: Rise",
        author: {
          id: 1494340,
          name: "TheMadDalek",
        },
        category: "Harry Potter",
        updated: new Date(2022, 9, 32),
        added: new Date(2020, 1, 2),
      },
      {
        id: 11012678,
        title: "I Became a Vulpix",
        author: {
          id: 6468151,
          name: "Anshee-Rose",
        },
        category: "Pokémon",
        updated: new Date(2022, 8, 23),
        added: new Date(2024, 6, 6),
      },
      {
        id: 11132113,
        title: "The Difference One Man Can Make",
        author: {
          id: 6132825,
          name: "joen1801",
        },
        category: "Harry Potter",
        updated: new Date(2022, 8, 3),
        added: new Date(2019, 8, 19),
      },
      {
        id: 9100897,
        title: "Full Moon High",
        author: {
          id: 949715,
          name: "Stone-Man85",
        },
        category: "Goosebumps",
        updated: new Date(2022, 6, 22),
        added: new Date(2023, 3, 3),
      },
      {
        id: 10976457,
        title: "Joyous Children",
        author: {
          id: 5681283,
          name: "UnderneathXtheXunderneath",
        },
        category: "Naruto",
        updated: new Date(2022, 5, 14),
        added: new Date(2019, 6, 8),
      },
      {
        id: 12194749,
        title: "Seven and Counting",
        author: {
          id: 7564843,
          name: "TehSammichMan",
        },
        category: "Pokémon",
        updated: new Date(2022, 5, 9),
        added: new Date(2022, 8, 12),
      },
      {
        id: 14011009,
        title: "Sword of Starlight",
        author: {
          id: 10880283,
          name: "Stellarys",
        },
        category: "Lord of the Rings",
        updated: new Date(2022, 3, 24),
        added: new Date(2022, 4, 10),
      },
      {
        id: 13686190,
        title: "Mew Like Me",
        author: {
          id: 1176302,
          name: "Fragmented Disillusionment",
        },
        category: "Pokémon",
        updated: new Date(2022, 0, 20),
        added: new Date(2021, 1, 7),
      },
      {
        id: 12519346,
        title: "The Second XCOM Viper",
        author: {
          id: 4902378,
          name: "The Imperator 2 you",
        },
        category: "X-Com",
        updated: new Date(2022, 0, 9),
        added: new Date(2019, 6, 7),
      },
      {
        id: 9818628,
        title: "To Defy Destiny",
        author: {
          id: 4735176,
          name: "Blueavatar",
        },
        category: "Naruto",
        updated: new Date(2022, 0, 2),
        added: new Date(2021, 0, 30),
      },
      {
        id: 13820467,
        title: "So I'm a Basilisk, So What?",
        author: {
          id: 4797250,
          name: "Seiker Hikaru",
        },
        category: "So I'm a Spider, So What?/蜘蛛ですが、なにか？",
        updated: new Date(2021, 10, 30),
        added: new Date(2021, 2, 27),
      },
      {
        id: 12572609,
        title: "Mass Effect: Trailblazer",
        author: {
          id: 4203143,
          name: "TallYapflip",
        },
        category: "Halo",
        updated: new Date(2021, 10, 27),
        added: new Date(2022, 0, 9),
      },
      {
        id: 7658547,
        title: "Dark Phoenix",
        author: {
          id: 2278439,
          name: "Lightningscar",
        },
        category: "Harry Potter",
        updated: new Date(2021, 10, 22),
        added: new Date(2022, 6, 29),
      },
      {
        id: 13159911,
        title: "For Earth and All Her Colonies",
        author: {
          id: 10746004,
          name: "GADPELLAEON",
        },
        category: "Halo",
        updated: new Date(2021, 9, 14),
        added: new Date(2020, 0, 6),
      },
      {
        id: 13970566,
        title: "Sages Son (Kurama fic)",
        author: {
          id: 6788483,
          name: "UndyingRevenge",
        },
        category: "Naruto",
        updated: new Date(2021, 9, 10),
        added: new Date(2023, 11, 18),
      },
      {
        id: 12929178,
        title: "The God of Heroes",
        author: {
          id: 8293144,
          name: "AlfyreGree",
        },
        category: "Young Justice",
        updated: new Date(2021, 8, 21),
        added: new Date(2022, 1, 11),
      },
      {
        id: 10322519,
        title: "Asulmagus",
        author: {
          id: 2843107,
          name: "NooShoak",
        },
        category: "Harry Potter",
        updated: new Date(2021, 8, 18),
        added: new Date(2019, 8, 28),
      },
      {
        id: 5786099,
        title: "Cold blood",
        author: {
          id: 1679315,
          name: "DerLaCroix",
        },
        category: "Harry Potter",
        updated: new Date(2021, 8, 12),
        added: new Date(2019, 8, 6),
      },
      {
        id: 3315493,
        title: "A Whole New World",
        author: {
          id: 1186762,
          name: "fuzzy-christmas-socks",
        },
        category: "Harry Potter",
        updated: new Date(2021, 8, 11),
        added: new Date(2020, 3, 13),
      },
      {
        id: 12555868,
        title: "The Lost Civilization",
        author: {
          id: 7484374,
          name: "Apollonir",
        },
        category: "Halo",
        updated: new Date(2021, 6, 26),
        added: new Date(2019, 11, 7),
      },
      {
        id: 13230340,
        title: "Harry Is A Dragon, And That's Okay",
        author: {
          id: 2996114,
          name: "Saphroneth",
        },
        category: "Harry Potter",
        updated: new Date(2021, 6, 4),
        added: new Date(2019, 7, 11),
      },
      {
        id: 13904289,
        title: "Uniquely The Same - Luca (Pixar) Fanfic",
        author: {
          id: 7662249,
          name: "B3-Brv3",
        },
        category: "Luca, 2021",
        updated: new Date(2021, 5, 30),
        added: new Date(2021, 5, 25),
      },
      {
        id: 6435562,
        title: "I Hear Him Scream",
        author: {
          id: 2587521,
          name: "Rift-Raft",
        },
        category: "How to Train Your Dragon",
        updated: new Date(2021, 5, 25),
        added: new Date(2021, 5, 13),
      },
      {
        id: 12689889,
        title: "The Winter Witch",
        author: {
          id: 42364,
          name: "Kneazle",
        },
        category: "Harry Potter",
        updated: new Date(2021, 5, 23),
        added: new Date(2022, 0, 7),
      },
      {
        id: 13573834,
        title: "Coiled - An XCOM Romance in City-31",
        author: {
          id: 13379708,
          name: "SphericalMan",
        },
        category: "X-Com",
        updated: new Date(2021, 5, 18),
        added: new Date(2021, 2, 9),
      },
      {
        id: 11115934,
        title: "The Shadow of Angmar",
        author: {
          id: 5291694,
          name: "Steelbadger",
        },
        category: "Harry Potter",
        updated: new Date(2021, 5, 8),
        added: new Date(2021, 1, 2),
      },
    ]);
  });

  it("should parse story list", async function () {
    const fragment = await loadTestCase("06-hp-naruto-crossovers.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toBeUndefined();
  });
});
