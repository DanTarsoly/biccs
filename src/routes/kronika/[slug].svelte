<script context="module">
  import {getStory} from '../../contentful-client';
  import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

	export async function preload({params}) {
    const story = await getStory(params.slug);
    if (!story) return this.error(404, 'A hír nem található!');
    story.html = documentToHtmlString(story.fields.content);
    return {story};
	}
</script>

<script>
	export let story;
  // console.log(story);
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
  .content :global(h2) {
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
	}
</style>

<svelte:head>
	<title>486 - {story.fields.title}</title>
</svelte:head>

<div>
  <h1>{story.fields.title}</h1>
  <h3>{story.fields.intro}</h3>
  <div class="content">{@html story.html}</div>
	<p>{story.fields.date}</p>
	<p>{story.fields.author}</p>
</div>
