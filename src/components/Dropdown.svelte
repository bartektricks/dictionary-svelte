<script lang="ts">
  import { onMount } from 'svelte'
  import IconArrowDown from '../icons/IconArrowDown.svelte'
  import { FONT_ATTRIBUTE, FONT_TYPE_LS } from '../utils'

  let dropdownRef: HTMLDivElement | null

  const LIST = [
    {
      name: 'sans-serif',
      value: 'Sans Serif',
      class: 'font-inter',
    },
    {
      name: 'serif',
      value: 'Serif',
      class: 'font-lora',
    },
    {
      name: 'mono',
      value: 'Mono',
      class: 'font-inconsolata',
    },
  ] as const

  function setItem(itemName: (typeof LIST)[number]['name']) {
    fontType = itemName
    isOpened = false
  }

  function toggleOpen() {
    isOpened = !isOpened
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      isOpened &&
      dropdownRef &&
      !dropdownRef.contains(event.target as Node)
    ) {
      isOpened = false
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  let fontType = localStorage.getItem(FONT_TYPE_LS) || LIST.at(0).name
  let isOpened = false

  $: {
    document.documentElement.setAttribute(FONT_ATTRIBUTE, fontType)
    localStorage.setItem(FONT_TYPE_LS, fontType)
  }
</script>

<svelte:body class={fontType} />

<div
  class="relative flex flex-col gap-4 text-body-m font-bold"
  bind:this={dropdownRef}
>
  <button
    class="flex items-center gap-4"
    aria-label="Font switcher"
    on:click={toggleOpen}
  >
    {fontType}
    <IconArrowDown />
  </button>
  {#if isOpened}
    <div
      class="absolute top-full right-0 mt-4 flex flex-col items-start gap-4 rounded-4 bg-white p-6 shadow-dropdown dark:bg-black60 dark:shadow-purple"
      style="width: 180px"
    >
      {#each LIST as item}
        <button
          class={`${item.class} transition-colors hover:text-purple`}
          on:click={() => setItem(item.name)}>{item.value}</button
        >
      {/each}
    </div>
  {/if}
</div>
