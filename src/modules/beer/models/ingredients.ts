import { Volume } from "./volume";

export interface Ingredients {
	malt: Malt[];
	hops: Hop[];
	yeast: string;
}

export interface Hop {
	name: string;
	amount: Volume;
	add: string;
	attribute: string;
}

export interface Malt {
	name: string;
	amount: Volume;
}
