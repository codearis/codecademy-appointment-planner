export default function useCheckDuplicateContact(array, name) {
  return array.some((element) => element.name === name);
}
