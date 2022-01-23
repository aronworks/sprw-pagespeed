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
                return <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                        <div className="flex items-center mb-6">
                            <Image
                                className=""
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