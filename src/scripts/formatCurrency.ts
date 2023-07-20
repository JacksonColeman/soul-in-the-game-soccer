export function formatCurrency (labelValue: number) {
    // copied from https://stackoverflow.com/questions/36734201/how-to-convert-numbers-to-million-in-javascript
  
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9
  
    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6
  
    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3
  
    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + "K"
  
    : Math.abs(Number(labelValue));
  
  }