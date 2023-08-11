import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const { onAddContact } = this.props;
    const id = nanoid(4);

    onAddContact({ id, name, number });

    this.setState({
      name: '',
      number: '',
    });
  };

  // Для всех инпутов создаем один обработчик
  // Различать инпуты будем по атрибуту name
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    // const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
    
export default ContactForm;
ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};