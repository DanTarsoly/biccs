<script context="module">
  import {getPage, getStories} from '../../api/contentful-client';
  
	export async function preload({path}) {
    const page = await getPage('chronicle');
    const stories = await getStories();
    if (!page) return this.error(404, 'Az oldal nem található!');
    if (!stories) return this.error(500, 'A beszámolók nem elérhetőek!');
    return {path , page, stories};
  }
</script>

<script>
  import PostSummary from '../../components/PostSummary.svelte';
  export let path;
  export let page;
  export let stories;
  // console.log(page);
  // console.log(stories);
</script>

<style>
</style>

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
      <PostSummary 
          path={path}
          slug={story.fields.slug} 
          title={story.fields.title} 
          intro={story.fields.intro}
          date={story.fields.date}/>
    </li>
    {:else}
      <h5>Még nincsenek beszámolók!</h5>
    {/each}
  </ul>
</div>