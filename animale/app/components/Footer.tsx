import { FC, useState } from 'react'

const Footer: FC = () => {
    const [newsletterOpen, setNewsletterOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    }

  return (
    <footer className='relative'>
        {newsletterOpen && (
            <div className="absolute bottom-full left-0 w-full bg-gray-200 text-gray-700 py-6">
                <form 
                    onSubmit={handleSubmit}
                    className="max-w-screen-xl mx-auto flex justify-between items-start px-4"
                >
                {/* Left side: title + description */}
                <div className="w-1/2 pr-4">
                    <h2 className="text-lg font-bold uppercase">NEWSLETTER</h2>
                    <p className="mt-2 text-sm">Cadastre-se para receber nossas novidades e promoções:</p>
                </div>
                {/* Right side: inputs stacked */}
                <div className="w-1/2 pl-4 flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="p-2 border border-gray-300 w-full"
                    />
                    <div className="relative">
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border border-gray-300 w-full pr-12"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 h-full px-3 bg-black text-white w-[100px]"
                    >
                        OK
                    </button>
                    {submitted && (
                        <p className="text-green-600 mt-2">
                            Cadastrado com sucesso!
                        </p>
                    )} 
                    </div>
                </div>
                </form>
            </div>
        )}
      <div className="bg-black text-white flex justify-start p-4 relative">
        <nav className="flex items-center space-x-6 ml-[50px] text-[12px]">
          {newsletterOpen && (
            <img
                src='/icons/icon_newsletter.svg'
                onClick={() => setNewsletterOpen(o => !o)}
                className="relative cursor-pointer h-[20] w-[20]"
            />
          )}
          <a href="/institucional">A MARCA</a>
          <a href="/minha-conta">MINHA CONTA</a>
          <a href="/politicas">POLITICAS</a>
          <a href="/formas-pagamento">FORMAS DE PAGAMENTO</a>
          <button
            onClick={() => setNewsletterOpen(o => !o)}
            className="relative"
          >
            NEWSLETTER
          </button> 
        </nav>
      </div>
      <div className="flex bg-gray-200 text-gray-700 text-center py-2 text-[10px] items-center justify-center">
      RBX RIO COMÉRCIO DE ROUPAS LTDA. ESTRADA DOS BANDEIRANTES, 1.700 - GALPÃO 03, ARMAZÉM 104 - TAQUARA, RIO DE JANEIRO, RJ - CEP: 22775-109. CNPJ: 10.285.590/0002-80.
      </div>
    </footer>
  )
}

export default Footer
