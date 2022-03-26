import styles from "./../styles/Hasan.module.css";
import GALoader from "./../components/GALoader/index";
import GAInput from "../components/GAInput/index";
import GAButton from "../components/GAButton";
import GALıghtButton from "../components/GALıghtButton";
import GAHıghlighterButton from "../components/GAHıghlighter";

export default function hasan() {
  return (
    <div>
      <GAInput
        iconName={"zmdi zmdi-email text-muted"}
        placeholder={"denemeholder"}
      />
      <GAInput
        iconName={"zmdi zmdi-eye text-muted"}
        placeholder={"ikinci"}
        type={"password"}
      />
      <GAButton
        buttonType={"Rounded"}
        buttonColor={"danger"}
        text={"Selaminko"}
      />
      <GAButton buttonColor={"default"} text={"Selaminko"} />


    <GALıghtButton
      buttonType={"Lıght"}
      buttonColor={"danger"}
      text={"Selaminko"}
    />

    <GAHıghlighterButton
      buttonType={"Lıght"}
      buttonColor={"secondary"}
      text={"Selaminko"}
    />

    </div>
  );
}
