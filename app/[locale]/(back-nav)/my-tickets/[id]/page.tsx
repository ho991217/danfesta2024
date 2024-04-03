export default function Detail({ params: { id } }: { params: { id: number } }) {
  return <section className='flex flex-col px-5'>Detail {id}</section>;
}
