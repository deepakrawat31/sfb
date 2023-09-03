<script>
   import { onMount } from "svelte";
   import { quadInOut } from "svelte/easing";
   import { fade } from "svelte/transition";

   export let hero;
   export let index;

   let animate = false;

   onMount(() => {
      animate = true;
   });
</script>

{#if animate}
   <a
      href={`/heros/${hero.id}`}
      class="p-4 max-w-[260px] md:max-w-[220px] w-full aspect-square bg-slate-100/10 hover:bg-slate-100/5 backdrop-blur rounded-md tracking-wide flex flex-col gap-4 justify-between"
      in:fade={{
         duration: 600,
         delay: 250 * index,
         easing: quadInOut,
      }}
   >
      <span class="flex items-center justify-between gap-4">
         <span class="font-bold">{hero.localized_name}</span>
         <span>
            <img
               src={`https://api.opendota.com${hero.icon}`}
               alt={`${hero.localized_name}`}
            />
         </span>
      </span>
      <span class="flex flex-wrap gap-2">
         {#each hero.roles as role}
            <small class="text-sm text-emerald-200">{role}</small>
         {/each}
      </span>
   </a>
{/if}
