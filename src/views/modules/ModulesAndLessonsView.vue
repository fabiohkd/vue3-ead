<template>
	<div class="pageTitle">
		<span class="title">{{ course.name }}</span>
		<span class="dots">
			<span></span>
			<span></span>
			<span></span>
		</span>
	</div>
	<div class="content">
		<div class="container">
			<modules-view />
			<div class="right">
				<div class="content">
					<player-view></player-view>
					<supports-lesson-view></supports-lesson-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';
import ModulesView from '@/views/modules/components/ModulesView.vue';
import PlayerView from '@/views/modules/components/PlayerView.vue';
import SupportsLessonView from '@/views/modules/components/SupportsLessonView.vue';
import { computed } from 'vue';
export default {
	name: 'ModulesAndLessons',
	setup() {
		const store = useStore();
		const course = computed(() => store.state.courses.courseSelected);

		return { course };
	},
	components: {
		ModulesView,
		PlayerView,
		SupportsLessonView,
	},
};
</script>
