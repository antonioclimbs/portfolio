import * as React from 'react';
import mainContainer from './containers/mainContainer'

interface Props {
  name: string,
}

export default function App(): JSX.Element {
  return mainContainer()
}
