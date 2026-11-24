export interface ContactFormData {
  name: string;
  contact: string;
  occasion: string;
  message: string;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export const OCCASIONS = [
  'Mariages & fiançailles',
  'Anniversaires',
  'Naissances',
  'Attentions romantiques',
  'Remerciements',
  'Créations personnalisées',
] as const;

export type OccasionLabel = (typeof OCCASIONS)[number];

export function isValidEmailOrPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (emailRegex.test(trimmed)) {
    return true;
  }

  // Phone check: only digits, spaces, +, -, ., () and at least 8 digits
  const allowedPhoneChars = /^[+\d\s().-]+$/;
  if (!allowedPhoneChars.test(trimmed)) {
    return false;
  }
  const digitCount = trimmed.replace(/\D/g, '').length;
  return digitCount >= 8 && digitCount <= 15;
}

export function validateContactForm(data: ContactFormData): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (data.name.trim().length < 2) {
    errors.name = 'Veuillez indiquer votre nom (minimum 2 caractères).';
  }

  if (!isValidEmailOrPhone(data.contact)) {
    errors.contact = 'Veuillez saisir une adresse e-mail ou un numéro de téléphone valide.';
  }

  if (!data.occasion.trim()) {
    errors.occasion = 'Veuillez sélectionner une occasion.';
  }

  if (data.message.trim().length < 10) {
    errors.message = 'Veuillez décrire votre inspiration ou demande (minimum 10 caractères).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildInquirySummary(data: ContactFormData): string {
  return [
    'CHOCO LOUTI — Demande de création sur mesure',
    `Nom : ${data.name.trim()}`,
    `Contact : ${data.contact.trim()}`,
    `Occasion : ${data.occasion.trim()}`,
    `Message : ${data.message.trim()}`,
  ].join('\n');
}

export function getWrappedIndex(current: number, delta: number, length: number): number {
  if (length <= 0) return 0;
  return ((current + delta) % length + length) % length;
}
