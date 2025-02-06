import React from "react";
import EventCard from "../../Events/EventCard";
import Pagination from "../Pagination"; // adjust the import path as needed

const NewsCardList = ({
  posts,
  previousPageNumber,
  previousPageLink,
  nextPage,
  currentPage,
  totalPages,
  baseUrl,
}) => {
  const data1 = posts.slice(0, 3);
  const data2 = posts.slice(3, 6);

  return (
    <div className="max-w-[1264px] mx-auto px-6 py-8 md:pt-12">
      <div className="flex justify-center gap-6 items-center flex-wrap pt-8 md:pt-12">
        {data1.map((post, index) => (
          <EventCard key={index} post={post} />
        ))}
      </div>
      <div className="flex justify-center gap-6 items-center flex-wrap py-8 md:py-12">
        {data2.map((post, index) => (
          <EventCard key={index} post={post} />
        ))}
      </div>

      <Pagination
        previousPageNumber={previousPageNumber}
        previousPageLink={previousPageLink}
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl={baseUrl}
      />
    </div>
  );
};

export default NewsCardList;
