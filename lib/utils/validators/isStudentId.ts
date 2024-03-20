export default function isStudentId(value: string) {
  return /^3\d{7}$/.test(value);
}
