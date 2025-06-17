export type Attribute = "MIGHT" | "DEXTERITY" | "INSIGHT" | "WILLPOWER";

export type DieSize = "d6" | "d8" | "d10" | "d12";

export type StatusEffect =
  | "SLOW"
  | "DAZED"
  | "WEAK"
  | "SHAKEN"
  | "ENRAGED"
  | "POISONED";

export type BondEmotion =
  | "ADMIRATION"
  | "INFERIORITY"
  | "LOYALTY"
  | "MISTRUST"
  | "AFFECTION"
  | "HATRED";

export type Class =
  | "ACE OF CARDS"
  | "ARCANIST"
  | "CHANTER"
  | "CHIMERIST"
  | "COMMANDER"
  | "DANCER"
  | "DARKBLADE"
  | "ELEMENTALIST"
  | "ENTROPIST"
  | "ESPER"
  | "FLORIST"
  | "FURY"
  | "GOURMET"
  | "GUARDIAN"
  | "INVOKER"
  | "LOREMASTER"
  | "MERCHANT"
  | "MUTANT"
  | "NECROMANCER"
  | "ORATOR"
  | "PILOT"
  | "ROGUE"
  | "SHARPSHOOTER"
  | "SPIRITIST"
  | "SYMBOLIST"
  | "TINKERER"
  | "WAYFARER"
  | "WEAPONMASTER";

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
  bonds: Record<string, BondEmotion[]>;
  inventoryPointsMax: number;
  currentInventoryPoints: number;
  zenit: number;
  classes: Class[];
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
