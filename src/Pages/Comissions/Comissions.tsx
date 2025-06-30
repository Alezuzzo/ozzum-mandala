import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import './Comissions.css';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

// Tipo para os dados do formulário
type FormInputs = {
  name: string;
  email: string;
  phone: string;
  size: 'Pequeno (20x20cm)' | 'Médio (30x30cm)' | 'Grande (40x40cm)' | 'Personalizado' | '';
  colors: string;
  details: string;
  deadline?: string;
  reference?: string;
};

export const Commission = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormInputs>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
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
          // CORREÇÃO: Alterado de volta para 'subject' como no código original.
          subject: `Nova encomenda de mandala - ${formData.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="commission-page">
      <section className="commission-hero">
        <div className="commission-hero-content">
          <h1>Encomende sua Mandala</h1>
          <p>Dê vida à sua intenção através de uma peça de arte única e personalizada.</p>
        </div>
      </section>

      <div className="commission-content-wrapper">
        <div className="commission-intro-text">
          <h2>Como Funciona?</h2>
          <p>O processo de encomenda é uma colaboração. Preencha o formulário com o máximo de detalhes possível sobre a sua visão.</p>
          <p>Após o envio, entrarei em contacto consigo por e-mail ou WhatsApp para acertarmos os detalhes, o orçamento e o prazo de entrega.</p>
          <h3>Vamos começar a co-criar!</h3>
          <p>Estou ansiosa por transformar a sua ideia numa mandala que vibre com a sua energia.</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="commission-form" noValidate>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input id="name" {...register('name', { required: 'O seu nome é obrigatório.' })} />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">O seu melhor E-mail</label>
            <input id="email" type="email" {...register('email', { required: 'O e-mail é essencial para o contacto.', pattern: { value: /^\S+@\S+$/i, message: "Insira um e-mail válido." }})} />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Telefone/WhatsApp</label>
            <input id="phone" type="tel" {...register('phone', { required: 'O telefone ajuda a agilizar o contacto.' })} />
            {errors.phone && <span className="form-error">{errors.phone.message}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="size">Tamanho Desejado</label>
              <select id="size" {...register('size', { required: 'Escolha um tamanho.' })}>
                <option value="">Selecione...</option>
                <option value="Pequeno (20x20cm)">Pequeno (20x20cm)</option>
                <option value="Médio (30x30cm)">Médio (30x30cm)</option>
                <option value="Grande (40x40cm)">Grande (40x40cm)</option>
                <option value="Personalizado">Personalizado</option>
              </select>
              {errors.size && <span className="form-error">{errors.size.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="deadline">Prazo (opcional)</label>
              <input id="deadline" type="text" placeholder="Ex: Presente para 2 semanas" {...register('deadline')} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="colors">Cores e Intenções</label>
            <input id="colors" placeholder="Ex: Tons de azul e dourado, para calma e prosperidade" {...register('colors', { required: 'Descreva as cores desejadas.' })} />
            {errors.colors && <span className="form-error">{errors.colors.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="details">Detalhes da sua Visão</label>
            <textarea id="details" rows={5} placeholder="Descreva o que tem em mente: símbolos, estilo, o que esta mandala representa para si..." {...register('details', { required: 'Os detalhes são a alma da sua encomenda.' })} />
            {errors.details && <span className="form-error">{errors.details.message}</span>}
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'A enviar...' : 'Enviar Pedido de Encomenda'}
            <FiSend />
          </button>

          {submitStatus === 'success' && (
            <div className="form-message success">
              <FiCheckCircle /> Pedido enviado com sucesso! Entrarei em contacto em breve.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="form-message error">
              <FiAlertCircle /> Ocorreu um erro. Por favor, tente novamente ou contacte-me diretamente.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
