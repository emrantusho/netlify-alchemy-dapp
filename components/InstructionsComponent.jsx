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
						src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEij7zSW9UYpcy3ayZUe58QqwEQR2OHaheCcFdYd3ZtxE083ZxrUx4rtL8BhL9VkirV-aTMqL2q2ms1hgzaWoAwEIVG5-ag4_txjwb3zF9M-0jI-ELqBqntIwpCugUrFRIvLNdh2b23dz8ngZC8wwkbo93QgOwZRl6cgYE57i01oTd5td74S2vdaC7SN_w/s1200/Untitled%20(312%20%C3%97%20150%20px)%20(400%20%C3%97%20150%20px)%20(400%20%C3%97%20132%20px)%20(400%20%C3%97%20120%20px).png"
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
