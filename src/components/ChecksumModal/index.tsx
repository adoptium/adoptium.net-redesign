import React, { Fragment, useRef, useState, useEffect } from "react"
import { Dialog, DialogTitle, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { FaClipboard, FaCheck, FaInfoCircle, FaWindows, FaApple, FaLinux } from "react-icons/fa"

const ChecksumModal = ({ open, setOpen, checksum }) => {
  const cancelButtonRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [activeOS, setActiveOS] = useState("windows") // Default to Windows, could be set based on detected OS

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
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-xl bg-gradient-to-br from-[#200E46] to-[#2B1A4F] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                <div className="px-6 pb-6 pt-5 sm:p-8">
                  <div className="flex items-start">
                    <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100/20 sm:mx-0 sm:h-10 sm:w-10">
                      <FaClipboard
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-0 ml-4 text-left">
                      <DialogTitle
                        as="h3"
                        className="text-xl leading-6 font-semibold text-white"
                      >
                        Checksum (SHA256)
                      </DialogTitle>

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
                                className="w-full px-4 py-3 text-gray-200 bg-[#1A0B38] font-mono text-sm focus:outline-none overflow-x-auto"
                                value={checksum}
                                style={{ wordBreak: "break-all" }}
                              />
                              <button
                                type="button"
                                onClick={handleCopy}
                                className={`px-4 flex items-center justify-center transition-colors flex-shrink-0 ${
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
                          <p className="text-sm text-gray-300 mb-3 font-medium">
                            Verify using:
                          </p>
                          
                          {/* OS Tabs */}
                          <div className="flex border-b border-gray-700 mb-3">
                            <button
                              onClick={() => setActiveOS("windows")}
                              className={`flex items-center space-x-1.5 px-4 py-2 text-sm rounded-t-lg transition ${
                                activeOS === "windows"
                                  ? "bg-[#2B1A4F] text-white border-b-2 border-pink-500"
                                  : "text-gray-400 hover:text-gray-200 hover:bg-[#2B1A4F]/40"
                              }`}
                            >
                              <FaWindows className="h-4 w-4" />
                              <span>Windows</span>
                            </button>
                            <button
                              onClick={() => setActiveOS("linux")}
                              className={`flex items-center space-x-1.5 px-4 py-2 text-sm rounded-t-lg transition ${
                                activeOS === "linux"
                                  ? "bg-[#2B1A4F] text-white border-b-2 border-pink-500"
                                  : "text-gray-400 hover:text-gray-200 hover:bg-[#2B1A4F]/40"
                              }`}
                            >
                              <FaLinux className="h-4 w-4" />
                              <span>Linux</span>
                            </button>
                            <button
                              onClick={() => setActiveOS("macos")}
                              className={`flex items-center space-x-1.5 px-4 py-2 text-sm rounded-t-lg transition ${
                                activeOS === "macos"
                                  ? "bg-[#2B1A4F] text-white border-b-2 border-pink-500"
                                  : "text-gray-400 hover:text-gray-200 hover:bg-[#2B1A4F]/40"
                              }`}
                            >
                              <FaApple className="h-4 w-4" />
                              <span>macOS</span>
                            </button>
                          </div>
                          
                          {/* Command display based on selected OS */}
                          <div className="bg-[#2B1A4F] p-3 rounded">
                            {activeOS === "windows" && (
                              <div className="flex flex-col">
                                <code className="text-sm text-gray-200 font-mono">
                                  certUtil -hashfile file SHA256
                                </code>
                                <p className="text-xs text-gray-400 mt-2">
                                  Replace "file" with the actual filename you downloaded
                                </p>
                              </div>
                            )}
                            
                            {activeOS === "linux" && (
                              <div className="flex flex-col">
                                <code className="text-sm text-gray-200 font-mono">
                                  sha256sum file
                                </code>
                                <p className="text-xs text-gray-400 mt-2">
                                  Replace "file" with the actual filename you downloaded
                                </p>
                              </div>
                            )}
                            
                            {activeOS === "macos" && (
                              <div className="flex flex-col">
                                <code className="text-sm text-gray-200 font-mono">
                                  shasum -a 256 file
                                </code>
                                <p className="text-xs text-gray-400 mt-2">
                                  Replace "file" with the actual filename you downloaded
                                </p>
                              </div>
                            )}
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
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ChecksumModal
