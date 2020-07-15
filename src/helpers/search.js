import distance from "fast-levenshtein"

function addSortInfo(item, searchInput, minInputLength = 1) {
  let newItem = { ...item }
  const lowercaseItemName = newItem.name.toLowerCase()
  const input = searchInput.toLowerCase()

  const startsWithInput = lowercaseItemName.startsWith(input)
  const longEnoughMatch =
    input.length >= minInputLength && lowercaseItemName.includes(input)
  if (startsWithInput || longEnoughMatch) {
    // rank items that start with the input highest
    newItem.sortLevel = startsWithInput ? 1 : 2
  } else {
    // for all words in the search input and for all words in the item name,
    // if there are any matches, include them and sort them by Levenshtein
    // distance, but sort them all below matches with sortLevel 1 or 2
    // (startsWithInput or longEnoughMatch) by adding 3 to Levenshtein distance
    for (const itemWord of lowercaseItemName.split(` `)) {
      for (const inputWord of input.split(` `)) {
        if (
          itemWord.startsWith(inputWord) &&
          inputWord.length > minInputLength
        ) {
          // get Levenshtein or "edit" distance of strings to sort among any matches
          newItem.sortLevel = 3 + distance.get(lowercaseItemName, searchInput)
        }
      }
    }
  }

  return newItem
}

function filterAndSortItems(items, searchInput) {
  if (!searchInput) return items
  return items
    .map(i => addSortInfo(i, searchInput))
    .filter(i => !!i.sortLevel)
    .sort((a, b) => a.sortLevel - b.sortLevel)
}

export { addSortInfo, filterAndSortItems }
