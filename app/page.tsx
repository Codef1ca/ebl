"use client";

import Image from "next/image";
import {Tabs, Tab,} from "@heroui/tabs";
import {Card, CardHeader, CardBody, CardFooter}  from "@heroui/card";
import {Divider} from "@heroui/divider";
import {Link} from "@heroui/link";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative">
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 3 }}
    transition={{ duration: 1, delay: 0.6}}
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
      <p className="p-txt">Ibalance surge con la idea de Surge con la idea de rediseñar y redefinir conceptos acerca del equilibrio y el aprendizaje del movimiento. Integrando conceptos claves para el entendimiento del ser humano en movimiento: </p>
      <p className="p-txt"><span className="negrita">Biotensegridad, Propiocepción y Núcleo core</span>, integramos estos conceptos para desarrollar todas las capacidades motoras.</p>
      </div>
      <p className="p-txt2">Nuestro programa integra y aplica estos tres conceptos en cada ejercicio, bloque y sesión.</p>
    </div>

    <div className="flex w-full flex-col container-componen">
      <Tabs aria-label="Options" className="recuadro-com">
        <Tab key="photos" title="BIOTENSEGRIDAD" className="titulo-componen">
          <Card className="card-componen">
            <CardBody className="card-componen">
            Estructura viva: Este concepto viene de la palabra tensegridad, que surge de la arquitectura, en este caso aplicable al cuerpo humano, es una red o malla que envuelve todo el organismo, incluyendo músculos, tendones, articulaciones y órganos. Gracias a esta, las estructuras músculo esqueléticas mantienen su forma ante un desbalance o deformación repentina.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="PROPIOCEPCIÓN">
          <Card className="card-componen">
            <CardBody>
            Autopercepción: Es uno de los sentidos más importantes y activos en el cuerpo humano, a través del sistema nervioso, esta capacidad responde a receptores ligados a órganos y tejidos, esta capacidad brinda información precisa de la posición de cada parte del cuerpo en el espacio.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="CORE">
          <Card className="card-componen">
            <CardBody>
            Núvleo o centro: Es el centro del cuerpo humano, más allá de las cadenas musculares que componen el centro, este núcleo da origen y estabilidad  a todo movimiento, acompaña la respiración, ya que el núcleo se activa en conjunto a todos los diafragmas. Conecta también la musculatura de la cintura escapular y pélvica.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>

 
    

    <div className="ultimo-container">
    EXISTEN TRES NIVELES PARA ALCANZAR NUESTROS OBJETIVOS
    <div className="container-cuadritos">
    <div className="cuadrito">1° NIVEL: APRENDER
      <br></br>
      Desbloquear y desglosar los ejercicios para aprenderlos de manera sencilla, adaptamos cada ejercicio a cada persona según el nivel de práctica que ya traes.
    </div>
    <div className="cuadrito2">2° NIVEL: PRACTICAR
      <br></br>
       Tiene duración variable, una vez que ejecutas y recuerdas  movimientos, secuencias y  bloques de cada sesión, ¡estás listo para avanzar al siguiente nivel!
    </div>
    <div className="cuadrito3">3° NIVEL: ENTRENAR
      <br></br>
       Durante esta Etapa logramos los efectos biológicos a largo plazo, ¡estamos listos para comenzar a complejizar la práctica y explorar tu máximo potencial!
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
    <h2 className="titulo-huella">MARCAR LA HUELLA DE APRENDIZAJE</h2>
    <p className="txt-huella">Para lograrlo es necesario llevar adelante 270 acciones efectivas; para alcanzar este efecto biológico a largo plazo es necesario llevar adelante un seguimiento individual por lo que antes de poder autogestionar tu práctica es fundamental que realices el seguimiento sincrónico.</p>
    </div>
    <div className="contenedor-precios"> 
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={20}
          src="/personita.png"
          width={20}
          className="personita"
        />
        <div className="flex flex-col">
        <p className="text-md">SEGUIMIENTO SINCRÓNICO 100%</p>
        <p className="text-small text-default-500 text-card">2 SESIONES POR SEMANA DURANTE 3 MESES</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>U$D 270</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color text-card">
        Visita nuestra plataforma de aprendizaje online.
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={20}
          src="/personita.png"
          width={20}
          className="personita"
        />
        <div className="flex flex-col">
          <p className="text-md">SEGUIMIENTO  50%</p>
          <p className="text-small text-default-500 text-card">Programa completo: 24 horas (6 horas online en vivo y 18 horas autoregistradas).
            <br></br>
            Incluye diseño de programa personalizado, evaluación y presentación final.
            <br></br>
            Duración variable: 2 o 3 meses (6 sesiones online en vivo, 12 sesiones autoregistrables)
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
      <p>U$D 180</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color text-card">
          Visita nuestra plataforma de aprendizaje online
        </Link>
      </CardFooter>
    </Card>
     <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={20}
          src="/personita.png"
          width={20}
          className="personita"
        />
        <div className="flex flex-col">
        <p className="text-md">CREA TU PROPIO SISTEMA</p>
        <p className="text-small text-default-500 text-card">
        Duración: 9 meses (108 horas). Incluye: sesiones teóricas, supervisión y acompañamiento en tu diseño.
        <br></br>
        Vos elegís un tema o una disciplina para transformar. Seguimiento 50-50.
        <br></br>
        3 clases por semana (2 prácticos y 1 conversatorio)

        </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>U$D 1620 (9 meses)</p>
        <br></br>
        <p>U$D 180 por mes</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color text-card">
        Visita nuestra plataforma de aprendizaje online
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={20}
          src="/personita.png"
          width={20}
          className="personita"
        />
        <div className="flex flex-col">
        <p className="text-md">WAKE UP ACTIVATION - ACTIVACIONES DEL DESPERTAR</p>
        <p className="text-small text-default-500 text-card">Sesiones especiales matutinas 100% sincrónico (3 clases por semana durante un mes / 12 sesiones de 15 minutos por sesión)
</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>U$D 60</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color text-card">
        Visita nuestra plataforma de aprendizaje online
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={20}
          src="/personita.png"
          width={20}
          className="personita"
        />
        <div className="flex flex-col">
        <p className="text-md">DISEÑO DEL PROGRAMA</p>
        <p className="text-small text-default-500 text-card">Incluye: encuesta diagnostica, diseño personalizado especial segúbn disciplina, versión analógica y digital
          <br></br>
          Duración: se actualiza cada mes, una vez cumplido el objetivo propuesto.
        </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>U$D 35</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color">
        Solicitalo por WhatsApp
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={20}
          src="/personita.png"
          width={20}
          className="personita"
        />
        <div className="flex flex-col">
        <p className="text-md">SESIÓN INDIVIDUAL</p>
        <p className="text-small text-default-500 text-card">Incluye conversación introductoria, diseño de ejercicios y circuitos. 
          <br></br>
          Duración: 90 minutos. Horario a convenir.
        </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>U$D 18</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color">
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
