import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import grainImage from '@/assets/images/grain.jpg'
import Image from "next/image";

const testimonials = [
  {
    name: "Dan Turner",
    position: "Marketing Manager @ LinearDesigns",
    text: "Tony was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ EssexMarkup",
    text: "Working with Tony was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ EmporiumGames",
    text: "Tony's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ AmericanTools",
    text: "Tony is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ VentureVeneers",
    text: "Tony's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
       <SectionHeader title="Enthusiastic Clients" desc="See what they have to say about my work and technical, patient, customer experiences" eyebrow="What My Clients Say about Me"/>
    <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-8 flex-none">
      {
        testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8">
            <div className="flex gap-4 items-center">
              <div className="size-16 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
                <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
              </div>
              <div className="">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/40">{testimonial.position}</div>
              </div>
            </div>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-white/90">{testimonial.text}</p>
          </Card>
        ))
      }
      </div>
     </div>
    </div>
  </div>;
};

/* 2:46:31 */