<script>
export let path;
export let slug;
export let title;
export let intro;
export let date;
</script>

<style>
  p {
    margin: 0;
  }

  .post-container {
    margin: 0.5em 0;
    padding: 0.8em 1em;
    background: #b2bc76;
    border: 1px solid #8f9a4c;
    border-radius: 4px;
  }
</style>

<a rel=prefetch href="{path}/{slug}">
  <div class="post-container">
    {#if title}
      <h5>{title}</h5>
    {/if}
    {#if intro}
      <p>{intro}</p>
    {/if}
    {#if date}
      <i>{date.toLocaleString('hu-HU')}</i>
    {/if}
  </div>
</a>