type Props = {
  label: string;
  inputProps: any;
  onChange: any;
  value: string;
};

const TextTitle: React.FC<Props> = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-base text-gray-900'>{label}</label>
      <textarea
        className='px-2 py-1 bg-gray-200 border-2 outline-none'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextTitle;
