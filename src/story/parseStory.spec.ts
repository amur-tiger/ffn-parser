import { describe, expect, it } from "vitest";
import parseStory from "./parseStory";
import { loadTestCase } from "../testUtils";

describe("parseStory", function () {
  it("should parse main page", async function () {
    const fragment = await loadTestCase("01-main-page.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse story with image", async function () {
    const fragment = await loadTestCase("02-dreaming-of-sunshine.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toStrictEqual({
      id: 7347955,
      title: "Dreaming of Sunshine",
      author: {
        id: 315314,
        name: "Silver Queen",
      },
      description:
        "Life as a ninja. It starts with confusion and terror and doesn't get any better from there. OC Self-insert. No pairings.",
      chapters: [
        {
          id: 1,
          storyId: 7347955,
          title: "Prologue",
        },
        {
          id: 2,
          storyId: 7347955,
          title: "Academy Arc: Chapter 1",
        },
        {
          id: 3,
          storyId: 7347955,
          title: "Academy Arc: Chapter 2",
        },
        {
          id: 4,
          storyId: 7347955,
          title: "Academy Arc: Chapter 3",
        },
        {
          id: 5,
          storyId: 7347955,
          title: "Academy Arc: Chapter 4",
        },
        {
          id: 6,
          storyId: 7347955,
          title: "Graduation Arc: Chapter 5",
        },
        {
          id: 7,
          storyId: 7347955,
          title: "Graduation Arc: Chapter 6",
        },
        {
          id: 8,
          storyId: 7347955,
          title: "Graduation Arc: Chapter 7",
        },
        {
          id: 9,
          storyId: 7347955,
          title: "Graduation Arc: Chapter 8",
        },
        {
          id: 10,
          storyId: 7347955,
          title: "Land of Waves Arc: Chapter 9",
        },
        {
          id: 11,
          storyId: 7347955,
          title: "Land of Waves Arc: Chapter 10",
        },
        {
          id: 12,
          storyId: 7347955,
          title: "Land of Waves Arc: Chapter 11",
        },
        {
          id: 13,
          storyId: 7347955,
          title: "Land of Waves Arc: Chapter 12",
        },
        {
          id: 14,
          storyId: 7347955,
          title: "Land of Waves Arc: Chapter 13",
        },
        {
          id: 15,
          storyId: 7347955,
          title: "Land of Waves Arc: Chapter 14",
        },
        {
          id: 16,
          storyId: 7347955,
          title: "Land of Waves Arc: Chapter 15",
        },
        {
          id: 17,
          storyId: 7347955,
          title: "Chunin Exams Arc: Chapter 16",
        },
        {
          id: 18,
          storyId: 7347955,
          title: "Chunin Exams Arc: Chapter 17",
        },
        {
          id: 19,
          storyId: 7347955,
          title: "Chunin Exams Arc - First: Chapter 18",
        },
        {
          id: 20,
          storyId: 7347955,
          title: "Chunin Exams Arc - First: Chapter 19",
        },
        {
          id: 21,
          storyId: 7347955,
          title: "Chunin Exams Arc - Second: Chapter 20",
        },
        {
          id: 22,
          storyId: 7347955,
          title: "Chunin Exams Arc - Second: Chapter 21",
        },
        {
          id: 23,
          storyId: 7347955,
          title: "Chunin Exams Arc - Second: Chapter 22",
        },
        {
          id: 24,
          storyId: 7347955,
          title: "Chunin Exams Arc - Second: Chapter 23",
        },
        {
          id: 25,
          storyId: 7347955,
          title: "Chunin Exams Arc - Second: Chapter 24",
        },
        {
          id: 26,
          storyId: 7347955,
          title: "Chunin Exams Arc - Break: Chapter 25",
        },
        {
          id: 27,
          storyId: 7347955,
          title: "Chunin Exams Arc - Break: Chapter 26",
        },
        {
          id: 28,
          storyId: 7347955,
          title: "Chunin Exams Arc - Break: Chapter 27",
        },
        {
          id: 29,
          storyId: 7347955,
          title: "Chunin Exams Arc - Break: Chapter 28",
        },
        {
          id: 30,
          storyId: 7347955,
          title: "Chunin Exams Arc - Break: Chapter 29",
        },
        {
          id: 31,
          storyId: 7347955,
          title: "Chunin Exams Arc - Break: Chapter 30",
        },
        {
          id: 32,
          storyId: 7347955,
          title: "Chunin Exams Arc - Third: Chapter 31",
        },
        {
          id: 33,
          storyId: 7347955,
          title: "Chunin Exams Arc - Third: Chapter 32",
        },
        {
          id: 34,
          storyId: 7347955,
          title: "Chunin Exams Arc - Third: Chapter 33",
        },
        {
          id: 35,
          storyId: 7347955,
          title: "Chunin Exams Arc - Invasion: Chapter 34",
        },
        {
          id: 36,
          storyId: 7347955,
          title: "Chunin Exams Arc - Invasion: Chapter 35",
        },
        {
          id: 37,
          storyId: 7347955,
          title: "Chunin Exams Arc - Invasion: Chapter 36",
        },
        {
          id: 38,
          storyId: 7347955,
          title: "Chunin Exams Arc - Invasion: Chapter 37",
        },
        {
          id: 39,
          storyId: 7347955,
          title: "Chunin Exams Arc - Invasion: Chapter 38",
        },
        {
          id: 40,
          storyId: 7347955,
          title: "Chunin Exams Arc - Invasion: Chapter 39",
        },
        {
          id: 41,
          storyId: 7347955,
          title: "Tsukiyomi Arc: Chapter 40",
        },
        {
          id: 42,
          storyId: 7347955,
          title: "Tsukiyomi Arc: Chapter 41",
        },
        {
          id: 43,
          storyId: 7347955,
          title: "Tsukiyomi Arc: Chapter 42",
        },
        {
          id: 44,
          storyId: 7347955,
          title: "Tsukiyomi Arc: Chapter 43",
        },
        {
          id: 45,
          storyId: 7347955,
          title: "Search and Rescue Arc: Chapter 44",
        },
        {
          id: 46,
          storyId: 7347955,
          title: "Search and Rescue Arc: Chapter 45",
        },
        {
          id: 47,
          storyId: 7347955,
          title: "Land of Snow Arc: Chapter 46",
        },
        {
          id: 48,
          storyId: 7347955,
          title: "Land of Snow Arc: Chapter 47",
        },
        {
          id: 49,
          storyId: 7347955,
          title: "Land of Snow Arc: Chapter 48",
        },
        {
          id: 50,
          storyId: 7347955,
          title: "Land of Snow Arc: Chapter 49",
        },
        {
          id: 51,
          storyId: 7347955,
          title: "Land of Snow Arc: Chapter 50",
        },
        {
          id: 52,
          storyId: 7347955,
          title: "Land of Snow Arc: Chapter 51",
        },
        {
          id: 53,
          storyId: 7347955,
          title: "Land of Snow Arc: Chapter 52",
        },
        {
          id: 54,
          storyId: 7347955,
          title: "Hidden Waterfall Arc: Chapter 53",
        },
        {
          id: 55,
          storyId: 7347955,
          title: "Hidden Waterfall Arc: Chapter 54",
        },
        {
          id: 56,
          storyId: 7347955,
          title: "Hidden Waterfall Arc: Chapter 55",
        },
        {
          id: 57,
          storyId: 7347955,
          title: "Land of Tea Arc: Chapter 56",
        },
        {
          id: 58,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 57",
        },
        {
          id: 59,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 58",
        },
        {
          id: 60,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 59",
        },
        {
          id: 61,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 60",
        },
        {
          id: 62,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 61",
        },
        {
          id: 63,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 62",
        },
        {
          id: 64,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 63",
        },
        {
          id: 65,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 64",
        },
        {
          id: 66,
          storyId: 7347955,
          title: "Sound Four Arc: Chapter 65",
        },
        {
          id: 67,
          storyId: 7347955,
          title: "Stones of Gelel Arc: Chapter 66",
        },
        {
          id: 68,
          storyId: 7347955,
          title: "Stones of Gelel Arc: Chapter 67",
        },
        {
          id: 69,
          storyId: 7347955,
          title: "Stones of Gelel Arc: Chapter 68",
        },
        {
          id: 70,
          storyId: 7347955,
          title: "Stones of Gelel Arc: Chapter 69",
        },
        {
          id: 71,
          storyId: 7347955,
          title: "Stones of Gelel Arc: Chapter 70",
        },
        {
          id: 72,
          storyId: 7347955,
          title: "Stones of Gelel Arc: Chapter 71",
        },
        {
          id: 73,
          storyId: 7347955,
          title: "Yakumo Arc: Chapter 72",
        },
        {
          id: 74,
          storyId: 7347955,
          title: "Yakumo Arc: Chapter 73",
        },
        {
          id: 75,
          storyId: 7347955,
          title: "Yakumo Arc: Chapter 74",
        },
        {
          id: 76,
          storyId: 7347955,
          title: "Yakumo Arc: Chapter 75",
        },
        {
          id: 77,
          storyId: 7347955,
          title: "Trap Master Arc: Chapter 76",
        },
        {
          id: 78,
          storyId: 7347955,
          title: "Trap Master Arc: Chapter 77",
        },
        {
          id: 79,
          storyId: 7347955,
          title: "Sealing Arc: Chapter 78",
        },
        {
          id: 80,
          storyId: 7347955,
          title: "Sealing Arc: Chapter 79",
        },
        {
          id: 81,
          storyId: 7347955,
          title: "Land of Stone Arc: Chapter 80",
        },
        {
          id: 82,
          storyId: 7347955,
          title: "Land of Stone Arc: Chapter 81",
        },
        {
          id: 83,
          storyId: 7347955,
          title: "Haunted House Arc: Chapter 82",
        },
        {
          id: 84,
          storyId: 7347955,
          title: "Haunted House Arc: Chapter 83",
        },
        {
          id: 85,
          storyId: 7347955,
          title: "Land of Birds Arc: Chapter 84",
        },
        {
          id: 86,
          storyId: 7347955,
          title: "Land of Birds Arc: Chapter 85",
        },
        {
          id: 87,
          storyId: 7347955,
          title: "Land of Birds Arc: Chapter 86",
        },
        {
          id: 88,
          storyId: 7347955,
          title: "Land of Birds Arc: Chapter 87",
        },
        {
          id: 89,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc: Chapter 88",
        },
        {
          id: 90,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc: Chapter 89",
        },
        {
          id: 91,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc: Chapter 90",
        },
        {
          id: 92,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc -1st: Chapter 91",
        },
        {
          id: 93,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc - 2nd: Chapter 92",
        },
        {
          id: 94,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 93",
        },
        {
          id: 95,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 94",
        },
        {
          id: 96,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 95",
        },
        {
          id: 97,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 96",
        },
        {
          id: 98,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 97",
        },
        {
          id: 99,
          storyId: 7347955,
          title: "Grass Chunin Exam Arc: Chapter 98",
        },
        {
          id: 100,
          storyId: 7347955,
          title: "Sensory Squad Arc: Chapter 99",
        },
        {
          id: 101,
          storyId: 7347955,
          title: "Sensory Squad Arc: Chapter 100",
        },
        {
          id: 102,
          storyId: 7347955,
          title: "Sensory Squad Arc: Chapter 101",
        },
        {
          id: 103,
          storyId: 7347955,
          title: "Sensory Squad Arc: Chapter 102",
        },
        {
          id: 104,
          storyId: 7347955,
          title: "Sensory Squad Arc: Chapter 103",
        },
        {
          id: 105,
          storyId: 7347955,
          title: "Storage Seal Arc: Chapter 104",
        },
        {
          id: 106,
          storyId: 7347955,
          title: "Storage Seal Arc: Chapter 105",
        },
        {
          id: 107,
          storyId: 7347955,
          title: "Intelligence Division Arc: Chapter 106",
        },
        {
          id: 108,
          storyId: 7347955,
          title: "Intelligence Division Arc: Chapter 107",
        },
        {
          id: 109,
          storyId: 7347955,
          title: "Intelligence Division Arc: Chapter 108",
        },
        {
          id: 110,
          storyId: 7347955,
          title: "Intelligence Division Arc: Chapter 109",
        },
        {
          id: 111,
          storyId: 7347955,
          title: "Intelligence Division Arc: Chapter 110",
        },
        {
          id: 112,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 111",
        },
        {
          id: 113,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 112",
        },
        {
          id: 114,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 113",
        },
        {
          id: 115,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 114",
        },
        {
          id: 116,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 115",
        },
        {
          id: 117,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 116",
        },
        {
          id: 118,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 117",
        },
        {
          id: 119,
          storyId: 7347955,
          title: "Land of the Moon Arc: Chapter 118",
        },
        {
          id: 120,
          storyId: 7347955,
          title: "Lost Child Arc: Chapter 119",
        },
        {
          id: 121,
          storyId: 7347955,
          title: "Lost Child Arc: Chapter 120",
        },
        {
          id: 122,
          storyId: 7347955,
          title: "Fire Temple Arc: Chapter 121",
        },
        {
          id: 123,
          storyId: 7347955,
          title: "Hospital Arc: Chapter 122",
        },
        {
          id: 124,
          storyId: 7347955,
          title: "Hospital Arc: Chapter 123",
        },
        {
          id: 125,
          storyId: 7347955,
          title: "Hospital Arc: Chapter 124",
        },
        {
          id: 126,
          storyId: 7347955,
          title: "Hospital Arc: Chapter 125",
        },
        {
          id: 127,
          storyId: 7347955,
          title: "Hospital Arc: Chapter 126",
        },
        {
          id: 128,
          storyId: 7347955,
          title: "Hospital Arc: Chapter 127",
        },
        {
          id: 129,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 128",
        },
        {
          id: 130,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 129",
        },
        {
          id: 131,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 130",
        },
        {
          id: 132,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 131",
        },
        {
          id: 133,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 132",
        },
        {
          id: 134,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 133",
        },
        {
          id: 135,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 134",
        },
        {
          id: 136,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 135",
        },
        {
          id: 137,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 136",
        },
        {
          id: 138,
          storyId: 7347955,
          title: "Land of Hot Springs Arc: Chapter 137",
        },
        {
          id: 139,
          storyId: 7347955,
          title: "Hidden Mist Arc: Chapter 138",
        },
        {
          id: 140,
          storyId: 7347955,
          title: "Hidden Mist Arc: Chapter 139",
        },
        {
          id: 141,
          storyId: 7347955,
          title: "Hidden Mist Arc: Chapter 140",
        },
        {
          id: 142,
          storyId: 7347955,
          title: "Hidden Mist Arc: Chapter 141",
        },
        {
          id: 143,
          storyId: 7347955,
          title: "Hidden Mist Arc: Chapter 142",
        },
        {
          id: 144,
          storyId: 7347955,
          title: "ANBU Arc: Chapter 143",
        },
        {
          id: 145,
          storyId: 7347955,
          title: "ANBU Arc: Chapter 144",
        },
        {
          id: 146,
          storyId: 7347955,
          title: "Police Arc: Chapter 145",
        },
        {
          id: 147,
          storyId: 7347955,
          title: "Police Arc: Chapter 146",
        },
        {
          id: 148,
          storyId: 7347955,
          title: "Police Arc: Chapter 147",
        },
        {
          id: 149,
          storyId: 7347955,
          title: "Police Arc: Chapter 148",
        },
        {
          id: 150,
          storyId: 7347955,
          title: "Police Arc: Chapter 149",
        },
        {
          id: 151,
          storyId: 7347955,
          title: "Rice Fields Arc: Chapter 150",
        },
      ],
      imageUrl: "/image/1740448/180/",
      favorites: 19089,
      follows: 18895,
      reviews: 24172,
      genre: ["Adventure"],
      characters: [["Naruto U."], ["Shikamaru N."], ["OC"]],
      language: "English",
      published: new Date("2011-09-03T01:45:42Z"),
      updated: new Date("2019-03-28T07:40:16Z"),
      rating: "T",
      words: 716431,
      universes: ["Naruto"],
      status: "Incomplete",
    });
  });

  it("should parse story without image", async function () {
    const fragment = await loadTestCase("03-team-8.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toStrictEqual({
      id: 2731239,
      title: "Team 8",
      author: {
        id: 884184,
        name: "S'TarKan",
      },
      description:
        "What if Naruto had been selected for a different team? What if he'd had a different mentor? Who would guess the consequences would be so large?",
      chapters: [
        {
          id: 1,
          storyId: 2731239,
          title: "The Power of Observation",
        },
        {
          id: 2,
          storyId: 2731239,
          title: "A Painfully Early Morning",
        },
        {
          id: 3,
          storyId: 2731239,
          title: "First Mission",
        },
        {
          id: 4,
          storyId: 2731239,
          title: "Geniuses of Hard Work",
        },
        {
          id: 5,
          storyId: 2731239,
          title: "Difficult Preparations",
        },
        {
          id: 6,
          storyId: 2731239,
          title: "The Journey to the Borderlands",
        },
        {
          id: 7,
          storyId: 2731239,
          title: "First Blood",
        },
        {
          id: 8,
          storyId: 2731239,
          title: "Revelations",
        },
        {
          id: 9,
          storyId: 2731239,
          title: "Returning to Konoha",
        },
        {
          id: 10,
          storyId: 2731239,
          title: "Complex Confrontations",
        },
        {
          id: 11,
          storyId: 2731239,
          title: "My Dinner with Aburame",
        },
        {
          id: 12,
          storyId: 2731239,
          title: "Stress Testing",
        },
        {
          id: 13,
          storyId: 2731239,
          title: "The Forest of Death",
        },
        {
          id: 14,
          storyId: 2731239,
          title: "Preliminary Mayhem",
        },
        {
          id: 15,
          storyId: 2731239,
          title: "A Wretched Recovery",
        },
        {
          id: 16,
          storyId: 2731239,
          title: "Mortal Combat",
        },
        {
          id: 17,
          storyId: 2731239,
          title: "All That and a Bag of Chips",
        },
        {
          id: 18,
          storyId: 2731239,
          title: "A Dangerous Pursuit",
        },
        {
          id: 19,
          storyId: 2731239,
          title: "A Fearful Fallout",
        },
        {
          id: 20,
          storyId: 2731239,
          title: "Deadly Consequences",
        },
        {
          id: 21,
          storyId: 2731239,
          title: "A Pyrrhic Victory",
        },
        {
          id: 22,
          storyId: 2731239,
          title: "Endings and Beginnings",
        },
        {
          id: 23,
          storyId: 2731239,
          title: "Servants, Sparring, and Summons",
        },
        {
          id: 24,
          storyId: 2731239,
          title: "Reunions and Revelations",
        },
      ],
      imageUrl: undefined,
      favorites: 23384,
      follows: 20572,
      reviews: 15236,
      genre: ["Adventure", "Romance"],
      characters: [["Naruto U."], ["Hinata H."]],
      language: "English",
      published: new Date("2006-01-02T03:22:03Z"),
      updated: new Date("2015-04-24T03:19:03Z"),
      rating: "T",
      words: 276868,
      universes: ["Naruto"],
      status: "Incomplete",
    });
  });

  it("should parse story with single chapter/missing data", async function () {
    const fragment = await loadTestCase("04-calculation.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toStrictEqual({
      id: 7619993,
      title: "Calculation",
      author: {
        id: 1424477,
        name: "fringeperson",
      },
      description:
        "Young Harry liked numbers, he liked using numbers and working out the value of things. When he found out that he was a wizard and had a big pile of gold... well, he had something new to calculate. oneshot, complete, don't own.",
      chapters: [
        {
          id: 1,
          storyId: 7619993,
          title: "Calculation",
        },
      ],
      imageUrl: "/image/5498606/180/",
      favorites: 15363,
      follows: 4178,
      reviews: 1387,
      genre: [],
      characters: [["Harry P."]],
      language: "English",
      published: new Date("2011-12-09T01:31:07Z"),
      updated: undefined,
      rating: "K",
      words: 18141,
      universes: ["Harry Potter"],
      status: "Complete",
    });
  });

  it("should parse alerts list", async function () {
    const fragment = await loadTestCase("05-alerts.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse story list", async function () {
    const fragment = await loadTestCase("06-hp-naruto-crossovers.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse crossover story", async function () {
    const fragment = await loadTestCase("08-finding-home.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toStrictEqual({
      id: 8148717,
      title: "Finding Home",
      author: {
        id: 2042977,
        name: "cywsaphyre",
      },
      description:
        "When Harry finally accepted the fact that he had stopped aging, ten years had passed and he knew it was time to leave. AU.",
      chapters: [
        {
          id: 1,
          storyId: 8148717,
          title: "To Begin Anew",
        },
        {
          id: 2,
          storyId: 8148717,
          title: "To Be A Friend",
        },
        {
          id: 3,
          storyId: 8148717,
          title: "To Start A War",
        },
        {
          id: 4,
          storyId: 8148717,
          title: "To First Meetings",
        },
        {
          id: 5,
          storyId: 8148717,
          title: "To Friends, Enemies, and InBetweens",
        },
        {
          id: 6,
          storyId: 8148717,
          title: "To Trust",
        },
        {
          id: 7,
          storyId: 8148717,
          title: "To Revelations",
        },
        {
          id: 8,
          storyId: 8148717,
          title: "To Merge Two Worlds",
        },
        {
          id: 9,
          storyId: 8148717,
          title: "To Come Apart",
        },
        {
          id: 10,
          storyId: 8148717,
          title: "To Separate",
        },
        {
          id: 11,
          storyId: 8148717,
          title: "To Form an Alliance",
        },
        {
          id: 12,
          storyId: 8148717,
          title: "To Stand Together",
        },
        {
          id: 13,
          storyId: 8148717,
          title: "To When Winning Feels Like Losing",
        },
        {
          id: 14,
          storyId: 8148717,
          title: "To Relax Or To Not Relax",
        },
        {
          id: 15,
          storyId: 8148717,
          title: "To the Next Arc",
        },
      ],
      imageUrl: "/image/2260423/180/",
      favorites: 15566,
      follows: 7715,
      reviews: 2895,
      genre: ["Adventure", "Friendship"],
      characters: [["Harry P."]],
      language: "English",
      published: new Date("2012-05-25T07:55:52Z"),
      updated: new Date("2013-02-19T02:11:21Z"),
      rating: "T",
      words: 61162,
      universes: ["Harry Potter", "Avengers"],
      status: "Complete",
    });
  });
});
