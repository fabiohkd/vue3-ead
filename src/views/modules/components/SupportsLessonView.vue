<template>
	<div class="comments" v-show="lesson.name">
		<div class="header">
			<span class="title"
				>Dúvidas (total: {{ supports.length }}) <span v-if="loading">Carregando...</span>
			</span>
			<button class="btn primary" @click.prevent="openModal">
				<i class="fas fa-plus"></i>
				Enviar nova dúvida
			</button>
		</div>
		<supports-view />
		<modal-support
			:show-modal="modal.showModal"
			:support-reply="modal.supportReply"
			@closeModal="modal.showModal = false"
		>
		</modal-support>
	</div>
</template>

<script>
import SupportsView from '@/components/SupportsView.vue';
import ModalSupport from '@/components/ModalSupportView.vue';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
export default {
	components: { SupportsView, ModalSupport },
	name: 'SupportsLessonView',
	setup() {
		const store = useStore();
		const loading = ref(false);
		const modal = ref({
			showModal: false,
			supportReply: '',
		});

		const lesson = computed(() => store.state.courses.lessonPlayer);
		const supports = computed(() => store.state.supports.supports.data);
		watch(
			() => store.state.courses.lessonPlayer,
			() => {
				loading.value = true;
				store
					.dispatch('getSupportsByLesson', lesson.value.id)
					.finally(() => (loading.value = false));
			}
		);

		const openModal = () =>
			(modal.value = {
				showModal: true,
				supportReply: '',
			});

		return { lesson, loading, supports, modal, openModal };
	},
};
</script>
