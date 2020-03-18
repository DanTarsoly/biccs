<script context="module">
  import {getPage} from '../contentful-client';
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
  // console.log(page.fields.media);
</script>

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
	{#if page.fields.intro}
		<h3>{page.fields.intro}</h3>
	{/if}
	{#if page.html}
		<div class="content">{@html page.html}</div>
	{/if}
</div>