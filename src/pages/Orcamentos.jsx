import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  PlusCircleIcon,
  TrashIcon,
  CalculatorIcon,
  CheckCircleIcon,
  UserIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

const Orcamentos = () => {
  const [clientes, setClientes] = useState([])
  const [produtos, setProdutos] = useState([])
  const [total, setTotal] = useState(0)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    // Carregar lista de clientes
    fetch('http://localhost:3001/clientes')
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Erro ao carregar clientes:', error))
  }, [])

  const adicionarProduto = () => {
    setProdutos([...produtos, { nome: '', dosagem: '', quantidade: 0, precoUnitario: 0 }])
  }

  const removerProduto = (index) => {
    const novosProdutos = produtos.filter((_, i) => i !== index)
    setProdutos(novosProdutos)
    calcularTotal(novosProdutos)
  }

  const atualizarProduto = (index, campo, valor) => {
    const novosProdutos = [...produtos]
    novosProdutos[index] = { ...novosProdutos[index], [campo]: valor }
    setProdutos(novosProdutos)
    calcularTotal(novosProdutos)
  }

  const calcularTotal = (listaProdutos) => {
    const novoTotal = listaProdutos.reduce((acc, produto) => {
      return acc + (produto.quantidade * produto.precoUnitario)
    }, 0)
    setTotal(novoTotal)
  }

  const onSubmit = async (data) => {
    const orcamento = {
      ...data,
      produtos,
      total,
      data: new Date().toISOString(),
    }

    try {
      const response = await fetch('http://localhost:3001/orcamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orcamento),
      })

      if (response.ok) {
        setSuccessMessage('Orçamento salvo com sucesso!')
        setProdutos([])
        setTotal(0)
        reset()
        setTimeout(() => setSuccessMessage(''), 3000)
      }
    } catch (error) {
      console.error('Erro ao salvar orçamento:', error)
    }
  }

  return (
    <div className="max-w-6xl mx-auto pt-24 px-4 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">Criar Orçamento</h1>
        <p className="text-gray-600 text-lg">
          Selecione o cliente e adicione os produtos para gerar um orçamento personalizado
        </p>
      </div>

      <div className="card">
        {successMessage && (
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-6 py-4 rounded-lg mb-6 animate-slide-up">
            <CheckCircleIcon className="h-5 w-5" />
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UserIcon className="w-5 h-5 text-primary-600" />
              <label htmlFor="clienteId" className="form-label mb-0">
                Selecione o Cliente
              </label>
            </div>
            <select
              id="clienteId"
              className={`input-field ${errors.clienteId ? 'border-red-500 focus:ring-red-200' : ''}`}
              {...register('clienteId', { required: 'Cliente é obrigatório' })}
            >
              <option value="">Selecione um cliente</option>
              {clientes.map(cliente => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </option>
              ))}
            </select>
            {errors.clienteId && (
              <p className="text-red-500 text-sm mt-1">{errors.clienteId.message}</p>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CalculatorIcon className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-semibold">Produtos</h2>
              </div>
              <button
                type="button"
                onClick={adicionarProduto}
                className="btn-secondary flex items-center gap-2"
              >
                <PlusCircleIcon className="w-5 h-5" />
                <span>Adicionar Produto</span>
              </button>
            </div>

            <div className="space-y-4">
              {produtos.map((produto, index) => (
                <div
                  key={index}
                  className="card bg-gray-50 hover:bg-white transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="form-label">Nome do Produto</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Ex: Vitamina C"
                        value={produto.nome}
                        onChange={(e) => atualizarProduto(index, 'nome', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="form-label">Dosagem</label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Ex: 500mg"
                        value={produto.dosagem}
                        onChange={(e) => atualizarProduto(index, 'dosagem', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="form-label">Quantidade</label>
                      <input
                        type="number"
                        className="input-field"
                        placeholder="0"
                        value={produto.quantidade}
                        onChange={(e) => atualizarProduto(index, 'quantidade', Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="form-label">Preço Unitário (R$)</label>
                      <input
                        type="number"
                        step="0.01"
                        className="input-field"
                        placeholder="0,00"
                        value={produto.precoUnitario}
                        onChange={(e) => atualizarProduto(index, 'precoUnitario', Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removerProduto(index)}
                    className="mt-4 text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <TrashIcon className="w-4 h-4" />
                    <span>Remover Produto</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-primary-50 border-primary-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xl font-semibold text-primary-700">
                <CurrencyDollarIcon className="w-6 h-6" />
                <span>Total do Orçamento:</span>
              </div>
              <span className="text-2xl font-bold text-primary-700">
                R$ {total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="btn-primary w-full md:w-auto min-w-[200px]"
              disabled={produtos.length === 0}
            >
              Salvar Orçamento
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Orcamentos 