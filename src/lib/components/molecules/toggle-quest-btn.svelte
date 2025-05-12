<script lang="ts">
  import Button from "@atoms/button.svelte";
  import {
    getQuest,
    saveQuest,
    type Quest
  } from "../../../stores/quests.svelte";

  type Props = {
    questId: Quest["id"];
  };

  const { questId }: Props = $props();
  const quest = getQuest(questId);

  const toggleQuest = () => {
    quest.done = !quest.done;
    saveQuest(quest);
  };
</script>

<Button onclick={toggleQuest}>{quest.done ? "undo" : "complete"}</Button>
