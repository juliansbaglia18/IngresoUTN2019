#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    char letra;
    char palabra [10];//como no hay strings, se usan arrays para palabras

    printf("Ingrese una palabra: ");
    scanf("%s", &palabra);//se usa %s porque no es solo UN caracter.
    printf("La palabra es: %s\n", palabra);

    system("pause");


    printf("Ingrese un numero: ");
    scanf("%d", &numero);
    fflush(stdin);//limpio el buffer para que no quede carcado con el enter y la linea de abajo no se cargue con algo no deseado. Tambien lo podria solucionar poniendo un espacio antes del %c
    printf("\nIngrese un caracter: ");
    scanf("%c", &letra);

    printf("El numero es: %d y la letra es: %c", numero, letra);

    printf("\nHello world!\n");
    system("pause");//pausa la consola y te pide que apretes una tecla para continuar.
    return 0;
}
