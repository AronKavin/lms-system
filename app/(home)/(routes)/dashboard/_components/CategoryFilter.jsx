// /app/_components/CategoryFilter.js
"use client";
import React, { useEffect, useState } from "react";
import { getCourseList } from "@/app/_services/index";

function CategoryFilter({ selectedCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterOptions, setFilterOptions] = useState([{ id: 1, name: "All", value: "all" }]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data = await getCourseList();
        
        
        const uniqueTags = Array.from(
          new Set(data.courseLists.flatMap((course) => course.tags || []))
        );

        const tagsOptions = uniqueTags.map((tag, index) => ({
          id: index + 2, 
          name: tag,
          value: tag.toLowerCase().replace(/\s+/g, "-"), 
        }));

        
        setFilterOptions((prev) => [...prev, ...tagsOptions]);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          key={item.id}
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(item.value);
          }}
          className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50 ${
            activeIndex === index ? "border-purple-800 bg-purple-50 text-purple-800" : ""
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
