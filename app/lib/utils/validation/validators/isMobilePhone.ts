export default function isMobilePhone(value: string) {
  return /^1\d{10}$/.test(value);
}
