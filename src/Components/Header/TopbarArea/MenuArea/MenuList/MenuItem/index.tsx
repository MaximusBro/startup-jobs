import React from 'react'

interface MenuItemProps {
	title: string;
	hrefTitle: string;
	list?: Array<listProps>
}
interface listProps {
	listTitle: string;
	listHref: string;
}
const index: React.FC<MenuItemProps> = ({ title, hrefTitle, list }) => {
	return (
		<li className="menu-item-has-children ">
			<a href={hrefTitle} className="drop-down">{title}</a><i className="bi bi-plus dropdown-icon"></i>
			<ul className="sub-menu">
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

export default index