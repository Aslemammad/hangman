export interface Player {
	points: number;
}

export interface Store {
	sound: boolean;
	language: 'persian' | 'english';
	difficulty: number;
	round: number;
	playerOne: Player;
	playerTwo: Player;
}
export type Dispatch = (callback: (store: Store | undefined) => Store | undefined) => void;
