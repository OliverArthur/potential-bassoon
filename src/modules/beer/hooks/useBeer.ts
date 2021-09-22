import { ref } from "vue";
import { BrewDog } from "../models/beer";
import { getRandom } from "../services/useServices";

const loading = ref(false);
const beer = ref<BrewDog[] | null>(null);

/**
 * @description Get random beer from api.
 *
 * @return {*}  {Promise<void>}
 */
const getBeer = async (): Promise<void> => {
	try {
		loading.value = true;
		const data = await getRandom();
		beer.value = data;
	} catch (e) {
		console.error(e);
	} finally {
		loading.value = false;
	}
};

export default function () {
	return {
		getBeer,
		loading,
		beer
	};
}
