import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <form>
      <label for="uname"><b>E-mail</b></label>
    <input type="text" placeholder="E-mail" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Password" name="psw" />
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
      </form>
    </div>
  )
}
