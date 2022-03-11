import { publish } from "gh-pages";

publish(
  "dist",
  {
    branch: "build",
    repo: "https://github.com/kauaug/post-crud",
    user: {
      name: "kauaug",
      email: "kauaug.mo@gmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
