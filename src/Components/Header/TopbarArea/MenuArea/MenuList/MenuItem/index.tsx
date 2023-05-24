import React, { useCallback, useState } from 'react'

interface MenuItemProps {
	title: string;
	hrefTitle: string;
	list?: Array<listProps>
}
interface listProps {
	listTitle: string;
	listHref: string;
}
const Index: React.FC<MenuItemProps> = ({ title, hrefTitle, list }) => {
	const [showCardion, setShowCardion] = useState(false);

	const toggleShowCardion = useCallback(() => {
		setShowCardion(state => !state)
	}, [])
	return (
		<li className={showCardion ? "menu-item-has-children active" : "menu-item-has-children"}>
			<a href={hrefTitle} className="drop-down">{title}</a>
			<i onClick={toggleShowCardion} className={showCardion ? "bi bi-plus dropdown-icon active" : "bi bi-plus dropdown-icon"}></i>
			<ul className="sub-menu" style={showCardion ? { display: "block" } : {}}>
				{list ? list.map((item, index) => {
					const { listTitle, listHref } = item;
					return (
						<li key={index}><a href={listHref}>{listTitle}</a></li>
					)
				}) : null}
			</ul>
		</li>
	)
}

export default Index