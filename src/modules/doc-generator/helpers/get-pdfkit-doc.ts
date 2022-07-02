import PDFDocument from "pdfkit";
import { PageOptions } from "../../../types";
import { marginsToPdfkitMargins } from "./margin-to-pdfkit-margins";

export const getPdfkitDoc = (pageOptions: Pick<PageOptions, "margin" | "fontConfig" | "orientation" | "pageSize">) => {
  const { margin } = pageOptions;

  const doc = new PDFDocument({
    autoFirstPage: false,
    size: pageOptions.pageSize,
    layout: pageOptions.orientation,
    margin: typeof margin === "number" ? margin : undefined,
    margins: !Array.isArray(margin) ? undefined : marginsToPdfkitMargins(margin),
    font: pageOptions.fontConfig.font,
  });

  doc.addPage();

  return doc;
};

    