import * as React from 'react';
import helloName from '../components/helloName'
import { Props } from '../components/helloName'

export default function mainContainer(): JSX.Element {
  const hello = helloName({ name: 'Antonio' })
  return hello
}
