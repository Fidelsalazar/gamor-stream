export interface Player {
  id: number;
  rank: number;
  name: string;
  avatars?: string[];
}

export interface PlayersData {
  party: Player[];
  matches: Player[];
  streams: Player[];
}

export const playersData: PlayersData = {
  party: [
    { id: 1, rank: 1, name: "Dr Team" },
    { id: 2, rank: 2, name: "Mia Plays" },
    { id: 3, rank: 3, name: "Keoxer" },
    { id: 4, rank: 4, name: "Ninja Gamer" },
    { id: 5, rank: 5, name: "Pro Snipe" },
    { id: 6, rank: 6, name: "FastLaner" },
    { id: 7, rank: 7, name: "GhostMode" },
    { id: 8, rank: 8, name: "AlphaWolf" },
    { id: 9, rank: 9, name: "CyberPunk" },
    { id: 10, rank: 10, name: "TheLastOne" },
  ],
  matches: [
    { id: 11, rank: 1, name: "Tournament Kings" },
    { id: 12, rank: 2, name: "Pro League" },
    { id: 13, rank: 3, name: "Champions Cup" },
    { id: 14, rank: 4, name: "Elite Fighters" },
    { id: 15, rank: 5, name: "Battle Masters" },
  ],
  streams: [
    { id: 21, rank: 1, name: "Top Streamer" },
    { id: 22, rank: 2, name: "Popular Gamer" },
    { id: 23, rank: 3, name: "New Star" },
    { id: 24, rank: 4, name: "Rising Star" },
    { id: 25, rank: 5, name: "Pro Streamer" },
    { id: 26, rank: 6, name: "Live Now" },
  ]
};