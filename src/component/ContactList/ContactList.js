import React from 'react';
import style from './contactList.module.css';
const ContactList = ({ contacts, delContact }) => {
	return (
		<ul className={style.contactList}>
			{contacts.map((item) => (
				<li key={item.id} className={style.contactList__item}>
					<span>{item.name}</span>
					<span>{item.number}</span>
					<button className={style.contactList__button} onClick={() => delContact(item.id)}>
						X
					</button>
				</li>
			))}
		</ul>
	);
};
export default ContactList;