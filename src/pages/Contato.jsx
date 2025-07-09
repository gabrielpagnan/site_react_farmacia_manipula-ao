import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

const Contato = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/mensagens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, data: new Date().toISOString() }),
      })

      if (response.ok) {
        setSuccessMessage('Mensagem enviada com sucesso!')
        reset()
        setTimeout(() => setSuccessMessage(''), 3000)
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
    }
  }

  const contatoInfo = [
    {
      icon: MapPinIcon,
      title: 'Endereço',
      content: ['Av. Principal, 1234', 'Centro, Sua Cidade - UF', 'CEP: 12345-678']
    },
    {
      icon: PhoneIcon,
      title: 'Telefone',
      content: ['(11) 1234-5678']
    },
    {
      icon: EnvelopeIcon,
      title: 'E-mail',
      content: ['contato@farmacinalis.com.br']
    },
    {
      icon: ClockIcon,
      title: 'Horário de Funcionamento',
      content: ['Segunda a Sexta: 08h às 18h', 'Sábado: 08h às 12h']
    }
  ]

  return (
    <div className="max-w-6xl mx-auto pt-24 px-4 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Entre em Contato</h1>
        <p className="text-gray-600 text-lg">
          Estamos aqui para ajudar. Entre em contato conosco por qualquer um dos canais abaixo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informações de Contato */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contatoInfo.map((info, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-100 text-primary-600 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mapa */}
          <div className="card overflow-hidden">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598455619805!2d-46.6549!3d-23.5649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUzLjYiUyA0NsKwMzknMTcuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="card">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-primary-100 text-primary-600">
              <ChatBubbleLeftRightIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold">Envie uma Mensagem</h2>
          </div>

          {successMessage && (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-6 py-4 rounded-lg mb-6 animate-slide-up">
              <CheckCircleIcon className="h-5 w-5" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                className={`input-field ${errors.nome ? 'border-red-500 focus:ring-red-200' : ''}`}
                placeholder="Digite seu nome"
                {...register('nome', { required: 'Nome é obrigatório' })}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-200' : ''}`}
                placeholder="seu@email.com"
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'E-mail inválido'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="assunto" className="form-label">
                Assunto
              </label>
              <input
                type="text"
                id="assunto"
                className={`input-field ${errors.assunto ? 'border-red-500 focus:ring-red-200' : ''}`}
                placeholder="Digite o assunto da mensagem"
                {...register('assunto', { required: 'Assunto é obrigatório' })}
              />
              {errors.assunto && (
                <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="mensagem" className="form-label">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows="5"
                className={`input-field ${errors.mensagem ? 'border-red-500 focus:ring-red-200' : ''}`}
                placeholder="Digite sua mensagem"
                {...register('mensagem', { required: 'Mensagem é obrigatória' })}
              ></textarea>
              {errors.mensagem && (
                <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contato 