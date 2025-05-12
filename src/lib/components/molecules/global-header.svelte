<script lang="ts">
  import { page } from "$app/state";
  import { Plus } from "@lucide/svelte";
  import { ChevronLeft } from "@lucide/svelte";

  const route = $derived(page.url.pathname);
  const goBack = () => window.history.back();
</script>

<header class="mb-8 flex items-center justify-between leading-none">
  <div class="flex items-center gap-4 text-h-1">
    {#if route !== "/"}
      <button onclick={goBack}>
        <ChevronLeft size="1em" />
      </button>
    {/if}
    <h1 class="font-semibold text-primary">KOVA</h1>
  </div>
  <a href="/edit">
    <Plus class="text-h-1 text-accent" size="1em" />
  </a>
</header>
