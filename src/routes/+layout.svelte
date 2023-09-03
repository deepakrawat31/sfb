<script>
   import "../app.css";
   import { page } from "$app/stores";
   import { Search } from "lucide-svelte";

   $: path = $page.url.pathname.slice($page.url.pathname.lastIndexOf("/") + 1);
</script>

<header
   class="flex items-center justify-between gap-4 text-lg px-8 py-4 bg-violet-800 text-white uppercase font-semibold tracking-wide sticky top-0 z-20 ring-2 ring-slate-800/60"
>
   <a href="/">s.f.b.</a>
   <span class="flex items-center gap-16">
      <a href="/heros">heros</a>
      {#if path !== ""}
         <button><Search /></button>
      {/if}
   </span>
</header>
<slot />
