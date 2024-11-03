<script lang="ts">
	import { Badge } from 'flowbite-svelte';
</script>

<section
	id="top"
	class="flex h-screen items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white"
>
	<div class="text-center">
		<h2 class="mb-4 text-5xl font-bold">Bienvenue</h2>
		<p class="text-lg text-gray-300">
			Voici le portfolio d'un développeur web toujours en quête de projet excitant.
		</p>
		<a
			href="#projets"
			class="mt-6 inline-block rounded-full bg-gray-800 px-4 py-2 text-white shadow-md hover:bg-gray-700"
		>
			Voir mon travail
		</a>

		<div class="mt-4 flex justify-center space-x-6">
			<a
				href="https://github.com/MarloneBe"
				target="_blank"
				class="text-gray-400 hover:text-white"
				aria-label="GitHub"
			>
				<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.532 1.03 1.532 1.03.891 1.527 2.34 1.087 2.91.831.091-.646.35-1.086.636-1.337-2.22-.252-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.844a9.58 9.58 0 012.508.338c1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.2 2.393.098 2.646.642.698 1.03 1.59 1.03 2.682 0 3.841-2.338 4.687-4.566 4.936.359.309.678.921.678 1.856 0 1.34-.012 2.422-.012 2.751 0 .268.18.579.688.481C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>

			<a
				href="https://fr.linkedin.com/in/marlone-bertuit-2b8a00275"
				target="_blank"
				class="text-gray-400 hover:text-white"
				aria-label="LinkedIn"
			>
				<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
					<path
						fill-rule="evenodd"
						d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-2.48-3-2.29-3 0v4.5h-3v-9h3v1.3c1.4-2.58 6-2.78 6 2.47v5.23z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>

			<a
				href="\Marlone_Bertuit_CV.pdf"
				download
				class="text-gray-400 hover:text-white"
				aria-label="Télécharger CV"
			>
			<Badge>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
				</svg>
				<h2 class="ml-2">CV</h2>
			</Badge>
			  
			</a>
		</div>
	</div>
</section>
