<script>
   export let hero;

   const turbo_wr = Math.round((hero.turbo_wins / hero.turbo_picks) * 100);
   const pro_wr = Math.round((hero.pro_win / hero.pro_pick) * 100);

   console.log(pro_wr);
</script>

<div class="max-w-xl w-full flex flex-col gap-4 p-4">
   <div
      class=" flex items-center justify-between gap-2 p-4 bg-slate-100/10 backdrop-blur rounded-md"
   >
      <span class="flex items-center justify-between gap-2">
         <span>
            <img
               src={`https://api.opendota.com${hero.icon}`}
               alt={`${hero.localized_name}`}
            />
         </span>
         <span class="text-base md:text-xl font-semibold uppercase"
            >{hero.localized_name}</span
         >
      </span>
      <span
         class="flex flex-col md:flex-row items-center gap-2 text-xs md:text-sm uppercase font-semibold"
      >
         <span>
            {#if hero.primary_attr === "agi"}
               agility
            {:else if hero.primary_attr === "str"}
               strength
            {:else if hero.primary_attr === "int"}
               intelligence
            {:else}
               universal
            {/if}
         </span>
         <span class="aspect-square p-1 rounded-full bg-emerald-400" />
         <span>{hero.attack_type}</span>
      </span>
   </div>
   <div class="flex md:flex-row flex-col items-stretch gap-4">
      <div
         class="flex-1 flex flex-col gap-2 items-stretch justify-between p-4 bg-slate-100/10 backdrop-blur rounded-md uppercase font-semibold"
      >
         <span class="flex items-start justify-between">
            <span>agi</span>
            <span class="flex flex-col items-end">
               <span>
                  {hero.base_agi}
               </span>
               <span class="text-emerald-400 text-sm font-normal"
                  >+{hero.agi_gain}</span
               >
            </span>
         </span>
         <span class="flex items-start justify-between">
            <span>str</span>
            <span class="flex flex-col items-end">
               <span>
                  {hero.base_str}
               </span>
               <span class="text-emerald-400 text-sm font-normal"
                  >+{hero.str_gain}</span
               >
            </span>
         </span>
         <span class="flex items-start justify-between">
            <span>int</span>
            <span class="flex flex-col items-end">
               <span>
                  {hero.base_int}
               </span>
               <span class="text-emerald-400 text-sm font-normal"
                  >+{hero.int_gain}</span
               >
            </span>
         </span>
      </div>
      <div
         class="flex-1 flex flex-col gap-1 items-stretch justify-between p-4 bg-slate-100/10 backdrop-blur rounded-md uppercase font-semibold"
      >
         <span class="flex items-start justify-between">
            <span>attk dmg</span>
            <span>{hero.base_attack_min} - {hero.base_attack_max}</span>
         </span>
         <span class="flex items-start justify-between">
            <span>attk range</span>
            <span>{hero.attack_range}</span>
         </span>
         <span class="flex items-start justify-between">
            <span>attk rate</span>
            <span>{hero.attack_rate}</span>
         </span>
         <span class="flex items-start justify-between">
            <span>armor</span>
            <span>{hero.base_armor}</span>
         </span>
         <span class="flex items-start justify-between">
            <span>movement speed</span>
            <span>{hero.move_speed}</span>
         </span>
      </div>
   </div>
   <div
      class="flex flex-col gap-4 items-stretch justify-between p-4 bg-slate-100/10 backdrop-blur rounded-md uppercase font-bold"
   >
      <span class="text-xl text-emerald-400">winrate</span>
      <span
         class="flex flex-col md:flex-row gap-1 md:gap-4 items-stretch justify-between"
      >
         <span class="flex items-stretch justify-between flex-1">
            <span>turbo</span>
            <span class="text-emerald-400">{turbo_wr} %</span>
         </span>
         <span class="flex items-stretch justify-between flex-1">
            <span>pro</span>
            <span class="text-emerald-400">{pro_wr} %</span>
         </span>
      </span>
   </div>
</div>
