<script lang="ts">
	import emailjs from 'emailjs-com';

	let firstname = '';
	let email = '';
	let message = '';

	function sendEmail(e: any) {
		e.preventDefault();
		const templateParams = {
			firstname,
			email,
			message
		};

		emailjs.send('service_9u1wlhr', 'template_0rd3snn', templateParams, 'nF_izI7XV8cY8kuxF').then(
			(response) => {
				console.log('Email envoyé', response.status, response.text);
				firstname = '';
				email = '';
				message = '';
			},
			(err) => {
				console.error("Erreur lors de l'envoi ", err);
			}
		);
	}
</script>

<section id="contact" class="bg-gradient-to-r from-black to-gray-900 py-20 text-gray-200">
	<div class="container mx-auto">
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
