import { If } from '@/components/util';
import { render } from '@testing-library/react';
import React from 'react';

describe('If Component', () => {
  it('condition이 true 일때, 오직 If.then 컴포넌트를 렌더링한다', () => {
    const { getByText, queryByText } = render(
      <If condition={true}>
        <If.Then>Then branch</If.Then>
        <If.Else>Else branch</If.Else>
      </If>,
    );

    expect(getByText('Then branch')).toBeInTheDocument();
    expect(queryByText('Else branch')).not.toBeInTheDocument();
  });

  it('condition이 false일떄, 오직 If.Else 컴포넌트를 렌더링한다', () => {
    const { getByText, queryByText } = render(
      <If condition={false}>
        <If.Then>Then branch</If.Then>
        <If.Else>Else branch</If.Else>
      </If>,
    );
    expect(getByText('Else branch')).toBeInTheDocument();
    expect(queryByText('Then branch')).not.toBeInTheDocument();
  });

  it('condition에 일치하는 컴포넌트가 없을때 어떤것도 렌더링하지 않는다', () => {
    const { container } = render(
      <If condition={false}>
        <If.Then>Then branch</If.Then>
      </If>,
    );
    expect(container).toBeEmptyDOMElement();
  });
});
