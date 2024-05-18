from math import sqrt, exp

print('\033[1;31m-\033[m'*40)
print(' \033[1;30;41m >>>>>> CALCULADORA <<<<<< \033[m')
print('\033[1;31m-\033[m'*40)

while True:
    print(""" \033[1;32m>>>>>> Escolha sua Opção <<<<<<
    [1] - Adição 
    [2] - Subtração
    [3] - Multiplicação
    [4] - Divisão 
    [5] - Potência 
    [6} - Raiz Quadrada
    [7] - Sair do programa \033[m""")

    operação = int(input('\033[1;30;43m Qual operador deseja utilizar [1, 2, 3, 4, 5, 6, 7]: \033[m'))

    if  operação == 7:
        print(' \033[1;30;41m Saindo do programa.... \033[m')
        break

    n1 = float(input('\033[1;36m Digite o 1º número: \033[m'))
    n2 = float(input('\033[1;36m Digite o 2º número: \033[m'))

    # criando uma condição caso uma das variaveis seja 0

    if n1 == 0 or n2 == 0:
        print('\033[1;34m Operação não é válida! Digite um número válido. \033[m')
        break

    while True:

        if operação == 1:
            resultado = n1 + n2
            print(f'\033[1;31m O resultado é: {resultado:.0f} \033[m')
            break

        elif operação == 2:
            resultado = n1 - n2
            print(f'\033[1;31m O resultado é: {resultado:.0f} \033[m')
            break

        elif operação == 3:
            resultado = n1 * n2
            print(f'\033[1;31m O resultado é: {resultado:.0f} \033[m')
            break

        elif operação == 4:
            resultado = n1 / n2
            print(f'\033[1;31m O resultado é: {resultado:.0f} \033[m')
            break

        elif operação == 5:
            resultado = n1 ** n2
            print(f' \033[1;31m O resultado de {n1} elevado(a) a {n2} é: {resultado:.0f} \033[m')
            break

        elif operação == 6:
            resultado = n1 ** 0.5
            print(f'\033[1;31m A raiz quadrada de {n1} é: {resultado:.1f} \033[m')
            resultado = n2 ** 0.5
            print(f'\033[1;31m A raiz quadrada de {n2} é: {resultado:.1f} \033[m')
            break

        else:
            print('Opção inválida! Informe o operador correto.')

    resp = ' '
    while resp not in 'SN':
        resp = str(input('\033[1;35m Quer Continuar? [S/N]: \033[m')).strip().upper()[0]
    if resp == 'N':
        print(' \033[1;30;41m Saindo do programa.... \033[m')
        break