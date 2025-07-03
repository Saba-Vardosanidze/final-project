import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-[40px]">
        <p className="font-bold text-[12px] text-[#2B788B] text-center">
          E-COURSE PLATFORM
        </p>
        <h2 className="text-[#000000] text-[32px]">
          Learning and teaching online, made easy.
        </h2>
        <p>Practice and learn new things with the platform.</p>
        <button>About platform</button>
        <div className="flex justify-between max-w-[335px]">
          <div className="flex flex-col items-center">
            <div className="flex gap-[2px]">
              <Image src="/flash.svg" alt="flesh" width={13} height={16} />
              <p className="text-[20px] font-bold text-[#000000] ">
                600<span className="text-[#2B788B]">+</span>
              </p>
            </div>
            <p className="text-[#585858] text-[12px] font-semibold">
              Popular words
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-[2px]">
              <Image src="/consol.svg" alt="flesh" width={13} height={16} />
              <p className="text-[20px] font-bold text-[#000000] ">
                2<span className="text-[#2B788B]">+</span>
              </p>
            </div>
            <p className="text-[#585858] text-[12px] font-semibold">
              Mini-games
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/heroSectionBoyPhoto.png"
          alt="HeroSectionPhoto"
          width={335}
          height={280}
        />
      </div>
    </div>
  );
};

export default HeroSection;
