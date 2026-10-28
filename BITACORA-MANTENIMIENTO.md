# Bitácora de mantenimiento y prioridades

Este archivo documenta cambios comprobables y trabajos pendientes del Centro de Conocimiento Presupuestario. No reemplaza el historial de commits ni certifica la vigencia de las normas. Cada entrada debe indicar **fecha, cambio, fuente, prueba y limitación**.

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
