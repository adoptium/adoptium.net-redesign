import React from "react";
import { useState } from "react";

const BecomeAdopter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Dropdown Trigger */}
      <button
        className="bg-transparent mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[346px] h-[48px] rounded-[80px] gradient-border"
        onClick={() => setIsOpen(!isOpen)}
      >
        How can I get my logo displayed?
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <div className="p-8 space-y-6 text-gray-800">
            <p className="text-lg">
              You can easily add your organization’s logo to our list of adopters
              by creating an issue or by submitting a pull request.
            </p>

            {/* Option 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-pink">
                Option 1 - Open an Issue
              </h2>
              <ol className="list-decimal list-inside mt-3 space-y-2">
                <li>
                  Go to our{" "}
                  <a
                    href="https://github.com/adoptium/adoptium.net/issues/new?assignees=&labels=adopter&projects=&template=adopters.yml&title=%5BAdopter%5D%3A+"
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink hover:underline"
                  >
                    Temurin Adopters Form
                  </a>
                  .
                </li>
                <li>
                  Fill out the relevant fields (it takes less than 5 minutes)
                </li>
                <li>
                  Attach logo files to an issue by dragging and dropping them in the text editor of the form.
                </li>
              </ol>
            </div>

            {/* Option 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-pink">
                Option 2 - Submit a Pull Request
              </h2>
              <p className="mt-3">
                When submitting a pull request, please make the following changes to the eclipsefdn-project-adopters’{" "}
                <a
                  href="https://gitlab.eclipse.org/eclipsefdn/it/api/eclipsefdn-project-adopters"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink hover:underline"
                >
                  codebase
                </a>
                :
              </p>
              <ol className="list-decimal list-inside mt-3 space-y-2">
                <li>
                  Go to{" "}
                  <a
                    href="https://gitlab.eclipse.org/eclipsefdn/it/api/eclipsefdn-project-adopters/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink hover:underline"
                  >
                    https://gitlab.eclipse.org/eclipsefdn/it/api/eclipsefdn-project-adopters
                  </a>
                  .
                </li>
                <li>Fork the repository.</li>
                <li>
                  Update the adopter data file{" "}
                  <code className="px-1 py-0.5 rounded">
                    config/adopters.json
                  </code>
                  . If your organization supports multiple projects, another project can be added to the projects list within the organization’s node. The values in this list should be the ID of the project.
                </li>
                <li>
                  Add a colored and a white organization logo to{" "}
                  <code className="px-1 py-0.5 rounded">
                    static/assets/images/adopters
                  </code>
                  .
                </li>
                <li>Submit the pull request.</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomeAdopter;
