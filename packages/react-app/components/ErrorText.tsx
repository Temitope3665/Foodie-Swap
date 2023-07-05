interface IErrorText {
    message: string;
}

export const ErrorText = ({ message }: IErrorText) => {
  return (
    <div className="">
      <p className="text-[12px] text-[#DC2626] -mt-1 mb-2">{message}</p>
    </div>
  );
};
