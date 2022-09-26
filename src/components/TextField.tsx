type Props = {
  label: string;
  inputProps: any;
  onChange: any;
  value: string;
};

const TextField: React.FC<Props> = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex flex-col w-full h-3/4'>
      <label className='mb-2 text-base text-gray-900'>{label}</label>
      <textarea
        className='px-2 py-10 bg-gray-200 border-2 outline-none'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
