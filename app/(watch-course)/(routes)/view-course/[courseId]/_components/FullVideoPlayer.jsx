import { CompletedChapterContext } from '@/app/_context/CompletedChaptercontext';
import { CheckCircle2 } from 'lucide-react';
import React, { useEffect,useContext } from 'react';
import { markChapterCompleted } from '@/app/_services';
function FullVideoPlayer({userCourse, activeChapter }) {
    console.log(activeChapter);
    const { completedChapter, setCompletedChapter } = useContext(CompletedChapterContext);
    
    const videoUrl = activeChapter?.video?.[0]?.url;
    const isChapterCompleted = (chapterId) => {
      return completedChapter?.find(item => item.chapterId === chapterId);
  };
  const markChapterCompleted=async()=>{
    if(!completedChapter?.length)
    {
      setCompletedChapter([]);
    }
    completedChapter?setCompletedChapter(
      [...completedChapter,
        {
          chapterId:activeChapter?.chapterNumber+""
        }
      ]
    ):setCompletedChapter([{chapterId:activeChapter?.chapterNumber+""}]);
    await markChapterCompleted(userCourse.id,activeChapter?.chapterNumber).then(resp=>{console.log(resp);})
    
  }
    useEffect(() => {
        console.log("Chapter changed:", activeChapter);
    }, [activeChapter]);
    useEffect(() => {
      console.log("CompletedChapter context: ", completedChapter);
  }, [completedChapter]);

    return activeChapter&&(
        <div className='p-5'>
            {videoUrl ? (
                
                <video
                    key={videoUrl} 
                    width="1500" 
                    height="250" 
                    controls 
                    controlsList="nodownload"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : (
                <p>No video available for this chapter.</p>
            )}

            <div className='p-5 border rounded-lg mt-5 flex justify-between items-center'>
                {/* Check if activeChapter exists before trying to access its properties */}
                <h2 className='text-[20px] font-medium'>
                    {activeChapter ? activeChapter.name : 'No chapter selected'}
                </h2>
                {activeChapter && !isChapterCompleted(activeChapter?.chapterNumber) ?

                <button className='bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-2
                  hover:bg-purple-800'
                  onClick={()=>markChapterCompleted()}>
                    <CheckCircle2 />
                    <h2>MARK AS COMPLETED</h2>
                </button>:<button className='border border-purple-600 text-purple-600 p-2 px-5 rounded-lg flex gap-2
                  hover:bg-purple-100'>
                    <CheckCircle2 />
                    <h2>MARK AS INCOMPLETE</h2>
                </button>}
            </div>
        </div>
    );
}

export default FullVideoPlayer;
