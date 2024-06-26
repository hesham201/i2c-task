import headerImg from "@/assets/images/header-img.png";
import profile1 from "@/assets/images/profile-1.png";
import profile2 from "@/assets/images/profile-2.png";
import profile3 from "@/assets/images/profile-3.png";
import borderb from "@/assets/images/border-b.png";
import Image from "next/image";
const leftSection = [
  {
    imgSrc: profile1,
    name: "Andrew Schultz",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
  {
    imgSrc: profile2,
    name: "Andrew Schultz",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
  {
    imgSrc: profile3,
    name: "Andrew Schultz",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
  {
    imgSrc: profile3,
    name: "Andrew Schultz",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
];
const HeroSection = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute left-0 top-1/2 translate-y-1/2 bg-custom-radial w-60 h-60" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:gap-0 gap-4 lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl leading-relaxed font-bold mb-10">
              Lorem ipsum{" "}
              <span className="inline-block text-custom-blue relative ">
                <div className="absolute bottom-0 left-0 h-2 w-full">
                  <Image
                    src={borderb}
                    className="w-full h-full object-contain"
                    alt="border bottom"
                  />
                </div>
                dolor
              </span>{" "}
              sit amet yo 👋
            </h1>
            <div>
              <ul className="flex flex-col gap-2 overflow-hidden">
                {leftSection.map((item, index) => (
                  <li
                    key={`${item.name}${index}`}
                    className={` ${
                      leftSection.length - 1 === index
                        ? "bg-gradient-to-b from-white to-transparent h-11"
                        : "flex flex-row items-center relative gap-5 p-3 bg-white rounded-md"
                    }`}
                  >
                    {leftSection.length - 1 !== index ? (
                      <>
                        <div>
                          <Image src={item.imgSrc} alt="profileimg" />
                        </div>
                        <div>
                          <h3 className="font-bold">{item.name}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute left-0 top-1/2 translate-y-2/4 bg-custom-radial w-60 h-60 -z-0" />
            <Image
              src={headerImg}
              className="w-full h-auto relative"
              alt="header-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
