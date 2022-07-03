<template>
	<div class="pageTitle">
		<span class="title">Curso Laravel</span>
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
import ModulesView from '@/views/modules/components/ModulesView.vue';
import PlayerView from '@/views/modules/components/PlayerView.vue';
import SupportsLessonView from '@/views/modules/components/SupportsLessonView.vue';
export default {
	name: 'ModulesAndLessons',

	components: {
		ModulesView,
		PlayerView,
		SupportsLessonView,
	},
};
</script>
