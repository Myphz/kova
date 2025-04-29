<script lang="ts">
  import Form from "@atoms/form.svelte";
  import Input from "@atoms/input.svelte";
  import Textarea from "@atoms/textarea.svelte";
  import { z } from "zod";

  const schema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty()
  });

  const onSubmit = ({ description, title }: z.infer<typeof schema>) => {
    console.log({ description, title });
  };
</script>

<Form {schema} onsubmit={onSubmit}>
  <Input label="Title" name="title" />
  <Textarea label="Description" name="description" />

  <button type="submit">we</button>
</Form>
