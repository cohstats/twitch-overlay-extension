export type Factions = "german" | "west_german" | "aef" | "british" | "soviet";

export interface Member {
  ai: boolean;
  relicID: number;
  name: string;
  faction: Factions;
  steamID: string;
  xp: number;
  level: number;
  country: string;
}

export interface LadderStats {
  members: Member[];
  wins: number;
  losses: number;
  streak: number;
  disputes: number;
  drops: number;
  rank: number;
  teamrank?: number;
  teamId?: number;
  ranktotal: number;
  ranklevel: number;
  regionrank: number;
  regionranktotal: number;
  lastmatchdate: number;
}

export interface SideData {
  side: TeamSide;
  solo: LadderStats[];
  teams: LadderStats[];
}

export type GameType = "classic" | "ai" | "custom";
export type TeamSide = "axis" | "allies" | "mixed";
export type GameState = "closed" | "menu" | "loading" | "ingame";

export interface GameData {
  found: boolean;
  state: GameState;
  type: GameType;
  map: string;
  winCondition: string;
  left: SideData;
  right: SideData;
}
