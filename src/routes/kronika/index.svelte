<script context="module">
  import {getPage, getStories} from '../../contentful-client';
  
	export async function preload() {
    const page = await getPage('chronicle');
    const stories = await getStories();
    if (!page) return this.error(404, 'Az oldal nem található!');
    if (!stories) return this.error(500, 'A beszámolók nem elérhetőek!');
    return {page, stories};
  }
</script>

<script>
  export let page;
  export let stories;
  // console.log(page);
  // console.log(stories);
</script>

<svelte:head>
	<title>486 - {page.fields.title}</title>
</svelte:head>

<div>
  <h1>{page.fields.title}</h1>
	{#if page.fields.intro}
		<h3>{page.fields.intro}</h3>
	{/if}
  <ul>
    {#each stories as story}
    <li>
      <a rel='prefetch' href='kronika/{story.fields.slug}'>
        <h2>{story.fields.title}</h2>
        <h4>{story.fields.date}</h4>
      </a>
    </li>
    {:else}
      <h2>Még nincsenek beszámolók!</h2>
    {/each}
  </ul>
</div>