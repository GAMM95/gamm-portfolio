import transportes from "../../assets/screenshots/transportes.png"
import analytics_hta from "../../assets/screenshots/analytics_hta.png"
import apk1 from "../../assets/installers/PrediHipertension.apk"
import apiwine from "../../assets/thumbnails/APIWine.png"
import apivet from "../../assets/thumbnails/Apivet1.png"
import apihotel from "../../assets/thumbnails/APIHotel.png"
import apirentas from "../../assets/thumbnails/APIRentas.png"

import inc1 from "../../assets/screenshots/incidencias/incidencias1.png"
import inc2 from "../../assets/screenshots/incidencias/incidencias2.png"
import inc3 from "../../assets/screenshots/incidencias/incidencias3.png"
import inc4 from "../../assets/screenshots/incidencias/incidencias4.png"
import inc5 from "../../assets/screenshots/incidencias/incidencias5.png"
import inc6 from "../../assets/screenshots/incidencias/incidencias6.png"
import inc7 from "../../assets/screenshots/incidencias/incidencias7.png"

import portada_vin from "../../assets/screenshots/viñacascas/viña1.png"
import vin1 from "../../assets/screenshots/viñacascas/viña1.png"
import vin3 from "../../assets/screenshots/viñacascas/viña3.png"
import vin4 from "../../assets/screenshots/viñacascas/viña4.png"
import vin5 from "../../assets/screenshots/viñacascas/viña5.png"
import vin6 from "../../assets/screenshots/viñacascas/viña6.png"
import vin8 from "../../assets/screenshots/viñacascas/viña8.png"
import vin9 from "../../assets/screenshots/viñacascas/viña9.png"
import vin10 from "../../assets/screenshots/viñacascas/viña10.png"

import port_pred from "../../assets/screenshots/predihipertension/predihipertension.png"

export const projectsData = [
  {
    id: 1,
    media: [{ type: "image", src: apihotel }],
    date: "2025-09-22",
    title: 'APIRest – Cadena Hotelera',
    technologies: 'Java 17 - Spring Boot - Spring Data JPA - PostgreSQL',
    category: 'APIs',
    github: 'https://github.com/GAMM95/hotel_api',
    description: 'Backend en Spring Boot para gestionar reservas, habitaciones, servicios y pagos de una cadena de hoteles. Utiliza DTOs para manejar la transferencia de datos entre la API y el frontend, y Spring Data JPA para la persistencia en PostgreSQL.'
  },
  {
    id: 2,
    media: [
      { type: 'image', src: inc1 },
      { type: 'image', src: inc2 },
      { type: 'image', src: inc3 },
      { type: 'image', src: inc4 },
      { type: 'image', src: inc5 },
      { type: 'image', src: inc6 },
      { type: 'image', src: inc7 },
    ],
    date: "2024-10-11",
    title: 'Sistema de Gestión de Incidencias Informáticas',
    technologies: 'PHP 7.4.8 - JavaScript - Tailwind CSS - SQL Server 2008 R2',
    category: 'Web App',
    github: 'https://github.com/GAMM95/incidenciasMDE',
    demo: 'https://youtu.be/wqomEDcPOXU',
    description: 'Sistema web en línea de gestión de incidencias para la Municipalidad Distrital de La Esperanza. Este sistema permite a los usuarios registrar, consultar, mostrar reportes de las incidencias ocurridas en cada área de la entidad descentralizando el proceso de gestión de incidencias Para ingresar al sistema utilice las credenciales username: admin y contraseña: admin123'
  },
  {
    id: 3,
    media: [
      { type: "image", src: port_pred }
    ],
    date: "2024-07-21",
    title: "PrediHipertension",
    technologies: "Flutter - Machine Learning - Firebase",
    category: "Otros",
    github: "https://github.com/GAMM95/PrediHipertension",
    installer: apk1,
    demo: "https://youtu.be/SIjINg1BP68", // tu video
    description:
      "Aplicativo móvil basado en Machine Learning para la predicción del riesgo de desarrollar Hipertensión Arterial (HTA). Este aplicativo consta de un test de 15 preguntas de factores de riesgo directamente relacionados con la HTA."
  },
  {
    id: 4,
    image: analytics_hta,
    date: "2024-06-22",
    title: 'Entrenamiento de datos para predecir el riesgo de desarrollar HTA',
    technologies: 'Python - Pandas - Scikit learn - Matplotlib - Seaborn - Numpy - SMOTE - ML Algorithms',
    category: 'Otros',
    github: 'https://github.com/GAMM95/PrediHipertension_training_data.git',
    description: 'Proyecto de predicción del riesgo de desarrollar Hipertensión Arterial en adultos mayores de 18 años usando aprendizaje supervisado. El modelo se entrenó con un dataset de la BRFSS 2015 de 441,455 registros, seleccionando una muestra de 29,729 registros basada en factores de riesgo validados por médicos internistas de Trujillo, ajustados a la realidad de la HTA en Perú. Se evaluó su rendimiento con métricas como Exactitud, Precisión, Recall y F1-score utilizando algoritmos como Random Forest, KNN, Decision Tree, Logistic Regression y XGBoost.'
  },
  {
    id: 5,
    image: transportes,
    date: "2023-10-13",
    title: 'Sistema de Consulta de Transportes para Vehículos Menores Motorizados',
    technologies: 'PHP 8.2.4- HTML - JavaScript - Tailwind - SQL Server',
    category: 'Web App',
    github: 'https://github.com/GAMM95/consulta-transportes',
    // demo: 'http://200.233.44.136/consulta_transporte/',
    description: 'Sistema web en línea de consultas de transportes para la Sub Gerencia de Transportes, Tránsito y Seguridad Vial de la Municipalidad Distrital de La Esperanza. Este sistema permite a los inspectores de tránsito hacer consultas de las tarjetas de circulación vigentes, papeletas impuestas sin pagar y paraderos establecidos correspondientes al vehiculo menor motorizado ingresando la placa. Para ingresar al sistema utilice las credenciales username: gamm y contraseña: 123456'
  },
  // {
  //   id: 6,
  //   image: conversor,
  //   date: "2022-08-01",
  //   title: 'Conversor de unidades',
  //   technologies: 'Java 8',
  //   category: 'Otros',
  //   github: 'https://github.com/GAMM95/Conversor_Unidades',
  //   demo: installer1,
  //   description: 'Programa de escritorio que ha sido desarrollado utilizando Apache NetBeans 18 con Java Swing.  Esta aplicación permite a los usuarios convertir divisas y otras unidades, como temperatura, peso, longitud, superficie y volumen. Su funcionalidad es simple y efectiva: los usuarios ingresan un valor numérico y seleccionan la unidad base correspondiente. Luego, al elegir la unidad de cambio, el programa realiza automáticamente el cálculo y muestra el nuevo valor convertido.'
  // },
  // {
  //   id: 7,
  //   image: encriptador,
  //   date: "2022-05-21",
  //   title: 'Encriptador de textos',
  //   technologies: 'HTML - CSS - JavaScript',
  //   category: 'Otros',
  //   github: 'https://github.com/GAMM95/challengeONE_encriptador',
  //   demo: 'https://gamm95.github.io/challengeONE_encriptador/',
  //   description: 'Este Challenge consiste en crear una página web que pueda encriptar y desencriptar un texto ingresado por el usuario y mostrar dicho texto de forma encriptada o desencriptada. Challenge creado con los conocimientos adquiridos durante el curso de "Principiante En Programación".'
  // },
  {
    id: 9,
    // status: "en_progreso",
    date: "2025-12-12",
    image: apiwine,
    title: 'APIRest - Viña Cascas',
    technologies: 'Java 25 - Spring Boot - Spring Data JDBC - MySQL',
    category: 'APIs',
    github: 'https://github.com/GAMM95/vinos_api.git',
    // demo: 'https://api-wine.herokuapp.com/',
    description: 'API REST desarrollada con Spring Boot para la gestión integral de una tienda de vinos. Permite administrar compras, control de stock en múltiples sucursales y procesos de venta. Implementa arquitectura basada en DTOs para desacoplar la capa de presentación, y utiliza Spring Data JDBC para la persistencia de datos en MySQL.'
  },
  {
    id: 10,
    date: "2024-10-18",
    image: apirentas,
    title: 'APIRest - Sistema de Rentas Tributario',
    technologies: 'Java 17- Spring Boot - Spring Data JDBC - SQL Server 2017',
    category: 'APIs',
    github: 'https://github.com/GAMM95/AppRentasMdeApiApplication.git',
    // demo: 'https://api-wine.herokuapp.com/',
    description: 'API REST orientada a la gestión tributaria de una municipalidad. Permite administrar contribuyentes, cálculos de rentas, obligaciones fiscales y seguimiento de pagos. Implementada con Spring Boot y Spring Data JDBC, enfocándose en un acceso eficiente y controlado a SQL Server.'
  },
  {
    id: 11,
    media: [
      { type: 'image', src: vin1 },
      { type: 'image', src: vin3 },
      { type: 'image', src: vin4 },
      { type: 'image', src: vin5 },
      { type: 'image', src: vin6 },
      { type: 'image', src: vin8 },
      { type: 'image', src: vin9 },
      { type: 'image', src: vin10 },
      { poster: portada_vin },
    ],
    date: "2026-01-25",
    title: 'Viña Cascas',
    technologies: 'Java 17 - Spring Boot - MySql - Angular 21 - TypeScript - Bootstrap',
    category: 'Web App',
    github: 'https://github.com/GAMM95/vinos_front.git',
    // demo: 'https://vinos-app.herokuapp.com/',
    description: 'Aplicación web para la gestión de una tienda de vinos. Permite la administración de productos, categorías, precios, pedidos y ventas. Esta aplicación se desarrolló utilizando Angular 21 y Bootstrap.',
  },
  {
    id: 12,
    media: [{ type: "image", src: apivet }],
    date: "2026-05-15",
    status: "en_progreso",
    title: 'APIRest - Clínica Veterinaria',
    technologies: 'Java 21 - Spring Boot 4.0.6 - JPA/Hibernate - SQL Server',
    category: 'APIs',
    github: 'https://github.com/GAMM95/veterinaria_api.git',
    // demo: 'https://api-wine.herokuapp.com/',
    description: 'API REST desarrollada con Spring Boot para la gestión integral de una clínica veterinaria. Permite administrar pacientes, medicamentos, prescripciones, facturación y procesos de venta. Implementa arquitectura basada en DTOs para desacoplar la capa de presentación, y utiliza Spring Data JPA para la persistencia de datos en SQL Server.'
  }
];

export const projectsNav = [
  {
    name: 'Todos',
  },
  {
    name: 'APIs',
  },
  {
    name: 'Web App',
  },
  {
    name: 'Otros',
  },
]