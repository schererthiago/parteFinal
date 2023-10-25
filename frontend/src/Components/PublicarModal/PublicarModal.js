import React, { useState } from 'react';
import { Modal, Conteudo, CloseButton, Titulo, Textarea, PublishButton } from './styled';

const PublicarModal = ({ onPublish }, props) => {
  const [contributionText, setContributionText] = useState('');
  const onClose = props.close
  
  const handlePublish = (props) => {
    onPublish(contributionText);
    onClose();
  };

  return (
      <Conteudo>
        <CloseButton onClick={onClose}>&times;</CloseButton>
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