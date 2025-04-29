<script lang="ts">
  import { twMerge } from "tailwind-merge";

  type Props = {
    label: string;
    name: string;
    type?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputmode?: any;
    onInput?: (value: string) => unknown;
    inputClass?: string;
  };

  const resetInvalid = () => {
    if (Object.hasOwn(ref.dataset, "invalid")) delete ref.dataset.invalid;
  };

  const onInputWrapper = (e: Event) => {
    resetInvalid();
    // @ts-expect-error don't want to specify the correct event type ffs
    onInput?.(e.currentTarget.value);
  };

  const { label, name, onInput, inputClass }: Props = $props();
  let ref: HTMLTextAreaElement;
</script>

<label class="group relative block w-full text-small">
  <div
    style="--cyberpunk-height: 90%"
    class="cyberpunk input-wrapper epic-transition bg-border p-px duration-100 after:bg-background"
  >
    <textarea
      autocomplete="off"
      style="--cyberpunk-height: 90%"
      class={twMerge(
        "cyberpunk relative z-10 min-h-[30svh] w-full bg-background px-4 py-3 text-text",
        inputClass
      )}
      placeholder=" "
      {name}
      bind:this={ref}
      oninput={onInputWrapper}
    ></textarea>
  </div>
  <div
    class="epic-transition div-label absolute left-4 top-3 bg-background px-1 duration-100"
  >
    {label}
  </div>
</label>

<style lang="postcss">
  .input-wrapper::after {
    content: "";
    position: absolute;
    clip-path: inherit;
    inset: 1px;
  }

  label:has(textarea:not(:placeholder-shown)) .div-label {
    @apply -top-0 -translate-y-1/2 text-xs;
  }

  :global(label:has(textarea[data-invalid]) .input-wrapper) {
    @apply bg-primary;
  }

  label:has(textarea:focus-within) .input-wrapper {
    @apply bg-accent;
  }

  .div-label {
    @apply group-focus-within:-top-0 group-focus-within:-translate-y-1/2 group-focus-within:text-xs;
  }
</style>
