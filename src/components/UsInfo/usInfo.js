import './UsInfo.scss'


export const UsInfo = () => {

    return (
      <div className="nos-central">
          <div className="nos-central__logo">
              <div><img src="../../assets/iconos/logo Oxynus gris.svg" alt="Logo de la compañia"></img></div>
              <h3 className="esloganFont">RESOLVIENDO CON INGENIO</h3>
          </div>

          <div className="nos-central__history"> 
              <h4>¿Quiénes Somos?</h4>
              <article>
                  <div>
                      OXYNUS nace en 2015 como una asociación de ingenieros electrónicos a los que nos apasiona la tecnología.
                      Buscamos simplificar las tareas cotidianas mediante aplicaciones y sistemas de control a distancia. No tenemos una sola área de acción: si hay algo que necesita controlar o manejar, nosotros lo resolvemos.
                      Tanto nos gusta lo que hacemos, que si no lo hiciésemos por trabajo lo haríamos por hobby.
                  </div>
                  <div>
                      Realizamos el diseño, la construcción y puesta en marcha del sistema, con metodología "llave en mano". Usted trae la necesidad, y nosotros le proveemos la solución.
                      Ofrecemos sistemas desde lo más simple hasta grandes proyectos, todo basado en IoT.
                  </div>
                  <div>
                      Por si no conoce qué es IoT, le contamos un poco. IoT, internet of things, o la internet de las cosas, describe la red de objetos físicos ("cosas") que llevan incorporados sensores, software y otras tecnologías con el fin de conectarse e intercambiar datos con otros dispositivos y sistemas a través de internet. Estos dispositivos van desde objetos domésticos comunes hasta herramientas industriales sofisticadas. Con más de 12 mil millones de dispositivos IoT conectados en la actualidad, los expertos prevén que este número aumentará a 22 mil millones para el 2025.
                  </div>
                  <div>
                      Esta área de la ingeniería viene creciendo exponencialmente, y nuestro objetivo es que usted no se quede afuera. Conozca nuestros proyectos, y si tiene alguna idea que resolver contáctese con nosotros, ¡Estamos ansiosos de escucharla!
                  </div>
              </article>
          </div>
      </div>


    )
}