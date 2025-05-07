<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  type Props = {
    children: Snippet;
    type?: HTMLButtonAttributes["type"];
    class: string;
  };

  const { children, class: className, type = "button" }: Props = $props();
</script>

<button
  {type}
  class={twMerge(
    "cyberpunk !text-button flex w-full justify-center bg-accent py-2 font-semibold uppercase text-background",
    className
  )}
>
  {@render children()}
</button>
