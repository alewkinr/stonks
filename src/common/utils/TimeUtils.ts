const ToTimestamp = (strDate: string): number => {
    let datum = Date.parse(strDate);
    console.log(strDate, datum);
    return datum / 1000;
};

export { ToTimestamp };
