import { useState } from 'react';
import { UserIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          endereco: '',
          cidade: '',
          estado: '',
          cep: ''
        });
      } else {
        throw new Error('Erro ao cadastrar');
      }
    } catch (error) {
      alert('Erro ao realizar cadastro. Tente novamente.');
      console.error('Erro:', error);
    }
  };

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title gradient-text">
            Cadastro de Cliente
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Faça seu cadastro para ter acesso a ofertas exclusivas e acompanhar seus pedidos.
          </p>
        </div>

        <div className="card glass-effect">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nome */}
              <div className="space-y-2">
                <label htmlFor="nome" className="form-label flex items-center gap-2">
                  <UserIcon className="w-5 h-5 text-primary-500" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="form-label flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-primary-500" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Digite seu email"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <label htmlFor="telefone" className="form-label flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-primary-500" />
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Endereço */}
              <div className="space-y-2">
                <label htmlFor="endereco" className="form-label flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-primary-500" />
                  Endereço
                </label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Rua, número e complemento"
                />
              </div>

              {/* Cidade */}
              <div className="space-y-2">
                <label htmlFor="cidade" className="form-label">
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Digite sua cidade"
                />
              </div>

              {/* Estado */}
              <div className="space-y-2">
                <label htmlFor="estado" className="form-label">
                  Estado
                </label>
                <select
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Selecione um estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>

              {/* CEP */}
              <div className="space-y-2">
                <label htmlFor="cep" className="form-label">
                  CEP
                </label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="00000-000"
                />
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <button type="submit" className="btn-primary shine-effect">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 