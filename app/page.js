"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { User } from 'lucide-react'; 
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './globals.css'; 
import ImageSlider from './_components/Banner';
import Slideshow from './_components/Banner';
import GradientBackground from './_components/GradientBackground';
import Testimonials from './_components/Testimonial';
import Footer from './_components/Footer';


export default function Home() {
  const router = useRouter();
  const goToBrowsePage = () => {
    router.push('/browse'); 
  };
  const goals = [
    { name: 'GROUP 2', icon: '/icon1.jpeg' }, 
    { name: 'GROUP 2', icon: '/icon2.jpeg' }, 
    { name: 'GROUP 4', icon: '/icon3.jpeg' }, 
    { name: 'GROUP MAINS', icon: '/icon4.jpeg' }, 
    { name: 'Bank exams', icon: '/icon5.jpeg' }, 
    { name: 'NEET', icon: '/icon6.jpeg' }, 
    { name: 'CAT & MBA', icon: '/icon3.jpeg' }, 
    { name: 'CBSE class 12', icon: '/icon2.jpeg' }, 
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
  {/* Header with logo and navigation */}
  <header className="w-full py-2 px-6 bg-white flex items-center justify-between border-b shadow-md">
    <div className='p-2'>
      <Image 
        src='/logo.png'
        alt='logo'
        width={170}
        height={100}
      />
    </div>

    {/* Navigation Links */}
    <div className="mb-4 md:mb-0">
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="#courses" className="hover:underline">Courses</a></li>
        <li><a href="#features" className="hover:underline">features</a></li>
        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
        <li><a href="#s2capp" className="hover:underline">Our App</a></li>
        <li><a href="#links" className="hover:underline">Links</a></li>
      </ul>
    </div>

    {/* User button or sign in button */}
    <div className="flex items-center space-x-3">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-white text-purple-700 hover:bg-purple-200 py-1 px-3 rounded-lg">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <button className='border border-purple-600 text-purple-600 p-1 px-4 rounded-lg flex gap-2 hover:bg-purple-100'>
          LOGIN
        </button>
      </SignedIn>
      <button className='bg-purple-500 text-white p-1 px-4 rounded-lg hover:bg-purple-800' onClick={goToBrowsePage}>
        EXPLORE COURSES
      </button>
    </div>
      </header>
     
      {/* Hero Section */}
      <main className=" flex flex-col p-5 items-center bg-gradient-to-r from-blue-200 via-white to-blue-400 font-roboto ">
        
        <div>
        
        <Slideshow/>
        </div>

        {/* Overlay Content */}
        <div className="z-10 text-center text-purple-900 p-4 bg-opacity-50 rounded-lg">
          <h1 className="text-5xl font-extrabold mb-4">Crack your goal with India's top educators</h1>
          <p className="text-xl mb-6">For brighter future Join us today!</p>
          <button className='bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-purple-800'
            onClick={goToBrowsePage}>
            EXPLORE COURSES
          </button>
        </div>
      </main>

      {/* Goals Section */}
      <section className="py-12 px-4 bg-gray-50">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">Select your goal / exam</h2>
  <div id="courses" className="grid grid-cols-2 sm:grid-cols-4 gap-4" onClick={goToBrowsePage}>
    {goals.map((goal, index) => (
      <div key={index} className="p-4 bg-white shadow rounded-md flex flex-col items-center justify-center text-center">
        <img src={goal.icon} alt={goal.name} className="h-20 w-20 mb-2" />
        <span className="text-gray-800">{goal.name}</span>
      </div>
    ))}
  </div>
</section>
<div id="testimonials"> <Testimonials/></div>
    

      {/* Features Section */}
      <section className="py-12 px-4">
        <div id="features" className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-4 bg-white shadow rounded-md text-center">
            <User className="mx-auto text-purple-600" size={40} />
            <h3 className="text-lg font-medium text-gray-700 mt-4">Daily live classes</h3>
            <p className="text-gray-500 mt-2">Interact with educators, clear doubts, and get regular updates</p>
          </div>
          <div className="p-4 bg-white shadow rounded-md text-center">
            <User className="mx-auto text-purple-600" size={40} />
            <h3 className="text-lg font-medium text-gray-700 mt-4">Practice and revise</h3>
            <p className="text-gray-500 mt-2">Practice mock tests and analyze your performance</p>
          </div>
          <div className="p-4 bg-white shadow rounded-md text-center">
            <User className="mx-auto text-purple-600" size={40} />
            <h3 className="text-lg font-medium text-gray-700 mt-4">Learn anytime, anywhere</h3>
            <p className="text-gray-500 mt-2">Access recorded classes from any device</p>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-12 px-4 bg-gray-50 text-center">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Get the learning app</h2>
  <p className="text-gray-600">Join and get instant updates and live classes</p>

  <div id="s2capp" className="mt-6 flex justify-center">
    {/* Left Side: App Store and Play Store */}
    <div className="flex-1 flex flex-col justify-center space-y-6 items-end">
      <div className="flex items-center space-x-4">
        <Image src="/app.png" alt="App Store" width={80} height={40} />
        <h2 className="text-xl font-semibold text-gray-800">App Store</h2>
      </div>
      <div className="flex items-center space-x-4">
      <a href="https://play.google.com/store/apps/details?id=com.successstudycircle.learners" >
        <Image src="/playstore.png" alt="Play Store" width={80} height={40} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.successstudycircle.learners" >
        <h2 className="text-xl font-semibold text-gray-800">Play Store</h2>
        </a>
      </div>
    </div>

    {/* Right Side: Main Image */}
    <div className="flex-1 flex justify-start">
      <Image src="/img1.png" alt="Main Image" width={500} height={150} />
    </div>
  </div>
</section>

<div id="links"><Footer/></div>
      
    </div>
  );
}
