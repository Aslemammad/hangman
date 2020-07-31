export interface Product {
	_id: string;
	name: string;
	description: string;
	price: number;
	username: string;
	_v: number;
}
export interface AddProduct {
	name: string;
	description: string;
	price: number;
}
export interface Products {
	[index: number]: Product;
}
export interface ContextInterface {
	user: string;
	products: Array<Product>;
	carts: Array<string>;
	showModal: boolean;
}

export interface SignInterface {
	username: string;
	password: string;
}
