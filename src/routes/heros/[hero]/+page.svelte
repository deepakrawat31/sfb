<script>
   import { page } from "$app/stores";
   import { onMount } from "svelte";
   import Card from "../../../lib/components/Card.svelte";

   export let data;

   let heros = data.heros;

   $: path = $page.url.pathname.slice($page.url.pathname.lastIndexOf("/") + 1);
</script>

<svelte:head>
   <title>{path}</title>
</svelte:head>

<main
   class="min-h-[calc(100vh-60px)] bg-violet-800 text-white isolate flex items-center justify-center"
>
   {#each heros as hero}
      {#if hero.id === parseInt(path)}
         <Card {hero} />
      {/if}
   {/each}
   <img
      src="/swirl.svg"
      alt="swirl"
      class="fixed inset-0 -z-10 w-full h-full object-cover"
   />
</main>
