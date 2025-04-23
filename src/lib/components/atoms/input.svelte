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

  const { label, name, type, inputmode, onInput, inputClass }: Props = $props();
  let ref: HTMLInputElement;
</script>

<label class="group relative block w-full text-small">
  <div
    class="cyberpunk input-wrapper epic-transition bg-border p-px after:bg-background"
  >
    <input
      autocomplete="off"
      class={twMerge(
        "cyberpunk relative z-10 w-full bg-background px-4 py-3 text-text",
        inputClass
      )}
      placeholder=" "
      {name}
      {inputmode}
      type={type || "text"}
      bind:this={ref}
      oninput={onInputWrapper}
    />
  </div>
  <div
    class="epic-transition div-label absolute left-4 top-3 bg-background px-1"
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

  label:has(input:not(:placeholder-shown)) .div-label {
    @apply -top-0 -translate-y-1/2 text-xs;
  }

  label:has(input[data-invalid]) .input-wrapper {
    @apply bg-primary;
  }

  label:has(input:focus-within) .input-wrapper {
    @apply bg-accent;
  }

  .div-label {
    @apply group-focus-within:-top-0 group-focus-within:-translate-y-1/2 group-focus-within:text-xs;
  }
</style>
