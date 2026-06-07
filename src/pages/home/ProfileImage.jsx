const ProfileImage = () => {
  return (
    <div
      className="
        w-[200px] h-[200px]
        md:w-[250px] md:h-[250px]
        lg:w-[300px] lg:h-[300px]
        justify-self-center
        bg-[url('/src/assets/perfil.png')]
        bg-cover bg-center
        animate-profile
        shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)]
        
        md:shadow-[inset_0_0_0_8px_rgba(255,255,255,0.3)]
        max-md:shadow-[inset_0_0_0_6px_rgba(255,255,255,0.3)]
      "
    ></div>
  );
};

export default ProfileImage;
