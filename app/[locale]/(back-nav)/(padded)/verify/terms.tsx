import { Terms } from '@components/common/form/terms';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';

export const signupTerms: Terms[] = [
  {
    id: 'terms-1',
    title: '개인정보 수집, 이용 동의',
    content: (
      <div>
        <p>
          ㈜무진정보기술 단버리에서 서비스 회원가입 및 본인 인증을 위하여 아래와
          같이 개인정보를 수집, 이용합니다.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>수집목적</TableHead>
              <TableHead>수집항목</TableHead>
              <TableHead>수집근거</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            <TableRow>
              <TableCell>회원 식별 및 회원제 서비스 제공</TableCell>
              <TableCell>아이디, 비밀번호, 닉네임</TableCell>
              <TableCell>개인정보 보호법 제 15조 제 1항</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>본인 인증</TableCell>
              <TableCell>전화번호</TableCell>
              <TableCell>개인정보 보호법 제 15조 제 1항</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          귀하는 ㈜무진정보기술 단버리 서비스 이용에 필요한 최소한의 개인정보
          수집 및 이용에 동의하지 않을 수 있으나, 동의를 거부 할 경우 회원제
          서비스 이용이 불 가합니다.
        </p>
      </div>
    ),
  },
  {
    id: 'terms-2',
    title: '개인정보 수집, 이용 동의',
    content: (
      <>
        <p>개인정보처리방침 내용</p>
      </>
    ),
  },
  {
    id: 'terms-3',
    title: '개인정보 이용 동의',
    content: (
      <>
        <p>마케팅 정보 수신 동의 내용</p>
      </>
    ),
  },
];
