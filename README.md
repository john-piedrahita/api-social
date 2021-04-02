# Clean Architecture

![](https://miro.medium.com/max/4800/1*D1EvAeK74Gry46JMZM4oOQ.png)

El concepto de arquitectura limpia planteado por Robert. C. Martin, presenta un modelo conceptual para lograr la separación de responsabilidades mediante capas correctamente definidas. 

Sin embargo, al materializar esta propuesta, el abanico de posibilidades se expande, derivando en diferentes estrategias de implementación, unas con mayor grado de separación de responsabilidades que otras.

Es por ello que apoyándonos en esta idea, hemos materializado esta arquitectura mediante una estructura de proyecto concreta, definiendo relaciones de dependencias claras entre los distintos módulos que la componen, reconociendo al dominio y las reglas del negocio como su núcleo.

Dicha estructura refleja un proyecto multi módulo, donde cada módulo define de forma clara sus dependencias, respetando siempre la regla de dependencia. 

Esta declara que; nunca una capa interior e inferior deberá conocer ni depender de capas exteriores, limitando así la visibilidad de la infraestructura en la capa del dominio, evitando que se contamine de clases, librerías y tecnologías definidas en el exterior, susceptibles de cambio.

Se ha elegido como base un proyecto multi módulo, pues nos permite contar con una separación fuerte entre capas, permitiendo especificar de forma clara las dependencias y relaciones hacia otros módulos y librerías.

### Entities

Es el módulo más interno de la arquitectura, pertenece a la capa del dominio y encapsula la lógica y reglas del negocio mediante modelos y entidades del dominio.

Estas representan los datos y objetos de valor del negocio sin llegar a ser un módulo compuesto sólo de estructuras de datos u objetos anémicos (sin comportamiento); sino que por el contrario es donde se recomienda expresar la lógica de negocio crítica a través de funciones puras (sin efectos secundarios).

Al ser el núcleo de la arquitectura, este módulo no depende nada más que de sí mismo. Al tener que relacionarse con su entorno, se ve obligado a definir el comportamiento esperado de la infraestructura mediante interfaces y depender únicamente de estas. A esta abstracción le conoceremos como gateways (puertos) del dominio y son fundamentales para desacoplar la tecnología del dominio; se tratarán de nuevo en la capa de infraestructura con el módulo de driven adapters.

### UseCase

Este módulo perteneciente a la capa del dominio, implementa los casos de uso del sistema, define lógica de aplicación y reacciona a las invocaciones desde el módulo de entry points, orquestando los flujos hacia el módulo de entities. 

Este último es su única dependencia, el cual le permite “hablar” exclusivamente en términos del dominio y no verse contaminado por la arquitectura y tecnología circundante.

### Entry — Point

Módulo perteneciente a la capa de infraestructura, define y agrupa el conjunto de adaptadores, lo que le permite exponer las capacidades de los casos de uso bajo cierta tecnología concreta (API, SOAP, CLI).

Reaccionan a señales y/o eventos del exterior, adaptando y transformando los datos de entrada (DTO) a un formato compatible con el lenguaje del dominio, posteriormente delega la ejecución a los useCases.

### Driven-Adapters

Módulo perteneciente a la capa de infraestructura, adapta y traduce al lenguaje de dominio, interacciona con subsistemas e infraestructura externa al dominio (Frameworks). 

### Application

Este módulo es el más externo de la arquitectura, es el encargado de ensamblar los distintos módulos, resolver las dependencias y crear los UseCases, inyectando en éstos instancias concretas de las dependencias declaradas, además de iniciar la aplicación, es decir es el único módulo del proyecto donde encontraremos el archivo ***server.ts*** el cual arranca la aplicación.

*Fuente:* *https://medium.com/bancolombia-tech/clean-architecture-aislando-los-detalles-4f9530f35d7a*