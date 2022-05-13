import React, { useRef, useState } from "react";

const ChecksumModal = () => {

  const [checksum, setChecksum] = useState('');
  const [copied, setCopied] = React.useState(false);
  const textAreaRef = useRef(null);

  if (typeof window !== `undefined`) {
    window.addEventListener('show.bs.modal', (event: Event) => {
      let button = event.relatedTarget;
      let checksum = button.getAttribute('data-bs-checksum')
      setChecksum(checksum)
    });
  }

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
    <>
      <div className="modal fade" id="checksumModal" tabIndex={-1} aria-labelledby="checksumModalLabel" aria-hidden="true" style={{zIndex: '10000'}}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="checksumModalLabel">Checksum (SHA256)</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start">
              <p>
              The checksum is used to ensure the file has not been corrupted during download.
              You should compare the checksum of the file you received with the value below to ensure the file you received is complete and unmodified.
              </p>
              <p>
                On Windows use <code>certUtil -hashfile <var>file</var> SHA256</code>,
                on Linux use <code>sha256sum <var>file</var></code>, and on macOS use <code>shasum -a 256 <var>file</var></code>.
              </p>
              <input
                readOnly
                style={{width: "100%"}}
                ref={textAreaRef}
                value={checksum}
              />
            </div>
            <div className="modal-footer">
              <button 
                type="button"
                className="btn btn-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                  event.preventDefault();
                  setChecksum(checksum)
                  navigator.clipboard.writeText(checksum);
                  setCopied(true);
                }}
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChecksumModal;
