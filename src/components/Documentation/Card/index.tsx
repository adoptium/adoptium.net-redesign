import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Link } from "../../Link"

interface LinkItem {
  link: string
  name: string
}

interface Props {
  links: LinkItem[]
  title: string
  Icon: React.ComponentType<{ className?: string }>
}

const DocumentationCard = ({ links, title, Icon }: Props): JSX.Element | null => {
  if (!title || !Icon || !links || typeof links !== "object") {
    return null
  }

  return (
    <div className="w-full lg:w-1/3 p-3">
      <div className="bg-white/5 rounded-3xl border-2 border-white/50 shadow-xs overflow-hidden">
        <div className="p-4">
          <p className="mb-3 text-xl font-semibold flex items-center">
            <span className="inline-block mr-2">
              <Icon className="text-pink" />
            </span>
            <span>{title}</span>
          </p>
          <div className="divide-y divide-gray-200">
            {links.map((link: LinkItem) =>
              // Check if the link is external or internal
              link.link.includes("http") ? (
                <a
                  href={link.link}
                  key={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 hover:bg-white/10 flex justify-between items-center"
                >
                  {link.name} <FaExternalLinkAlt size={13} />
                </a>
              ) : (
                <Link
                  to={link.link}
                  key={link.link}
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationCard
