"use client";
import Image from "next/image";
import borderb from "@/assets/images/border-b.png";
import microsoft from "@/assets/images/microsoft.png";
import coke from "@/assets/images/coke.png";
import twitter from "@/assets/images/twitter.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "rgba(70, 176, 230, 1)" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "rgba(70, 176, 230, 1)" }}
      onClick={onClick}
    />
  );
}
const TrustedBy = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto mb-6">
          <h2 className="relative font-bold pb-4 mb-4 text-center text-3xl md:text-4xl w-max mx-auto">
            Trusted by
            <div className="absolute bottom-0 left-0 h-4 w-full">
              <Image
                src={borderb}
                className="w-full h-full object-contain"
                alt="border bottom"
              />
            </div>
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </p>
        </div>
        <div className="max-w-xl mx-auto  relative">
          <div className="absolute right-0 top-0  bg-custom-radial w-20 h-20" />
          <Slider {...settings} className="">
            <div className="text-center">
              <Image
                className="m-auto"
                src={microsoft}
                alt="trusted by logos"
              />
            </div>
            <div className="text-center">
              <Image className="m-auto" src={twitter} alt="trusted by logos" />
            </div>
            <div className="text-center">
              <Image className="m-auto" src={coke} alt="trusted by logos" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
