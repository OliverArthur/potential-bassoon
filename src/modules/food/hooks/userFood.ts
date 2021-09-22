import { ref } from "vue";
import { Food } from "../models/food";
import { getRandom } from "../services/useServices";

const loading = ref(false);
const food = ref<Food | null>(null);

/**
 * @description Get random dish from api.
 *
 * @return {*}  {Promise<void>}
 */
const getFood = async (): Promise<void> => {
	try {
		loading.value = true;
		const data = await getRandom();
		food.value = data;
	} catch (e) {
		console.error(e);
	} finally {
		loading.value = false;
	}
};

export default function () {
	return {
		getFood,
		loading,
		food
	};
}
