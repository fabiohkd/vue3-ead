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
							<p>Seja muito bem vindo(a)!</p>
						</span>
						<span class="dots">
							<span></span>
							<span></span>
							<span></span>
						</span>
						<span class="description"> Altere sua senha! </span>
						<form action="/dist/index.html" method="">
							<div class="groupForm">
								<i class="far fa-envelope"></i>
								<input type="email" name="email" placeholder="Email" required v-model="email" />
							</div>
							<div class="groupForm">
								<i class="far fa-key"></i>
								<input type="password" name="password" placeholder="Senha" required v-model="password" />
								<i class="far fa-eye buttom"></i>
							</div>
							<button :class="['btn', 'primary', loading ? 'loading' : '']" type="submit" @click.prevent="auth">
								<span v-if="loading">Alterando...</span>
								<span v-else>Salvar Senha</span>
							</button>
						</form>
					</div>
					<span class="copyright fontSmall"> Todos os Direitos reservados - <b>FR Tecnologia</b> </span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// import router from '@/router';
import { ref } from 'vue';
import router from '@/router';
import ResetPasswordService from '@/services/ResetPasswordService';
import { notify } from '@kyvg/vue3-notification';

export default {
	name: 'ResetPasswordView',
	props: ['token'],
	setup(props) {
		const email = ref('');
		const password = ref('');
		const loading = ref(false);
		const auth = () => {
			loading.value = true;
			ResetPasswordService.resetPassword({
				// 'hegmann.virgil@example.net'
				email: email.value,
				password: password.value,
				token: props.token,
			})
				.then(() => {
					notify({
						title: 'Sucesso',
						text: 'Senha Alterada com Sucesso',
						type: 'success',
						duration: 2200,
					});

					router.push({ name: 'auth' });
				})
				.catch(() => {
					notify({
						title: 'Falha',
						text: 'Falha em Alterar a Senha',
						type: 'error',
						duration: 2200,
					});
				})
				.finally(() => (loading.value = false));
		};
		return { auth, email, password, loading };
	},
};
</script>
