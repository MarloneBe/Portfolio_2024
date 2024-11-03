<script lang="ts">
	import { Carousel, Button } from 'flowbite-svelte';
    import { CaretRightOutline, CaretLeftOutline } from 'flowbite-svelte-icons';
	import EmblaCarousel from 'embla-carousel';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;
	let embla: any;
	let emblaNode: any;
	let projectImages;
	const projects: any = data.projects;
	let activeIndex = writable(0);

	onMount(() => {
		emblaNode = document.querySelector('.embla');
		if (emblaNode) {
			embla = EmblaCarousel(emblaNode, {
				loop: true,
				align: 'start',
			});
			embla.on('select', () => {
				activeIndex.set(embla.selectedScrollSnap());
			});
		} else {
			console.error('Embla carousel not found');
		}
	});

	function scrollPrev() {
		if (embla) embla.scrollPrev();
	}

	function scrollNext() {
		if (embla) embla.scrollNext();
	}
</script>

<section id="projets" class="relative bg-gray-900 py-20 text-gray-200">
	<div class="container mx-auto">
		<h2 class="mb-8 text-center text-3xl font-bold text-white">Projets</h2>

		<div class="embla relative overflow-hidden">
			<div class="embla__container flex">
				{#each projects as project, index (index)}
					<div class="flex w-full min-w-full justify-center">
						<div class="w-full h-full max-w-2xl bg-gray-800 p-6 shadow-md md:rounded-lg">
							<div class="hidden">
								{(projectImages = [project.image, project.image2, project.image3].filter(Boolean))}
							</div>
							<h3 class="mb-2 text-2xl font-bold text-white">{project.title}</h3>
							<Carousel
								images={projectImages.map((src) => ({ src }))}
								let:Indicators
								let:Controls
								class="h-64"
							>
								<Controls let:changeSlide>
									<Button
										pill
										class="p-2 absolute top-1/2 -translate-y-1/2 start-4 bg-gray-500"
										on:click={() => changeSlide(false)}
									>
										<CaretLeftOutline />
									</Button>

									<Button
										pill
										class="p-2 absolute top-1/2 -translate-y-1/2 end-4 bg-gray-500"
										on:click={() => changeSlide(true)}
									>
										<CaretRightOutline />
									</Button>
								</Controls>
								<Indicators />
							</Carousel>
							<p class="mb-4 text-gray-300">{project.description}</p>
							<a href={project.link} target="_blank" class="text-gray-300 hover:text-white">
								Voir le projet sur github
							</a>
							
							<div class="mt-4 flex justify-center space-x-2">
								{#each projects as proj, i}
									<button
										class="w-4 h-4 rounded-full focus:outline-none
										{($activeIndex === i ? 'bg-white' : 'bg-gray-500')}"
										on:click={() => embla.scrollTo(i)}
									></button>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>

			<button
				class="absolute left-0 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-gray-700 px-3 py-3 text-4xl text-white hover:bg-gray-900 focus:outline-none md:block"
				on:click={scrollPrev}
			>
				&#9666;
			</button>
			<button
				class="absolute right-0 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-gray-700 px-3 py-3 text-4xl text-white hover:bg-gray-900 focus:outline-none md:block"
				on:click={scrollNext}
			>
				&#9656;
			</button>
		</div>
	</div>
</section>