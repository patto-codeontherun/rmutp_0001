interface ValidationResult {
  valid: boolean;
  message: string;
}

export class ValidationService {
  validateMobile(mobile: string): boolean {
    return /^\d{10}$/.test(mobile);
  }
  
  validateCardId(cardId: string): boolean {
    return /^\d{13}$/.test(cardId);
  }
  
  validateMobileWithError(mobile: string): boolean {
    if (!this.validateMobile(mobile)) {
      throw new Error('Mobile number must be exactly 10 digits');
    }
    return true;
  }
  
  validateCardIdWithError(cardId: string): boolean {
    if (!this.validateCardId(cardId)) {
      throw new Error('Card ID must be exactly 13 digits');
    }
    return true;
  }
  
  validateMobileDetailed(mobile?: string): ValidationResult {
    if (!mobile) {
      return { valid: false, message: 'Mobile number is required' };
    }
    
    if (typeof mobile !== 'string') {
      return { valid: false, message: 'Mobile number must be a string' };
    }
    
    if (mobile.length !== 10) {
      return { valid: false, message: 'Mobile number must be exactly 10 characters' };
    }
    
    if (!/^\d+$/.test(mobile)) {
      return { valid: false, message: 'Mobile number must contain only digits' };
    }
    
    return { valid: true, message: 'Valid mobile number' };
  }
  
  validateCardIdDetailed(cardId?: string): ValidationResult {
    if (!cardId) {
      return { valid: false, message: 'Card ID is required' };
    }
    
    if (typeof cardId !== 'string') {
      return { valid: false, message: 'Card ID must be a string' };
    }
    
    if (cardId.length !== 13) {
      return { valid: false, message: 'Card ID must be exactly 13 characters' };
    }
    
    if (!/^\d+$/.test(cardId)) {
      return { valid: false, message: 'Card ID must contain only digits' };
    }
    
    return { valid: true, message: 'Valid card ID' };
  }
}

// Export instance for use in other files
export const validationService = new ValidationService();

// For CommonJS compatibility
module.exports = {
  ValidationService,
  validationService
};