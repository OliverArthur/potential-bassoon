import { Food } from "../models/food";
import { ApiService } from "../../../shared";
import config from "../../../../config";

/**
 * @description method to fetch random food
 *
 * @export
 * @return {*}  {Promise<Food>}
 */
export function getRandom(): Promise<Food> {
	const url = `${config.apiFoodURL}/api/food/random_food`;
	return ApiService.get<Food>(url);
}
