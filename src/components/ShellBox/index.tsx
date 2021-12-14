import React from 'react';

import './ShellBox.scss';

interface Props {
  textToCopy: string;
  children: React.ReactNode;
}

const ShellBox = ({ children }: Props): JSX.Element => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect((): (() => void) => {
    let timer: ReturnType<typeof setTimeout>;

    if (copied) {
      timer = setTimeout((): void => {
        setCopied(false);
      }, 3000);
    }

    return (): void => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [copied]);

  return (
    <pre className="shell-box">
      <div className="shell-box-top">
      </div>
      <code className="shell-box-code">{children}</code>
    </pre>
  );
};

export default ShellBox;