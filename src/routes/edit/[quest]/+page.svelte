<script lang="ts">
  import EditForm from "@organisms/edit-form.svelte";
  import { page } from "$app/state";

  const questId = page.params.quest;
</script>

<EditForm questId={Number(questId)} />
