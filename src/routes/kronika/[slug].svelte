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

<svelte:head>
	<title>486 - {story.fields.title}</title>
</svelte:head>

<div>
  <h2>{story.fields.title}</h2>
  <h4>{story.fields.intro}</h4>
  <div class="content">{@html story.html}</div>
	<u>{story.fields.date}</u><br>
	<i>{story.fields.author}</i>
</div>
