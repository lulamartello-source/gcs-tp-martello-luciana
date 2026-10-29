
# Plan de pruebas

## Versión v1.0

| ID | Prueba | Resultado esperado |
|---|---|---|
| P-01 | Ingresar un nombre y un teléfono numérico | Mostrar el mensaje de registro |
| P-02 | Ingresar letras en el teléfono | La versión inicial permite ingresarlas; se registra como problema pendiente |

## Pruebas de validación del teléfono - Versión 1.1

| ID | Dato ingresado | Resultado esperado |
|---|---|---|
| P-03 | 2804556677 | Aceptar |
| P-04 | 280ABC6677 | Rechazar |
| P-05 | telefono | Rechazar |
| P-06 | Campo vacío | Rechazar |
| P-07 | 280-455-6677 | Rechazar |
