export default function GAInput(props) {
  const { placeholder, type, iconName } = props;
  const generatedType = type ? type : "email";
  return (
    <div>
      <div
        className="wrap-input100 validate-input input-group"
        id="Password-toggle"
      >
        <a className="input-group-text bg-white text-muted">
          <i className={iconName} aria-hidden="true" />
        </a>
        <input
          className="input100 border-start-0 form-control ms-0"
          type={generatedType}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
