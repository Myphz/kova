<script lang="ts">
  import { onMount } from "svelte";
  import "../style/app.css";
  import "../style/fonts.css";
  import { loadQuests } from "../stores/quests.svelte";
  import { Plus } from "@lucide/svelte";

  onMount(() => {
    loadQuests();
  });
</script>

<main>
  <div class="flex items-center justify-between">
    <h1 class="text-h-1 text-primary">KOVA</h1>
    <a href="/edit">
      <Plus class="text-h-1 text-accent" size="1em" />
    </a>
  </div>
  <slot />
</main>
