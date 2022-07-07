<template>
	<div class="training">
		<div class="card bg-laravel">
			<span class="icon">
				<img src="images/icons/laravel.svg" alt="" />
			</span>
			<span class="title">{{ lesson.name }}</span>
			<!-- <a href="trainings.html" class="btn laravel">
				<i class="fas fa-chevron-left"></i>
				Voltar
			</a> -->
			<router-link :to="{ name: 'campus.home' }" class="btn laravel">
				<i class="fas fa-chevron-left"></i>
				Voltar
			</router-link>
		</div>
		<iframe
			v-if="lesson.video"
			width="100%"
			height="auto"
			:src="lesson.video"
			:title="lesson.name"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
	<div class="description-lesson" v-show="lesson.description != ''">
		{{ lesson.description }}
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
	name: 'PlayerView',
	setup() {
		const store = useStore();

		const lesson = computed(() => store.state.courses.lessonPlayer);

		return { lesson };
	},
};
</script>
