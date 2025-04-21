import Questions from './components/Questions'; 
const App = () => {

  return (
    <>
      <img src="./assets/background-pattern-desktop.svg" alt="background pattern for pc" className="w-full hidden md:block " />
      <img src="./assets/background-pattern-mobile.svg" alt="background pattern for pc" className="w-full  md:hidden block " />
      <div className="bg-white p-5 pl-7 pr-7  md:w-[39%] w-[85%]  mx-auto rounded-xl absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
        
        
        <header className="flex items-center gap-5 mb-8">
          <img src="./assets/icon-star.svg" alt="star icon" className="w-8 " />
          <h1 className="faqs text-5xl font-bold">FAQs</h1>
        </header>

        <Questions
          qution="What is Frontend Mentor, and how will it help me?"
          answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building"
          isActive={true}
        />
        
        <Questions
          qution="Is Frontend Mentor free?"
          answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        />
        <Questions
        qution="Can I use Frontend Mentor projects in my portfolio?" 
        answer="  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        />
        <Questions
        qution="  How can I get help if I'm stuck on a challenge?" 
        answer=" The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        />
      </div>
    </>
  )
}
export default App
