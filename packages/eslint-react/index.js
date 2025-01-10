import react from "@woohm402/eslint-config-react";

export const reactConfig = ({ tsconfigRootDir }) => [
  {
    ignores: [".yarn", "*.js", "public/mockServiceWorker.js"],
  },
  ...react({
    tsconfigRootDir,
    envAllowedFiles: ["src/App.tsx"],
  }),
];
