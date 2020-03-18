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
  <h2>{page.fields.title}</h2>
	{#if page.fields.intro}
		<h4>{page.fields.intro}</h4>
	{/if}
  <ul>
    {#each posts as post}
    <li>
      <a rel='prefetch' href='hirek/{post.fields.slug}'>
        <h5><u>{post.fields.title}</u></h5>
        <p>{post.fields.intro}</p>
      </a>
    </li>
    {:else}
      <h5>Még nincsenek hírek!</h5>
    {/each}
  </ul>
</div>