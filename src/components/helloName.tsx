import * as React from 'react';

export interface Props {
  name:
  string
}

export default function helloName(props: Props): JSX.Element {
  const { name } = props;
  return (
    <h1>
      Hello {name}
    </h1>
  );
}
