import Social from "./Social";
import Data from "./Info";
import ProfileImage from "./ProfileImage";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 grid gap-24">
        <div className="grid grid-cols-1 gap-12 pt-10 items-center md:grid-cols-2 lg:grid-cols-[100px_1fr_2fr] ">
          {/* Iconos de redes sociales */}
          <Social />

          {/* Imagen de perfil */}
          <ProfileImage />

          {/* Información personal */}
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
