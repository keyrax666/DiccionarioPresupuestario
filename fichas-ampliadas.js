"use strict";
// Referencias orientativas verificadas en sus fuentes institucionales. Revisar vigencia antes de aplicar.
window.FICHAS_AMPLIADAS={
  "presupuesto-publico": {
    "clave": "Distingue presupuesto aprobado, vigente, comprometido, devengado y pagado.",
    "verificacion": "¿Qué servicios públicos se financian? ¿Cuál es el ejercicio y la unidad ejecutora? ¿Qué cambios autorizados existen?",
    "fundamento": "Ley Orgánica del Presupuesto, Decreto 101-97, arts. 1, 8 y 16.",
    "referencia": "https://www.congreso.gob.gt/detalle_pdf/decretos/727"
  },
  "presupuesto-vigente": {
    "clave": "Presupuesto vigente = presupuesto inicial más o menos modificaciones aprobadas.",
    "verificacion": "Comprueba ejercicio, fuente, renglón, entidad, unidad y modificaciones registradas.",
    "fundamento": "Decreto 101-97; reportes oficiales de ejecución.",
    "referencia": "https://www.congreso.gob.gt/detalle_pdf/decretos/727"
  },
  "renglon-presupuestario": {
    "clave": "Clasifica el objeto específico del gasto; no representa por sí solo una autorización de compra.",
    "verificacion": "¿El objeto adquirido coincide con la clasificación vigente? ¿Hay saldo y fuente correctos?",
    "fundamento": "Manual de Clasificaciones Presupuestarias para el Sector Público de Guatemala.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "grupo-200": {
    "clave": "Agrupa materiales y suministros; verifica el renglón específico antes de registrar.",
    "verificacion": "¿Es un suministro consumible? ¿La descripción corresponde al renglón seleccionado?",
    "fundamento": "Manual de Clasificaciones Presupuestarias, clasificador por objeto del gasto.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "grupo-300": {
    "clave": "Agrupa propiedad, planta, equipo e intangibles según clasificación aplicable.",
    "verificacion": "¿Se trata de un bien de capital? ¿Requiere registro patrimonial y recepción?",
    "fundamento": "Manual de Clasificaciones Presupuestarias, clasificador por objeto del gasto.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "fuente-de-financiamiento": {
    "clave": "Identifica el origen de los recursos y condiciona controles de su utilización.",
    "verificacion": "¿Cuál es el código de fuente? ¿Existen restricciones? ¿Coincide con la partida?",
    "fundamento": "Manual de Clasificaciones Presupuestarias, fuentes de financiamiento.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "compromiso": {
    "clave": "Etapa que reserva crédito para una obligación futura en el marco de la operación autorizada.",
    "verificacion": "¿Hay expediente válido, saldo suficiente, clase de registro y aprobación?",
    "fundamento": "Ley Orgánica del Presupuesto, art. 16.",
    "referencia": "https://www.congreso.gob.gt/detalle_pdf/decretos/727"
  },
  "devengado": {
    "clave": "Etapa que reconoce una obligación exigible conforme al hecho generador y sus respaldos.",
    "verificacion": "¿Se acreditó recepción o prestación cuando corresponda? ¿Coincide con el compromiso?",
    "fundamento": "Ley Orgánica del Presupuesto, art. 16.",
    "referencia": "https://www.congreso.gob.gt/detalle_pdf/decretos/727"
  },
  "pagado": {
    "clave": "Etapa que registra la cancelación de la obligación por el medio autorizado.",
    "verificacion": "¿Existe devengado? ¿Beneficiario y monto coinciden con el expediente?",
    "fundamento": "Ley Orgánica del Presupuesto, art. 16.",
    "referencia": "https://www.congreso.gob.gt/detalle_pdf/decretos/727"
  },
  "modificacion-presupuestaria": {
    "clave": "Cambia asignaciones mediante el procedimiento y la autoridad competentes.",
    "verificacion": "¿Qué renglones disminuyen o aumentan? ¿Cuál es la resolución y su efecto?",
    "fundamento": "Ley Orgánica del Presupuesto, régimen de modificaciones presupuestarias.",
    "referencia": "https://www.congreso.gob.gt/detalle_pdf/decretos/727"
  },
  "poa": {
    "clave": "El POA concreta para un año las actividades, productos y metas institucionales; debe guardar coherencia con el PEI, el POM y la programación presupuestaria.",
    "verificacion": "¿Cada meta anual tiene responsable, unidad de medida, programación y recursos relacionados? ¿Se puede demostrar su vínculo con los resultados institucionales? SEGEPLAN indica un horizonte de un año para el POA en los lineamientos 2027–2031.",
    "fundamento": "SEGEPLAN, Lineamientos Generales de Política y Planificación 2027–2031, apartados 3.1 y 4.2, numeral 15.",
    "referencia": "https://portal.segeplan.gob.gt/segeplan/wp-content/uploads/2026/02/Lineamientos-de-Politica-y-Planificacion-2027-2031.pdf"
  },
  "pom": {
    "clave": "El POM traduce la estrategia institucional en programación operativa multianual; se relaciona con el PEI y orienta la preparación de cada POA.",
    "verificacion": "¿Las intervenciones multianuales se relacionan con resultados y metas institucionales? ¿Se estimaron recursos y responsables? ¿El período coincide con los lineamientos aplicables? SEGEPLAN señala un horizonte de cinco años para el POM en los lineamientos 2027–2031.",
    "fundamento": "SEGEPLAN, Lineamientos Generales de Política y Planificación 2027–2031, apartados 3.1 y 4.2, numeral 15.",
    "referencia": "https://portal.segeplan.gob.gt/segeplan/wp-content/uploads/2026/02/Lineamientos-de-Politica-y-Planificacion-2027-2031.pdf"
  },
  "pei": {
    "clave": "El PEI define la orientación estratégica institucional de largo plazo; no equivale al listado anual de compras ni al presupuesto ejecutado.",
    "verificacion": "¿El PEI se vincula con el mandato institucional, los resultados de desarrollo y los planes operativos? ¿Se revisaron el horizonte temporal y los lineamientos aplicables a la entidad? Para la formulación 2027–2031, consulta las consideraciones de SEGEPLAN en páginas 6 y 11 del documento.",
    "fundamento": "SEGEPLAN, Lineamientos Generales de Política y Planificación 2027–2031, apartados 3.1 y 4.2, numeral 15 (horizontes de planificación).",
    "referencia": "https://portal.segeplan.gob.gt/segeplan/wp-content/uploads/2026/02/Lineamientos-de-Politica-y-Planificacion-2027-2031.pdf"
  },
  "meta-fisica": {
    "clave": "Cantidad verificable de bienes o servicios públicos programados o entregados.",
    "verificacion": "¿Cuál es la unidad de medida, meta programada, ejecutada y evidencia?",
    "fundamento": "Ley Orgánica del Presupuesto, gestión por resultados.",
    "referencia": "https://www.congreso.gob.gt/detalle_pdf/decretos/727"
  },
  "indicador": {
    "clave": "Medida que permite seguir productos, resultados o desempeño.",
    "verificacion": "¿Tiene fórmula, unidad, período, línea base y fuente verificable?",
    "fundamento": "Lineamientos de planificación y gestión por resultados.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "sicoin": {
    "clave": "Sistema de Contabilidad Integrada: consulta y registra operaciones financieras según perfiles.",
    "verificacion": "¿Qué ejercicio, entidad, unidad, etapa y estado estás consultando?",
    "fundamento": "Documentación técnica y formación oficial MINFIN.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "siges": {
    "clave": "Sistema de Gestión: soporta procesos administrativos y su integración financiera.",
    "verificacion": "¿Qué modalidad, expediente, módulo, perfil y estado corresponde?",
    "fundamento": "Manuales y talleres oficiales SIGES del MINFIN.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "cur": {
    "clave": "Comprobante Único de Registro: documenta una operación según clase, etapa y estado.",
    "verificacion": "¿Cuál es el número, clase, fecha, estructura, monto y aprobación?",
    "fundamento": "Manuales de ejecución presupuestaria y SICOIN.",
    "referencia": "https://www.minfin.gob.gt/legislacion-y-normas/manuales"
  },
  "control-interno": {
    "clave": "El control interno no es una inspección al final del trámite: es el conjunto de responsabilidades, controles y evidencias que la institución incorpora a sus operaciones para prevenir, detectar y corregir riesgos.",
    "verificacion": "Antes de ejecutar: ¿hay responsables y autorizaciones definidos, segregación de funciones, respaldo documental, registro oportuno y controles de acceso? Durante la operación: ¿puede reconstruirse quién hizo qué, cuándo y con qué fundamento? Al cerrar: ¿existe conciliación, seguimiento de hallazgos y evidencia de supervisión? Contrasta con los procedimientos aprobados de tu entidad.",
    "fundamento": "Contraloría General de Cuentas: Normas Generales y Técnicas de Control Interno Gubernamental, Acuerdo A-039-2023. Verifica sus reformas o sustituciones antes de aplicarlas.",
    "referencia": "https://www.contraloria.gob.gt/index.php/normas-generales-de-control-interno/"
  }
};
