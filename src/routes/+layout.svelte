<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="flex min-h-screen w-full flex-col overflow-x-hidden">
	<NavBar />
	<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
</div>
