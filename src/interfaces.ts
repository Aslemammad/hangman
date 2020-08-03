export interface Player {
	points: number;
}

export interface Store {
	sound: boolean;
	persian: boolean;
	difficulty: number;
	round: number;
	playerOne: Player;
	playerTwo?: Player;
}
export const defaultState = {
	sound: true,
	persian: false,
	difficulty: 1,
	round: 0,
	playerOne: { points: 0 }
};
