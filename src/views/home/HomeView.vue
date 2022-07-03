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
			<card-course :title="'Curso de Laravel com Vue.js'" :image="''" :bgName="'laravel'"> </card-course>
		</ul>
	</div>
</template>

<script>
import CardCourse from './components/CardCourseView.vue';
export default {
	name: 'HomeView',
	components: {
		CardCourse,
	},
};
</script>
