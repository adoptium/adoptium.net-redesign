import React, { useEffect, useState } from "react"
import vendors from "../../../json/marketplace.json"
import getVendorIdentifier from "../../../util/vendors"
import { shuffle } from "../../../util/shuffle"
import { FaCheck } from "react-icons/fa";

export interface Vendor {
  name: string
  icon: string
  iconPadding?: string
}

interface VendorSelectorProps {
  selectedVendorIdentifiers: string[]
  setSelectedVendorIdentifiers: (identifiers: string[]) => void
}

const VendorSelector: React.FC<VendorSelectorProps> = ({
  selectedVendorIdentifiers,
  setSelectedVendorIdentifiers,
}) => {
  const [randomizedVendors, setRandomizedVendors] = useState<Vendor[]>([])

  useEffect(() => {
    const vendorsCpy = [...vendors] // Assuming `vendors` is typed correctly
    setRandomizedVendors(shuffle(vendorsCpy))
    setSelectedVendorIdentifiers(
      vendorsCpy.map(vendor => getVendorIdentifier(vendor)),
    )
  }, [setSelectedVendorIdentifiers])

  const handleChange = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    identifier: string,
  ) => {
    e.preventDefault()
    const newSelectedVendorIdentifiers = [...selectedVendorIdentifiers]
    const idx = newSelectedVendorIdentifiers.indexOf(identifier)
    if (idx >= 0) newSelectedVendorIdentifiers.splice(idx, 1)
    else newSelectedVendorIdentifiers.push(identifier)
    setSelectedVendorIdentifiers(newSelectedVendorIdentifiers)
  }

  return (
    <div className="w-full">
      <div className="overflow-auto min-w-full w-full">
        <div className="flex xl:justify-center space-x-5 py-2">
          {randomizedVendors.map(vendor => {
            const identifier = getVendorIdentifier(vendor)
            return (
              <button
                key={`vendor-${identifier}`}
                onClick={e => handleChange(e, identifier)}
                className={`flex justify-center items-center
                outline-hidden cursor-pointer transition-all duration-200 ease-in-out bg-white rounded-2xl ${selectedVendorIdentifiers.includes(identifier) ? "border-primary border-2" : "border-white border-2"}`}
              >
                <span className="w-20 h-20">
                  {selectedVendorIdentifiers.includes(identifier) && 
                  <div style={{position: "absolute", color: "green", display: "flex", flexDirection: 'row-reverse', width: '80px'}}><FaCheck/></div>}
                  <img
                    src={`/images/vendors/${vendor.icon}`}
                    className="mb-0 p-1"
                    alt={`${vendor.name} icon`}
                    style={
                      vendor.iconPadding ? { padding: vendor.iconPadding } : {}
                    }
                  />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VendorSelector
