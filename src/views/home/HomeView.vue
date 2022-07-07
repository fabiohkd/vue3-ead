/* eslint-disable vue/no-parsing-error */
<template>
	<div class="pageTitle">
		<span class="title">Meus Cursos</span>
		<span class="dots">
			<span></span>
			<span></span>
			<span></span>
		</span>
	</div>

	<div class="content">
		<ul class="listCourses">
			<card-course v-for="course in myCourses" :key="course.id" :course="course" :title="course.name" :image="course.image" :bgName="'laravel'">
			</card-course>
		</ul>
	</div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardCourse from './components/CardCourseView.vue';
export default {
	name: 'HomeView',
	setup() {
		const store = useStore();
		const myCourses = computed(() => store.state.courses.myCourses);
		onMounted(() => store.dispatch('getCourses'));

		return { myCourses };
	},
	components: {
		CardCourse,
	},
};
</script>
