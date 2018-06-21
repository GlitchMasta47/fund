// Ew no semicolons, where did my linter go?

window.onload = function () {
  if (checkFetch() == false) return fixFetch()
  doFetch()
}

window.doFetch = function() {
  fetch("https://glitchmasta47.github.io/fund/currentFund.txt")
  .then((res) => {
    if (res.ok == true) {
      return res.text(); // We must return .text() instead of directly using .text() because it returns a promise instead of the text
    } else {
      console.log("yeet skrrt you don't have the interwebs")
      return null
    }
  })
  .then((res) => {
    // "res" is now equal to what was returned above (since it returns a promise and we wait for the ".then()" on the promise yada-yada)
    // Please note that returning null (as happens when the user has no internet) ".then()" is not valid and therefore none of this coffee will be run
    bounty.default({ el: '.current-fund', value: res, initialValue: '$0.00' })
  });
}

window.checkFetch = function() {
  if (window.fetch) return true
  if (self.fetch) return true
  return false
}

window.fixFetch = function() {
  window.fetch = window. XMLHttpRequest
  doFetch()
}
