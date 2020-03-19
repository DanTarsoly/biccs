<script context="module">
  import {getPage, getStories} from '../../api/contentful-client';
  
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
  <h2>{page.fields.title}</h2>
	{#if page.fields.intro}
		<h4>{page.fields.intro}</h4>
	{/if}
  <ul>
    {#each stories as story}
    <li>
      <a rel='prefetch' href='kronika/{story.fields.slug}'>
        <h5><u>{story.fields.title}</u></h5>
        <p>{story.fields.intro}</p>
      </a>
    </li>
    {:else}
      <h5>Még nincsenek beszámolók!</h5>
    {/each}
  </ul>
</div>