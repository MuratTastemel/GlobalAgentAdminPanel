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

export default function GAButton(props) {
  const { buttonColor, text, buttonType } = props;
  let generatedType = "btn btn-" + buttonColor;
  generatedType = ButtonTypeGenerator(buttonType, generatedType);
  console.log(generatedType);
  return (
    <a href="javascript:void(0)" className={"btn btn-warning btn-pill"}>
      aaaaaa
    </a>
  );
}
