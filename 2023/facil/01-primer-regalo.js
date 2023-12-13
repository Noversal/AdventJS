function findFirstRepeated(gifts) {
  const valuesIterated = []
  const giftsLength = gifts.length 
    for(let i=0; i < giftsLength; i++) {
      if(valuesIterated.includes(gifts[i])){
        return gifts[i]
      }
      valuesIterated.push(gifts[i])
    }
    return -1
  }
  