// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

type Props = {|
  children: React.Node,
|};

export const Head = (props: Props) => {
  //$FlowFixMe
  return ReactDOM.createPortal(props.children, document.head);
};
