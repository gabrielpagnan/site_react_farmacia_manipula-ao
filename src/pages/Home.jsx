import { Link } from 'react-router-dom'
import { ChevronRightIcon, BeakerIcon, UserGroupIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const services = [
    {
      title: 'Medicamentos Personalizados',
      description: 'Desenvolvemos fórmulas específicas para suas necessidades individuais.',
      icon: BeakerIcon,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Dermocosméticos',
      description: 'Produtos para cuidados com a pele formulados especialmente para você.',
      icon: BeakerIcon,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Suplementos',
      description: 'Suplementos manipulados de acordo com sua prescrição médica.',
      icon: BeakerIcon,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      title: 'Atendimento Personalizado',
      description: 'Equipe especializada para melhor atender suas necessidades.',
      icon: UserGroupIcon,
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/background.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Precisando de um Produto Manipulado?
            </h1>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-3xl text-white font-light">
                Chame pelo Whatsapp Abaixo
              </h2>
              <h3 className="text-2xl text-white font-light">
                Facilidade de Pagamento
              </h3>
              
              <div className="flex justify-center mt-8">
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5548998437993%26text%3DOl%25C3%25A1%26fbclid%3DPAZXh0bgNhZW0CMTEAAacQhwhlzHDL3pYmGnjeKiXCS-CVQ8MENyB-ikohZgF2F5dC72KEgBTCM8GKVg_aem_1dulh9tj_oiyfQwxMjLZFQ&e=AT020rLlFrIVCdTZo1R9gmNLYGZcM2UAyhN5d8rVnspgzDe0vAiIn7N1VoaczYSS7J6FcauFm-o37yGCsX2lgnQ-tyJiXmKoCr1jhg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-lg transition-colors"
                  style={{ backgroundColor: '#801818' }}
                >
                  <svg className="w-6 h-6 mr-2" fill="#fff" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-white font-bold text-lg">PEDIR ORÇAMENTO</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link 
              to="/vantagens"
              className="text-center group"
            >
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700">
                Vantagens
              </h3>
            </Link>

            <Link 
              to="/quem-somos"
              className="text-center group"
            >
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700">
                Quem Somos
              </h3>
            </Link>

            <Link 
              to="/depoimentos"
              className="text-center group"
            >
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700">
                Depoimentos
              </h3>
            </Link>

            <Link 
              to="/perguntas-frequentes"
              className="text-center group"
            >
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700">
                Perguntas Frequentes
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 