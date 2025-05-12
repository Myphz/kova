<script lang="ts">
  import { CircleAlert, CircleCheck } from "@lucide/svelte";
  import type { Quest } from "../../../stores/quests.svelte";
  import { twMerge } from "tailwind-merge";

  const { id, title, done, description }: Quest = $props();

  const Icon = $derived(done ? CircleCheck : CircleAlert);
</script>

<a href="/{id}" class={twMerge("block", done && "opacity-75")}>
  <article
    class="cyberpunk relative flex w-full flex-col gap-2 bg-border p-4 leading-none after:bg-background"
  >
    <div class="relative z-10 flex items-center gap-4">
      {#if !done}
        <div
          class="relative after:absolute after:left-1/2 after:top-1/2 after:size-5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-accent after:blur-[10px]"
        >
          <Icon class="fill-accent text-background" size={40} />
        </div>
      {:else}
        <Icon class="stroke-1 text-text" size={40} />
      {/if}
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
</a>

<style>
  article::after {
    position: absolute;
    clip-path: inherit;
    inset: 1.5px;
  }
</style>
