export default function listGifts(letter) {
    const listaCarta = letter.split(' ')
    const lista = {}

    listaCarta.forEach(pedido => {
        if (pedido.startsWith('_') || pedido === '') return

        if (pedido in lista) {
            lista[pedido] += 1
            return
        } 
        lista[pedido] = 1
    })
    return lista
}
