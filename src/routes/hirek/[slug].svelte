<script context="module">
  import {getPost} from '../../contentful-client';

	export async function preload({params}) {
    const post = await getPost(params.slug);
    if (post) {
      return {post};
    } else {
      this.error(404, 'A hír nem található!');
    }
	}
</script>

<script>
	export let post;
  console.log(post);
</script>

<svelte:head>
	<title>486 - {post.fields.title}</title>
</svelte:head>

<div>
  <h1>{post.fields.title}</h1>
  <h3>{post.fields.date}</h3>
</div>
