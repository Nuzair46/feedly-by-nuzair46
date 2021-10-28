export const imgURL = "https://picsum.photos/";

export const CATEGORY = [
  "All",
  "National",
  "Business",
  "Sports",
  "World",
  "Politics",
  "Technology",
  "Startup",
  "Entertainment",
  "Miscellaneous",
  "Science",
  "Automobile",
];

export const FILTER = {
  all: false,
  national: true,
  business: true,
  sports: true,
  world: true,
  politics: false,
  technology: false,
  startup: false,
  entertainment: false,
  miscellaneous: false,
  science: false,
  automobile: false,
};

export const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

if (!JSON.parse(localStorage.getItem("filter"))) {
  localStorage.setItem("filter", JSON.stringify(FILTER));
}
