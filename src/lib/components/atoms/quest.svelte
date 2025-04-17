<script lang="ts">
  import { CircleAlert } from "@lucide/svelte";

  type Props = {
    title: string;
    description: string;
  };

  const { title, description }: Props = $props();
</script>

<article
  class="relative flex w-full flex-col gap-2 bg-[#2e2a2a] p-4 *:z-10 after:bg-[#1A0F15]"
>
  <div class="flex items-center gap-2">
    <div
      class="relative after:absolute after:left-1/2 after:top-1/2 after:size-5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[yellow] after:blur-[10px]"
    >
      <CircleAlert class="icon" size={40} fill="#FFD83D" color="#1A0F15" />
    </div>
    <div class="flex-1">
      <header class="font-medium uppercase text-[#2fe7f4] text-h-4">
        {title}
      </header>
      <div class="font-medium text-[#a8a3a4]">
        {description}{description.endsWith(".") ? "" : "."}
      </div>
    </div>
  </div>
</article>

<style>
  article {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%);
    &::after {
      content: "";
      position: absolute;
      clip-path: inherit;
      inset: 1px;
    }
  }

  .icon {
    box-shadow: 0 0 20px 20px red;
  }
</style>
