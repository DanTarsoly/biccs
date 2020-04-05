<script context="module">
  import {getStory} from '../../api/contentful-client';
  import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

	export async function preload({params}) {
    const story = await getStory(params.slug);
    if (!story) return this.error(404, 'A hír nem található!');
    story.html = documentToHtmlString(story.fields.content);
    return {story};
	}
</script>

<script>
  import Post from '../../components/Post.svelte';
	export let story;
  // console.log(story);
</script>

<svelte:head>
	<title>486 - {story.fields.title}</title>
</svelte:head>

<Post
    title={story.fields.title}
    intro={story.fields.intro}
    content={story.html}
    date={story.fields.date}
    author={story.fields.author}/>
