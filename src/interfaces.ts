export interface Player {
	points: number;
	active?: boolean;
}

export interface Store {
	sound: boolean;
	persian: boolean;
	difficulty: number;
	round: number;
	aboutModal: boolean;
	detailsModal: boolean;
	players?: [Player, Player];
	remainGuesses: number;
	thesaurus?: string[];
	timeEnd?: boolean;
	lastGuess?: boolean;
	correctLetters?: string;
	word?: string;
	denied?: string;
	lastRound?: boolean;
	lastGameRounds?: number;
	lastGameWinner?: 1 | 2;
}
export const defaultStore: Store = {
	aboutModal: false,
	detailsModal: false,
	sound: false,
	persian: false,
	difficulty: 1,
	round: 0,
	lastGuess: true,

	denied: '',
	timeEnd: false,
	remainGuesses: 5
};
