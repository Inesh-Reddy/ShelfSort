// WHY: Only this file is allowed to fetch. It never touches the DOM —
// it just resolves data, app.js decides what to do with it.

async function fetchWeather(city) {
  // TODO (FR-4, not now): fetch from WeatherAPI, JSON.parse the
  // response, return a plain object app.js can hand to dom.js.
}

export { fetchWeather };