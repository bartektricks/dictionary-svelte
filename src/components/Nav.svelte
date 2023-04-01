<script lang="ts">
  import IconMoon from '../icons/IconMoon.svelte'
  import Logo from '../icons/Logo.svelte'
  import Dropdown from './Dropdown.svelte'
  import ThemeSwitcher from './ThemeSwitcher.svelte'
</script>

<nav class="container flex items-center justify-between py-6 md:pt-14 md:pb-12">
  <a href="/" title="Homepage">
    <Logo />
  </a>
  <div class="flex items-center">
    <div
      class="relative mr-8 after:absolute after:top-0 after:bottom-0 after:-right-4 after:w-[1px] after:bg-black40 after:content-['']"
    >
      <Dropdown />
    </div>
    <ThemeSwitcher />
    <IconMoon class="ml-5 text-dark-grey dark:text-purple" />
  </div>
</nav>
