export type Dice = "d4" | "d6" | "d8" | "d10" | "d12" | "d20";

export interface RollableDice {
	type: Dice;
	amount: number;
	modifier: number;
}

export type DiceRoll = `${number}${Dice}${`+${number}` | `${number}` | ""}`;

export type Ability =
	| "strength"
	| "dexterity"
	| "constitution"
	| "intelligence"
	| "wisdom"
	| "charisma";

export type AbilityShort = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

export type Skill =
	| "athletics"
	| "acrobatics"
	| "sleight of hand"
	| "stealth"
	| "Arcana"
	| "History"
	| "investigation"
	| "nature"
	| "religion"
	| "animal handling"
	| "insight"
	| "medicine"
	| "perception"
	| "survival"
	| "deception"
	| "intimidation"
	| "performance"
	| "persuasion";

export type AbilityScore =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30;

//Temp, will eventually have this in db maybe?
export type CharacterClass =
	| "bard"
	| "barbarian"
	| "cleric"
	| "druid"
	| "figher"
	| "monk"
	| "ranger"
	| "rogue"
	| "sorcerer"
	| "paladin"
	| "warlock"
	| "wizard";

export interface AbilityScores {
	strength: AbilityScore;
	dexterity: AbilityScore;
	constitution: AbilityScore;
	intelligence: AbilityScore;
	wisdom: AbilityScore;
	charisma: AbilityScore;
}

export interface Damage {
	damage_type: DamageType;
	damage_dice: RollableDice;
	notes?: string;
}

export interface DamageChoice {
	choose: number;
	from: Damage[];
}

export type DamageType =
	| "piercing"
	| "bludgeoning"
	| "slashing"
	| "cold"
	| "fire"
	| "lightning"
	| "thunder"
	| "poison"
	| "acid"
	| "necrotic"
	| "radiant"
	| "force"
	| "psychic";

export type Condition =
	| "blinded"
	| "charmed"
	| "deafened"
	| "exhaustion"
	| "frightened"
	| "grappled"
	| "incapacitated"
	| "invisible"
	| "paralyzed"
	| "petrified"
	| "poisoned"
	| "prone"
	| "restrained"
	| "stunned"
	| "unconscious";

export interface DifficultyClass {
	ability: string;
	value: number;
	success_type: "none" | "half" | "other";
}

type RestType = "short" | "long";
