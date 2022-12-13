import React from 'react'
import Button from '../Button';

import { ItemContainer, Row } from './styles';

function ItemRepositorio({repo: repositorio, handleRemoveRepo}) {
  const handleRemove = () => {
    handleRemoveRepo(repositorio.id)
  }

  return (
    <ItemContainer>
        <h3>{repositorio.name}</h3>
        <p>{repositorio.full_name}</p>
        <Row>
          <p>Data de criação:</p>
          <span>{new Date(repositorio.created_at).toLocaleDateString() }</span>
        </Row>
        <Row>
          <p>Linguagem:</p>
          <span>{repositorio.language}</span>
        </Row>
        <Row>
          <p>Forks:</p>
          <span>{repositorio.forks_count}</span>
        </Row>
        <Row>
          <p>Watchers:</p>
          <span>{repositorio.watchers}</span>
        </Row>
        <Row>
          <p>Licença:</p>
          <span>{repositorio.license?.name}</span>
        </Row>
        <p>Descrição:</p>
        <span>{repositorio.description}</span>
        <br/><br/>
        <Row>
        <a className="buttonLink" href={repositorio.html_url} rel="noreferrer" target="_blank">Acessar</a>
        <Button title={"Remover"} variant="secondary" onClick={handleRemove}/>
        </Row>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepositorio;
