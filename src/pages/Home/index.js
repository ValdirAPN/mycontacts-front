import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import formatPhone from '../../utils/formatPhone';

import { Container, Header, InputSearchContainer, ListHeader, Card } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import Loader from '../../components/Loader'

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm])

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);
        const data = await response.json();

        console.log('Data', data);
        setContacts(data);
      } catch(error) {
        console.log('Error', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {
        filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button
              type="button"
              onClick={handleToggleOrderBy}
            >
              <span>Nome</span>
              <img src={arrow} alt="Arrow" />
            </button>
          </ListHeader>
        )
      }

      {
        filteredContacts?.map(({ id, name, category_name, email, phone }) => (
          <Card key={id}>
            <div className="info">
              <div className="contact-name">
                <strong>{name}</strong>
                {category_name && <small>{category_name}</small>}
              </div>
              <span>{email}</span>
              <span>{formatPhone(phone)}</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))
      }
    </Container>
  );
}
