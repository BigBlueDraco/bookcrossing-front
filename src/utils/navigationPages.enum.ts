export enum NavigationPages {
  "book-list" = "book-list",
  "profile" = "profile",
  "feed" = "feed",
  "plat" = "plat",
}

interface NavigationPagesIndex {
  [key: string]: string;
}

export const NavigationPagesLabels: NavigationPagesIndex = {
  "book-list": "Book list",
  profile: "Profile",
  feed: "Feed",
  plat: "Plat is cool",
};
