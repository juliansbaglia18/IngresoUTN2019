#include <stdio.h>
#include <stdlib.h>

int main()
{
    int edad;
    float altura;

    /*altura = 1.75;
    edad = 20;*/

    printf("Ingrese su edad: \n");
    scanf("%d", &edad);//para cargar un entero.
    printf("Ingrese su altura: \n");
    scanf("%f", &altura);//cargo decimal.

    printf("Hello world!\n");//printf para imprimir.
    printf("Sbaglia \t Julian\n");// \t es un espacio.
    printf("La edad es: %d\t", edad);//%d es para enteros.
    printf("la altura es: %f m\n", altura);//%f para numeros con decimal.

    return 0;
}
