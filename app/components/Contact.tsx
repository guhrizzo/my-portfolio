"use client";

import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Vamos <span className="text-blue-600 dark:text-blue-400">Conversar?</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Tem um projeto em mente ou apenas quer dar um oi? Mande uma mensagem!
          </p>
        </div>

        {/* Formulário */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          
          <input type="hidden" name="access_key" value="3a8bd5f5-956c-436a-87e8-d2ec25527b0e" />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Nome</label>
            <input 
              type="text" 
              name="name" 
              required
              placeholder="Seu nome"
              className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">E-mail</label>
            <input 
              type="email" 
              name="email" 
              required
              placeholder="seu@email.com"
              className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Mensagem</label>
            <textarea 
              name="message" 
              rows={4}
              required
              placeholder="Como posso te ajudar?"
              className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
            ></textarea>
          </div>

          {/* Página de redirecionamento após o envio (opcional) */}
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <button 
            type="submit"
            className="md:col-span-2 flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform active:scale-95 cursor-pointer shadow-lg shadow-blue-500/20"
          >
            Enviar Mensagem
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}