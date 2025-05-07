<script lang="ts">
  import { page } from "$app/state";
  import { CircleAlert } from "@lucide/svelte";
  import { getQuest } from "../../stores/quests.svelte";

  const questId = page.params.quest;
  const quest = $derived(getQuest(Number(questId)));
</script>

<section
  style="--cyberpunk-height: 90%"
  class="cyberpunk relative bg-border p-4 leading-none after:bg-background"
>
  <div class="relative z-10 flex flex-col gap-4">
    <div class="flex items-center gap-6">
      <div
        class="relative after:absolute after:left-1/2 after:top-1/2 after:size-5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-accent after:blur-[10px]"
      >
        <CircleAlert class="fill-accent text-background" size={40} />
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <header class="text-h-4 font-medium text-secondary">
          {quest.title}
        </header>
        <div class="font-medium">
          {quest.description}{quest.description.endsWith(".") ? "" : "."}
        </div>
      </div>
    </div>

    <p class="leading-tight">{quest.text}</p>
  </div>
</section>

<style>
  section::after {
    position: absolute;
    clip-path: inherit;
    inset: 1.5px;
  }
</style>
