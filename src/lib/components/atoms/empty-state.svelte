<script lang="ts">
  import { CircleAlert } from "@lucide/svelte";
</script>

<div
  style="--cyberpunk-height: 80%"
  class="cybdiv cyberpunk relative bg-border p-4 leading-none after:bg-background"
>
  <div class="relative z-10 flex items-center gap-4">
    <CircleAlert class="fill-primary text-background" size={60} />
    <div class="flex flex-col gap-1 leading-none *:leading-none">
      <header class="text-h-3 text-primary">NO QUESTS</header>
      <p class="font-medium">
        Tap on <span class="font-extrabold text-accent">+</span>
        to add a quest
      </p>
    </div>
  </div>
</div>

<style>
  .cybdiv::after {
    position: absolute;
    clip-path: inherit;
    inset: 1.5px;
  }
</style>
