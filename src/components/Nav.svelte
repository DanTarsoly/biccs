<script>
	export let segment;
</script>

<style>
	nav {
		background: #b2bc76;
		border-bottom: 1px solid #8f9a4c;
		font-weight: 300;
		padding: 0 1em;
	}

	/* ul {
		margin: 0;
		padding: 0;
	} */

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: yellow;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a rel=prefetch aria-current='{segment === undefined ? "page" : undefined}' href='.'>🏠</a></li>
		<li><a rel=prefetch aria-current='{segment === "hirek" ? "page" : undefined}' href='hirek'>Hírek</a></li>
		<li><a rel=prefetch aria-current='{segment === "rolunk" ? "page" : undefined}' href='rolunk'>Rólunk</a></li>
		<li><a rel=prefetch aria-current='{segment === "kronika" ? "page" : undefined}' href='kronika'>Krónika</a></li>
		<li><a rel=prefetch aria-current='{segment === "kapcsolat" ? "page" : undefined}' href='kapcsolat'>Kapcsolat</a></li>
	</ul>
</nav>