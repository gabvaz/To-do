export default function generateUuid() {
  const randId = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  return `${randId()}-${randId()}-${randId()}-${randId()}`;
}
