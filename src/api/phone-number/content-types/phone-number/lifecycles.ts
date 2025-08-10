interface PhoneNumberEvent {
  params: {
    data: {
      mobile?: string;
    };
  };
}

module.exports = {
  beforeCreate(event: PhoneNumberEvent) {
    const { data } = event.params;
    
    if (data.mobile) {
      // Check if mobile is exactly 10 digits
      if (!/^\d{10}$/.test(data.mobile)) {
        throw new Error('Mobile number must be exactly 10 digits');
      }
    }
  },
  
  beforeUpdate(event: PhoneNumberEvent) {
    const { data } = event.params;
    
    if (data.mobile) {
      // Check if mobile is exactly 10 digits
      if (!/^\d{10}$/.test(data.mobile)) {
        throw new Error('Mobile number must be exactly 10 digits');
      }
    }
  }
};