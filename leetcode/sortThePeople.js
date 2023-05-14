function sortThePeople(names, heights) {
  const people = [];
  for (let [index, name] of names.entries()) {
    people.push([name, heights[index]]);
    console.log(index, name);
  }
  return people.sort((a, b) => b[1] - a[1]).map(([name]) => name);
}

// Driver code
const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
const results = sortThePeople(names, heights);
