import fs from "fs";
import { DocGenerator } from "./modules";

const docGenerator = new DocGenerator(
  fs.createWriteStream('output.pdf'),
  { margin: 10, font: { size: 20 } }
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
