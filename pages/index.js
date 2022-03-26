import styles from "./../styles/Hasan.module.css";
import GALoader from "./../components/GALoader/index";
import GAInput from "../components/GAInput/index";
import GAButton from "../components/GAButton";
import GALightButton from "../components/GALıghtButton";
import GADisableDefButton from "../components/GADisableDefButton";
import GASocialButtons from "../components/GASocialButtons";
import GARoundedButton from "../components/GARoundedButton";
import GAOutline from "../components/GAOutlineButton";
import GAIconButton from "../components/GAIconButton";



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
    
    
      <GALightButton
        buttonType={"Rounded"}
        buttonColor={"danger"}
        text={"Selaminko"}
      />
      <GALightButton buttonColor={"default"} text={"Selaminko"} />
      <GALightButton buttonColor={"primary"} text={"Selaminko"} />
      <GALightButton buttonColor={"secondary"} text={"Selaminko"} />
      <GALightButton buttonColor={"info"} text={"Selaminko"} />
      <GALightButton buttonColor={"warning"} text={"Selaminko"} />
     



      <GADisableDefButton
        buttonType={"Rounded"}
        buttonColor={"secondary"}
        text={"Selaminko"}
      />
      <GADisableDefButton buttonColor={"default"} text={"Selaminko"} />
      <GADisableDefButton buttonColor={"primary"} text={"Selaminko"} />
      <GADisableDefButton buttonColor={"secondary"} text={"Selaminko"} />
      <GADisableDefButton buttonColor={"info"} text={"Selaminko"} />
      <GADisableDefButton buttonColor={"warning"} text={"Selaminko"} />


      <GASocialButtons
        buttonType={"button"}
        buttonColor={"secondary"}
        text={"Selaminko"}
      />
      <GASocialButtons buttonColor={"default"} text={"Selaminko"} />
      <GASocialButtons buttonColor={"primary"} text={"Selaminko"} />
      <GASocialButtons buttonColor={"secondary"} text={"Selaminko"} />
      <GASocialButtons buttonColor={"info"} text={"Selaminko"} />
      <GASocialButtons buttonColor={"warning"} text={"Selaminko"} />


      <GARoundedButton
        buttonType={"button"}
        buttonColor={"secondary"}
        text={"Selaminko"}
      />
      <GARoundedButton buttonColor={"default"} text={"Selaminko"} />
      <GARoundedButton buttonColor={"primary"} text={"Selaminko"} />
      <GARoundedButton buttonColor={"secondary"} text={"Selaminko"} />
      <GARoundedButton buttonColor={"info"} text={"Selaminko"} />
      <GARoundedButton buttonColor={"warning"} text={"Selaminko"} />

      <GAOutline
        buttonType={"button"}
        buttonColor={"secondary"}
        text={"Selaminko"}
      />
      <GAOutline buttonColor={"default"} text={"Selaminko"} />
      <GAOutline buttonColor={"primary"} text={"Selaminko"} />
      <GAOutline buttonColor={"secondary"} text={"Selaminko"} />
      <GAOutline buttonColor={"info"} text={"Selaminko"} />
      <GAOutline buttonColor={"warning"} text={"Selaminko"} />
      
      <GAIconButton
        buttonType={"button"}
        buttonColor={"secondary"}
        text={"Selaminko"}
      />
      <GAIconButton buttonColor={"default"} text={"Selaminko"} />
      <GAIconButton buttonColor={"primary"} text={"Selaminko"} />
      <GAIconButton buttonColor={"secondary"} text={"Selaminko"} />
      <GAIconButton buttonColor={"info"} text={"Selaminko"} />
      <GAIconButton buttonColor={"warning"} text={"Selaminko"} />
    

     
    </div>
  );
}
