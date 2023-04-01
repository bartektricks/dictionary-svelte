<script lang="ts">
  const THEME = 'theme'
  const DARK = 'dark'
  const LIGHT = 'light'

  let darkMode =
    localStorage.getItem(THEME) === DARK ||
    window.matchMedia('(prefers-color-scheme: dark)').matches

  function handleSwitchDarkMode() {
    darkMode = !darkMode
  }

  $: {
    darkMode
      ? document.documentElement.classList.add(DARK)
      : document.documentElement.classList.remove(DARK)

    localStorage.setItem(THEME, darkMode ? DARK : LIGHT)
  }
</script>

<button
  class="h-5 w-10 rounded-2.5 bg-dark-grey hover:bg-purple dark:bg-purple"
  on:click={handleSwitchDarkMode}
>
  <div
    class={`m-[0.1875rem] aspect-square w-3.5 rounded-full bg-white ${
      darkMode ? 'translate-x-5' : ''
    }`}
  />
</button>
