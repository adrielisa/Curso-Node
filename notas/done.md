Hacer uso de done() es importante, si no lo usamos, Jest no sabe cuándo un test termina

**SIN done() - Jest no sabe cuándo termina el test**

```
test('callback test', () => {
    getUserByID(1, (error, user) => {
        expect(error).toBeUndefined();
        // ¿Cuándo termina el test? Jest no lo sabe
    });
    // Jest llega aquí inmediatamente y piensa que el test terminó
    // Pero el callback aún no se ejecutó!
});
```


**CON done() - Jest espera hasta que llames done()**

```
test('callback test', (done) => {  // ← Parámetro done
    getUserByID(1, (error, user) => {
        expect(error).toBeUndefined();
        done(); // ← Le dice a Jest: "AHORA el test terminó"
    });
    // Jest NO termina aquí, espera a que llames done()
});
```
