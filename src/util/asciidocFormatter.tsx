export default function asciidocFormatter(
  t /* 't' from useI18next to retrieve translations */,
) {
  // Styling for tables
  const tables = document.querySelectorAll("table")
  tables.forEach(table => {
    table.className = "min-w-full divide-y divide-gray-200 shadow-sm" // Updated with Tailwind classes
  })

  // Styling for table headers
  const theads = document.querySelectorAll("thead")
  theads.forEach(thead => {
    thead.className = "bg-gray-50" // Updated with Tailwind class for dark headers
  })

  // Mark external links appropriately
  const asciidocContent = document.getElementById("asciidoc-container")
  const links = asciidocContent.querySelectorAll("a")
  links.forEach(link => {
    if (
      !link.href.includes(location.host) &&
      !link.className.includes("btn") &&
      !link.className.includes("author-icon")
    ) {
      const anchorIcon = document.createElement("i")
      anchorIcon.className = "fas fa-external-link-alt ml-1 text-xs" // Updated with Tailwind and FontAwesome classes
      link.target = "_blank"
      link.append(anchorIcon)
    }
  })

  // Update Docker icons
  const icons = asciidocContent.querySelectorAll("i")
  icons.forEach(icon => {
    if (icon.className.includes("fa-docker")) {
      icon.className = icon.className.replace("fa", "fab")
    }
  })

  // Styling for table data cells with icon
  const tds = document.querySelectorAll("td")
  tds.forEach(td => {
    if (td.className === "icon") {
      const archiveTypeIcon = document.createElement("i")
      archiveTypeIcon.className = "fas fa-circle-info text-xl" // Updated with FontAwesome class
      archiveTypeIcon.ariaHidden = true
      td.appendChild(archiveTypeIcon)
    }
  })

  // Styling for divs, specifically the table of contents
  const divs = document.querySelectorAll("div")
  divs.forEach(div => {
    if (div.className === "toc") {
      const tocDetails = document.createElement("details")
      tocDetails.className = "p-3 my-3 bg-gray-100" // Updated with Tailwind classes
      const tocSummary = document.createElement("summary")
      tocSummary.innerHTML = t(
        "asciidoc.table.of.contents",
        "Table of Contents",
      )
      tocSummary.className = "text-lg font-semibold" // Updated with Tailwind classes
      tocDetails.appendChild(tocSummary)
      const tocList = div.getElementsByClassName("sectlevel1")[0]
      tocDetails.appendChild(tocList)
      div.replaceWith(tocDetails)
    }
  })
}
