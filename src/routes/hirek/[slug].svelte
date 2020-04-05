<script context="module">
  import {getPost} from '../../api/contentful-client';
  import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

	export async function preload({params}) {
    const post = await getPost(params.slug);
    if (!post) return this.error(404, 'A hír nem található!');
    post.html = documentToHtmlString(post.fields.content);
    return {post};
	}
</script>

<script>
  import Post from '../../components/Post.svelte';
	export let post;
  // console.log(post);
</script>

<svelte:head>
	<title>486 - {post.fields.title}</title>
</svelte:head>

<Post
    title={post.fields.title}
    intro={post.fields.intro}
    content={post.html}
    date={post.fields.date}
    author={post.fields.author}/>
