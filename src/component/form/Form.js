import React, { Component } from 'react';
import styles from './form.module.css';

class Form extends Component {
	state = { name: '', number: '' };

	handleChange = ({ target }) => {
		const { name, value } = target;

		this.setState({ [name]: value });
	};

	handleSubmit = (evt) => {
		evt.preventDefault();

		this.props.onSubmit(this.state);
		this.resetForm();
	};
	resetForm = () => {
		this.setState({ name: '', number: '' });
	};
	render() {
		const { name, number } = this.state;
		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				<label className={styles.form__label}>
					Name
					<input
						type="text"
						name="name"
						value={name}
						placeholder="Enter name"
						// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
						onChange={this.handleChange}
					/>
				</label>
				<label className={styles.form__label}>
					Number
					<input
						type="tel"
						name="number"
						value={number}
						placeholder="Enter number"
						title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
						required
						onChange={this.handleChange}
					/>
				</label>
				<button className={styles.form__button} type="submit">
					Add contact
				</button>
			</form>
		);
	}
}

export default Form;