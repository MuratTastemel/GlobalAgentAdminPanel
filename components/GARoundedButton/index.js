const ButtonTypeGenerator = (type, buttonClass) => {
    if (type) {
      switch (type) {
        case "Rounded": {
          debugger;
          return (buttonClass += " btn-pill");
        }
  
        default:
          return buttonClass;
      }
    }
    return buttonClass;
  };


export default function GARounded(props) {
    const { buttonColor, text, buttonType } = props;
    let generatedType = "btn btn-" + buttonColor;
    console.log(generatedType);
    return (
      <a href="javascript:void(0)" className={"btn btn-secondary default-light"}>
        Rounded
      </a>
    );
  }