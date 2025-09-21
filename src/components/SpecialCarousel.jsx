import { Carousel } from "@material-tailwind/react";
import { Events } from "../data/eventCarousel";
import { LandingCarousel } from "../data/landingCarousel";
function SpecialCarousel({ arrows = true, name = "" }) {
    return (
        <Carousel
            id={name}
            className="overflow-hidden  h-48 sm:h-[75vh]"
            autoplay={true}
            loop={true}
            autoplayDelay={4000}
            prevArrow={
                arrows
                    ? null
                    : () => {
                          return null;
                      }
            }
            nextArrow={
                arrows
                    ? null
                    : () => {
                          return null;
                      }
            }
            navigation={({ setActiveIndex, activeIndex, length }) => {
                if (name == "Landing") {
                    document.onkeydown = (e) => {
                        if (e.key === "ArrowRight") {
                            setActiveIndex(
                                (prevIndex) => (prevIndex + 1) % length
                            );
                        } else if (e.key === "ArrowLeft") {
                            setActiveIndex(
                                (prevIndex) => (prevIndex - 1 + length) % length
                            );
                        }
                    };
                }
                return (
                    <div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                        ? "w-8 bg-white"
                                        : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                );
            }}
        >
            {name == "Landing"
                ? LandingCarousel.map((img, index) => {
                      return (
                          <img
                              key={index}
                              style={{
                                  filter:
                                      name == "Landing"
                                          ? "brightness(0.8)"
                                          : null,
                              }}
                              className="h-full w-full object-cover"
                              src={img}
                              alt={`Image ${index}`}
                          />
                      );
                  })
                : Events.map((Event, index) => {
                      try {
                          return (
                              <div
                                  style={{
                                      background: `url(${Event.img}`,
                                  }}
                                  key={index}
                                  className="text-white w-full h-full object-fit !bg-center !bg-no-repeat !bg-cover bg-[#00000033]"
                              >
                                  <div className="bg-[linear-gradient(90deg,rgba(0,0,0,1),rgba(0,0,0,0.4))] opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center md:justify-end md:items-start text-lg font-[Koulen] p-10 w-full h-full object-cover text-center">
                                      <h1>{Event.name}</h1>
                                      <p className="text-sm md:text-md">{Event.desc}</p>
                                  </div>
                              </div>
                          );
                      } catch (e) {}
                  })}
        </Carousel>
    );
}

export default SpecialCarousel;
