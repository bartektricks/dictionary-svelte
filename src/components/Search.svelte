<script lang="ts">
  import { getTextFromQueryParam, setWindowLocationSearch } from '../helpers'

  export let handleSearch: (val: string) => Promise<void>

  let hasError = false
  let inputValue = getTextFromQueryParam() || ''

  $: {
    setWindowLocationSearch(inputValue)

    if (inputValue.length > 0) {
      hasError = false
    }
  }

  function onSubmit() {
    if (inputValue.length === 0) {
      hasError = true
      return
    }

    handleSearch(inputValue)
  }
</script>

<form on:submit|preventDefault={onSubmit} class="container md:text-heading-s">
  <label
    for="search"
    class="flex h-12 cursor-text overflow-hidden rounded-4 bg-grey focus-within:outline focus-within:outline-1 focus-within:outline-purple dark:bg-black80 md:h-16 ${hasError
      ? 'focus-within:outline-2 focus-within:outline-red'
      : ''}"
  >
    <input
      class="h-full w-full bg-transparent px-6 font-bold leading-5 text-black60 focus:outline-none dark:text-white "
      type="text"
      id="search"
      autocomplete="off"
      bind:value={inputValue}
      placeholder="Search for any word..."
    />
    <svg
      class="py-4 pr-4 md:pr-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path
        class="stroke-purple"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
      />
    </svg>
  </label>
  {#if hasError}
    <p class="mt-2 text-red">Whoops, can't be empty...</p>
  {/if}
</form>
