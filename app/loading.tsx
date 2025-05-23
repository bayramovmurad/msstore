import Image from "next/image";
import loader from '@/assets/loader.gif'

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src={loader}
        alt="Loading..."
        width={150}
        height={150}
      />
    </div>
  );
};

export default LoadingPage;
