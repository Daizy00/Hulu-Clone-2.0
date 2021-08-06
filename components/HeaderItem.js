function HeaderItem({ title, Icon }) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer group
          w-12 sm:w-20 hover:text-white mx-1"
    >
      <Icon className="h-6 sm:h-8 my-1 group-hover:animate-bounce" />
      <p
        className="opacity-0 group-hover:opacity-100
               tracking-widest"
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
