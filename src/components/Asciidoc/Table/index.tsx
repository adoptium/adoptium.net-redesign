import React from "react";

const CustomTable = ({ children }) => {
  // Find the thead and tbody from children
  const thead = children.find(child => child.type === 'thead');
  const tbody = children.find(child => child.type === 'tbody');

  // Extract headers from thead
  const headers = thead ? thead.props.children.props.children : [];
  // Extract rows from tbody
  const rows = tbody ? tbody.props.children : [];

  return (
    <div className="py-8 md:py-16 not-prose max-w-6xl w-full">
      <div className="overflow-x-auto bg-[#200D46] p-4 md:p-8 rounded-3xl">
        {/* Render the table headers */}
        <div className="min-w-full flex items-center justify-start pb-6 w-full border-b border-[#3E3355] px-3">
          {headers.map((header, index) => (
            <h3 key={index} className="text-lg leading-[140%] text-lightgrey font-semibold min-w-[210px] lg:min-w-[230px]">
              {header.props.children}
            </h3>
          ))}
        </div>
        {/* Render the table rows */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`flex items-center justify-start min-w-[1030px] lg:min-w-[1134px] px-3 py-6 rounded-3xl ${rowIndex % 2 !== 0 ? "bg-[#2B194F]" : "bg-transparent"}`}>
            {row.props.children.map((cell, cellIndex) => (
              <h3 key={cellIndex} className="tab-button-text text-white min-w-[210px] lg:min-w-[230px]">
                {cell.props.children}
              </h3>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTable;
