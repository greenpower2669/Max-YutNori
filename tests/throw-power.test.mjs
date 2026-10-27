import {test} from 'node:test';import assert from 'node:assert/strict';
test('old saved force preserves its position in the expanded range and current force never migrates twice',async()=>{
 const {migratePower,clampPower}=await import('../web/src/throw-power.mjs');
 assert.equal(migratePower(.15,1),.3);assert.equal(migratePower(1,1),1.5);assert.ok(Math.abs(migratePower(.6,1)-.9352941176470588)<1e-12);assert.equal(migratePower(.6,2),.6);assert.equal(migratePower(NaN,1),.9);assert.equal(clampPower(-9),.3);assert.equal(clampPower(99),1.5);
});
