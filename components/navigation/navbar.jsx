import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://web9.0.tushar.sbs" target={"_blank"}>
				<img className={styles.alchemy_logo} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUzhd_5cGV_h1TISh2fe4UNJjz0416K1JbjTjNtCIPz5QmN50k_cx8rLiHIdshjh_yX0H_XgkXuGcoIju-ZroJzeOdS1Yq99Pd9OjuB1hPXPhpmgj_LI5dxY4Gqq9i5knlyTsg4nI6KcX6lT_zfj-0L0Fe494q6VL83dLVWW5RdLsXYgHKwrWv3WSQwg/s135-rw/WhiteBoard%20(4).webp"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
