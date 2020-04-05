<script>
export let title;
export let intro;
export let content;
export let date;
export let author;
</script>

<style>
  .post-container {
  }
</style>

<div class="post-container">
  <h2>{title}</h2>
  <h4>{intro}</h4>
  <div class="content">{@html content}</div>
	<u>{date}</u><br>
	<i>{author}</i>
</div>