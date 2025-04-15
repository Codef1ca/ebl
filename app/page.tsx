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
      <p className="p-txt">Ibalance surge con la necesidad e idea de actualizar los abordajes metodológicos ya existentes, integrando conceptos claves para el entendimiento del ser humano en movimiento: </p>
      <p className="p-txt"><span className="negrita">Biotensegridad, Propiocepción y Núcleo core</span>, integramos estos conceptos para desarrollar todas las capacidades motoras.</p>
      </div>
      <p className="p-txt2">Estos tres conceptos están íntimamente relacionados, haciendo que cada movimiento pueda ejecutarse de manera coordinada.</p>
    </div>

    <div className="flex w-full flex-col container-componen">
      <Tabs aria-label="Options" className="recuadro-com">
        <Tab key="photos" title="BIOTENSEGRIDAD" className="titulo-componen">
          <Card className="card-componen">
            <CardBody className="card-componen">
            Red o malla que envuelve todo el cuerpo, incluyendo órganos, músculos y articulaciones entre otras, gracias a ella, las estructuras músculo esqueléticas mantienen su forma ante una compresión o tracción repentina. 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="PROPIOCEPCIÓN">
          <Card className="card-componen">
            <CardBody>
            Red que envuelve todo el cuerpo, (sistema miofascial) gracias a esta, las estructuras musculo esquelética mantienen su forma ante una compresión o tracción repentina, el cuerpo se auto estabiliza efectivamente.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="NÚCLEO CORE">
          <Card className="card-componen">
            <CardBody>
            Como él mismo nombre lo indica, el el centro de nuestro cuerpo, entendemos a este núcleo más allá de las cadenas musculares que componen el centro, da origen al movimiento y a la estabilización, está íntimamente relacionado con todas las cadenas musculares, es lo que conecta la cintura escapulario (zona alta o tren superior) con la cintura pélvica (zona baja o tren inferior).
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>

    <div className="container-banda">
    <div className="stiker">PROGRAMA</div>
    <div className="banda">
    Cada  programa de ejercicios está dividido en 4 bloques, a su vez el programa incluye 24 sesiones. Dentro de cada bloque aplicamos progresiones y variantes, adaptables según la experiencia y la necesidad de cada persona para una sencilla autogestión del programa en el que que vos elegís la modalidad para alcanzar los efectos.
    </div>
  <Image
    src="/conexion.png"
    alt="Background"
    width={350}
    height={550}
    className="conexion"
  />

    </div>
    

    <div className="ultimo-container">
    EXISTEN TRES NIVELES PARA ALCANZAR NUESTROS OBJETIVOS
    <div className="container-cuadritos">
    <div className="cuadrito">APRENDER</div>
    <div className="cuadrito2">PRACTICAR</div>
    <div className="cuadrito3">ENTRENAR</div>
    </div>
    <h2 className="txt-ultimo">Nuestro objetivo siempre es el mismo: lograr efectos biológicos a largo plazo (E.B.L.P) y así también alcanzar armonía desde lo más profundo del cuerpo humano.</h2>
    </div>

    <div className="contenedor-precios">
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={20}
          src="/personita.png"
          width={20}
        />
        <div className="flex flex-col">
        <p className="text-md">NOMBRE DEL CURSO</p>
        <p className="text-small text-default-500">Cantidad de horas</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Precio y demás</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color">
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
        />
        <div className="flex flex-col">
          <p className="text-md">NOMBRE DEL CURSO</p>
          <p className="text-small text-default-500">Cantidad de horas</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Precio y demás</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color">
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
        />
        <div className="flex flex-col">
        <p className="text-md">NOMBRE DEL CURSO</p>
        <p className="text-small text-default-500">Cantidad de horas</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Precio y demás</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui" className="link-color">
        Visita nuestra plataforma de aprendizaje online
        </Link>
      </CardFooter>
    </Card>
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
