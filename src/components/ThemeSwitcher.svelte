<script lang="ts">
  import IconMoon from '../icons/IconMoon.svelte'

  const THEME = 'theme'
  const DARK = 'dark'
  const LIGHT = 'light'

  let darkMode = !('theme' in localStorage)
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : localStorage.getItem(THEME) === DARK

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

<label for="theme-switcher" class="flex gap-5">
  <button
    id="theme-switcher"
    aria-label="Theme switcher"
    class="h-5 w-10 rounded-2.5 bg-dark-grey hover:bg-purple dark:bg-purple"
    on:click={handleSwitchDarkMode}
  >
    <span
      class={`m-[0.1875rem] block aspect-square w-3.5 rounded-full bg-white ${
        darkMode ? 'translate-x-5' : ''
      }`}
    />
  </button>
  <IconMoon class="text-dark-grey dark:text-purple" />
</label>
