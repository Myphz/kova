<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  type Props = HTMLButtonAttributes & {
    children: Snippet;
    type?: HTMLButtonAttributes["type"];
    class?: string;
  };

  const {
    children,
    class: className,
    type = "button",
    ...restProps
  }: Props = $props();
</script>

<button
  {type}
  class={twMerge(
    "cyberpunk flex w-full justify-center bg-accent py-2 !text-button font-semibold uppercase text-background",
    className
  )}
  {...restProps}
>
  {@render children()}
</button>
