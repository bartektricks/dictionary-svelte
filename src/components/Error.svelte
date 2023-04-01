<script lang="ts">
  export let title: string
  export let message: string
  export let resolution: string
</script>

<div class="container mt-32 text-center">
  <div class="mb-11 text-heading-l">😕</div>
  <h1 class="mb-6 text-heading-s font-bold text-black60 dark:text-white">
    {title}
  </h1>
  <p class="text-body-m text-dark-grey">
    {message}
    {resolution}
  </p>
</div>
