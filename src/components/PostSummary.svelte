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

<a  rel=prefetch href="{path}/{slug}">
  <div class="post-container">
    <h5><u>{title}</u></h5>
    <p>{intro}</p>
    <i>{date}</i>
  </div>
</a>