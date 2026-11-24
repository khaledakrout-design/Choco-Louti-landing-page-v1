import test from 'node:test';
import assert from 'node:assert/strict';
import {
  OCCASIONS,
  buildInquirySummary,
  getWrappedIndex,
  isValidEmailOrPhone,
  validateContactForm,
} from './chocoLogic';

test('isValidEmailOrPhone accepts valid emails and phone numbers', () => {
  assert.equal(isValidEmailOrPhone('claire@exemple.fr'), true);
  assert.equal(isValidEmailOrPhone('+33 6 12 34 56 78'), true);
  assert.equal(isValidEmailOrPhone('0612345678'), true);
  assert.equal(isValidEmailOrPhone('abc'), false);
  assert.equal(isValidEmailOrPhone('12345'), false);
  assert.equal(isValidEmailOrPhone('claire@invalid'), false);
});

test('validateContactForm rejects empty or invalid inputs with French messages', () => {
  const result = validateContactForm({
    name: 'A',
    contact: 'invalid',
    occasion: '',
    message: 'Bonjour',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.contact);
  assert.ok(result.errors.occasion);
  assert.ok(result.errors.message);
});

test('validateContactForm passes on valid French inquiry data', () => {
  const result = validateContactForm({
    name: 'Camille Laurent',
    contact: 'camille.laurent@exemple.fr',
    occasion: OCCASIONS[0],
    message: 'Nous souhaitons imaginer des fleurs en chocolat personnalisées pour notre mariage.',
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('buildInquirySummary formats clean French text summary', () => {
  const summary = buildInquirySummary({
    name: ' Camille ',
    contact: ' +33 6 12 34 56 78 ',
    occasion: 'Anniversaires',
    message: ' Un coffret de fleurs en chocolat noir et ivoire. ',
  });

  assert.match(summary, /CHOCO LOUTI — Demande de création sur mesure/);
  assert.match(summary, /Nom : Camille/);
  assert.match(summary, /Occasion : Anniversaires/);
});

test('getWrappedIndex wraps cleanly forward and backward', () => {
  assert.equal(getWrappedIndex(0, -1, 3), 2);
  assert.equal(getWrappedIndex(2, 1, 3), 0);
  assert.equal(getWrappedIndex(1, 1, 3), 2);
});
