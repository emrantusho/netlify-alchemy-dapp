import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://web9.0.tushar.sbs" target={"_blank"}>
				<img className={styles.alchemy_logo} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqr0DOduikGfYctZzZGrU97Zefu8A6QQ3xvORtCMwxDbjOK24gI3K53eqxvpTJSuRPISWLMo81mB2JIyGgvlC7NVOuSmxONAdSsdaqAs7QIrgbJnJs7uJt3yXnrTKyCQKbUbT301bjF3dSf1S1sk8sLwqYlmoM2pfjPfdE3XjIIMOLfmjXpaEXJbgNsg/s728-rw/Whiteboard%20(3).webp"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
