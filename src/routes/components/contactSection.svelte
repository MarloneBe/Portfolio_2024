<script lang="ts">
	import emailjs from 'emailjs-com';
	import { Toast } from 'flowbite-svelte';
	import {
		CheckCircleSolid,
		CloseCircleSolid
	} from 'flowbite-svelte-icons';

	let firstname = '';
	let email = '';
	let message = '';
	let successMessage = false;
	let errorMessage = false;

	function sendEmail(e: any) {
		e.preventDefault();
		const templateParams = {
			firstname,
			email,
			message
		};

		emailjs.send('service_9u1wlhr', 'template_0rd3snn', templateParams, 'nF_izI7XV8cY8kuxF').then(
			(response) => {
				successMessage = true;
				errorMessage = false;
				firstname = '';
				email = '';
				message = '';
				setTimeout(() => {
					successMessage = false;
				}, 3000);
			},
			(err) => {
				errorMessage = true;
				successMessage = false;
				setTimeout(() => {
					errorMessage = false;
				}, 3000);
			}
		);
	}
</script>

<section id="contact" class="bg-gradient-to-r from-black to-gray-900 py-20 text-gray-200">
	<div class="container mx-auto">
		{#if successMessage}
			<div class="fixed left-1/2 top-20 z-50 -translate-x-1/2 transform">
				<Toast color="green">
					<svelte:fragment slot="icon">
						<CheckCircleSolid class="h-5 w-5" />
					</svelte:fragment>
					Email envoyé avec succès!
				</Toast>
			</div>
		{/if}

		{#if errorMessage}
			<div class="fixed left-1/2 top-20 z-50 -translate-x-1/2 transform">
				<Toast color="red">
					<svelte:fragment slot="icon">
						<CloseCircleSolid class="h-5 w-5" />
					</svelte:fragment>
					Echec de l'envoi, veuillez réessayer.
				</Toast>
			</div>
		{/if}
		<h2 class="mb-8 text-center text-3xl font-bold text-white">Me contacter</h2>
		<form
			on:submit|preventDefault={sendEmail}
			class="mx-auto max-w-lg rounded bg-gray-800 p-8 text-white shadow-lg"
		>
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold text-white" for="firstname">Nom</label>
				<input
					type="text"
					id="firstname"
					class="w-full rounded border bg-gray-700 p-2 text-gray-200"
					bind:value={firstname}
				/>
			</div>
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold text-white" for="email">Email</label>
				<input
					type="email"
					id="email"
					class="w-full rounded border bg-gray-700 p-2 text-gray-200"
					bind:value={email}
				/>
			</div>
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold text-white" for="message">Message</label>
				<textarea
					id="message"
					class="w-full rounded border bg-gray-700 p-2 text-gray-200"
					bind:value={message}
				></textarea>
			</div>
			<div class="flex justify-center">
				<button type="submit" class="rounded bg-white px-4 py-2 text-black hover:bg-gray-300"
					>Envoyer</button
				>
			</div>
		</form>
	</div>
</section>
