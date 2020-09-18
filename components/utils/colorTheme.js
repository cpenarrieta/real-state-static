export const getColorTheme = (color) => {
  if (color === "red") {
    return ["red-500", "red-400"];
  }
  if (color === "orange") {
    return ["orange-700", "orange-500"];
  }
  if (color === "yellow") {
    return ["yellow-700", "yellow-500"];
  }
  if (color === "green") {
    return ["green-500", "green-400"];
  }
  if (color === "teal") {
    return ["teal-500", "teal-400"];
  }
  if (color === "blue") {
    return ["blue-500", "blue-400"];
  }
  if (color === "indigo") {
    return ["indigo-500", "indigo-400"];
  }
  if (color === "purple") {
    return ["purple-700", "purple-500"];
  }
  if (color === "pink") {
    return ["pink-700", "pink-500"];
  }
  return ["indigo-500", "indigo-400"];
};
