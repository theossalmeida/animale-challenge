import { FC, useState } from 'react'

const Footer: FC = () => {
  const [newsletterOpen, setNewsletterOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer className="relative">
      {newsletterOpen && (
        <div className="absolute bottom-full left-0 w-full bg-gray-200 text-gray-700 py-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-start px-4"
          >
            <div className="w-full md:w-1/2 pr-0 md:pr-4">
              <h2 className="text-lg font-bold uppercase">NEWSLETTER</h2>
              <p className="mt-2 text-sm">Cadastre-se para receber nossas novidades e promoções:</p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col space-y-4">
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

      <div className="bg-black text-white flex flex-col md:flex-row justify-start md:items-center p-4 relative">
        <nav className="flex flex-wrap items-center gap-4 md:space-x-6 md:ml-[50px] text-[12px]">
          {newsletterOpen && (
            <img
              src='/icons/icon_newsletter.svg'
              onClick={() => setNewsletterOpen(o => !o)}
              className="cursor-pointer h-5 w-5"
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

      <div className="flex flex-col md:flex-row bg-gray-200 text-gray-700 text-center py-2 text-[10px] items-center justify-center px-4">
        <p>
          RBX RIO COMÉRCIO DE ROUPAS LTDA. ESTRADA DOS BANDEIRANTES, 1.700 - GALPÃO 03, ARMAZÉM 104 - TAQUARA, RIO DE JANEIRO, RJ - CEP: 22775-109. CNPJ: 10.285.590/0002-80.
        </p>
      </div>
    </footer>
  )
}

export default Footer
