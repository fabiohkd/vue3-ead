<template>
	<section id="loginPage" :style="{ backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')' }">
		<div class="loginContent">
			<div class="loginCard">
				<div class="decor" :style="{ backgroundImage: 'url(' + require('@/assets/images/building.jpg') + ')' }">
					<div class="content">
						<span class="logo">
							<img :src="require('@/assets/images/logo.svg')" alt="Logo" />
						</span>
						<span class="dots">
							<span></span>
							<span></span>
							<span></span>
						</span>
						<span class="description">
							<p>Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.</p>
						</span>
						<span class="copyright fontSmall"> Todos os Direitos reservados - <b>FR Tecnologia</b> </span>
					</div>
				</div>
				<div class="login">
					<div class="content">
						<span class="logo">
							<img :src="require('@/assets/images/logoDark.svg')" alt="" />
						</span>
						<span>
							<p>Seja muito bem vindo!</p>
						</span>
						<span class="dots">
							<span></span>
							<span></span>
							<span></span>
						</span>
						<span class="description"> Recupere sua senha. </span>
						<form action="/dist/index.html" method="">
							<div class="groupForm">
								<i class="far fa-envelope"></i>
								<input type="email" name="email" placeholder="Email" required v-model="email" />
							</div>
							<button :class="['btn', 'primary', loading ? 'loading' : '']" type="submit" @click.prevent="forgetPassword">
								<span v-if="loading">Enviando...</span>
								<span v-else>Recuperar Senha</span>
							</button>
						</form>
						<span>
							<p class="fontSmall">
								Fazer login?
								<router-link :to="{ name: 'auth' }" class="link primary">Clique aqui</router-link>
							</p>
						</span>
					</div>
					<span class="copyright fontSmall"> Todos os Direitos reservados - <b>FR Tecnologia</b> </span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { notify } from '@kyvg/vue3-notification';

export default {
	name: 'ForgetPasswordView',
	setup() {
		const store = useStore();
		const email = ref('');
		const loading = ref(false);

		const forgetPassword = () => {
			loading.value = true;
			store
				.dispatch('forgetPassword', { email: email.value })
				.then(() => {
					notify({
						title: 'Sucesso',
						text: 'E-mail de Confirmação Enviado com Sucesso',
						type: 'success',
						duration: 2200,
					});
				})
				.catch(() => {
					notify({
						title: 'Falha',
						text: 'Falha ao Recuperar o Usuário',
						type: 'error',
						duration: 2200,
					});
				})
				.finally(() => (loading.value = false));
		};

		return { email, forgetPassword, loading };
	},
};
</script>
