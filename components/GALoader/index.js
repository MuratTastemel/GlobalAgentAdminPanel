import styles from "./GALoader.module.css";
import Image from "next/image";


export default function Index (props) {
    const {width,height} = props;
    return  (
        <div className={styles.globalLoader}>
            <Image src="/loader.svg"  className={styles.loaderImg} alt="Vercel Logo" width={width} height={height} />
        </div>

    )
}
