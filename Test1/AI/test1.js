function calculateRoutes(gridSize) {
  let routes = 1;

  for (let i = 0; i < gridSize; i++) {
    routes += 2 * gridSize - 1;
    routes /= i + 1;
  }
  return routes;
}

console.log(calculateRoutes(20));
