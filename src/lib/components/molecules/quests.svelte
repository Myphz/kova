<script lang="ts">
  import Quest from "@atoms/quest.svelte";
  import { quests } from "../../../stores/quests.svelte";
  import EmptyState from "@atoms/empty-state.svelte";

  const notDoneQuests = $derived(
    Object.values(quests)
      .filter((quest) => !quest.done)
      .toSorted((q1, q2) => q2.id - q1.id)
  );

  const doneQuests = $derived(
    Object.values(quests)
      .filter((quest) => quest.done)
      .toSorted((q1, q2) => q2.id - q1.id)
  );
</script>

{#if doneQuests.length || notDoneQuests.length}
  <div class="flex flex-col gap-4">
    <section class="flex flex-col gap-4">
      {#each notDoneQuests as quest (quest.id)}
        <Quest {...quest} />
      {/each}
    </section>

    {#if doneQuests.length}
      {#if notDoneQuests.length}
        <hr class="h-0.5 bg-border text-border" />
      {/if}
      <section class="flex flex-col gap-4">
        {#each doneQuests as quest (quest.id)}
          <Quest {...quest} />
        {/each}
      </section>
    {/if}
  </div>
{:else}
  <EmptyState />
{/if}
