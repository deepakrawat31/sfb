<script>
   import { fade } from "svelte/transition";
   import SmallCard from "../lib/components/SmallCard.svelte";
   import { quadInOut } from "svelte/easing";
   import { onMount } from "svelte";

   export let data;

   const heros = data.heros;

   let animate = false;
   onMount(() => {
      animate = true;
   });

   let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<svelte:head>
   <title>Stats For Bobos</title>
</svelte:head>

<main
   class="bg-violet-800 text-white min-h-[calc(100vh-60px)] flex flex-col items-start justify-start gap-8 isolate p-4 md:p-12"
>
   <div
      class="tracking-wider space-y-4 max-w-lg flex flex-col items-start justify-start"
   >
      <h1 class="text-6xl md:text-8xl font-extrabold">S.F.B.</h1>
      <p class=" font-extralight">
         abbreviated from "Stats For Bobos", is an informative website for DOTA2
         Hero's stats.
      </p>
   </div>
   <div
      class="flex-1 flex flex-wrap items-center md:items-end justify-center md:justify-end gap-4 w-full"
   >
      {#each { length: 4 } as _, i}
         <SmallCard
            hero={heros[Math.floor(Math.random() * heros.length)]}
            index={i}
         />
      {/each}
      {#if animate}
         <a
            href="/heros"
            class={`block bg-slate-100/10 hover:bg-slate-100/5 text-sm text-center text-emerald-200 uppercase backdrop-blur rounded-md p-4 w-[260px] md:w-fit md:max-h-[220px] h-full tracking-wider ${
               screenWidth > 768 ? "ver" : ""
            }`}
            in:fade={{
               duration: 600,
               delay: 1000,
               easing: quadInOut,
            }}>Check all heros</a
         >
      {/if}
   </div>
   <img
      src="/swirl.svg"
      alt="swirl"
      class="fixed inset-0 -z-10 w-full h-full object-cover"
   />
</main>

<style>
   .ver {
      writing-mode: vertical-rl;
   }
</style>
