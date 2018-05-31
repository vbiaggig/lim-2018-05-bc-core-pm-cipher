describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode("33","ABCDEFGHIJKLMNOPQRSTUVWXYZ"),'HIJKLMNOPQRSTUVWXYZABCDEFG');
      assert.equal(cipher.encode("33","abcdefghijklmnopqrstuvwxyz"),'hijklmnopqrstuvwxyzabcdefg');
      assert.equal(cipher.encode("33"," 1?"),' 1?');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode("33","HIJKLMNOPQRSTUVWXYZABCDEFG"),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      assert.equal(cipher.decode("33","hijklmnopqrstuvwxyzabcdefg"),'abcdefghijklmnopqrstuvwxyz');
      assert.equal(cipher.decode("33"," 1?"),' 1?');
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',() =>{
      
      describe('cipher.createCipherWithOffset()', () =>{
        
        it('debería ser un objeto', () => {
          assert.equal(typeof cipher.createCipherWithOffset(), 'object');
        });

        describe('createCipherWithOffset.encode', () => {

          it('debería ser una función', () => {
            assert.equal(typeof cipher.createCipherWithOffset.encode, 'function');
          });

          it('debería retornar "hij" para "abc" con offest 33', () => {
            assert.equal(cipher.createCipherWithOffset.encode("33"),'hij');
          });

        });
      
        describe('createCipherWithOffset.decode', () => {
      
          it('debería ser una función', () => {
            assert.equal(typeof cipher.createCipherWithOffset.decode, 'function');
          });

          it('debería retornar "abc" para "hij" con offest 33', () => {
            assert.equal(cipher.createCipherWithOffset.decode("33"),'abc');
          });

        });
        
      })
      
    });

  });

});
