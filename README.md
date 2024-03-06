# App Link

flujo actual de la aplicación:
1. El usuario se loggea:
    - Hago una petición get a la bd, esta te devuelve el jwt del usuario.
    - guardo el jwt en el localStorage, luego hago otra petición get a la bd, pasándole este jwt.
    - me guardo los datos del usuario en el context.

2. Mostrar todos los links del usuario:
    - Renderizo todos los datos del contexto.

3. El usuario quiere agregar un nuevo link:
    - Hago una petición post a la bd, (esta se actualiza).
    - actualizo mi contexto.

4. El usuario quiere volver a listar su lista de Links:
    - Renderizo todos los datos del contexto.

## to do:
- [x] Home page
- [x] add new link page
- [x] receive user data from backend
- [x] send a patch method adding a new link
- [ ] register page 
- [x] login page
- [x] upload images to backend.
- [x] manage jwt strategy
- [x] store jwt in local storage
- [ ] logout
- [ ] order links by creation date
- [ ] Code refactoring. 