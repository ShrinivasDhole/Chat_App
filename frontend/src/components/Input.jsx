// eslint-disable-next-line react/prop-types
const Input = ({ value, placeholder , type}) => {
  return (
    <div>
      <label className="label p-2">
        <span className="text-base label-text">{value}</span>
      </label>
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        className="w-full input input-bordered h-10"
      />
    </div>
  );
};

export default Input;
