/* Convertit un numéro affiché (« 03 88 86 79 08 ») en href tel:
   international (« tel:+33388867908 »). */
export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `tel:+33${digits.startsWith("0") ? digits.slice(1) : digits}`;
}
