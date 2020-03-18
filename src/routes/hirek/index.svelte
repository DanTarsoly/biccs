<script context="module">
  import {getPage, getPosts} from '../../contentful-client';
  
	export async function preload() {
    const page = await getPage('news');
    const posts = await getPosts();
    if (!page) return this.error(404, 'Az oldal nem található!');
    if (!posts) return this.error(500, 'A hírek nem elérhetőek!');
    return {page, posts};
  }
</script>

<script>
  export let page;
  export let posts;
  // console.log(page);
  // console.log(posts);
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
    {#each posts as post}
    <li>
      <a rel='prefetch' href='hirek/{post.fields.slug}'>
        <h2>{post.fields.title}</h2>
        <h4>{post.fields.date}</h4>
      </a>
    </li>
    {:else}
      <h2>Még nincsenek hírek!</h2>
    {/each}
  </ul>
</div>