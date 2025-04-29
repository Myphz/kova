<script lang="ts">
  import Quest from "@atoms/quest.svelte";
  import { quests } from "../../../stores/quests.svelte";
</script>

<section class="flex flex-col gap-1">
  {#each Object.values(quests).sort((q1, q2) => q2.id - q1.id) as quest (quest.title)}
    <Quest {...quest} />
  {/each}
</section>
