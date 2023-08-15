window.onload = function() {
    
    let bit = document.getElementById("bit");
    let byte = document.getElementById("byte");
    let kb = document.getElementById("kb");     
    let mb = document.getElementById("mb");    
    let gb = document.getElementById("gb");    
    let tb = document.getElementById("tb");    
        
    
    bit.oninput = function() {
    byte.value = (bit.value / 8) ;
    kb.value = (byte.value / 1024);
    mb.value = (kb.value / 1024);
    gb.value = (mb.value / 1024);
    tb.value = (gb.value / 1024);
    }
    
    byte.oninput = function() {
    bit.value = (byte.value * 8) ;
    kb.value = (byte.value / 1024);
    mb.value = (kb.value / 1024);
    gb.value = (mb.value / 1024);
    tb.value = (gb.value / 1024);
    }     
        
    kb.oninput = function() {
    byte.value = (kb.value * 1024);
    bit.value = (byte.value * 8);
    mb.value = (kb.value / 1024);
    gb.value = (mb.value / 1024);
    tb.value = (gb.value / 1024);
    }   
    
    mb.oninput = function() {
    kb.value = (mb.value * 1024);
    byte.value = (kb.value * 1024);
    bit.value = (byte.value * 8);
    gb.value = (mb.value / 1024);
    tb.value = (gb.value / 1024);
    }
    
    gb.oninput = function() {
    mb.value = (gb.value * 1024);
    kb.value = (mb.value * 1024);
    byte.value = (kb.value * 1024);
    bit.value = (byte.value * 8);
    tb.value = (gb.value / 1024);
    } 
    
    tb.oninput = function() {
    gb.value = (tb.value * 1024);
    mb.value = (gb.value * 1024);
    kb.value = (mb.value * 1024);
    byte.value = (kb.value * 1024);
    bit.value = (byte.value * 8);
    }
        
    }
    