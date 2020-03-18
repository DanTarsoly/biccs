<script context="module">
  import {getPage} from '../contentful-client';
  import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

	export async function preload() {
    const page = await getPage('contact');
    if (!page) return this.error(404, 'Az oldal nem található!');
    page.html = documentToHtmlString(page.fields.content);
    return {page};
	}
</script>

<script>
	export let page;
  // console.log(page);
  // console.log(page.fields.media);
</script>

<svelte:head>
	<title>486 - {page.fields.title}</title>
</svelte:head>

<div>
	<h2>{page.fields.title}</h2>
	{#if page.fields.intro}
		<h4>{page.fields.intro}</h4>
	{/if}
	{#if page.html}
		<div class="content">{@html page.html}</div>
	{/if}
</div>