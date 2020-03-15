<script context="module">
  import {getPosts} from '../../contentful-client';
  
	export async function preload() {
    const posts = await getPosts();
    if (posts) {
      return {posts};
    } else {
      this.error(500, 'Hálózati hiba');
    }
  }
</script>

<script>
  export let posts;
  console.log(posts);
</script>

<svelte:head>
	<title>486 - Hírek</title>
</svelte:head>

<h1>Legújabb híreink</h1>

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