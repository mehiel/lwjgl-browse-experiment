// @flow
// @jsx jsx
import * as React from "react";
import { jsx } from "@emotion/core";
import css from "@emotion/css";
import { Link } from "@reach/router";
import IconFolder from "components/icons/md/Folder";
import { CircularProgress } from "components/CircularProgress";

export const FolderTH = css`
  user-select: none;
  padding: 0 !important;
  a {
    display: block;
    padding: 0.75rem;
    color: #333;
    font-weight: normal;
    &:hover {
      text-decoration: none;
      background-color: #5bc0de;
      color: white;
      svg {
        color: white;
      }
    }
  }
`;

type Props = {
  path: string
};

export class Folder extends React.PureComponent<Props> {
  static defaultProps = {
    loading: false
  };
  render() {
    const { path, loading } = this.props;
    const parts = path.split("/");
    const name = parts[parts.length - 1];

    return (
      <tr>
        <th css={FolderTH} colSpan={2}>
          <Link to={path}>
            {navigating => (
              <>
                <IconFolder />
                {name}
                {navigating && <CircularProgress size={16} thickness={4} />}
              </>
            )}
          </Link>
        </th>
      </tr>
    );
  }
}

export function SpinnerRow() {
  return (
    <tr>
      <td>
        <CircularProgress size={24} thickness={8} />
      </td>
    </tr>
  );
}
