export default function parseMS(ms: number) {
  const sec = Math.floor(ms / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);

  return `${hour > 0 ? `${hour % 24}시간 ` : ''}${
    min > 0 ? `${min % 60}분 ` : ''
  }${sec % 60}초`;
}
