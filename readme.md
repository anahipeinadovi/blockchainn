# Práctica | Crear un Blockchain con node.js

## Getting Started
El contenido de este repositorio contiene codigo para implementar una cadena de bloques 


1.Se creó una clase llamada "Block" con tres atributos: Index, Data y previousHash. "Index" es un identificador único para cada bloque en la cadena, "Data" es el contenido del bloque y "previousHash" es el valor hash del bloque anterior en la cadena.
2.Se creó otra clase llamada "Blockchain", que se encargará de manipular los bloques y construir la cadena de bloques. Esta clase va a contener una lista de objetos de la clase Block.
3. Se utiliza la clase Blockchain para agregar y manipular objetos de la clase Block, esto permite construir la cadena de bloques. Cada bloque debe incluir su propio hash calculado a partir de los datos del bloque anterior y del bloque actual.
4. Se  generó un método llamado "mine" que calcula el nuevo hash del bloque, según la dificultad .

### Prerequisitos

Para poder ejecutar el programa se deberá asegurar tener instalado node.js y el gestor de paquetes de NodeJS(npm)


### Installing


1.Usando un administrador de versiones de Node realiza la instalacion de nodejs y npm : https://midu.dev/como-instalar-node-en-mac-y-windows/

2.Clonar el repositorio: 
    git clone git@github.com:anahipeinadovi/blockchain.git


3.Eecutar la siguiente linea de comando  en la terminal para correr el programa 

    node main.js



## Built With

* Nodejs
* Javascript



## Authors
Anahí Peinado Villalobos 

## License

No existe una licencia 

## Acknowledgments

* I.S.C Luis Antonio Ramírez Martínez 
