const ToTimestamp = (strDate: string): number => {
  let datum = Date.parse(strDate);
  return datum / 1000;
}

export { ToTimestamp }