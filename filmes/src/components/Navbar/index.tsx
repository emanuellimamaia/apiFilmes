"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Navbar () {
  const [input, setInput] = useState("")
  const router = useRouter()

  const searchMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`?movie=${input}`)
    setInput("")
  }

  return(
    <div className="bg-primary py-4 px-4 md:px">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl t font-medium">EM filmes</div>
        </Link>
{/* formulario de aréa de pesquisaS      */}
        <form onSubmit={searchMovie}>
          <div className="space-x-4">
            <input  className="bg-secondary px-4 py-2 outline-none placeholder:text-textColor" 
            type="text"
            value={input} 
            placeholder="Pesquisar o Filme..."
            onChange={(e)=> setInput (e.target.value)} />
          
          <button 
          type="submit"
          className="bg-secondary text-textColor py-2 px-4 hover:bg-textColor hover:text-white"
          >
          Pesquisar
          </button>
          </div>
        </form>
      </div>
    </div>
    )
  }