import { Button } from '@/app/components/common';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button 컴포넌트 테스트 스위트', () => {
  test('정상적으로 렌더링됩니다.', () => {
    // given
    render(<Button>{'this is child'}</Button>);
    // when
    const button = screen.getByRole('button', { name: /this is child/i });
    // then
    expect(button).toBeInTheDocument();
  });

  test('isLoading인 경우 화면에 로더가 표시되며, 비활성화 됩니다.', () => {
    // given
    render(<Button isLoading>{'this is child'}</Button>);
    // when
    const pulseLoader = screen.getByRole('status');
    const button = screen.getByRole('button');
    // then
    expect(pulseLoader).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('disabled 경우 비활성화됩니다.', () => {
    // given
    render(<Button disabled>{'this is child'}</Button>);
    // when
    const button = screen.getByRole('button', { name: /this is child/i });
    // then
    expect(button).toBeDisabled();
  });

  const variants = [
    { variant: 'filled', expected: 'bg-primary text-neutral-50' },
    { variant: 'outlined', expected: 'border border-primary' },
    {
      variant: 'transparent',
      expected: 'text-neutral-500 bg-white dark:bg-[#0C0C0C]',
    },
    {
      variant: 'bottom',
      expected:
        'absolute bottom-5 mx-auto w-[calc(100%-2.5rem)] bg-primary text-neutral-50',
    },
  ] as const;

  variants.forEach(({ variant, expected }) => {
    test(`variant가 ${variant}인경우 ${expected} 클래스를 가집니다.`, () => {
      // given
      render(<Button variant={variant}>{'this is child'}</Button>);
      // when
      const button = screen.getByRole('button', { name: /this is child/i });
      // then
      expect(button).toHaveClass(expected);
    });
  });

  const types = [
    { type: 'submit', expected: 'submit' },
    { type: 'reset', expected: 'reset' },
    { type: 'button', expected: 'button' },
  ] as const;

  types.forEach(({ type, expected }) => {
    test(`type이 ${type}인경우 ${expected} 속성을 가집니다.`, () => {
      // given
      render(<Button type={type}>{'this is child'}</Button>);
      // when
      const button = screen.getByRole('button', { name: /this is child/i });
      // then
      expect(button).toHaveAttribute('type', expected);
    });
  });

  test('onClick이 정상적으로 동작합니다.', () => {
    // given
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{'this is child'}</Button>);
    // when
    const button = screen.getByRole('button', { name: /this is child/i });
    fireEvent.click(button);
    // then
    expect(handleClick).toHaveBeenCalled();
  });
});
