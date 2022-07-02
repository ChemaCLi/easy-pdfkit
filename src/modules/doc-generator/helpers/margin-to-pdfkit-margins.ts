export const marginsToPdfkitMargins = (margin: [number, number] | [number, number, number, number]) => {
  const marginsSpec = { top: 0, bottom: 0, left: 0, right: 0 };

  marginsSpec.top = margin[0];
  marginsSpec.bottom = margin[0];
  marginsSpec.left = margin[1];
  marginsSpec.right = margin[1];

  if (margin.length === 4) {
    marginsSpec.right = margin[1];
    marginsSpec.bottom = margin[2];
    marginsSpec.left = margin[3];
  }

  return marginsSpec;
}
