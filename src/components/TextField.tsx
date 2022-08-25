type Props = {
  label: string;
  inputProps: any;
  onChange: any;
  value: string;
};

const TextField: React.FC<Props> = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-base text-gray-800'>{label}</label>
      <input
        className='px-3 py-2 bg-gray-200 border-2 outline-none'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
