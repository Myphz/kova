<script lang="ts">
  import { CircleAlert } from "@lucide/svelte";

  type Props = {
    title: string;
    description: string;
  };

  const { title, description }: Props = $props();
</script>

<article
  class="cyberpunk relative flex w-full flex-col gap-2 bg-border p-4 leading-none after:bg-background"
>
  <div class="flex items-center gap-4">
    <div
      class="relative after:absolute after:left-1/2 after:top-1/2 after:size-5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-accent after:blur-[10px]"
    >
      <CircleAlert class="fill-accent text-background" size={40} />
    </div>
    <div class="flex flex-1 flex-col gap-2">
      <header class="text-h-4 font-medium text-secondary">
        {title}
      </header>
      <div class="font-medium">
        {description}{description.endsWith(".") ? "" : "."}
      </div>
    </div>
  </div>
</article>

<style>
  article::after {
    content: "";
    position: absolute;
    clip-path: inherit;
    inset: 1.5px;
  }
</style>
