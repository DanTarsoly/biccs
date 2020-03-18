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

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
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
	{#if page.fields.intro}
		<h3>{page.fields.intro}</h3>
	{/if}
	{#if page.html}
		<div class="content">{@html page.html}</div>
	{/if}
</div>