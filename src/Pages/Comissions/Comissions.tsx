import { useState } from 'react';
import './Comissions.css';

export const Commission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    size: '',
    colors: '',
    details: '',
    deadline: '',
    reference: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/goulartmuzzo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          subject: `Nova encomenda de mandala - ${formData.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          size: '',
          colors: '',
          details: '',
          deadline: '',
          reference: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="commission-page" style={{ marginTop: '80px' }}>
      <p className="subtitle">Preencha o formulário abaixo com os detalhes da sua encomenda</p>

      <form onSubmit={handleSubmit} className="commission-form">
        <div className="form-group">
          <label htmlFor="name">Nome completo*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone/WhatsApp*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="size">Tamanho desejado*</label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="Pequeno (20x20cm)">Pequeno (20x20cm)</option>
              <option value="Médio (30x30cm)">Médio (30x30cm)</option>
              <option value="Grande (40x40cm)">Grande (40x40cm)</option>
              <option value="Personalizado">Personalizado</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Prazo desejado</label>
            <input
              type="text"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              placeholder="Ex: 2 semanas"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="colors">Cores preferidas*</label>
          <input
            type="text"
            id="colors"
            name="colors"
            value={formData.colors}
            onChange={handleChange}
            required
            placeholder="Ex: Azul, dourado e branco"
          />
        </div>

        <div className="form-group">
          <label htmlFor="reference">Referência (link ou descrição)</label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            placeholder="Link para imagem de referência"
          />
        </div>

        <div className="form-group">
          <label htmlFor="details">Detalhes da encomenda*</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Descreva com detalhes como você quer sua mandala..."
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Fazer Encomenda'}
        </button>

        {submitStatus === 'success' && (
          <div className="success-message">
            Encomenda enviada com sucesso! Entrarei em contão em breve.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato diretamente.
          </div>
        )}
      </form>
    </div>
  );
};