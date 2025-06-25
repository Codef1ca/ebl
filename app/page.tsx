"use client";

import Image from "next/image";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Image
          src="/background-eland.png"
          alt="Background"
          width={400}
          height={600}
          className="opacity-30 img-circular"
        />
      </motion.div>

      <section className="flex flex-col items-center gap-10 py-8 md:py-10">
        <Image
          src="/logo-ebalance.png"
          alt="Background"
          width={450}
          height={650}
          className="logo"
        />
        <Image
          src="/CARD2-CAMBIO.png"
          alt="Background"
          width={650}
          height={850}
          className="tarjeton"
        />
      </section>

      <div className="container-txt">
        <h2 className="titulo-txt">{'//NOSOTROS'}</h2>
        <div className="container-row">
          <p className="p-txt">
            Ibalance surge con la idea de redefinir el concepto de equilibrio y rediseñar circuitos de aprendizaje, práctica y entrenamiento.
          </p>
          <p className="p-txt">
            <span className="negrita">Biotensegridad, Propiocepción y Núcleo core. </span>
            El objetivo de nuestra práctica es el desarrollo de todas las capacidades motoras.
          </p>
        </div>
        <p className="p-txt2">
          Nuestro diseño está basado en tres conceptos claves para el entendimiento de la biomecánica humana:
        </p>
      </div>

      <div className="flex w-full flex-col container-componen">
        <Tabs aria-label="Options" className="recuadro-com">
          <Tab key="photos" title="BIOTENSEGRIDAD" className="titulo-componen">
            <Card className="card-componen">
              <CardBody className="card-componen">
                Estructura viva: Concepto que surge desde el campo de la arquitectura. Para entender un modelo estructural mecánico como los sistemas biológicos. El cuerpo mantiene la estabilidad y la forma a través de una red de tensión y compresión, esta malla o red envuelve todo el organismo incluyendo tejidos y órganos.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="PROPIOCEPCIÓN">
            <Card className="card-componen">
              <CardBody>
                Autopercepción: Es la capacidad de autopercibirse en el espacio, también conocido como el "sexto sentido", es uno de los más importantes y activos en el sistema nervioso. Está ligado e interconectado a través de receptores, neuronas, tejidos y órganos. Gracias a estas somos capaces de mantener el equilibrio y responder ante caídas o cambios repentinos de posición.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="CORE">
            <Card className="card-componen">
              <CardBody>
                Núcleo o centro: Es el centro de nuestro cuerpo, más allá de cadenas musculares, da origen y estabilidad a todo el movimiento. Está íntimamente conectado con todos los diafragmas a través de la columna vertebral y conecta la cintura pélvica con la escapular.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <div className="ultimo-container">
        EXISTEN TRES NIVELES PARA ALCANZAR NUESTROS OBJETIVOS
        <div className="container-cuadritos">
          <div className="cuadrito">
            1° NIVEL: APRENDER
            <br />
            Desbloquear y desglosar los ejercicios para aprenderlos de manera sencilla. Adaptamos cada ejercicio a cada persona según el nivel de práctica que ya traes.
          </div>
          <div className="cuadrito2">
            2° NIVEL: PRACTICAR
            <br />
            Tiene duración variable. Una vez que ejecutás y recordás movimientos, secuencias y bloques de cada sesión, ¡estás listo para avanzar al siguiente nivel!
          </div>
          <div className="cuadrito3">
            3° NIVEL: ENTRENAR
            <br />
            Durante esta etapa logramos los efectos biológicos a largo plazo. ¡Estamos listos para comenzar a complejizar la práctica y explorar tu máximo potencial!
          </div>
        </div>
      </div>

      <div className="container-banda">
        <div className="stiker">PROGRAMA</div>
        <div className="banda">
          Matemática de diseño del programa:
          Cada sesión tiene una duración de 60 minutos (cuatro bloques de 15 minutos), el equivalente a 270 acciones efectivas.
          Programa completo: 24 horas, el equivalente a 8100 acciones efectivas.
        </div>
        <Image
          src="/conexion.png"
          alt="Background"
          width={350}
          height={550}
          className="conexion"
        />
      </div>

      <div className="container-cards-precios">
        <div className="container-txt2">
          <h2 className="titulo-huella">HUELLA DE APRENDIZAJE Y EFECTO BIOLÓGICO A LARGO PLAZO</h2>
          <p className="txt-huella">
            Para lograrlo es necesario llevar adelante 270 acciones efectivas; para alcanzar este efecto biológico a largo plazo es necesario llevar adelante un seguimiento individual, por lo que antes de poder autogestionar tu práctica es fundamental que realices el seguimiento sincrónico.
          </p>
        </div>

        <div className="contenedor-precios">
          {/* Tarjetas de precios */}

          {/* SEGUIMIENTO SINCRÓNICO */}
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image alt="logo" height={20} src="/personita.png" width={20} className="personita" />
              <div className="flex flex-col">
                <p className="text-md">SEGUIMIENTO SINCRÓNICO 100%</p>
                <p className="text-small text-default-500 text-card">2 SESIONES POR SEMANA DURANTE 3 MESES</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody><p>U$D 270</p></CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://wa.me/5493512042162" className="link-color text-card">
                Solicitalo por WhatsApp
              </Link>
            </CardFooter>
          </Card>

          {/* SEGUIMIENTO 50% */}
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image alt="logo" height={20} src="/personita.png" width={20} className="personita" />
              <div className="flex flex-col">
                <p className="text-md">SEGUIMIENTO 50%</p>
                <p className="text-small text-default-500 text-card">
                  Programa completo: 24 horas (6 online en vivo y 18 autoregistradas). Incluye diseño de programa personalizado, evaluación y presentación final.
                  Duración variable: 2 o 3 meses (6 sesiones en vivo + 12 sesiones autoregistrables)
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody><p>U$D 180</p></CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://wa.me/5493512042162" className="link-color text-card">
                Solicitalo por WhatsApp
              </Link>
            </CardFooter>
          </Card>

          {/* CREA TU PROPIO SISTEMA */}
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image alt="logo" height={20} src="/personita.png" width={20} className="personita" />
              <div className="flex flex-col">
                <p className="text-md">CREA TU PROPIO SISTEMA</p>
                <p className="text-small text-default-500 text-card">
                  Duración: 9 meses (108 horas). Incluye: sesiones teóricas, supervisión y acompañamiento en tu diseño.
                  Seguimiento 50-50. 3 clases por semana (2 prácticas y 1 conversatorio)
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>U$D 1620 (9 meses)</p>
              <p>U$D 180 por mes</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://wa.me/5493512042162" className="link-color text-card">
                Solicitalo por WhatsApp
              </Link>
            </CardFooter>
          </Card>

          {/* WAKE UP ACTIVATION */}
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image alt="logo" height={20} src="/personita.png" width={20} className="personita" />
              <div className="flex flex-col">
                <p className="text-md">WAKE UP ACTIVATION</p>
                <p className="text-small text-default-500 text-card">
                  Sesiones matutinas 100% sincrónicas (3 clases por semana durante un mes, 12 sesiones en total)
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody><p>U$D 60</p></CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://wa.me/5493512042162" className="link-color text-card">
                Solicitalo por WhatsApp
              </Link>
            </CardFooter>
          </Card>

          {/* DISEÑO DEL PROGRAMA */}
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image alt="logo" height={20} src="/personita.png" width={20} className="personita" />
              <div className="flex flex-col">
                <p className="text-md">DISEÑO DEL PROGRAMA</p>
                <p className="text-small text-default-500 text-card">
                  Incluye encuesta diagnóstica, diseño personalizado, versión digital y analógica. Se actualiza cada mes según objetivos.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody><p>U$D 35</p></CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://wa.me/5493512042162" className="link-color">
                Solicitalo por WhatsApp
              </Link>
            </CardFooter>
          </Card>

          {/* SESIÓN INDIVIDUAL */}
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image alt="logo" height={20} src="/personita.png" width={20} className="personita" />
              <div className="flex flex-col">
                <p className="text-md">SESIÓN INDIVIDUAL</p>
                <p className="text-small text-default-500 text-card">
                  Conversación introductoria, diseño de ejercicios y circuitos. Duración: 90 minutos. Horario a convenir.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody><p>U$D 18</p></CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://wa.me/5493512042162" className="link-color">
                Solicitala por WhatsApp
              </Link>
            </CardFooter>
          </Card>

        </div>
      </div>

      <div className="max-w-md footer">
        <Divider className="my-4" />
        <div className="txt-footer">
          <div>© 2025 I-balance - Todos los derechos reservados.</div>
        </div>
      </div>
    </div>
  );
}
