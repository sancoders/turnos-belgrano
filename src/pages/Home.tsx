import { useState } from 'react'
import { supabase } from '../lib/supabase'

const servicios = [
  { nombre: 'Corte', precio: 12000 },
  { nombre: 'Color', precio: 35000 },
  { nombre: 'Brushing', precio: 9000 },
  { nombre: 'Alisado', precio: 60000 },
  { nombre: 'Manicura', precio: 8000 },
]

export default function Home() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [servicio, setServicio] = useState('Corte')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [comentarios, setComentarios] = useState('')
  const [enviado, setEnviado] = useState(false)

  async function sacarTurno(e: React.FormEvent) {
    e.preventDefault()
    await supabase.from('turnos').insert([
      { nombre, telefono, email, servicio, fecha, hora, comentarios },
    ])
    setEnviado(true)
  }

  return (
    <div className="min-h-screen bg-white">
    <div className="w-[1100px] mx-auto py-16 font-sans text-slate-800">
      <header className="flex items-end justify-between border-b border-slate-200 pb-8">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight">Turnos Belgrano</h1>
          <p className="mt-3 text-lg text-slate-500">Av. Cabildo 2200, Belgrano, CABA</p>
          <p className="text-lg text-slate-500">Lunes a sábado de 9 a 20</p>
        </div>
        <a
          href="#turno"
          className="rounded-lg bg-slate-900 px-10 py-5 text-xl font-medium text-white"
        >
          Sacar turno
        </a>
      </header>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Servicios</h2>
        <table className="mt-6 w-[1100px] border-collapse text-lg">
          <tbody>
            {servicios.map((s) => (
              <tr key={s.nombre} className="border-b border-slate-100">
                <td className="w-[900px] py-4">{s.nombre}</td>
                <td className="py-4 text-right tabular-nums">${s.precio.toLocaleString('es-AR')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="turno" className="mt-20">
        <h2 className="text-3xl font-semibold">Pedí tu turno</h2>

        {enviado ? (
          <p className="mt-6 text-xl">¡Listo! Te esperamos.</p>
        ) : (
          <form onSubmit={sacarTurno} className="mt-8 flex flex-wrap gap-6">
            <div className="w-[530px]">
              <label className="block text-sm text-slate-500">Nombre y apellido</label>
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-lg"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="w-[530px]">
              <label className="block text-sm text-slate-500">Teléfono</label>
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-lg"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="w-[530px]">
              <label className="block text-sm text-slate-500">Email</label>
              <input
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-[530px]">
              <label className="block text-sm text-slate-500">Servicio</label>
              <select
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-lg"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
              >
                {servicios.map((s) => (
                  <option key={s.nombre}>{s.nombre}</option>
                ))}
              </select>
            </div>
            <div className="w-[530px]">
              <label className="block text-sm text-slate-500">Fecha</label>
              <input
                type="date"
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-lg"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div className="w-[530px]">
              <label className="block text-sm text-slate-500">Hora</label>
              <input
                type="time"
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-lg"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>
            <div className="w-[1100px]">
              <label className="block text-sm text-slate-500">Comentarios</label>
              <textarea
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-lg"
                rows={3}
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-10 py-4 text-lg font-medium text-white"
            >
              Confirmar turno
            </button>
          </form>
        )}
      </section>
    </div>
    </div>
  )
}
