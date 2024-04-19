import { Link } from '@/components/common';

export default function ManagePage() {
  return (
    <>
      <div>관리자 페이지</div>
      <Link href="/admin/ticket">티켓 관리</Link>
    </>
  );
}
