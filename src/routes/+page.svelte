<script lang="ts">
	import ProjectSection from './components/projectSection.svelte';
	import WelcomeSection from './components/welcomeSection.svelte';
	import SkillSection from './components/skillSection.svelte';
	import NavbarSection from './components/navbarSection.svelte';
	import ContactSection from './components/contactSection.svelte';
	import FooterSection from './components/footerSection.svelte';
	import { fade } from 'svelte/transition';

	export let data;

	let showWelcome = false;
	let showSkills = false;
	let showProjects = false;
	let showContact = false;
	let showFooter = false;

	setTimeout(() => {
		showWelcome = true;
		setTimeout(() => {
			showSkills = true;
			setTimeout(() => {
				showProjects = true;
				setTimeout(() => {
					showContact = true;
					setTimeout(() => {
						showFooter = true;
					}, 500);
				}, 500);
			}, 500);
		}, 500);
	}, 500);
</script>

<div class="min-h-screen bg-primaryBlack text-gray-200">
	<NavbarSection />

	{#if showWelcome}
		<div in:fade={{ duration: 500 }}>
			<WelcomeSection />
		</div>
	{/if}

	{#if showSkills}
		<div in:fade={{ duration: 500 }}>
			<SkillSection {data}/>
		</div>
	{/if}

	{#if showProjects}
		<div in:fade={{ duration: 500 }}>
			<ProjectSection {data} />
		</div>
	{/if}

	{#if showContact}
		<div in:fade={{ duration: 500 }}>
			<ContactSection />
		</div>
	{/if}
	{#if showFooter}
		<div in:fade={{ duration: 500 }}>
			<FooterSection />
		</div>
	{/if}
</div>
