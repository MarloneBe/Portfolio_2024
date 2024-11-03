<script lang="ts">
	import { Avatar, Dropdown, DropdownItem, Popover, Button } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	let sections = ['À propos', 'Compétences', 'Projets', 'Contact'];
</script>

<nav class="fixed z-10 w-full border-b border-gray-800 bg-primaryBlack-dark">
	<div class="container mx-auto flex justify-between p-4">
		<Button class="text-xl font-bold text-white" on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Monkey.co</Button>
		<ul class="hidden space-x-6 md:flex">
			{#each sections as section}
				{#if section == 'À propos'}
					<li>
						<p class="mr-5 text-lg italic text-gray-300 hover:text-white" id="about">
							{section}
						</p>
					</li>
					<Popover
						class="w-fit bg-gradient-to-r from-gray-900 to-black text-sm text-white "
						triggeredBy="#about"
						transition={fade}
						params={{ duration: 700 }}
						>Bonjour,<br />
						Je m'appelle <b>Marlone Bertuit</b> et je suis étudiant en fin d'année à la Web@cadémie
						par Epitech. Jeune passionné de l'informatique qui s'est orienté dans le développement
						web.
						<br /><br />

						J'ai appris à utiliser les différents languages et framework afin que les projets que je
						réalise soient toujours meilleurs que le précédent. J'aime découvrir toutes les
						technologies existantes dans ce domaine car je suis émerveillé à chaque fois que j'en
						utilise une nouvelle.
						<br /><br />

						Grâce au développement web, je me suis une nouvelle fois rendu compte que l'informatique
						est le domaine qui me plait le plus.</Popover
					>
				{:else}
					<li>
						<a
							href={'#' + section.toLowerCase()}
							class="mr-5 text-lg italic text-gray-300 hover:text-white"
						>
							{section}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
		<div class="flex items-center md:hidden">
			<Avatar id="avatar-menu" src="src/public/images/burgermenu_icon.png" class="bg-black" />
			<Dropdown class="bg-black text-white" placement="bottom" triggeredBy="#avatar-menu">
				<DropdownItem id="about">À propos</DropdownItem>
				<Popover
					class="w-96 bg-gradient-to-r from-gray-900 to-black text-sm text-white"
					triggeredBy="#about"
					trigger="click"
					transition={fade}
					params={{ duration: 700 }}
					>Bonjour,<br />
					Je m'appelle Marlone Bertuit et je suis étudiant à la Web@cadémie par Epitech. Jeune passionné
					de l'informatique qui s'est orienté dans le développement web. J'apprends à utiliser les différents
					languages et framework afin que les projets que je réalise soient toujours meilleurs que le
					précédent. J'aime découvrir toutes les technologies existantes dans ce domaine car je suis
					émerveillé à chaque fois que j'en utilise une nouvelle. Grâce au développement web, je me suis
					une nouvelle fois rendu compte que l'informatique est le domaine qui me plait le plus.</Popover
				>
				<DropdownItem>Compétences</DropdownItem>
				<DropdownItem>Projets</DropdownItem>
				<DropdownItem>Contact</DropdownItem>
			</Dropdown>
		</div>
	</div>
</nav>
