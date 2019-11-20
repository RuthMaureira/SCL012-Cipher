describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
      });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(window.cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), 'hijklmnopqrstuvwxyzabcdefg');
      });

    it('debería retornar "h i j k l m n" para "a b c d e f g" con offset 33', () => {
      assert.equal(window.cipher.encode(33, "a b c d e f g"), 'h i j k l m n');
      });

    it('debería retornar "9:;<=>?@!" para "*+,-./012" con offset 15', () => {
      assert.equal(window.cipher.encode(15, "*+,-./012"), '9:;<=>?@!');
      });

    it('debería retornar "^_`[" para "]^_`" con offset 13', () => {
      assert.equal(window.cipher.encode(13, "]^_`"), '^_`[');
      });

    it('debería retornar "~{|}" para "{|}~" con offset 11', () => {
      assert.equal(window.cipher.encode(11, "{|}~"), '~{|}');
      });


  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(window.cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), 'abcdefghijklmnopqrstuvwxyz');
      });

    it('debería retornar "a b c d e f g" para "h i j k l m n" con offset 33', () => {
      assert.equal(window.cipher.decode(33, "h i j k l m n"), 'a b c d e f g');
      });

    it('debería retornar "*+,-./012" para "9:;<=>?@!" con offset 15', () => {
      assert.equal(window.cipher.decode(15, "9:;<=>?@!"), '*+,-./012');
      });

    it('debería retornar "]^_`" para "^_`[" con offset 13', () => {
      assert.equal(window.cipher.decode(13, "^_`["), ']^_`');
      });

    it('debería retornar "{|}~" para "~{|}" con offset 11', () => {
      assert.equal(window.cipher.decode(11, "~{|}"), '{|}~');
      });

  });
});
