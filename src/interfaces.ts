export interface Player {
	points: number;
	active?: boolean;
}

export interface Store {
	sound: boolean;
	persian: boolean;
	difficulty: number;
	round: number;
	players?: [Player, Player];
	remainGuesses: number;
	thesaurus?: string[];
	timeEnd?: boolean;
	lastGuess?: boolean;
	correctLetters?: string;
	word?: string;
	denied?: string;
	lastRound?: boolean;
}
export const defaultStore: Store = {
	sound: false,
	persian: false,
	difficulty: 1,
	round: 0,
	lastGuess: true,

	denied: '',
	timeEnd: false,
	remainGuesses: 5
};
