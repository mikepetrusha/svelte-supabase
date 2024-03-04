<script>
	export let data;
</script>

<svelte:head>
	<title>User Management</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="row flex-center flex">
	<div>
		Home page Content
	</div>

	<section>
	<ui>
		{#each data.countries as country}
			<li>{country.name}</li>
		{/each}
	</ui>
</section>

</div>


