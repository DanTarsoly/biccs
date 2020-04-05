<script context="module">
  import {getPage, getPosts} from '../../api/contentful-client';
  
	export async function preload({path}) {
    const page = await getPage('news');
    const posts = await getPosts();
    if (!page) return this.error(404, 'Az oldal nem található!');
    if (!posts) return this.error(500, 'A hírek nem elérhetőek!');
    return {path, page, posts};
  }
</script>

<script>
  import PostSummary from '../../components/PostSummary.svelte';
  export let path;
  export let page;
  export let posts;
  // console.log(page);
  // console.log(posts);
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
    {#each posts as post}
    <li>
      <PostSummary
          path={path}
          slug={post.fields.slug} 
          title={post.fields.title} 
          intro={post.fields.intro}
          date={post.fields.date}/>
    </li>
    {:else}
      <h5>Még nincsenek hírek!</h5>
    {/each}
  </ul>
</div>