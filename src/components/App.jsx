import React, { Component } from 'react';
import ContactForm from './ContacForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // LOCAL STORAGE и жизненные циклы

  // удобен, чтобы взять какие-то начальные данные
  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts'); // contacts является ключем в localStorage
    const parsedContacts = JSON.parse(contacts); // преобразуем в JSON формат

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    // console.log(parsedContacts)ж
  }

  // вызывается после каждого обновления
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    // как только обновился STATE, то есть, если новое и предыдущее не равны, то выполняется тело update
    if (this.state.contacts !== prevState.contacts) {
      console.log('updated field Contacts, записываю contacts в хранилище');

      /* и теперь можно взять текушие CONTACTS и положить в local storage
       и при каждом update приводим к строке и перезаписываем в local storage*/
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = contact => {
    const { contacts } = this.state;
    const { name } = contact;

    // Для проверки существующего контакта используйте паттерн "ранний возврат"
    // if (isExist) {
    // alert(`${name} is already in contacts.`);
    // return
    // }
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      // Notiflix.Notify.info(`${name} is already in contcts`)
      alert(`${name} is already in contacts.`);
      return;
    }

    
      /*когда нужно что-то положить в обновленный state,
        1) делаем новый массив, в него распыляем старый;
        2) добавляем новый элемент в конец или начало массива[...old[], el]    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));*/
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} filter={filter} />
        <ContactList
          contacts={filteredContacts}
          filter={filter}
          onDeleteBtn={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
