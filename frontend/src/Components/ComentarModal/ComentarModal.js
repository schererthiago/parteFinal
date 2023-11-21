import React, { useState } from 'react';
import { Modal, Conteudo, CloseButton, Titulo, Textarea, PublishButton } from './styled';
import { api } from '../../services/api';


const ComentarModal = (props) => {
  const [contributionText, setContributionText] = useState('');
  const onClose = props.close
  const idUser = localStorage.getItem("user")
  const idPost = props.post.id

  const handlePublish = async (props) => {
    const data = {
      post: contributionText,
      idUser: idUser,
      idPost: idPost
    };

    const response = await api.post('/comment/create', data);

    if (response.data.success) {
      alert('Comentário Criado');
      setContributionText('')
    } else {
      alert('Não foi possível criar o comentário');
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

export default ComentarModal;