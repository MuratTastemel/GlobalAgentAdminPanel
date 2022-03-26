

export default function GAIconButton(props) {
    const { buttonColor, text, buttonType } = props;
    let generatedType = "btn btn-" + buttonColor;
    console.log(generatedType);
    return (
      <a href="javascript:void(0)" className={"btn btn-danger"}>
        IconButton
      </a>
    );
  }
  