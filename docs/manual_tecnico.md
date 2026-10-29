
## Validación del teléfono

Se incorporó la función validarTelefono(tel), que comprueba que el teléfono contenga únicamente números.

La función utiliza la expresión regular /^[0-9]+$/.

- ^ indica el inicio del texto.
- [0-9] permite números del 0 al 9.
- + indica que debe existir uno o más números.
- $ indica el final del texto.

La función devuelve true si el teléfono es válido y false si contiene letras, símbolos o está vacío.
