import React, { useState } from 'react';
import { Modal, Conteudo, CloseButton, Titulo, Textarea, PublishButton } from './styled';
import { api } from '../../services/api';


const PublicarModal = ({ onPublish }, props) => {
  const [contributionText, setContributionText] = useState('');
  const onClose = props.close
  const idUser = localStorage.getItem("user")

  const handlePublish = async (props) => {
    const data = {
      post: contributionText,
      userId: idUser
    };

    console.log(data);
    const response = await api.post('/post/create', data);

    if (response.data.success) {
      alert('Post Criado');
    } else {
      alert('Não foi possível criar o post');
    }
  }
  
  return (
    <Conteudo>
      <Titulo>Contribua através do seu conhecimento com a nossa comunidade</Titulo>
      <Textarea
        placeholder="Digite sua contribuição aqui..."
        value={contributionText}
        onChange={(e) => setContributionText(e.target.value)}
      />
      <PublishButton onClick={handlePublish}>Publicar</PublishButton>
    </Conteudo>
  );
};

export default PublicarModal;