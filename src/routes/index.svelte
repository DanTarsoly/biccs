<script context="module">
  import {getPage} from '../api/contentful-client';
  import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

	export async function preload() {
    const page = await getPage('index');
    if (!page) return this.error(404, 'Az oldal nem található!');
    page.html = documentToHtmlString(page.fields.content);
    return {page};
	}
</script>

<script>
	export let page;
  // console.log(page);
  console.log(page.fields.media);
</script>

<style>
	strong {
		font-weight: normal;
		font-size: 2em;
		text-transform: uppercase;
	}

	.content {
		text-align: center;
	}
</style>

<svelte:head>
	<title>{page.fields.title}</title>
</svelte:head>

<!-- <h1>486 Bátorkeszi István Cserkészcsapat</h1>

<figure>
	<img alt='Fejléc' src='header.jpg'>
	<figcaption>JÓ MUNKÁT!</figcaption>
</figure>

<p><strong>Az oldal jelenleg fejlesztés alatt áll.</strong></p> -->


<div>
	<h1>{page.fields.title}</h1>
	<div class="content">
		{#if page.fields.media}
			<img src={'https:' + page.fields.media.fields.file.url} alt="page.fields.media.fields.file.description">
		{/if}
		{#if page.fields.intro}
			<strong>{page.fields.intro}</strong>
		{/if}
		{#if page.html}
			<div class="content">{@html page.html}</div>
		{/if}
	</div>
</div>