import EnglishImg from "/src/assets/images/icon/flag-eng.svg";
import GermanyImg from "/src/assets/images/icon/flag-germeny.svg";
import FrenchImg from "/src/assets/images/icon/flag-french.svg"
import BengaliImg from "/src/assets/images/icon/flag-bangla.svg"
const index = () => {
	return (

		<div className="language-select">
			<img src={EnglishImg} alt="Language" /><span>Language</span>
			<ul className="topbar-sublist">
				<li><img src={GermanyImg} alt="Germany Language" /><span>Germeny</span></li>
				<li><img src={FrenchImg} alt="French Language" /><span>French</span></li>
				<li><img src={BengaliImg} alt="Bengali Language" /><span>Bengali</span></li>
			</ul>
		</div>

	)
}

export default index