import Image from "next/image";
import demo from "@/assets/index/demo_page.svg";
import white_logo from "@/assets/index/white_logo.svg";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-center px-8 md:px-24 pt-12 relative`}
    >
      <div className="header absolute top-8">
        <Image
          src={white_logo}
          alt="White logo"
          className="w-[80%] md:w-full"
        />
      </div>
      <div className="lg:w-[60%] z-40">
        <p className="text-[52px] md:text-[80px] font-bold leading-tight">
          MAKE YOUR LIFE EASIER
        </p>
        <p className="text-md md:text-lg pt-4 pb-6 italic">
          Chào mừng bạn đến với KPIHub <br />
          Nơi tuyệt vời để bắt đầu một hành trình mới.
        </p>

        <div className="flex gap-2 text-sm md:text-lg">
          <a href="#" className="bg-[#6F65E8] hover:bg-[#857CF3] rounded-[15px] py-2 px-6 text-gray-800 font-semibold transition-all duration-300 ease-in-out">
            Đăng ký ngay
          </a>
          <a
            href="#_"
            className="inline-flex items-center justify-center px-8 py-0 text-center no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-[15px] cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
      <Image
        src={demo}
        alt="Demo page"
        className="absolute bottom-0 right-0 w-[40%]"
      />
    </main>
  );
}
