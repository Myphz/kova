<script lang="ts">
  import Button from "@atoms/button.svelte";
  import Form from "@atoms/form.svelte";
  import Input from "@atoms/input.svelte";
  import Textarea from "@atoms/textarea.svelte";
  import { z } from "zod";
  import { goto } from "$app/navigation";
  import {
    getQuest,
    saveQuest,
    type Quest
  } from "../../../stores/quests.svelte";

  type Props = { questId?: Quest["id"] };

  const { questId }: Props = $props();

  const editingQuest = $derived.by(() => {
    if (!questId) return {};
    return getQuest(questId);
  });

  const schema = z.object({
    title: z.string().nonempty(),
    text: z.string().nonempty()
  });

  const onSubmit = async (quest: z.infer<typeof schema>) => {
    await saveQuest({ ...quest, description: "" });
    goto("/");
  };
</script>

<Form
  {schema}
  onsubmit={onSubmit}
  defaultValues={editingQuest}
  class="flex flex-col gap-4"
>
  <Input label="Title" name="title" />
  <Textarea label="Text" name="text" />
  <Button class="mt-4" type="submit">CREATE QUEST</Button>
</Form>
