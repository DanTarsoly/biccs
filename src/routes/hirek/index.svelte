<script context="module">
  import {getPage} from '../../api/contentful-client';
  import {pageId, accessToken} from '../../api/facebook-client';
  
	export async function preload() {
    const page = await getPage('news');
    if (!page) return this.error(404, 'Az oldal nem található!');
    const res = await this.fetch(`https://graph.facebook.com/${pageId}/posts?access_token=${accessToken}`);
    if (!res.ok) return this.error(500, 'A hírek nem elérhetőek!');
    const json =  await res.json();
    const posts = json.data;
    for (const post of posts) {
      const res = await this.fetch(`https://graph.facebook.com/${post.id}/attachments?access_token=${accessToken}`)
      const json = await res.json();
      post.img = json.data[0].media.image.src;
      post.asd = 'asd';
    }
    return {page, posts};
  }
</script>

<script>
  import LinkSummary from '../../components/LinkSummary.svelte';
  export let page;
  export let posts;
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
      <LinkSummary
          url={`https://www.facebook.com/${post.id}`}
          text={post.message} 
          img={post.img}
          date={new Date(post.created_time)}/>
    </li>
    {:else}
      <h5>Még nincsenek hírek!</h5>
    {/each}
  </ul>
</div>