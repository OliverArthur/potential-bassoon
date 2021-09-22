import { BrewDog } from "../models/beer";
import { ApiService } from "../../../shared";
import config from "../../../../config";

/**
 * @description method to fetch random beer from api
 *
 * @export
 * @return {*}  {Promise<BrewDog[]>}
 */
export function getRandom(): Promise<BrewDog[]> {
	const url = `${config.apiBeerURL}/v2/beers/random`;
	return ApiService.get<BrewDog>(url);
}

/**
 * @description method to fetch a single beer from api
 *
 * @export
 * @param {number} id - id of the beer
 * @return {*}  {Promise<BrewDog>}
 */
export function getOne(id: number): Promise<BrewDog> {
	const url = `${config.apiBeerURL}/v2/beers/${id}`;
	return ApiService.get<BrewDog>(url);
}
