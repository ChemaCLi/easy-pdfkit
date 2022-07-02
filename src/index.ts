import fs from "fs";
import { DocGenerator } from "./modules";

const docGenerator = new DocGenerator(
  fs.createWriteStream('output.pdf'),
  {
    margin: [30, 40],
    fontConfig: {
      size: 50,
      font: "Courier"
    }
  }
);

docGenerator.generate([
  {
    mode: "content-blocks",
    content: [
      {
        type: "paragraph",
        text: "asda nlk as ndansdas dasdasd"
      }
    ]
  },
  {
    mode: "pages",
    pages: [
      {
        config: {},
        content: []
      }
    ]
  }
]);
