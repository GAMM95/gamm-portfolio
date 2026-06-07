import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactSVG from '../../assets/icons/send.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  // Función de toast de error único
  const mostrarToastrError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      draggable: true,
      autoClose: 2000,
      toastId: message, // evita duplicados
    });
  };

  // Función de toast de éxito
  const mostrarAlertaExito = (message) => {
    toast.success(message, {
      position: "bottom-right",
      draggable: true,
      autoClose: 2000,
      toastId: message,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const mensaje = form.current.mensaje.value.trim();

    // Validar campos vacíos
    if (!name || !email || !mensaje) {
      mostrarToastrError("Por favor, complete todos los campos.");
      return;
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mostrarToastrError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Enviar formulario
    emailjs
      .sendForm(
        'service_mhd3shs',
        'template_fybhxnn',
        form.current,
        'MjGzsMMRjkZc7Tlyz'
      )
      .then((result) => {
        console.log(result.text);
        mostrarAlertaExito("Mensaje enviado");
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje: ', error.text);
        mostrarToastrError("Ocurrió un error al enviar el mensaje.");
      });
  };

  return (
    <section id="contacto" className="py-12">
      <h2
        className="text-3xl font-medium text-center mb-2"
        style={{ color: "var(--title-color)" }}
      >
        Contáctame
      </h2>

      <span
        className="block text-center mb-8"
        style={{ color: "var(--text-color)" }}
      >
        Ponte en contacto
      </span>

      <div className="flex flex-col items-center px-4 sm:px-6 gap-6">
        {/* Card del formulario */}
        <div
          className="w-full max-w-3xl rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
          style={{ backgroundColor: "var(--card-color)" }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full"
            id="contact-form"
          >
            {/* Nombre */}
            <div className="relative mb-5 h-16">
              <label
                className="absolute -top-3 left-5 text-sm px-2 z-10"
                style={{
                  backgroundColor: "var(--card-color)",
                  color: "var(--text-color)",
                }}
              >
                Nombre
              </label>

              <input
                type="text"
                name="name"
                placeholder="Ingrese su nombre y apellido"
                className="absolute inset-0 w-full h-full border-2 rounded-xl px-5 py-5 outline-none transition-colors"
                style={{
                  backgroundColor: "var(--card-color)",
                  color: "var(--text-color)",
                  borderColor: "var(--border-input-color)",
                }}
              />
            </div>

            {/* Email */}
            <div className="relative mb-5 h-16">
              <label
                className="absolute -top-3 left-5 text-sm px-2 z-10"
                style={{
                  backgroundColor: "var(--card-color)",
                  color: "var(--text-color)",
                }}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Ingrese su email"
                className="absolute inset-0 w-full h-full border-2 rounded-xl px-5 py-5 outline-none transition-colors"
                style={{
                  backgroundColor: "var(--card-color)",
                  color: "var(--text-color)",
                  borderColor: "var(--border-input-color)",
                }}
              />
            </div>

            {/* Mensaje */}
            <div className="relative mb-5 h-32">
              <label
                className="absolute -top-3 left-5 text-sm px-2 z-10"
                style={{
                  backgroundColor: "var(--card-color)",
                  color: "var(--text-color)",
                }}
              >
                Mensaje
              </label>

              <textarea
                name="mensaje"
                placeholder="Escriba su mensaje"
                className="absolute inset-0 w-full h-full border-2 rounded-xl px-5 py-5 outline-none resize-none transition-colors"
                style={{
                  backgroundColor: "var(--card-color)",
                  color: "var(--text-color)",
                  borderColor: "var(--border-input-color)",
                }}
              />
            </div>
          </form>
        </div>

        {/* Botón enviar */}
        {/* <button
          type="submit"
          form="contact-form"
          className="button__container flex items-center justify-center px-6 py-3 rounded-xl gap-2 transition-colors w-full sm:w-auto"
          style={{
            backgroundColor: "var(--button-color)",
            color: "var(--container-color)",
          }}
        >
          Enviar mensaje
          <img
            src={ContactSVG}
            alt="sendSVG"
            className="w-5 h-5"
          />
        </button> */}
        {/* Botón enviar — reemplaza el button existente en Contact.jsx */}
        <button
          type="submit"
          form="contact-form"
          className="btn-solid w-full sm:w-auto px-6 py-3 rounded-xl text-sm"
        >
          Enviar mensaje
          <img src={ContactSVG} alt="sendSVG" className="w-5 h-5" />
        </button>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
