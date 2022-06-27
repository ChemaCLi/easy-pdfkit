import fs from "fs";
import { DocGenerator } from "./modules";

const docGenerator = new DocGenerator(
  { margin: 10, font: { size: 20 } },
  fs.createWriteStream('output.pdf')
);

docGenerator.generate([
  {
    mode: "content-blocks",
    content: []
  },
  {
    mode: "pages",
    pages: [
      {}
    ]
  }
]);
