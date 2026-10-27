"use strict";
const shared={
entidad:["Entidad / unidad ejecutora","Identifica la institución y la unidad responsable del trámite. Comprueba que coincida con el expediente y el ejercicio fiscal.","La estructura exacta depende del formulario y sistema."],
fecha:["Fecha de emisión","Fecha en que se emite o registra el documento. Puede ser distinta de la fecha de solicitud, aprobación o pago.","Verifica el ejercicio fiscal y el estado del trámite."],
nit:["NIT","Número de Identificación Tributaria del proveedor o emisor, cuando corresponda. Sirve para identificar al contribuyente en documentos fiscales y administrativos.","Los NIT mostrados son ficticios, no válidos para trámites."],
renglon:["Renglón presupuestario","Código que clasifica el objeto del gasto conforme al Manual de Clasificaciones Presupuestarias. Su selección depende de la naturaleza del bien o servicio.","No determines el renglón únicamente por el nombre comercial."],
monto:["Monto","Importe expresado en quetzales. Verifica subtotal, impuestos, descuentos y total, según el tipo de documento.","El monto de una solicitud puede no coincidir con el finalmente adjudicado."],
firma:["Firma / aprobación","Identifica al funcionario o responsable que revisa, autoriza o aprueba la operación según sus atribuciones.","Una firma de ejemplo no equivale a aprobación real."],
descripcion:["Descripción del bien o servicio","Especifica qué se solicita, compra o factura. Debe ser consistente con la requisición, oferta, recepción y demás respaldos.","Revisa unidad de medida, cantidades y especificaciones."]
};
const docs=[
{id:"orden",name:"Orden de compra",caption:"Documento administrativo de adquisición",fields:[
["numero","No. de orden de compra","OC-EJEMPLO-000124","Identificador de la orden. Permite relacionarla con expediente, proveedor y otros registros. No es necesariamente el NOG ni el CUR.","No confundas número de orden con número de factura."],
["fecha","Fecha de emisión","15/10/2026"],["entidad","Entidad / unidad ejecutora","Hospital de ejemplo · Unidad 001"],
["proveedor","Proveedor","Distribuidora de Ejemplo, S. A.","Persona o empresa a la que se adjudica o solicita el suministro. Debe coincidir con el expediente y registros aplicables.","Nombre ficticio."],
["nit","NIT del proveedor","0000000-0"],["renglon","Renglón","Código de ejemplo: 2XX"],["descripcion","Bienes solicitados","Reactivos de laboratorio · 20 cajas"],["precio","Precio unitario","Q 450.00","Precio por unidad de medida de la línea. Comprueba moneda y condiciones de oferta.","El precio debe corresponder a la cantidad y unidad."],
["monto","Total de la orden","Q 9,000.00"],["entrega","Plazo y lugar de entrega","Bodega de suministros · Según condiciones pactadas","Especifica dónde y bajo qué plazo debe entregarse lo adquirido.","Revisa el expediente y el contrato si corresponde."],["firma","Autorización","Responsable autorizado · ejemplo"]]},
{id:"cdp",name:"Constancia de Disponibilidad Presupuestaria",caption:"Documento de respaldo de disponibilidad",fields:[
["numero","No. de CDP","CDP-EJEMPLO-000087","Identificador de la constancia. Permite localizarla en el expediente o sistema correspondiente.","No es un CUR ni una constancia de pago."],
["fecha","Fecha","15/10/2026"],["entidad","Unidad ejecutora","Hospital de ejemplo · Unidad 001"],
["solicitud","Solicitud / expediente","REQ-EJEMPLO-000052","Referencia al expediente que originó la verificación de disponibilidad.","Confirma que el documento corresponda a la operación."],
["renglon","Renglón presupuestario","2XX · Código ilustrativo"],["estructura","Estructura presupuestaria","Programa / subprograma / actividad / fuente","Conjunto de clasificadores que ubican la asignación presupuestaria. Debe verificarse con la partida real.","Los segmentos pueden variar según el formulario."],
["monto","Monto de la CDP","Q 9,000.00"],["estado","Estado","SOLICITADO · EJEMPLO","Indica en qué etapa administrativa se encuentra. Solicitado no equivale a aprobado.","Consulta el estado real en el sistema."],
["firma","Revisión y aprobación","Técnico / supervisor · ejemplo"]]},
{id:"factura",name:"Factura electrónica (FEL)",caption:"Representación didáctica de un documento tributario",fields:[
["numero","Número de documento","SERIE-EJ · 000000124","Identificación visible del documento. En FEL existen datos de autorización y certificación que deben verificarse.","Esta representación NO es una factura tributaria válida."],
["fecha","Fecha de emisión","15/10/2026"],["nit","NIT del emisor","0000000-0"],
["comprador","Receptor","Hospital de ejemplo","Identifica al adquirente o receptor del documento tributario.","Comprueba datos fiscales del receptor."],
["autorizacion","Autorización FEL","UUID-EJEMPLO-NO-VALIDO","Identificador de autorización de la factura electrónica certificada, cuando corresponda.","No existe certificación SAT de este modelo."],
["descripcion","Descripción","20 cajas de reactivos"],["subtotal","Subtotal","Q 9,000.00","Suma de los conceptos facturados antes de los ajustes aplicables.","La forma de presentar impuestos y descuentos depende del documento."],
["monto","Total facturado","Q 9,000.00"],["certificador","Datos de certificación","Solo demostración","En un documento FEL real, verifica los datos y validez en los medios oficiales SAT.","No uses este modelo para justificar gastos."]]},
{id:"pedido",name:"Solicitud de pedido / requisición",caption:"Documento interno para iniciar una necesidad",fields:[
["numero","No. de solicitud","REQ-EJEMPLO-000052","Identificador interno para dar seguimiento a la necesidad solicitada.","No equivale a orden de compra aprobada."],
["fecha","Fecha de solicitud","14/10/2026"],["entidad","Unidad solicitante","Laboratorio clínico · Hospital de ejemplo"],
["justificacion","Justificación","Abastecimiento de insumos para atención","Explica por qué se requiere el bien o servicio y su relación con la actividad institucional.","Debe guardar consistencia con programación y necesidad real."],
["descripcion","Detalle de lo requerido","Reactivos de laboratorio · 20 cajas"],["renglon","Renglón sugerido","2XX · Por confirmar"],
["monto","Monto estimado","Q 9,000.00"],["prioridad","Prioridad / plazo","Según necesidad documentada","Puede identificar urgencia o fecha requerida. La prioridad no sustituye las reglas de contratación.","No implica aprobación automática."],
["firma","Solicitante y visto bueno","Jefatura solicitante · ejemplo"]]},
{id:"cur",name:"Comprobante Único de Registro (CUR)",caption:"Modelo conceptual de registro presupuestario",fields:[
["numero","Número de CUR","CUR-EJEMPLO-000045","Identificador del comprobante en el sistema. Su numeración y estructura real dependen del módulo.","No es el número de orden ni de factura."],
["fecha","Fecha de registro","16/10/2026"],["entidad","Entidad / unidad","Hospital de ejemplo · Unidad 001"],
["clase","Clase / etapa","COMPROMISO · EJEMPLO","Indica la clase de operación y la etapa registrada. Compromiso, devengado y pago no son equivalentes.","No presupongas que todo CUR implica pago."],
["renglon","Renglón","2XX · Ilustrativo"],["fuente","Fuente de financiamiento","Fuente ilustrativa","Identifica el origen de los recursos de la partida y sus restricciones.","No utilizar códigos ficticios en operaciones reales."],
["monto","Monto del CUR","Q 9,000.00"],["estado","Estado del CUR","EN PROCESO · EJEMPLO","Permite distinguir un registro en trámite de uno aprobado u otro estado.","Verifica el estado directamente en el sistema."],
["firma","Responsable del registro","Perfil autorizado · ejemplo"]]}
];
const menu=document.getElementById("docmenu"),paper=document.getElementById("paper");
let current=docs[0];
function fieldDetails(id,label){const custom=current.fields.find(f=>f[0]===id);const sharedInfo=shared[id];document.getElementById("field-title").textContent=label;document.getElementById("field-desc").textContent=custom?.[3]||sharedInfo?.[1]||"Campo de referencia del documento.";document.getElementById("field-warning").textContent=custom?.[4]||sharedInfo?.[2]||"Verifica el contenido con el procedimiento y formulario vigente.";paper.querySelectorAll(".field").forEach(b=>b.classList.toggle("active",b.dataset.field===id))}
function render(id){current=docs.find(d=>d.id===id)||docs[0];document.getElementById("doc-title").textContent=current.name;menu.querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.doc===current.id));paper.replaceChildren();const head=document.createElement("div");head.className="paperhead";const org=document.createElement("div");const orgtitle=document.createElement("strong");orgtitle.textContent="ENTIDAD PÚBLICA · MODELO EDUCATIVO";const orgsub=document.createElement("small");orgsub.textContent="Guatemala · Datos ficticios";org.append(orgtitle,orgsub);const ref=document.createElement("small");ref.textContent="DOCUMENTO ILUSTRATIVO\nSIN VALIDEZ OFICIAL";head.append(org,ref);const h=document.createElement("h2");h.className="docname";h.textContent=current.name;const grid=document.createElement("div");grid.className="docgrid";current.fields.forEach((f,i)=>{const b=document.createElement("button");b.type="button";b.className="field"+(i===current.fields.length-1?" wide":"");b.dataset.field=f[0];const label=document.createElement("label");label.textContent=f[1];const value=document.createElement("b");value.textContent=f[2];b.append(label,value);b.addEventListener("click",()=>fieldDetails(f[0],f[1]));grid.append(b)});const foot=document.createElement("div");foot.className="docfoot";for(const txt of ["Revisión documental · ejemplo","Autorización · ejemplo"]){const e=document.createElement("div");e.className="signature";e.textContent=txt;foot.append(e)}paper.append(head,h,grid,foot);fieldDetails(current.fields[0][0],current.fields[0][1])}
docs.forEach(d=>{const b=document.createElement("button");b.dataset.doc=d.id;const name=document.createElement("strong");name.textContent=d.name;const caption=document.createElement("small");caption.textContent=d.caption;b.append(name,caption);b.addEventListener("click",()=>render(d.id));menu.append(b)});render(current.id);
