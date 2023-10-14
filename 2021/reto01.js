export default function contarOvejas(ovejas) {

    const ovejasRojas = ovejas.filter((oveja) => {
        const isOvejaRoja = oveja.color === 'rojo'
        return isOvejaRoja
    })
    
    const ovejasRes = []
    ovejasRojas.forEach((ovejaRoja,i) => {
        const nombreMinuscula = ovejaRoja.name.toLowerCase()
        if (nombreMinuscula.includes('a') && nombreMinuscula.includes('n')) {
            ovejasRes.push(ovejasRojas[i])
        }  
    })
    return ovejasRes
}