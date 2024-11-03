<script lang="ts">
	import { inview } from 'svelte-inview';

	export let data;
	console.log("data == ", data)
	const skills: any = data.skills;

	let visible = false;

	function handleInView() {
		visible = true;
	}
</script>

<section
	id="compétences"
	class="bg-gray-900 py-20 text-gray-200"
	use:inview
	on:inview_change={handleInView}
>
	<div class="container mx-auto">
		<h2 class="mb-8 text-center text-3xl font-bold text-white">Compétences</h2>
		<div
			class="grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
		>
		{#each skills as skill}
			<div
				class={`flex transform justify-center transition-transform duration-700 ease-out ${visible ? 'translate-x-0' : 'translate-x-full'}`}
			>
				<img src={skill.path} alt="Logo {skill.name}" class="h-20 w-20 object-contain" />
			</div>
			{/each}
		</div>
	</div>
</section>
