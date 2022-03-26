import styles from "./../styles/Hasan.module.css";
import GALoader from "./../components/GALoader/index";
import GAInput from "../components/GAInput/index";
import GAButton from "../components/GAButton";
export default function hasan() {
  return (
    <div>
      <GAInput
        iconName={"zmdi zmdi-eye text-muted"}
        placeholder={"denemeholder"}
      />
      <GAInput
        iconName={"zmdi zmdi-email text-muted"}
        placeholder={"ikinci"}
        type={"password"}
      />
      <GAButton
        buttonType={"Rounded"}
        buttonColor={"danger"}
        text={"Selaminko"}
      />
      <GAButton buttonColor={"default"} text={"Selaminko"} />
      <GAButton buttonColor={"primary"} text={"Selaminko"} />
      <GAButton buttonColor={"secondary"} text={"Selaminko"} />
      <GAButton buttonColor={"info"} text={"Selaminko"} />
      <GAButton buttonColor={"warning"} text={"Selaminko"} />
    </div>
  );
}
