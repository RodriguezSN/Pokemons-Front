import { Link } from "react-router-dom";
import style from "./Footer.module.css";
const Footer = () => {
	return (
		<div className={style.divPadre}>
			<div className={style.divName}>
				<h2>Proyecto Pokedex</h2>
			</div>
			<div className={style.divCopy}>
				<h3>Copyright © Rodriguez Sebastian. All rights reserved.</h3>
			</div>
			<div className={style.divEnlaces}>
				<div className={style.divButtonLinkeding}>
					<a
						href="https://www.linkedin.com/in/sebastian-nicolas-rodriguez-271b26202/"
						target="blank"
					>
						<button>
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZP0/CQBjG22scXI2Tiauy+glc3MC4+iX8DA6G9IiDJsYBBhdNHJwcNRGIHY3xjoBCgkTEAUP8A63yt7ymBVQEIq2mvSb3JM/UN5fnd+97N1wFgYuLi4tpSTJdQTKJI5lqCFNwxDLVRExjkkyW/xRexAQ7FhoPt4hJ0P7OuxwedS2FSMAygDk2DIRHRhdkGrUOgInqdnDUs0wqNgAYCI6//G8AvkgazgsaaA0dlIIG8+G0twCUggbfFb/XvAWgNfQ+ALWuewtA8XoHfJG0CWF0IpZXYS584y0A5JIFDoA7OzFM43yf3b2G7YsSpEpVqDbb8FprmaO4dvoAk5sJtgEW9jLw+NaEUbosvsPMTopdgOxLHX5TLK+CxCrAuPIf5dgE0Ntgzv/S4S2sHucheqcOrdtPPrMJsK4U+2omQgk4yVUG6jJPNTYBpreTA+ssHmQH6sq1FnsA7R/fe57aSo5d63oH7K6FOADmHTDFRwjzQ0z5LYT4NWpRo24Otyx4+mkR07JlAON9noHgYFjE9MwygPFzwe3gqGsJX/ktA3S6QIJuhxcx2bAV/rMTIRIw3uedPRNENcbG9s5zcXFxCU7pA5Jwntel+S2tAAAAAElFTkSuQmCC" />
						</button>
					</a>
				</div>
				<div className={style.divButtonGitHub}>
					<a href="https://github.com/RodriguezSN" target="blannk">
						<button>
							<img
								src="https://img.icons8.com/glyph-neue/64/github.png"
								alt="github"
							/>
							{/* <img
								width="50"
								height="50"
								src="https://img.icons8.com/ios-filled/50/github.png"
								alt="github"
							/> */}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
