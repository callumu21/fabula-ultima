export type Attribute = "MIGHT" | "DEXTERITY" | "INSIGHT" | "WILLPOWER";

export type DieSize = "d6" | "d8" | "d10" | "d12";

export type StatusEffect =
  | "SLOW"
  | "DAZED"
  | "WEAK"
  | "SHAKEN"
  | "ENRAGED"
  | "POISONED";

export type BondEmotions =
  | "ADMIRATION"
  | "INFERIORITY"
  | "LOYALTY"
  | "MISTRUST"
  | "AFFECTION"
  | "HATRED";

export interface Character {
  name: string;
  level: number;
  attributes: Record<Attribute, DieSize>;
  activeStatusEffects: StatusEffect[];
  identity: string;
  theme: string;
  origin: string;
  race: string;
  fabulaPoints: number;
  bonds: Record<string, BondEmotions[]>;
  inventoryPointsMax: number;
  currentInventoryPoints: number;
  zenit: number;
  classes: string[];
  hpMax: number;
  currentHp: number;
  mpMax: number;
  currentMp: number;
  initiative: number;
  defense: number;
  magicDefense: number;
  skills: string[];
  inventory: string[];
  notes: string;
}
