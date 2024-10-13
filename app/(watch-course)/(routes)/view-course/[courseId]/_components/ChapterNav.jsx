import { CompletedChapterContext } from '@/app/_context/CompletedChaptercontext';
import { CheckCircle2, PauseCircle, PlayCircle } from 'lucide-react';
import React, { useState, useEffect, useContext } from 'react';

function ChapterNav({ course, userCourse, setActiveChapter }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { completedChapter, setCompletedChapter } = useContext(CompletedChapterContext);  

    
    useEffect(() => {
        if (course?.chapter?.length > 0 && activeIndex === 0) {
            setActiveChapter(course.chapter[0]);
        }
    }, [course, setActiveChapter, activeIndex]);
   

    const isChapterCompleted = (chapterId) => {
       
        return completedChapter?.find(item => item.chapterId === chapterId);
    };

    return (
        <div className="flex flex-col">
            <div className="border-b p-5">
                <h2 className="font-medium text-[20px]">{course.name}</h2>
                <h2 className="text-gray-500 text-[14px]">{course.author}</h2>
            </div>
            <div className='overflow-auto h-[600px]'>
                {course.chapter?.map((chapter, index) => (
                    <div 
                        key={index} 
                        onClick={() => {
                            setActiveIndex(index);
                            setActiveChapter(chapter);
                        }}
                        className={`flex gap-2 text-[16px] px-5 p-4 cursor-pointer hover:bg-gray-100 
                          ${isChapterCompleted(chapter[0]?.chapterNumber[0])&&activeIndex!=index?'bg-purple-100 text-purple-600':null}
                          ${activeIndex === index ? 'bg-green-100 text-green-700' : 'text-gray-500'}
                          
                          `}
                    >
                        {/* Pass the correct chapterId to isChapterCompleted */}
                        {activeIndex === index 
                            ? <PauseCircle height={25} width={25}/> 
                            : isChapterCompleted(chapter[0]?.chapterNumber[0])? 
                                 <CheckCircle2 height={25} width={25}/> 
                                : <PlayCircle height={25} width={25} />}
                        <h2 className='line-clamp-2'>{chapter.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChapterNav;
