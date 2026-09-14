import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

type Turno = {
  id: string
  nombre: string
  telefono: string
  email: string
  servicio: string
  fecha: string
  hora: string
  comentarios: string
  estado: string
}

export default function Admin() {
  const [turnos, setTurnos] = useState<Turno[]>([])

  async function cargar() {
    const { data } = await supabase.from('turnos').select('*').order('fecha')
    setTurnos((data as Turno[]) || [])
  }

  useEffect(() => {
    cargar()
  }, [])

  async function cambiarEstado(id: string, estado: string) {
    await supabase.from('turnos').update({ estado }).eq('id', id)
    cargar()
  }

  return (
    <div className="min-h-screen bg-white">
    <div className="w-[1400px] mx-auto py-12 font-sans text-slate-800">
      <h1 className="text-4xl font-semibold">Turnos</h1>
      <p className="mt-2 text-slate-500">{turnos.length} turnos cargados</p>

      <table className="mt-8 w-[1400px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-slate-300">
            <th className="w-[170px] py-3">Nombre</th>
            <th className="w-[130px] py-3">Teléfono</th>
            <th className="w-[230px] py-3">Email</th>
            <th className="w-[110px] py-3">Servicio</th>
            <th className="w-[110px] py-3">Fecha</th>
            <th className="w-[80px] py-3">Hora</th>
            <th className="w-[300px] py-3">Comentarios</th>
            <th className="w-[110px] py-3">Estado</th>
            <th className="w-[160px] py-3"></th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((t) => (
            <tr key={t.id} className="border-b border-slate-100">
              <td className="py-3">{t.nombre}</td>
              <td className="py-3">{t.telefono}</td>
              <td className="py-3">{t.email}</td>
              <td className="py-3">{t.servicio}</td>
              <td className="py-3">{t.fecha}</td>
              <td className="py-3">{t.hora}</td>
              <td className="py-3">{t.comentarios}</td>
              <td className="py-3">{t.estado}</td>
              <td className="py-3">
                <button
                  onClick={() => cambiarEstado(t.id, 'confirmado')}
                  className="mr-2 rounded border border-slate-300 px-3 py-1"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => cambiarEstado(t.id, 'cancelado')}
                  className="rounded border border-slate-300 px-3 py-1"
                >
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
