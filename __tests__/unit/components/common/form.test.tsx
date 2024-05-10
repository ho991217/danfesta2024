import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { authInfoSchema } from "@/app/[locale]/(back-nav)/login/schema";
import { Button, Form, ID, Input, Password } from "@components/common";
import { captchaSchema } from "@/app/components/ticketing/form";
import { dkuVerificationSchema } from "@/app/[locale]/(back-nav)/(padded)/verify/schema";
import { phoneNumberSchema, smsCodeSchema } from "@/app/components/common/form/phone";
import { passwordSchema, signUpSchema } from "@/app/[locale]/(back-nav)/(padded)/password/schema";

describe('Form 컴포넌트 테스트 스위트', () => {
  describe('1. captchaSchema', () => {
    const spy = jest.fn();

    it('should display required error when captchaValue is invalid', async () => {
      render(
        <Form onSubmit={spy} schema={captchaSchema}>
          <Input
            name="captchaValue"
            placeholder="캡차를 입력하세요."
          />
          <Button type='submit'>신청</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByPlaceholderText("캡차를 입력하세요."), { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button', { name: /신청/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toHaveTextContent('필수 입력 사항입니다.');
      });
    });

    it('should not display matching error when captchaValue is valid', async () => {
      render(
        <Form onSubmit={spy} schema={captchaSchema}>
          <Input
            name="captchaValue"
            placeholder="캡차를 입력하세요."
          />
          <Button type='submit'>신청</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByPlaceholderText("캡차를 입력하세요."), { target: { value: '123456' } });
        fireEvent.submit(screen.getByRole('button', { name: /신청/i }));
      });

      await waitFor(async () => {
        expect(spy).toBeCalled();
      });
    });
  });

  describe('2. dkuVerificationSchema', () => {
    const spy = jest.fn();

    it('should display matching error when dkuPassword, dkuStudentId are invalid', async () => {
      render(
        <Form onSubmit={spy} schema={dkuVerificationSchema}>
          <Password
            name="dkuPassword"
            label="단국대학교 포털 비밀번호"
            placeholder="8자 이상의 영문, 숫자"
          />
          <ID
            name="dkuStudentId"
            label="단국대학교 포털 아이디"
            placeholder="숫자 8자리"
          />
          <Button type='submit'>
            다음
          </Button>
        </Form >
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("단국대학교 포털 비밀번호"), { target: { value: '1234567' } });
        fireEvent.input(screen.getByLabelText("단국대학교 포털 아이디"), { target: { value: '12345679' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessages = screen.getAllByRole('alert');
        expect(errorMessages).toHaveLength(2);
        expect(errorMessages[0]).toHaveTextContent('비밀번호는 8자리 이상입니다.');
        expect(errorMessages[1]).toHaveTextContent('학번은 3으로 시작합니다.');
      });
    });

    it('should not display matching error when dkuPassword, dkuStudentId are valid', async () => {
      render(
        <Form
          onSubmit={spy}
          schema={dkuVerificationSchema}
        >
          <Password
            name="dkuPassword"
            label="단국대학교 포털 비밀번호"
            placeholder="8자 이상의 영문, 숫자"
          />
          <ID
            name="dkuStudentId"
            label="단국대학교 포털 아이디"
            placeholder="숫자 8자리"
          />
          <Button type="submit">다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("단국대학교 포털 아이디"), { target: { value: '31234567' } });
        fireEvent.input(screen.getByLabelText("단국대학교 포털 비밀번호"), { target: { value: '12345678' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).toBeCalled();
      });
    });
  });

  describe('3. phoneNumberSchema', () => {
    const spy = jest.fn();

    it('should display matching error when phoneNumber is invalid', async () => {
      render(
        <Form onSubmit={spy} schema={phoneNumberSchema}>
          <Input
            name="phoneNumber"
            label="사용자 전화번호"
            placeholder="01012345678"
            inputMode="tel"
          />
          <Button type='submit'>다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("사용자 전화번호"), { target: { value: '010111122223' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toHaveTextContent('전화번호는 11자리로 입력해주세요.');
      });
    });

    it('should not display matching error when phoneNumber is valid', async () => {
      render(
        <Form onSubmit={spy} schema={phoneNumberSchema}>
          <Input
            name="phoneNumber"
            label="사용자 전화번호"
            placeholder="01012345678"
            inputMode="tel"
          />
          <Button type='submit'>다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("사용자 전화번호"), { target: { value: '01011112222' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).toBeCalled();
      });
    });
  });

  // Form.Text -> Form.SMSCode
  // TypeError: dt.supports is not a function
  // https://github.com/guilhermerodz/input-otp/issues/38
  describe('4. smsCodeSchema', () => {
    const spy = jest.fn();

    it('should display matching error when code is invalid', async () => {
      render(
        <Form onSubmit={spy} schema={smsCodeSchema}>
          <Input
            name='code'
            placeholder="숫자 6자리"
            label="발송된 인증번호 입력"
          />
          <Button type="submit">확인</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("발송된 인증번호 입력"), { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button', { name: /확인/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toHaveTextContent('인증번호는 6자리로 입력해주세요.');
      });
    });

    it('should not display matching error when code is valid', async () => {
      render(
        <Form onSubmit={spy} schema={smsCodeSchema}>
          <Input
            name='code'
            placeholder="숫자 6자리"
            label="발송된 인증번호 입력"
          />
          <Button type="submit">확인</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("발송된 인증번호 입력"), { target: { value: '123456' } });
        fireEvent.submit(screen.getByRole('button', { name: /확인/i }));
      });

      await waitFor(async () => {
        expect(spy).toBeCalled();
      });
    });
  });

  describe('5. authInfoSchema', () => {
    const spy = jest.fn();

    it('should display matching error when studentId, password are invalid', async () => {
      render(
        <Form onSubmit={spy} schema={authInfoSchema}>
          <ID
            label="단국대학교 포털 아이디"
            placeholder="32123456"
          />
          <Password
            label="단국대학교 포털 비밀번호"
            placeholder="비밀번호"
          />
          <Button type="submit">로그인</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("단국대학교 포털 아이디"), { target: { value: '' } });
        fireEvent.input(screen.getByLabelText("단국대학교 포털 비밀번호"), { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button', { name: /로그인/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessages = screen.getAllByRole('alert');
        expect(errorMessages[0]).toHaveTextContent('학번은 8자리로 입력해주세요.');
        expect(errorMessages[1]).toHaveTextContent('비밀번호는 8자리 이상입니다.');
      });
    });

    it('should not display matching error when studentId, password are valid', async () => {
      render(
        <Form onSubmit={spy} schema={authInfoSchema}>
          <ID
            label="단국대학교 포털 아이디"
            placeholder="32123456"
          />
          <Password
            label="단국대학교 포털 비밀번호"
            placeholder="비밀번호"
          />
          <Button type="submit">로그인</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("단국대학교 포털 아이디"), { target: { value: '12345678' } });
        fireEvent.input(screen.getByLabelText("단국대학교 포털 비밀번호"), { target: { value: '11112222' } });
        fireEvent.submit(screen.getByRole('button', { name: /로그인/i }));
      });

      await waitFor(async () => {
        expect(spy).toBeCalled();
      });
    });
  });

  describe('6. passwordSchema', () => {
    const spy = jest.fn();

    it('should display matching error when password is invalid', async () => {
      render(
        <Form onSubmit={spy} schema={passwordSchema}>
          <Password
            label="비밀번호"
            placeholder="8자 이상"
          />
          <Button type='submit'>다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("비밀번호"), { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toHaveTextContent('비밀번호는 8자리 이상 입력해주세요.');
      });
    });

    it('should not display matching error when password is valid', async () => {
      render(
        <Form onSubmit={spy} schema={passwordSchema}>
          <Password
            label="비밀번호"
            placeholder="8자 이상"
          />
          <Button type="submit">다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("비밀번호"), { target: { value: '12345678' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).toBeCalled();
      });
    });
  });

  describe('7. signUpSchema', () => {
    const spy = jest.fn();

    it('should display matching error when password, passwordCheck are invalid', async () => {
      render(
        <Form onSubmit={spy} schema={signUpSchema}>
          <Password
            label="비밀번호"
            placeholder="8자 이상"
          />
          <Password
            label="비밀번호 확인"
            name="passwordCheck"
            placeholder="8자 이상"
          />
          <Button type="submit">다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("비밀번호"), { target: { value: '' } });
        fireEvent.input(screen.getByLabelText("비밀번호 확인"), { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toHaveTextContent('비밀번호는 8자리 이상 입력해주세요.');
      });
    });

    it('should display matching error when password, passwordCheck are diff', async () => {
      render(
        <Form onSubmit={spy} schema={signUpSchema}>
          <Password
            label="비밀번호"
            placeholder="8자 이상"
          />
          <Password
            label="비밀번호 확인"
            name="passwordCheck"
            placeholder="8자 이상"
          />
          <Button type="submit">다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("비밀번호"), { target: { value: '12345678' } });
        fireEvent.input(screen.getByLabelText("비밀번호 확인"), { target: { value: '87654321' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).not.toBeCalled();
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toHaveTextContent('비밀번호가 일치하지 않습니다.');
      });
    });

    it('should not display matching error when password, passwordCheck are valid', async () => {
      render(
        <Form onSubmit={spy} schema={signUpSchema}>
          <Password
            label="비밀번호"
            placeholder="8자 이상"
          />
          <Password
            label="비밀번호 확인"
            name="passwordCheck"
            placeholder="8자 이상"
          />
          <Button type="submit">다음</Button>
        </Form>
      );

      await act(async () => {
        fireEvent.input(screen.getByLabelText("비밀번호"), { target: { value: '12345678' } });
        fireEvent.input(screen.getByLabelText("비밀번호 확인"), { target: { value: '12345678' } });
        fireEvent.submit(screen.getByRole('button', { name: /다음/i }));
      });

      await waitFor(async () => {
        expect(spy).toBeCalled();
      });
    });
  });
});
