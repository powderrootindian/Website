function sendInvoiceEmail(name,email,cart){
  let items="", total=0;
  cart.forEach(i=>{
    items+=`${i.name} - ₹${i.price}\n`;
    total+=i.price;
  });

  emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
    name:name,
    email:email,
    items:items,
    total:total
  });
}
