
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactSVG from '../../assets/icons/send.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef(null);
  const [enviando, setEnviando] = useState(false);

  const mostrarToastrError = (message) => {
    toast.error(message, {
      position: 'bottom-right',
      draggable: true,
      autoClose: 2000,
      toastId: message,
    });
  };

  const mostrarAlertaExito = (message) => {
    toast.success(message, {
      position: 'bottom-right',
      draggable: true,
      autoClose: 2000,
      toastId: message,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Evita envíos repetidos mientras se procesa el formulario.
    if (enviando) return;

    const formulario = form.current;

    if (!formulario) return;

    const name = formulario.elements.name.value.trim();
    const email = formulario.elements.email.value.trim();
    const mensaje = formulario.elements.mensaje.value.trim();

    // Validación de campos obligatorios.
    if (!name || !email || !mensaje) {
      mostrarToastrError('Por favor, complete todos los campos.');
      return;
    }

    // Validación del correo electrónico.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      mostrarToastrError(
        'Por favor, ingresa un correo electrónico válido.'
      );
      return;
    }

    setEnviando(true);

    try {
      // 1. Notificación del mensaje para el propietario del portafolio.
      const notificacion = emailjs.sendForm(
        'service_mhd3shs',
        'template_fybhxnn',
        formulario,
        'MjGzsMMRjkZc7Tlyz'
      );

      // 2. Respuesta automática para la persona que escribió.
      const agradecimiento = emailjs.sendForm(
        'service_mhd3shs',
        'template_j7c1eo9',
        formulario,
        'MjGzsMMRjkZc7Tlyz'
      );

      // Espera ambos envíos, incluso si uno falla.
      const resultados = await Promise.allSettled([
        notificacion,
        agradecimiento,
      ]);

      const notificacionOK =
        resultados[0].status === 'fulfilled';

      const agradecimientoOK =
        resultados[1].status === 'fulfilled';

      // Registro individual para diagnosticar problemas.
      console.log(
        'Resultado notificación (Mi portafolio):',
        resultados[0]
      );

      console.log(
        'Resultado respuesta automática (Auto-Reply):',
        resultados[1]
      );

      if (notificacionOK && agradecimientoOK) {
        mostrarAlertaExito(
          'Mensaje enviado correctamente.'
        );

        formulario.reset();
      } else if (notificacionOK || agradecimientoOK) {
        if (!notificacionOK) {
          console.error(
            'Falló la notificación:',
            resultados[0].reason
          );
        }

        if (!agradecimientoOK) {
          console.error(
            'Falló la respuesta automática:',
            resultados[1].reason
          );
        }

        mostrarToastrError(
          'Solo se pudo enviar uno de los correos. Revisa la consola.'
        );
      } else {
        console.error(
          'Fallaron ambos envíos:',
          resultados
        );

        mostrarToastrError(
          'No se pudieron enviar los correos. Revisa EmailJS.'
        );
      }
    } catch (error) {
      console.error('Error inesperado en EmailJS:', error);

      mostrarToastrError(
        'Ocurrió un error al enviar el mensaje.'
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="section">
      <h2
        className="section__title"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Contáctame
      </h2>

      <span
        className="section__subtitle"
        style={{ color: 'var(--text-color)' }}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        Ponte en contacto
      </span>

      <div className="flex flex-col items-center px-4 sm:px-6 gap-6">
        {/* Tarjeta del formulario */}
        <div
          className="w-full max-w-3xl rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
          style={{ backgroundColor: 'var(--card-color)' }}
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full"
            id="contact-form"
          >
            {/* Nombre */}
            <div
              className="relative mb-5 h-16"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <label
                htmlFor="contact-name"
                className="absolute -top-3 left-5 text-sm px-2 z-10"
                style={{
                  backgroundColor: 'var(--card-color)',
                  color: 'var(--text-color)',
                }}
              >
                Nombre
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Ingrese su nombre y apellido"
                required
                maxLength={100}
                className="absolute inset-0 w-full h-full border-2 rounded-xl px-5 py-5 outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--card-color)',
                  color: 'var(--text-color)',
                  borderColor: 'var(--border-input-color)',
                }}
              />
            </div>

            {/* Correo electrónico */}
            <div
              className="relative mb-5 h-16"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="280"
            >
              <label
                htmlFor="contact-email"
                className="absolute -top-3 left-5 text-sm px-2 z-10"
                style={{
                  backgroundColor: 'var(--card-color)',
                  color: 'var(--text-color)',
                }}
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Ingrese su email"
                required
                maxLength={254}
                className="absolute inset-0 w-full h-full border-2 rounded-xl px-5 py-5 outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--card-color)',
                  color: 'var(--text-color)',
                  borderColor: 'var(--border-input-color)',
                }}
              />
            </div>

            {/* Mensaje */}
            <div
              className="relative mb-5 h-32"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="360"
            >
              <label
                htmlFor="contact-message"
                className="absolute -top-3 left-5 text-sm px-2 z-10"
                style={{
                  backgroundColor: 'var(--card-color)',
                  color: 'var(--text-color)',
                }}
              >
                Mensaje
              </label>

              <textarea
                id="contact-message"
                name="mensaje"
                placeholder="Escriba su mensaje"
                required
                maxLength={5000}
                className="absolute inset-0 w-full h-full border-2 rounded-xl px-5 py-5 outline-none resize-none transition-colors"
                style={{
                  backgroundColor: 'var(--card-color)',
                  color: 'var(--text-color)',
                  borderColor: 'var(--border-input-color)',
                }}
              />
            </div>
          </form>
        </div>

        {/* Botón de envío */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="420"
          className="w-full sm:w-auto"
        >
          <button
            type="submit"
            form="contact-form"
            disabled={enviando}
            className="btn-primary px-6 py-3 w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {enviando ? 'Enviando...' : 'Enviar mensaje'}

            <img
              src={ContactSVG}
              alt=""
              aria-hidden="true"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
