<script lang="ts">
  const THEME = 'theme'
  const DARK = 'dark'
  const LIGHT = 'light'

  let darkMode =
    localStorage.getItem(THEME) === DARK ||
    window.matchMedia('(prefers-color-scheme: dark)').matches

  function handleSwitchDarkMode() {
    darkMode = !darkMode

    localStorage.setItem(THEME, darkMode ? DARK : LIGHT)

    darkMode
      ? document.documentElement.classList.add(DARK)
      : document.documentElement.classList.remove(DARK)
  }
</script>

<svelte:head>
  <script>
    if (
      localStorage.getItem('theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  </script>
</svelte:head>

<button
  class="rounded-2.5 h-5 w-10 bg-dark-grey hover:bg-purple dark:bg-purple"
  on:click={handleSwitchDarkMode}
>
  <div
    class={`m-[0.1875rem] aspect-square w-3.5 rounded-full bg-white ${
      darkMode ? 'translate-x-5' : ''
    }`}
  />
</button>
