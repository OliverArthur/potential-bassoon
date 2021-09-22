import { Fermentation } from "./fermentation";
import { Volume } from "./volume";

export interface Method {
	mash_temp: Mashtemp[];
	fermentation: Fermentation;
	twist: string;
}

interface Mashtemp {
	temp: Volume;
	duration: number;
}
