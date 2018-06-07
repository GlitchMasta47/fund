let counter = document.getElementById("current-fund");
fetch("https://glitchmasta47.github.io/fund/currentFund.txt")
.then((res) => {
  return res.text(); // We must return .text() instead of directly using .text() because it returns a promise instead of the text
})
.then((res) => {
  // "res" is now equal to what was returned above (since it returns a promise and we wait for the ".then()" on the promise yada-yada)
  counter.innerHTML = res;
});
