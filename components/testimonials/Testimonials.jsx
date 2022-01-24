import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


function Testimonials() {
    const testimonials = [
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png",
            name: "Shobana",
            relation: "Mother of Krishik Karthikeyan",
            content: `My son is always happy to go to Robotics class (with
                full smile & joy).I attribute this to the exemplary
                teaching and community feel of the class.It is indeed
                very motivating for parents and children to get such
                encouragement and platforms to be acknowledged for their
                good performance. Thank you once again for facilitating
                good learning.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/sujatha-customer.png",
            name: "Sujatha",
            relation: "Mother of A.S.ABISHEK",
            content: `SP Robotics is a boon to the children who are interested in tinkering with gadgets and who love practical learning. My son is extremely happy and excited
             to make and work with his own robot. It is the best platform for the children's future 
             to achieve their goal. I would strongly recommend this to all students across India.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/rithish-v1.png",
            name: "Ritish",
            relation: "Father of Pranav Agarwal",
            content: `The purpose of enrolling my child here in SP Robotic is that I want him to have an additional curriculum but over here I can see a lot of difference, It's not just they learn about building and coding them but my child actually enjoys and I see a kicks off in interest level, especially in SP Robotics, it's totally edutainment I guess that's how a class should be instead of boring subjects all time.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/senthil-v1.png",
            name: "Senthil",
            relation: "Father of Kavin Senthil",
            content: `My son did a road cleaning project which won the 2nd prize award in a special project. It's totally a very good concept asking the students to build a project on their own once they finish the level. Above all, I really appreciate the team of SP Robotic Works because I see growth in the presentation skills in my son's project videos,I'm really thankful to the team. Great work!!`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/tina-v1.png",
            name: "Tina",
            relation: "Mother of Chris",
            content: `It's been a year and I see a drastic change in his skills. His focus towards science is increasing day by day. Above all I found a major change in his behaviour. He started to spend more time on technology related articles rather than spending time on TV and games. The curiosity behind every technology surprises him. Thanks to the team of SP Robotics Maker Lab..`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/swagatha-v1.png",
            name: "Swagatha",
            relation: "Mother of Dilshan",
            content: `He joined the class a month back and he is showing great interest in technology and science nowadays. I am happy that I receive emails about his activity, the improvements and also what is happening in the class. Great work by SP Robotics. I can see the growth of my son which is really impressing me in just a few weeks. Big thanks to the staff out here! They are doing a wonderful job!`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/sanjokumar-v1.png",
            name: "Sanjokumar",
            relation: "Father of Riswanth",
            content: `Even I have studied these concepts in my engineering classes but it's totally different here, I wish I was exposed like these type of edutainment concepts during my college days. Why I say so because I could see the 5th std student getting used to the robots and the codes which are like totally amazing and the mind-blowing.SP Robotic works makes a lot of effort to bring out creativity.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/venkatesh-v1.png",
            name: "Venkatesh",
            relation: "Father of Sri Krishna",
            content: `SP Robotics has a very good systematic curriculum that all the child needs. The right foundation at the right time is very important. They take the children to different stages in the field of Robotics exposing them to the latest technology which is very important nowadays. Overall I feel my child is getting a lot of interest and has learned a lot of stuff with Robotics.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/sonakshi-customer.png",
            name: "Abhijit Dutta & Sujata Dutta",
            relation: "Parent of Sonakshi",
            content: `My daughter Sonakshi is really in love with all kinds of technologies. SP Robotics has given her a perfect platform to explore her passion. In the last one year SP Robotics has created a strong fundamental of technology for my daughter which I am sure will help her immensely in future.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/rajiv-garg-customer.png",
            name: "Rajiv Garg",
            relation: "Father of Tanay Garg",
            content: `Our child joined SP Robotics two years back and it has been a pleasant association. They gave him the much needed basic exposure in a child friendly atmosphere and later on introduced him to higher programs. Their courses encourage learning by actually making robots and that's the most enjoyable part.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/saanvi-customer.png",
            name: "Vinod",
            relation: "Father of Saanvi",
            content: `Saanvi started in AI and chanced upon SP Robotics. The free demo helped us get a feel of the course. Impressed by the pace my daughter picked up, I purchased the course. The course is well structured, and includes a neat way to get things done by the learner. Online Product Support is a huge plus.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/utkarsh-mehta-customer.png",
            name: "Sudhir Kumar Mehta & Nidhi Metha",
            relation: "Mother of Krishik Karthikeyan",
            content: `In today’s world no one is untouched of digital technology. Robotics is part of this advancement. SP robotics has played an important part in enhancing the problem solving technique of my son. It has laid a strong foundation of logical thinking and innovation. I would definitely recommend this.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/priya-customer.png",
            name: "S.Sanjeev",
            relation: "Mother of Priya",
            content: `When i first took my son to SP Robotics Maker Lab, I wasn't sure what to expect. But the kind of things he does are simply  amazing, his mind has become very curious. He is always speaking about what he has created and what it can do. I couldn't do such things at his age, the credit goes to the SP Robotics.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/ramasamy-customer.png",
            name: "Sivaneswaran",
            relation: "Father of Ramasamy",
            content: `I am extremely proud of my son. He is a talented boy and I wanted to introduce him to Robotics. I enrolled him at SP Robotics and was hoping it will help him.To my surprise my expectations were exceeded by my son as well as SP Robotics Maker Lab. I don't have to worry about his future anymore.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/harshavardhan-customer.png",
            name: "N.Raja",
            relation: "Father of R.Harshavardhan",
            content: `Great support and encouragement from SP Robotic Works, this program really did help my son to change his thought process. Now he has increased his interest towards Robotics which resulted in gaining more technical knowledge as well as soft skills for him. Credit goes to the creators, they have done a wonderful job.`,

        },
        {
            image: "https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/amar-fahad-customer.png",
            name: "Yasmin Farook",
            relation: "Mother of Amar Al Fahad",
            content: `SP Robotic Works provides an awesome robotic experience, this is a must try for all the children out there, the support and the encouragement provided are exceptional, my son loving the classes, he never misses his robotics class despite his exams. I would definitely recommend this for all students.`,

        },
    ]
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 2,
                },
            }}
        >

            {testimonials.map((value, index) => {
                return <SwiperSlide key={index}>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                        <div className="flex items-center mb-6">
                            <Image
                                alt="Avatar"
                                src={value.image}
                                width={70}
                                height={70}
                            />
                            <div className="ml-4">
                                <p className="font-medium">{value.name}</p>
                                <p className="font-light">{value.relation}</p>
                            </div>
                        </div>
                        <p className="font-light leading-relaxed">{value.content}</p>
                    </div>
                </SwiperSlide>
            })}

        </Swiper>
    )
}
export default Testimonials;