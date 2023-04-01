export type MissingWordResponseData = {
  title: string
  message: string
  resolution: string
}

export type Phonetic = {
  text?: string
  audio?: string
}

export type StringsOrEmptyArray = string[] | []

export type Definition = {
  definition: string
  synonyms: StringsOrEmptyArray
  antonyms: StringsOrEmptyArray
  example?: string
}

export type Meaning = {
  partOfSpeech: string
  synonyms: StringsOrEmptyArray
  antonyms: StringsOrEmptyArray
  definitions: Definition[]
}

export type License = {
  name: string
  url: URL
}

export type WordResponseData = {
  word: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}