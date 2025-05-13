<script lang="ts">
  import { page } from "$app/state";
  import { Plus } from "@lucide/svelte";
  import { ChevronLeft } from "@lucide/svelte";
  import { deleteQuest } from "../../../stores/quests.svelte";

  const route = $derived(page.url.pathname);
  const goBack = () => window.history.back();
</script>

<!-- This is risky... I hope managing the header state here globally -->
<!-- with if statements will be OK and I won't regret it... -->
<!-- I hope it's not going to be too complex... if so, -->
<!-- future Daniel, refactor it ASAP, don't be lazy. -->
<header class="mb-8 flex items-center justify-between leading-none">
  <div class="flex items-center gap-4 text-h-1">
    {#if route !== "/"}
      <button onclick={goBack}>
        <ChevronLeft size="1em" />
      </button>
    {/if}
    <h1 class="font-semibold text-primary">KOVA</h1>
  </div>
  {#if page.route.id !== "/[quest]"}
    <a href="/edit">
      <Plus class="text-h-1 text-accent" size="1em" />
    </a>
  {:else}
    <div class="flex items-center gap-4 *:size-8">
      <a href="/edit/{page.params.quest}">
        <img src="/ri_edit-box-line.svg" alt="ammazzati" />
      </a>
      <button
        onclick={() => {
          const questId = page.params.quest;
          goBack();
          setTimeout(() => deleteQuest(Number(questId)), 50);
        }}
      >
        <img src="/gridicons_cross.svg" alt="ammazzati" />
      </button>
    </div>
  {/if}
</header>
