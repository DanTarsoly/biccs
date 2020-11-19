<script>
export let url;
export let title;
export let intro;
export let date;
</script>

<style>
  p {
    margin: 0;
  }

  .link-container {
    margin: 0.5em 0;
    padding: 0.8em 1em;
    background: #b2bc76;
    border: 1px solid #8f9a4c;
    border-radius: 4px;
  }
</style>

<a rel="noopener noreferrer" target="blank" href="{url}">
  <div class="link-container">
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