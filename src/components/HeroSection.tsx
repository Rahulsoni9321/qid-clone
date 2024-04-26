import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate=useNavigate();
  return (
    <div className="min-w-screen bg-[url(https://oneqid.com/wp-content/uploads/2023/09/fgh-bg-1.png)] bg-cover bg-center flex flex-col md:justify-around justify-center px-8 gap-4  text-start md:text-center py-28  h-screen items-start md:items-center">
    <div className="max-w-6xl text-5xl px-1 tracking-normal leading-tighter md:text-7xl font-bold md:font-bold text-white/90 font-abc">
      every person deserves to know and be known by their true identity
    </div>
    <button
      onClick={() => {
        navigate("/app");
      }}
      className="text-lg px-10 py-4 font-bold font-abc bg-white rounded-full text-black flex items-center gap-2"
    >
      Download qid
    </button>
  </div>
  )
}

export default HeroSection
