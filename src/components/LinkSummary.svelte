<script>
export let url;
export let text;
export let img;
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

  .date-container {
    text-align: end;
  }

  .img-container {
    margin: auto;
    padding: 4% 4% 0 4%;
    /* max-width: 400px; */
  }
</style>

<a rel="noopener noreferrer" target="blank" href={url}>
  <div class="link-container">
    {#if text}
      <h5>{text}</h5>
    {/if}
    {#if img}
      <div class="img-container">
        <img src={img} alt="Bejegyzéshez tartozó kép"/>
      </div>
    {/if}
    {#if date}
      <div class="date-container">
        <i>{date.toLocaleString('hu-HU')}</i>
      </div>
    {/if}
  </div>
</a>