import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Send Money in<span>-Crypto</span>
				</h1>
				<p>
					Send me your problems here...{" "}
					<span>web3emran.nft@ud.me</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://t.me/jockermockerx"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Telegram</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://wa.me/+8801893441537"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Whatsapp</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://docs.tushar.sbs"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Visit Docs</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="https://web9.0.tushar.sbs" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQQw4IWDEImF2nEfKYCa0s2C84TFP3uQRSP1iCxNYv4BQS5sfH43Uc7h3CRMBcBfKG9LS-k0meFbtYHbZ66uigW8Qb7n7XODrz6sqfupi7gYVjdirevrm77EH5zM7_elGgYp4q_vdRybIpDpp00__udo0GKauRqP1epCNofAENffSLCzy9lv1rmW7a7A/s1000/Untitled%20design%20(6)%20(1).png"
						alt="Alchemy Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://facebook.com/etusho"
							target={"_blank"}
						>
							Follow Me on Facebook
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/emrantusho"
							target={"_blank"}
						>
							Follow Me on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
