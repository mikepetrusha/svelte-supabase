<script lang="ts">
	import Header from '../components/Header.svelte';
	import "../app.css"
	import { invalidate } from '$app/navigation';
	import {onMount} from 'svelte';

	export let data

	let  { supabase, session } = data;
	$: ({supabase, session} = data);


	onMount(() => {
		const {data} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

</div>