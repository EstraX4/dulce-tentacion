export function formatPrice(number) {
  // Ensure the number is a valid numeric value
  if (isNaN(number)) {
    return "Not a valid number";
  }

  // Round the number to two decimal places
  // const priceRounded = Number(number).toFixed(2);

  // Add thousand separators and currency symbol (e.g., "$")
  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumSignificantDigits: 6,
  }).format(number);

  return formattedPrice;
}
