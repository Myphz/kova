<script lang="ts">
  import { onMount } from "svelte";
  import "../style/app.css";
  import "../style/fonts.css";
  import { loadQuests } from "../stores/quests.svelte";
  import { appConfig } from "../config";
  import GlobalHeader from "@molecules/global-header.svelte";

  onMount(() => {
    appConfig();
    loadQuests();
  });
</script>

<main>
  <!-- This is risky... I hope managing the header state here globally -->
  <!-- with if statements will be OK and I won't regret it... -->
  <!-- I hope it's not going to be too complex... if so, -->
  <!-- future Daniel, refactor it ASAP, don't be lazy. -->
  <GlobalHeader />
  <slot />
</main>
