<template>
	<article class="beer-card">
		<div class="beer-card__image">
			<img :src="placeHolderImage" :alt="title" />
		</div>
		<div class="beer-card__content">
			<h2 v-if="title === undefined" class="beer-card__title">No title</h2>
			<h2 v-else class="beer-card__title">{{ title }}</h2>
			<p class="beer-card__description">
				{{ description }}
			</p>
		</div>
	</article>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
	name: "BeerCard",
	props: {
		title: {
			type: String,
			default: undefined
		},
		description: {
			type: String,
			required: true
		},
		imageUrl: {
			type: String,
			default: null
		}
	},
	setup(props) {
		const placeHolderImage = computed(() => {
			return props.imageUrl === null
				? "https://via.placeholder.com/300x350"
				: props.imageUrl;
		});

		return {
			placeHolderImage
		};
	}
});
</script>

<style lang="scss" scoped>
.beer-card {
	display: flex;
	background-color: #f0f0f0;
	border-radius: 30px;
	max-width: 100%;

	&__image {
		padding: 20px;
		width: 300px;
		height: 350px;
		img {
			width: 100%;
			max-height: 100%;
			height: auto;
			object-fit: contain;
		}
	}
	&__content {
		width: 350px;
		padding: 20px;
	}
}
</style>
