export interface Player {
	points: number;
	active?: boolean;
}

export interface Store {
	sound: boolean;
	persian: boolean;
	difficulty: number;
	round: number;
	playerOne: Player;
	timeEnd?: boolean;
	lastGuess?: boolean;
	correctLetters?: string;
	word?: string;
	denied?: string;
	playerTwo?: Player;
}
export const defaultStore: Store = {
	sound: true,
	persian: false,
	difficulty: 1,
	round: 0,
	lastGuess: true,
	playerOne: { points: 0 },
	denied: '',
	timeEnd: false
};
