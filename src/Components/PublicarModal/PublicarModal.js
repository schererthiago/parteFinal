import React, { useState } from 'react';
import { Modal, Conteudo, CloseButton, Titulo, Textarea, PublishButton } from './styled';

const PublicarModal = ({ onClose, onPublish }) => {
  const [contributionText, setContributionText] = useState('');

  const handlePublish = () => {
    onPublish(contributionText);
    onClose();
  };

  return (
    <Modal>
      <Conteudo>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Titulo>Contribua através do seu conhecimento com a nossa comunidade</Titulo>
        <Textarea
          placeholder="Digite sua contribuição aqui"
          value={contributionText}
          onChange={(e) => setContributionText(e.target.value)}
        />
        <PublishButton onClick={handlePublish}>Publicar</PublishButton>
      </Conteudo>
    </Modal>
  );
};

export default PublicarModal;