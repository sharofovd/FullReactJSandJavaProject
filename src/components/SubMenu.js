import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// #14266e #252831 
const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 50px;
text-decoration: none;
font-size: 18px;

&:hover {
	background: #2e354f;
	border-left: 4px solid green;
	cursor: pointer;
}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #2e354f;
height: 50px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;

&:hover {
	background: green;
	cursor: pointer;
}
`;

const SubMenu = ({ item ,toggle, subnav, setSubnav}) => {
function showSubnav(subTitle) {
	subnav===item.title ? setSubnav(undefined): setSubnav(subTitle);
}

return (
	<>
	<SidebarLink to={item.path}
	onClick={() => showSubnav(item.title)}>
		<div>
		{item.icon}
		<SidebarLabel>{item.title}</SidebarLabel>
		</div>
		<div>
		{item.subNav && subnav
			? item.iconOpened
			: item.subNav
			? item.iconClosed
			: null}
		</div>
	</SidebarLink>
	{item.subNav && item.title === subnav &&
		item.subNav.map((item, index) => {
		return (
			<DropdownLink to={item.path} key={index} onClick={toggle}>
			{item.icon}
			<SidebarLabel>{item.title}</SidebarLabel>
			</DropdownLink>
		);
		})}
	</>
);
};

export default SubMenu;