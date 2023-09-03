<script>
   import SmallCard from "../../lib/components/SmallCard.svelte";

   export let data;
   let heros = data.heros;
</script>

<svelte:head>
   <title>Heros</title>
</svelte:head>

<main class="min-h-screen bg-violet-800 text-white isolate p-6">
   <section class="flex flex-wrap items-center justify-center gap-6">
      {#each heros as hero, i}
         <SmallCard {hero} index={i} />
      {/each}
   </section>
   <img
      src="/swirl.svg"
      alt="swirl"
      class="fixed inset-0 -z-10 w-full h-full object-cover"
   />
</main>
