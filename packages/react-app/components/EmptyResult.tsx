/* eslint-disable @next/next/no-img-element */
export const EmptyResult = () => (
    <div className="w-full mx-auto flex justify-center items-center h-[50vh]">
    <div className="">
      <img
        src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1685382903/empty-folder_iscmxl.png"
        alt=""
        width={150}
      />
      <p className="text-grey">oops! No result shown</p>
    </div>
  </div>
);