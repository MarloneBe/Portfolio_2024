<script lang="ts">
	import { Avatar, Dropdown, DropdownItem, Popover, Button } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	let sections = ['À propos', 'Compétences', 'Projets', 'Contact'];
</script>

<nav class="bg-primaryBlack-dark fixed z-10 w-full border-b border-gray-800">
	<div class="container mx-auto flex justify-between p-4">
		<Button
			class="text-xl font-bold text-white"
			on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Marlone Bertuit</Button
		>
		<ul class="hidden space-x-6 md:flex">
			{#each sections as section}
				{#if section == 'À propos'}
						<Button class="mr-5 text-lg italic text-gray-300 hover:text-white" id="about">
							{section}
						</Button>
					<Popover
						class="w-fit bg-gradient-to-r from-gray-900 to-black text-sm text-white "
						triggeredBy="#about"
						transition={fade}
						params={{ duration: 700 }}
					>
						<Avatar src="/images/photo.png" size="xl" />
						<p class="text-lg">
							Du plus lointain dont je puisse me souvenir, j'ai toujours grandi en étant entouré
							d'ordinateurs. Mon père travaillant dans l'informatique, j'ai toujours interagi de
							près ou de loin avec des technologies qui me dépassaient étant enfant.
							<br /><br /> De ce fait, il a fini par me transmettre sa passion pour ce domaine.
							C'est pourquoi <strong>j'ai rejoint la web@cadémie</strong>. Cette formation
							représentait une <strong>porte d'accès</strong> vers un monde que je convoitais depuis
							mon plus jeune âge. J'ai décidé de <strong>commencer par le développement web</strong>
							qui est assez attirant de par son aspect visuel. Pouvoir observer rapidement
							l'évolution de mes créations me plaisait énormément. <br />Mais cela n'est qu'une
							étape selon moi. Grâce à mes deux ans au sein de la web@cadémie, j'ai pu découvrir la
							création de sites web et m'amuser grâce à cet univers, mais je veux en découvrir plus
							en explorant d'autres horizons. C'est pourquoi j'ai l'intention de
							<strong>changer de domaine</strong>
							pour <strong>découvrir d'autres technologies passionnantes</strong>
							et de sujets intéressants. <br />J'ai trouvé un moyen de
							<strong>travailler en m'amusant</strong> et je continuerai de suivre cette voie qui me
							plaît.
						</p>
					</Popover>
				{:else}
					<li>
						<Button
							class="mr-5 text-lg italic text-gray-300 hover:text-white"
							on:click={() => {
								const selectedSection = document.getElementById(section.toLowerCase());
								if (selectedSection) {
									selectedSection.scrollIntoView({ behavior: 'smooth' });
								}
							}}
						>
							{section}
						</Button>
					</li>
				{/if}
			{/each}
		</ul>
		<div class="flex items-center md:hidden">
			<Avatar id="avatar-menu" src="/images/burgermenu_icon.png" class="bg-black" />
			<Dropdown class="bg-black text-white" placement="bottom" triggeredBy="#avatar-menu">
				<DropdownItem id="about">À propos</DropdownItem>
				<Popover
					class="w-96 bg-gradient-to-r from-gray-900 to-black text-sm text-white"
					triggeredBy="#about"
					trigger="click"
					transition={fade}
					params={{ duration: 700 }}
				>
					<Avatar src="/images/photo.png" size="lg" />
					<p class="text-base">
						Du plus lointain dont je puisse me souvenir, j'ai toujours grandi en étant entouré
						d'ordinateurs. Mon père travaillant dans l'informatique, j'ai toujours interagi de près
						ou de loin avec des technologies qui me dépassaient étant enfant.
						<br /><br /> De ce fait, il a fini par me transmettre sa passion pour ce domaine. C'est
						pourquoi <strong>j'ai rejoint la web@cadémie</strong>. Cette formation représentait une
						<strong>porte d'accès</strong>
						vers un monde que je convoitais depuis mon plus jeune âge. J'ai décidé de
						<strong>commencer par le développement web</strong>
						qui est assez attirant de par son aspect visuel. Pouvoir observer rapidement l'évolution
						de mes créations me plaisait énormément. <br />Mais cela n'est qu'une étape selon moi.
						Grâce à mes deux ans au sein de la web@cadémie, j'ai pu découvrir la création de sites
						web et m'amuser grâce à cet univers, mais je veux en découvrir plus en explorant
						d'autres horizons. C'est pourquoi j'ai l'intention de
						<strong>changer de domaine</strong>
						pour <strong>découvrir d'autres technologies passionnantes</strong>
						et de sujets intéressants. <br />J'ai trouvé un moyen de
						<strong>travailler en m'amusant</strong> et je continuerai de suivre cette voie qui me plaît.
					</p>
				</Popover>
				<DropdownItem on:click={() => {
					const selectedSection = document.getElementById('compétences');
					if (selectedSection) {
						selectedSection.scrollIntoView({ behavior: 'smooth' });
					}
				}}>
					Compétences
				</DropdownItem>
				
				<DropdownItem on:click={() => {
					const selectedSection = document.getElementById('projets');
					if (selectedSection) {
						selectedSection.scrollIntoView({ behavior: 'smooth' });
					}
				}}>
					Projets
				</DropdownItem>
				
				<DropdownItem on:click={() => {
					const selectedSection = document.getElementById('contact');
					if (selectedSection) {
						selectedSection.scrollIntoView({ behavior: 'smooth' });
					}
				}}>
					Contact
				</DropdownItem>
			</Dropdown>
		</div>
	</div>
</nav>
