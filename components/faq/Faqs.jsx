import Faq from "./Faq";

const faqContent = [
  {
    question: "What are the fun things my child will learn?",
    answer:
      "Every child loves mobile or video games. This course will be equally fun - with lots of learning. They will be building their own video game apps and useful apps like QR Code Apps, GPS Apps too . While they code and have fun, learning happens automatically.",
  },
  {
    question: "Is it tough for my child?",
    answer:
      "Oh no! These courses have been specially designed for the respective age groups and we have seen average academic performers excel in this practical learning. Your child is sure to do wonders with this kit - Get ready to be amazed!",
  },
  {
    question: "Should my child have prior coding knowledge?",
    answer:
      "Not at all! No Coding or Electronics knowledge is needed. The course will be taught from the basics and it will be complete fun for your child.",
  },
  {
    question: "How is it useful for my child?",
    answer:
      "This course has shown clear improvement in a child's creativity, focus, logical thinking and problem solving skills. But thats not all, Coding and App Building is the future and your child will be one-up from the others. Let's ensure your child has all the fun for his/her age but still learns the essential skills for a better today and tomorrow.",
  },
  {
    question: "What are the items required to learn this Online?",
    answer:
      "Your child will need a laptop to code and upload into an Android phone. Softwares and installation procedures will be given by us",
  },
  {
    question: "Is there a Free Trial?",
    answer:
      "There is a Free Trial option here. Your child can code & develop an app in the first few chapters. If you feel your child is interested, and wants to continue learning, coding and developing Apps, you can purchase the entire course.",
  },
  {
    question: "What if there are doubts while learning? How to clarify?",
    answer:
      "There is 1:1 Personlized Guidance through text, video and screenshare support from our tech experts available from 10am to 8pm (Sunday Holiday). You can clarify all your doubts here",
  },
  {
    question: "Will I get a certificate after Completing?",
    answer:
      "Yes, ofcourse! After you finish all chapters, you will get a certificate. You can also submit a video of your practical project to get a Master Certificate",
  },
  {
    question: "What if I don't have an Android Phone?",
    answer:
      "No worries! After you code, there is an option to check the App online (in your computer itself - through simulation). You can use this option if you do not have a phone.",
  },
  {
    question: "What Android App development will my child do?",
    answer:
      "The best part about learning here is &quot;No Prior coding Knowledge is Required&quot; The entire course starts from the basics on how to code and is loaded with fun experiments that your child will enjoy.Each chapter will teach a new concept to your child and let him/ her build an App thats fun and useful.Once learnt all concepts, imagination is the only limitation to build more wonderful Apps and solve Problems.",
  },
  {
    question: "What is the Android App course fee?",
    answer:
      "Android App Development Course for kids is just Rs. 9999. Once you buy the course online, your child can start learning online immediately and can learn anytime with our A.I. based blended learning model. The course will teach 10+ Apps of various interesting concepts along with 100+ projects that your child can do easily. It also includes certification upon completion of the course.",
  },
];

function Faqs() {
  return (
    <div className="lg:my-20 mt-12 mb-20">
      <div className="text-center">
        <h2 className="font-bold lg:text-[2rem] text-[22px]">
          ANDROID CODING FAQ
        </h2>
        <h3 className="lg:mt-2 lg:mb-8 text-lg lg:text-xl font-light my-8 ">
          Best Android App Development Course for Kids to Learn & Code Apps
        </h3>
      </div>
      <div className="mx-0 lg:mx-8 mt-2">
        {faqContent.map((value, index) => {
          return (
            <Faq key={index} question={value.question} answer={value.answer} />
          );
        })}
      </div>
    </div>
  );
}
export default Faqs;
