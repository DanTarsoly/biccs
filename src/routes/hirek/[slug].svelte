<script context="module">
  import {getPost} from '../../contentful-client';
  import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

	export async function preload({params}) {
    const post = await getPost(params.slug);
    if (!post) return this.error(404, 'A hír nem található!');
    post.html = documentToHtmlString(post.fields.content);
    return {post};
	}
</script>

<script>
	export let post;
  // console.log(post);
</script>

<svelte:head>
	<title>486 - {post.fields.title}</title>
</svelte:head>

<div>
  <h2>{post.fields.title}</h2>
  <h4>{post.fields.intro}</h4>
  <div class="content">{@html post.html}</div>
	<u>{post.fields.date}</u><br>
	<i>{post.fields.author}</i>
</div>
