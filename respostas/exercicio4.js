/*
    passo 1 - Eu ligaria o interruptor 1 e deixaria ele ligado por 10 minutos,
    passo 2 - depois, eu desligaria o interruptor 1 e ligaria o interruptor 2,
    passo 3 - em sequencia, eu iria até a primeira sala, 
            se ela estiver com a lâmpada ligada essa sala pertence ao interruptor 2,
            se ela estiver apagada mas com a lâmpada quente, então essa sala pertence ao interruptor 1
            se ela estiver apagada e com a lâmpada fria, então essa sala pertence ao interruptor 3.
    passo 4 - Agora que eu já descobri qual interruptor controla a primeira sala eu irei para a segunda sala.
            chegando na segunda sala eu repito o procedimento que fiz na primeira sala e descubro o interruptor
            que controla a segunda sala.
    passo 5 - Nesse momento eu já terei descoberto os interruptores que controlam a primeira sala e a segunda sala,
        portanto o interruptor que não for o controlador da primeira e nem da segunda sala é o controlador da terceira sala.
*/