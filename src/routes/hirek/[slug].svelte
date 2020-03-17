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
  console.log(post);
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  :global(.content) {
		display: block;
		word-wrap: normal;
	}
	.content :global(p) {
	}
  /* .content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}
	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}
	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}
	.content :global(ul) {
		line-height: 1.5;
	}
	.content :global(li) {
		margin: 0 0 0.5em 0;
	} */
</style>

<svelte:head>
	<title>486 - {post.fields.title}</title>
</svelte:head>

<div>
  <h1>{post.fields.title}</h1>
  <h3>{post.fields.date}</h3>
  <div class="content">{@html post.html}</div>
</div>
