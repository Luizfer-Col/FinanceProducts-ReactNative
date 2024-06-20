# Proyecto de Aplicación de Productos Financieros

## Descripción del Proyecto

La aplicación tiene como objetivo principal mostrar los productos financieros ofrecidos por una entidad bancaria. 

- En la pantalla principal se muestran los productos obtenidos desde una API y se permite realizar búsquedas en el listado de productos, mostrando los resultados de manera dinámica.
  
- Cada producto tiene su propia pantalla de visualización, desde la cual se pueden realizar operaciones como editar y eliminar.

- Además, en la pantalla principal existe un botón "Agregar" que lleva a un formulario con validaciones específicas para la creación de un producto.

## Características Principales

- **Renderizado Visual y Abstracción de la Lógica:** Se han utilizado componentes de renderizado visual para separar la lógica de la interfaz de usuario, siguiendo los principios SOLID y manteniendo un código limpio.

- **Custom Hooks:** Se ha priorizado la reutilización de código mediante el uso de custom hooks para encapsular la lógica compleja y facilitar su uso en diferentes partes de la aplicación.

- **Servicio Externo de API:** Se ha implementado un servicio externo de conexión a la API para manejar las operaciones CRUD con los productos financieros.

## Instalación

1. **Clona el Repositorio:**
   

```git clone https://github.com/tu-usuario/nombre-del-repositorio.git ```
```cd nombre-del-repositorio```


2. **Instala las Dependencias:**
```npm install --legacy-peer-deps```
o con yarn
```yarn install --legacy-peer-deps```


## Ejecución de Pruebas

Dentro del proyecto, se incluyen pruebas automatizadas que pueden ejecutarse fácilmente:

1. Para ejecutar las pruebas, utiliza el siguiente comando en la terminal:

```npm test```

O con yarn:

```yarn test```


2. **Archivos de prueba disponibles en la carpeta `__tests__`:**
- `__tests__/apiService.test.ts`
- `__tests__/useProductSearch.test.ts`
- `__tests__/validations.test.ts`

Estos archivos contienen las pruebas unitarias para diferentes partes del proyecto, asegurando la funcionalidad correcta y el comportamiento esperado de cada componente y funcionalidad.

