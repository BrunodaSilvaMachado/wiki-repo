
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepositorio from '../components/ItemRepositorio';
import { api } from '../services/api';

import { Container, ImgStyled } from './styles';
import { Row } from '../components/ItemRepositorio/styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repository, setRepository] = useState([]);


  const handleSearchRepository = async () => {
    try{
      const {data} = await api.get(`repos/${currentRepo}`)

      if(!repository.find(repo => repo.id === data.id)){
        setRepository(prev => [...prev, data]);
        setCurrentRepo('')
      }
    }catch{
      alert('Repositório não encontrado')
    }
  }

  const handleRemoveRepo = (id) => {
    setRepository(repository.filter(repo=>repo.id !== id));
  }


  return (
    <Container>
      <Row>
      <ImgStyled src={gitLogo} alt = "github logo" width={72} height={72}/>
      <h1>WIKI</h1>
      </Row>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button title="Buscar" onClick={handleSearchRepository} height="62px" width="80%"/>
      {repository.map(repo => <ItemRepositorio handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
