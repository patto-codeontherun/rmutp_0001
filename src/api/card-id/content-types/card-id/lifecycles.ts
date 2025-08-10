interface CardIdEvent {
  params: {
    data: {
      cardId?: string;
    };
  };
}

module.exports = {
  beforeCreate(event: CardIdEvent) {
    const { data } = event.params;
    
    if (data.cardId) {
      // Check if cardId is exactly 13 digits
      if (!/^\d{13}$/.test(data.cardId)) {
        throw new Error('Card ID must be exactly 13 digits');
      }
    }
  },
  
  beforeUpdate(event: CardIdEvent) {
    const { data } = event.params;
    
    if (data.cardId) {
      // Check if cardId is exactly 13 digits
      if (!/^\d{13}$/.test(data.cardId)) {
        throw new Error('Card ID must be exactly 13 digits');
      }
    }
  }
};