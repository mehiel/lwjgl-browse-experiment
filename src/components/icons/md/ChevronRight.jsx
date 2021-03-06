// @flow
import * as React from "react";
import { Icon, type Props } from "components/icons/Icon";

export default function ChevronRight(props: Props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </Icon>
  );
}
