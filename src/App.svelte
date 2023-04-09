<script lang="ts">
  import { onMount } from 'svelte'
  import Error from './components/Error.svelte'
  import Nav from './components/Nav.svelte'
  import Search from './components/Search.svelte'
  import WordView from './components/WordView.svelte'
  import { getTextFromQueryParam } from './helpers'
  import type { MissingWordResponseData, WordResponseData } from './types'

  let searchData: WordResponseData
  let searchError: MissingWordResponseData

  async function handleSearch(inputValue: string) {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      )
      const json = await res.json()

      if (res.status === 404) {
        searchError = json
        searchData = undefined
      } else {
        searchError = undefined
        searchData = json.at(0)
      }
    } catch (error) {
      console.warn(error)
    }
  }

  onMount(() => {
    const word = getTextFromQueryParam()

    if (word) {
      handleSearch(word)
    }
  })
</script>

<main>
  <Nav />
  <Search {handleSearch} />

  {#if searchError}
    <Error {...searchError} />
  {/if}

  {#if searchData}
    <WordView {searchData} />
  {/if}
</main>
