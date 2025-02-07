import React from "react"
import { Link } from "../components/Link"
import parse, { domToReact } from "html-react-parser"

import AccordionItem from "../components/Asciidoc/AccordionItem"

const AsciiDocFormatter = ({ content, t }) => {
  const isBrowser = typeof window !== "undefined"
  const replaceFunction = node => {
    // Transform <a> tags
    if (node.type === "tag" && node.name === "a") {
      let isExternal = false
      if (isBrowser) {
        isExternal =
          node.attribs.href.startsWith("http") &&
          !node.attribs.href.includes(window.location.host)
      }
      if (isExternal) {
        return (
          <a
            href={node.attribs.href}
            target="_blank"
            rel="noopener noreferrer"
            className={node.attribs.class}
          >
            {domToReact(node.children)}
            <i className="fa fa-external-link fa-xs p-1" />
          </a>
        )
      } else {
        return (
          <Link to={node.attribs.href} className={node.attribs.class}>
            {domToReact(node.children)}
          </Link>
        )
      }
    }

    // Transform <i> tags
    if (
      node.type === "tag" &&
      node.name === "i" &&
      node.attribs.class.includes("fa-docker")
    ) {
      return <i className={node.attribs.class.replace("fa", "fab")} />
    }

    // Transform <td> tags
    if (
      node.type === "tag" &&
      node.name === "td" &&
      node.attribs.class === "icon"
    ) {
      return (
        <td>
          {domToReact(node.children)}
          <i className="fa fa-circle-info fa-xl" aria-hidden="true" />
        </td>
      )
    }

    // Transform Table of Contents
    if (
      node.type === "tag" &&
      node.name === "div" &&
      node.attribs.class === "toc"
    ) {
      // Get the ul element class="sectlevel1"
      const tocList = node.children.find(
        child =>
          child.attribs &&
          child.attribs.class &&
          child.attribs.class.includes("sectlevel1"),
      )
      return (
        <details className="p-3 my-3 bg-grey">
          <summary className="lead">
            {t("asciidoc.table.of.contents", "Table of Contents")}
          </summary>
          {tocList ? <ul>{domToReact(tocList.children)}</ul> : null}
        </details>
      )
    }

    // Transform iframe tags
    if (node.type === "tag" && node.name === "iframe") {
      return (
        <iframe {...node.attribs} className="w-full aspect-video" height="400">
          {domToReact(node.children)}
        </iframe>
      )
    }

    // Transform <details> and <summary> tags into Accordion
    if (node.type === "tag" && node.name === "details") {
      const summary = node.children.find(
        child => child.type === "tag" && child.name === "summary",
      )
      const summaryContent = summary ? domToReact(summary.children) : "Details"
      const detailsContent = node.children.filter(
        child => !(child.type === "tag" && child.name === "summary"),
      )

      return (
        <AccordionItem title={summaryContent}>
          {domToReact(detailsContent, { replace: replaceFunction })}
        </AccordionItem>
      )
    }
  }

  return <div>{parse(content, { replace: replaceFunction })}</div>
}

export default AsciiDocFormatter
