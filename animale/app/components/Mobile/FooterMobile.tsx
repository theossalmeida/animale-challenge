import { FC, useState } from 'react'

const Footer: FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitted(true)
      setName('')
      setEmail('')
    }
    
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
      <footer className="relative z-10">
        {/* Newsletter section always visible on mobile */}
        <form onSubmit={handleSubmit} className="w-full bg-black text-white py-6 px-4">
          <h2 className="text-lg uppercase text-center">NEWSLETTER</h2>
          <p className="mt-2 text-sm text-center">Cadastre-se e fique por dentro das nossas novidades e promoções:</p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 mb-4 text-white bg-black"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 text-white bg-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-black p-2 mt-4 font-bold"
            >
              OK
            </button>
            {submitted && (
              <p className="mt-2 text-center text-white">
                Cadastrado com sucesso!
              </p>
            )}
          </div>
        </form>

        {/* Accordion links */}
        <div className="border-t border-b border-white text-white bg-black">
          {['A MARCA', 'MINHA CONTA', 'POLÍTICAS', 'FORMA DE PAGAMENTO', 'REDES SOCIAIS', 'OUTRAS COLEÇÕES'].map(label => (
            <div key={label} className="flex justify-between items-center px-4 py-3 border-b border-white">
              <span className="uppercase text-sm">{label}</span>
              <span className="text-xl font-bold">+</span>
            </div>
          ))}
        </div>

        <div className="bg-black text-white flex justify-center p-4">
          <button onClick={scrollToTop} className="font-bold flex flex-col items-center">
            <span className="mb-1 font-bold">^</span>
            SUBIR
          </button>
        </div>
        <div className="flex bg-gray-200 text-gray-700 text-center py-2 text-[8px] items-center justify-center p-2">
          RBX RIO COMÉRCIO DE ROUPAS LTDA. ESTRADA DOS BANDEIRANTES, 1.700 - GALPÃO 03, ARMAZÉM 104 - TAQUARA, RIO DE JANEIRO, RJ - CEP: 22775-109. CNPJ: 10.285.590/0002-80.
        </div>
      </footer>
    )
}


export default Footer
