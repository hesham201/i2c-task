import lock from "@/assets/images/lock.png";
import chart from "@/assets/images/chart.png";
import troppy from "@/assets/images/troppy.png";
import Image from "next/image";
const data = [
  {
    imgSrc: lock,
    heading: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    imgSrc: chart,
    heading: "1000+ of reviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    imgSrc: troppy,
    heading: "And more!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
const SecondSection = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col p-4 gap-4 grow bg-white rounded-md">
          {data.map((item, index) => (
            <div
              key={`${item.heading}${index}`}
              className="flex flex-row item-center gap-4"
            >
              <div className="flex flex-row items-center">
                <Image
                  className="w-16 h-auto object-contain"
                  src={item.imgSrc}
                  alt={item.heading}
                />
              </div>
              <div>
                <h2 className="text-custom-gold mb-2 font-semibold">
                  {item.heading}
                </h2>
                <p className="text-custom-dark">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
