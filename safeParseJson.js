function safeParseJson(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return e.message;
  }
}

const json = { name: "zuhree" };

console.log(safeParseJson(json));
