const BottomMenu = () => {
  return (
    <nav className="fixed bottom-10 left-0 right-0 flex items-center gap-5 w-9/12 md:w-4/12 lg:w-3/12 mx-auto justify-center bg-black text-white p-5 shadow rounded z-40">
      <a href="#hero" className="uppercase hover:text-gray-300 hover:cursor-pointer">Skyline</a>
      <a href="#aboutus"><i className="fa-solid fa-user text-lg hover:text-gray-300 hover:cursor-pointer"></i></a>
      <a href="#portfolio"><i className="fa-solid fa-laptop text-lg hover:text-gray-300 hover:cursor-pointer"></i></a>
      <a href="#contactus" className="bg-cyan-400 hover:bg-cyan-500 py-2 px-4 rounded" >Contact Us</a>
    </nav>
  );
};

export default BottomMenu;