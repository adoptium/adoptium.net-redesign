import React, { Fragment, useRef, useState, useEffect } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { FaClipboard, FaCheck, FaInfoCircle } from "react-icons/fa"

const ChecksumModal = ({ open, setOpen, checksum }) => {
  const cancelButtonRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false)
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = () => {
    navigator.clipboard.writeText(checksum)
    setCopied(true)
    if (inputRef.current) {
      inputRef.current.select()
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-gradient-to-br from-[#200E46] to-[#2B1A4F] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div className="px-6 pb-6 pt-5 sm:p-8">
                  <div className="flex items-start">
                    <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100/20 sm:mx-0 sm:h-10 sm:w-10">
                      <FaClipboard
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-0 ml-4 text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl leading-6 font-semibold text-white"
                      >
                        Checksum (SHA256)
                      </Dialog.Title>

                      <div className="mt-6 space-y-4">
                        <div className="flex items-start space-x-2">
                          <FaInfoCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-200 leading-relaxed">
                            Compare the checksum below with the file you downloaded
                            to ensure it's complete and unmodified.
                          </p>
                        </div>

                        <div className="relative mt-4 group">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                          <div className="relative bg-[#1A0B38] rounded-lg p-0.5 overflow-hidden">
                            <div className="flex">
                              <input
                                ref={inputRef}
                                readOnly
                                onClick={handleCopy}
                                className="w-full px-4 py-3 text-gray-200 bg-[#1A0B38] font-mono text-sm focus:outline-none"
                                value={checksum}
                              />
                              <button
                                type="button"
                                onClick={handleCopy}
                                className={`px-4 flex items-center justify-center transition-colors ${
                                  copied
                                    ? "text-green-400"
                                    : "text-gray-200 hover:text-white"
                                }`}
                              >
                                {copied ? (
                                  <FaCheck className="h-4 w-4" />
                                ) : (
                                  <FaClipboard className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#1A0B38] rounded-lg p-4 mt-4">
                          <p className="text-sm text-gray-300 mb-2 font-medium">
                            Verify using:
                          </p>
                          <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                            <div className="flex items-center justify-between">
                              <span>Windows:</span>
                              <code className="bg-[#2B1A4F] px-2 py-1 rounded text-gray-200">
                                certUtil -hashfile file SHA256
                              </code>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Linux:</span>
                              <code className="bg-[#2B1A4F] px-2 py-1 rounded text-gray-200">
                                sha256sum file
                              </code>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>macOS:</span>
                              <code className="bg-[#2B1A4F] px-2 py-1 rounded text-gray-200">
                                shasum -a 256 file
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A0B38] px-6 py-4 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
                      copied
                        ? "bg-pink-600 hover:bg-pink-700"
                        : "bg-pink-500 hover:pink-600"
                    }`}
                    onClick={handleCopy}
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ChecksumModal
