import { useState } from 'react'
import Image from "next/image";
import Logo from "./imgs/nova champions league.png"


export default function NewAccountForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aquí iría la lógica para enviar los datos del formulario
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-800 via-sky-700 to-blue-600">
      <div className="w-full max-w-md p-8 m-4 bg-white rounded-lg shadow-lg">
      <Image src={Logo} alt="Logo" width={300} height={300}  />
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Cuenta Nueva</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-fondo py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="fullName"
              className="absolute left-3 -top-2.5  px-1 text-sm text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black"
            >
              Nombre Completo
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-fondo py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5  px-1 text-sm text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-fondo py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-2.5  px-1 text-sm text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black"
            >
              Contraseña
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-fondo py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-3 -top-2.5  px-1 text-sm text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black"
            >
              Confirmar Contraseña
            </label>
          </div>
          <div className="relative">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-fondo py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phoneNumber"
              className="absolute left-3 -top-2.5  px-1 text-sm text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black"
            >
              Número Telefónico
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-ama rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Crear Cuenta
          </button>
        </form>
        <a href="/" className='mt-5 text-center text-xl font-extrabold underline mx-auto block'>Volver al inicio</a>
      </div>
    </div>
  )
}