import Image from "next/image";
import Navbar from "../app/components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="relative w-full h-screen">
        <Image
          src="/illus.jpg"
          alt="Background Image"
          layout="fill"
          objectPosition="top"   
          objectFit="cover"
          className="object-left"
          quality={100}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full">
        {/* Navbar is now in the normal document flow */}
        <Navbar />
        
        {/* Main Content */}
        <div className="p-5">
          <p>Additional content goes here. ABout nss nit kkr and everything.</p>
        </div>
      </div>
    </div>
  );
}