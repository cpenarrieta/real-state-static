export const getColorThemeText = (color) => {
  if (color === "red") {
    return ["text-red-500", "text-red-400"];
  }
  if (color === "orange") {
    return ["text-orange-700", "text-orange-500"];
  }
  if (color === "yellow") {
    return ["text-yellow-700", "text-yellow-500"];
  }
  if (color === "green") {
    return ["text-green-500", "text-green-400"];
  }
  if (color === "teal") {
    return ["text-teal-500", "text-teal-400"];
  }
  if (color === "blue") {
    return ["text-blue-500", "text-blue-400"];
  }
  if (color === "indigo") {
    return ["text-indigo-500", "text-indigo-400"];
  }
  if (color === "purple") {
    return ["text-purple-700", "text-purple-500"];
  }
  if (color === "pink") {
    return ["text-pink-700", "text-pink-500"];
  }
  return ["text-indigo-500", "text-indigo-400"];
};

export const getColorThemeBackground = (color) => {
  if (color === "red") {
    return ["bg-red-500", "bg-red-400"];
  }
  if (color === "orange") {
    return ["bg-orange-700", "bg-orange-500"];
  }
  if (color === "yellow") {
    return ["bg-yellow-700", "bg-yellow-500"];
  }
  if (color === "green") {
    return ["bg-green-500", "bg-green-400"];
  }
  if (color === "teal") {
    return ["bg-teal-500", "bg-teal-400"];
  }
  if (color === "blue") {
    return ["bg-blue-500", "bg-blue-400"];
  }
  if (color === "indigo") {
    return ["bg-indigo-500", "bg-indigo-400"];
  }
  if (color === "purple") {
    return ["bg-purple-700", "bg-purple-500"];
  }
  if (color === "pink") {
    return ["bg-pink-700", "bg-pink-500"];
  }
  return ["bg-indigo-500", "bg-indigo-400"];
};
