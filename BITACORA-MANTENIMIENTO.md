# Bitácora de mantenimiento y prioridades

Este archivo documenta cambios comprobables y trabajos pendientes del Centro de Conocimiento Presupuestario. No reemplaza el historial de commits ni certifica la vigencia de las normas. Cada entrada debe indicar **fecha, cambio, fuente, prueba y limitación**.

## 2026-11-01 — Corrección funcional de filtros GUATECOMPRAS y prueba de regresión

**Hallazgo crítico de auditoría:** las nueve tarjetas de `ruta-guatecompras.html` estaban publicadas con el atributo `data-topic="undefined"`. El filtro `Todos` mostraba los recursos, pero los botones `Primeros pasos`, `Planificación`, `Publicaciones` y `Control` ocultaban **todas** las tarjetas, aunque sí existían materiales de cada categoría. No era un problema normativo sino de experiencia y funcionalidad.

**Cambios guardados en GitHub:**
- `ruta-guatecompras.html`: asignadas categorías reales a las nueve tarjetas: Inicio (2), Planificación (1), Publicaciones (5), Control (1). Se conservan los nueve enlaces oficiales y el orden de aprendizaje.
- `tests/ruta-guatecompras.test.cjs`: nueva prueba de regresión sin dependencias (`node tests/ruta-guatecompras.test.cjs`) que valida nueve recursos, cuatro categorías, botones correspondientes y nueve URL únicas de formación MINFIN.
- `sw.js`: caché `centro-presupuestario-v18` para actualizar la versión precargada y sin conexión.

**Comprobaciones:** se leyeron de nuevo los tres archivos desde la rama `main` de GitHub. Se ejecutó una verificación estructural equivalente sobre el HTML real recuperado: **aprobada** (9 tarjetas, distribución 2/1/5/1, cuatro botones y nueve URL únicas). La prueba de Node quedó versionada, pero **no se ejecutó el comando Node dentro de un entorno de integración continua**. El despliegue de GitHub Pages se encontraba pendiente/en curso al consultarlo; no se certificó una prueba visual en navegador.

**Vigilancia de fuentes oficiales revisadas (01/11/2026):**
- Congreso, noticia del 30/10/2026: cierre de audiencias públicas de la iniciativa 6841 del Presupuesto 2027; **sigue siendo proyecto**, sin base para marcarlo como ley vigente: https://www.congreso.gob.gt/noticias_congreso/17379/2026/4
- MINFIN/DIFODA, ficha oficial de compra directa con oferta electrónica: https://formacion.minfin.gob.gt/compra-directa-con-oferta-electronica/ (el material muestra un ejemplo con montos, que **no se trasladan a instrucciones vigentes** sin corroboración normativa).
- MSPAS, alertas de retiro/desvíos: el listado accesible seguía señalando actualización al 27/10/2026; no se analizaron los productos del documento descargable: https://medicamentos.mspas.gob.gt/index.php/alertas/alerta-de-retiro-o-desvios-de-productos-del-mercado
- MSPAS, formularios de farmacovigilancia: ficha F-FV-f-05 versión 01-2026, vigencia indicada 17/10/2026: https://medicamentos.mspas.gob.gt/index.php/formularios/farmacovigilancia
- CGC, índice de normas generales de control interno: https://www.contraloria.gob.gt/index.php/normas-generales-de-control-interno/

**Criterio editorial y siguiente prioridad:** no se encontró evidencia suficiente de una derogación adicional que justifique modificar fichas jurídicas. Confirmar despliegue y probar los filtros en navegador; después automatizar esta prueba en CI y revisar si los tutoriales de DIFODA describen interfaces y umbrales actuales.

## 2026-10-31 — Ruta GUATECOMPRAS, seguimiento 2027 y mejora PWA

**Cambios guardados en GitHub:**
- `ruta-guatecompras.html`: nueva ruta de aprendizaje con **nueve fichas oficiales DIFODA/MINFIN** agrupadas en primeros pasos, planificación, publicaciones y control; incorpora filtros accesibles, descripciones y enlaces individuales a las fichas de formación.
- `index.html`: acceso a la ruta desde el menú Aprendizaje y desde una página interna dedicada.
- `observatorio-normativo.html`: incorporado seguimiento de la **iniciativa 6841, proyecto de Presupuesto 2027**, claramente identificada como **propuesta, no norma vigente**; añadido acceso a la ruta GUATECOMPRAS.
- `sw.js`: caché `v17` con precarga de la nueva ruta. Corregido el comportamiento sin conexión para evitar que una solicitud de JavaScript, CSS o JSON no disponible reciba erróneamente el HTML de inicio. La página de inicio queda como recurso alternativo únicamente para navegación.

**Fuentes oficiales consultadas (31/10/2026):**
- DIFODA/MINFIN, índice de nueve operaciones de GUATECOMPRAS: https://formacion.minfin.gob.gt/coleccion-videotutoriales/
- Se abrieron y contrastaron las nueve fichas individuales enlazadas desde ese índice: módulos, búsqueda y reportería, PAC, NPG baja cuantía, NPG servicios técnicos y profesionales, compra directa con oferta electrónica, compra directa con oferta electrónica (NOG), proyecto de bases de cotización e inhabilitaciones. Las URL están en `ruta-guatecompras.html`.
- Congreso, resumen del 30/10/2026 sobre cierre de audiencias del Presupuesto 2027: https://www.congreso.gob.gt/noticias_congreso/17379/2026/4
- Congreso, iniciativa 6841 y audiencias: https://www.congreso.gob.gt/noticias_congreso/17151/2026/3

**Pruebas efectuadas:** se comprobó por lectura directa del repositorio la existencia de los cuatro archivos actualizados, la sintaxis del JavaScript incrustado en las páginas, la sintaxis de `sw.js`, los nueve enlaces oficiales distintos y la existencia de las rutas locales referenciadas (excepto una cadena de enlace construida dinámicamente en `index.html`, que no representa un archivo faltante). El observatorio tiene 13 tarjetas. GitHub Actions inició el despliegue de la revisión; **no se certifica aún su finalización ni se completó una prueba visual o funcional en navegador**.

**Limitaciones editoriales:** la verificación alcanza las páginas oficiales de presentación, **no el contenido íntegro de los videos**. Los montos, pantallas y permisos de ejemplos históricos pueden haber cambiado; por eso la nueva ruta no reproduce umbrales monetarios ni autoriza operaciones. La iniciativa 6841 no se presenta como ley. No se verificó una derogación adicional que justifique cambiar instrucciones normativas.

**Siguiente prioridad:** comprobar el despliegue y accesibilidad visual de la ruta; evaluar si los nueve videos siguen correspondiendo a pantallas y normas vigentes; convertir los recursos en lecciones con evaluación solo tras esa validación. Revisar los enlaces genéricos de las fichas y documentar por artículo las reformas presupuestarias relevantes.

## 2026-10-30 — Fuentes primarias para planificación y control interno

**Cambios guardados en GitHub:**
- `fichas-ampliadas.js`: ampliadas cuatro fichas (control interno, PEI, POM y POA) con comprobaciones operativas y fuentes institucionales más precisas. La ficha de control interno ya no remite equivocadamente al catálogo genérico de manuales del MINFIN, sino a la sección pertinente de la CGC. PEI/POM/POA enlazan directamente al documento de SEGEPLAN 2027–2031.
- `observatorio-normativo.html`: incorporada sección educativa con cuatro recursos técnicos: lineamientos SEGEPLAN 2027–2031, normas de control interno CGC, catálogo de manuales internos CGC 2026 y biblioteca DIFODA de capacitación en adquisiciones, con advertencias sobre su ámbito de aplicación.
- `sw.js`: caché `v16` para distribuir cambios en visitas posteriores.

**Fuentes oficiales consultadas (30/10/2026):**
- SEGEPLAN, Lineamientos Generales de Política y Planificación 2027–2031 (PDF de 32 páginas, apartados 3.1 y 4.2, numeral 15): https://portal.segeplan.gob.gt/segeplan/wp-content/uploads/2026/02/Lineamientos-de-Politica-y-Planificacion-2027-2031.pdf
- CGC, Normas Generales y Técnicas de Control Interno Gubernamental y Acuerdo A-039-2023: https://www.contraloria.gob.gt/index.php/normas-generales-de-control-interno/ y https://www.contraloria.gob.gt/index.php/acuerdos-internos-2023-2026/
- CGC, catálogo de manuales de procedimientos con referencias A-39-2026, A-013-2026 y otros documentos institucionales: https://www.contraloria.gob.gt/index.php/06-manuales-de-procedimientos/
- MINFIN, catálogo de manuales (se verificó que incluye Manual de Clasificaciones Presupuestarias 7.ª edición, guías SIGES y manuales contables; quedan pendientes enlaces PDF específicos): https://www.minfin.gob.gt/legislacion-y-normas/manuales
- DIFODA/MINFIN, DIFOTECA, biblioteca oficial de recursos de adquisiciones; índice consultado con 45 recursos y 9 videotutoriales de operaciones de GUATECOMPRAS: https://formacion.minfin.gob.gt/difoteca/
- Congreso, ficha del Decreto 18-2026 con vigencia escalonada: https://www.congreso.gob.gt/detalle_pdf/decretos/13709

**Comprobaciones y límites:** se comprobó el contenido íntegro del PDF de SEGEPLAN a través de su texto extraído (32 páginas) y los apartados citados; el portal de la CGC mostró el índice de normas y acuerdos, y el buscador institucional indexó el catálogo de manuales, pero la apertura directa del catálogo devolvió 403. El PDF extenso del Acuerdo A-039-2023 excedió el límite de lectura de la herramienta; por ello no se verificó íntegramente su texto ni posibles reformas posteriores. Las fichas usan estas fuentes como orientación, no como certificación de vigencia. Los archivos editados conservan 19 fichas ampliadas y el observatorio 12 tarjetas. Falta confirmar visualmente el despliegue público y probar el flujo de usuario en navegador.

**Próximo trabajo:** verificar publicación y enlaces PDF concretos, revisar la clasificación presupuestaria vigente con anexos posteriores, y profundizar fichas de compras y SIGES sin generalizar procesos de una entidad a otra.

## 2026-10-29 — Seguimiento IUSI y distinción entre iniciativa y ley

**Cambios en GitHub:**
- `observatorio-normativo.html`: incorporadas dos fichas de seguimiento legislativo con estados diferenciados, fechas, advertencias y enlaces a expedientes institucionales.
- `sw.js`: versión de caché `v15` para que el observatorio actualizado se renueve en visitas con el sitio instalado o guardado sin conexión.

**Fuentes oficiales consultadas (29/10/2026):**
- Congreso, Decreto 18-2026, ficha con publicación 28/08/2026, vigencia general indicada 27/10/2026, excepciones para IUSI 26/11/2026 e ISR/timbres fiscales 01/01/2027: https://www.congreso.gob.gt/detalle_pdf/decretos/13709
- Congreso, expediente de iniciativa 6861, conocida por el Pleno 13/10/2026, propuesta de reforma de artículos 77 y 78 del Decreto 101-97: https://www.congreso.gob.gt/detalle_pdf/iniciativas/6500
- Congreso, noticia de 16/10/2026 sobre remisión a la Comisión de Deportes: https://www.congreso.gob.gt/noticias_congreso/17275/2026/4
- MSPAS, vigilancia sanitaria de productos y formularios (seguimiento de fuentes del 28/10): https://medicamentos.mspas.gob.gt/index.php/alertas/alerta-de-retiro-o-desvios-de-productos-del-mercado y https://medicamentos.mspas.gob.gt/index.php/formularios/farmacovigilancia
- CGC, biblioteca institucional de control interno y otras materias: https://www.contraloria.gob.gt/index.php/biblioteca/

**Comprobaciones y límites:** los resultados indexados del Congreso identifican claramente números, fechas, excepciones y estado de la iniciativa. Se verificaron en el contenido editado las dos fichas, el texto de advertencia, ocho tarjetas y la actualización de la fecha editorial; se comprobó la sustitución de `v14` por `v15` y la presencia del observatorio en el listado de recursos precargados. La herramienta de apertura directa devolvió 502 en páginas del Congreso y la consulta pública de GitHub Pages no respondió desde los entornos disponibles; **no se descargó ni auditó el articulado íntegro de los decretos, no se completó prueba visual ni se certifica el despliegue público**. La fuente es el registro institucional indexado, no una interpretación completa de la ley.

**Próximo trabajo:** comprobar despliegue; estudiar el texto íntegro del Decreto 18-2026 y su aplicación por fechas antes de crear procedimientos municipales; contrastar el estado posterior de la iniciativa 6861; auditar enlaces de fichas del diccionario y ampliar contenido técnico verificable.

## 2026-10-28 — Observatorio normativo y vigilancia sectorial

**Publicado en el repositorio:**
- `observatorio-normativo.html`: página educativa de referencias normativas con fechas de publicación y entrada en vigor según registros del Congreso, y enlaces a las fuentes originales.
- `index.html`: acceso desde el menú Legislación y desde la portada.
- `sw.js`: nueva versión de caché v14 y precarga de la página.
- Observatorio ampliado con enlaces oficiales del MSPAS para alertas de retiro/desvíos de productos y formularios de farmacovigilancia.

**Fuentes consultadas (28/10/2026):**
- Ley Orgánica del Presupuesto, Decreto 101-97: https://www.congreso.gob.gt/detalle_pdf/decretos/727
- Reforma, Decreto 13-2025: https://www.congreso.gob.gt/detalle_pdf/decretos/13676 (publicación 26/11/2025, vigencia indicada 04/12/2025).
- Reformas, Decreto 2-2026: https://www.congreso.gob.gt/detalle_pdf/decretos/13692 (publicación 09/02/2026, vigencia indicada 10/02/2026).
- Reformas presupuestarias, Decreto 3-2026: https://www.congreso.gob.gt/detalle_pdf/decretos/13693 (publicación 09/02/2026, vigencia indicada 10/02/2026).
- Congreso, explicación de 3-2026: https://www.congreso.gob.gt/noticias_congreso/15292/2026/
- MSPAS, alertas de productos (listado con actualización 27/10/2026): https://medicamentos.mspas.gob.gt/index.php/alertas/alerta-de-retiro-o-desvios-de-productos-del-mercado
- MSPAS, formularios de farmacovigilancia (F-FV-f-05 versión 01-2026, vigencia indicada 17/10/2026): https://medicamentos.mspas.gob.gt/index.php/formularios/farmacovigilancia
- MINFIN, catálogo de manuales: https://www.minfin.gob.gt/legislacion-y-normas/manuales
- CGC, normas generales de control interno: https://www.contraloria.gob.gt/index.php/normas-generales-de-control-interno/
- SEGEPLAN, lineamientos 2027–2031: https://portal.segeplan.gob.gt/segeplan/wp-content/uploads/2026/02/23_Lineamientos_fomulacion_presupuesto_2027-2031_DT.pdf

**Pruebas efectuadas:** comprobación de sintaxis del JavaScript incrustado en `index.html`, sintaxis de `sw.js`, presencia de accesos al observatorio y existencia de las seis referencias en su HTML. Los registros de búsqueda de fuentes oficiales fueron accesibles; algunas páginas del Congreso y PDF del MINFIN devolvieron 403/502 al intentar abrirlos mediante una herramienta de consulta, por lo que **no se verificó descarga de todos los documentos ni el articulado íntegro**. No se ha completado una prueba visual en navegador. El despliegue de GitHub Pages debe comprobarse después de terminar Actions.

**Criterio editorial:** no afirmar que una reforma se aplica a cualquier entidad, ni que un enlace a una ley base representa un texto consolidado. Una noticia, iniciativa o comunicado no equivale a ley vigente.

## Próximas prioridades

1. **Normativa:** contrastar artículos precisos de las reformas 13-2025 y 2-2026, comprobar el presupuesto aplicable a 2026 y revisar posibles reformas posteriores antes de modificar fichas.
2. **Diccionario:** auditar las 500 entradas y ampliar fichas gradualmente, con campos de fuente exacta, última revisión, ejemplo, flujo, riesgos y alcance institucional; no presentar fichas introductorias como validadas.
3. **Fuentes:** reemplazar enlaces genéricos por documentos oficiales específicos y verificados. Identificar enlaces PDF que fallen o cambien.
4. **Capacitación:** catalogar guías, cursos y videos oficiales del MINFIN/DIFODA, SICOIN y SIGES por proceso; distinguir contenido actual de histórico.
5. **Calidad:** revisar visualmente la versión publicada, accesibilidad del modal y compatibilidad móvil, y añadir pruebas automáticas de enlaces internos.
6. **Expansión institucional:** después de consolidar Presupuesto, crear módulos por rol y proceso para Compras, Almacén General, Medicamentos, Contabilidad, Tesorería, RR. HH., Inventarios e Intendencia. Evitar atribuir procedimientos de una entidad a otra sin evidencia.
7. **MSPAS:** revisar el contenido de las alertas de productos de octubre 2026 antes de formular recomendaciones operativas.

En futuras ejecuciones: añadir un bloque fechado con cambios realmente realizados, fuentes, verificaciones y limitaciones; no borrar pendientes sin resolverlos.
