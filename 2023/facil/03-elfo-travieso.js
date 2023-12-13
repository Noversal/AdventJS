function findNaughtyStep(original, modified) {
    if (original === modified) return ''
    const maxLong = Math.max(original.length, modified.length)
    for(let i= 0; i < maxLong; i++ ){
      if (original[i] !== modified[i]){
        return original.length > modified.length ?
          original[i]:
          modified[i]
      }
    }
  }