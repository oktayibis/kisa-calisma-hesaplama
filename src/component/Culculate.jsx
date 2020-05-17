import React, { useState } from "react";
import { MDBInput, MDBAlert, MDBRow, MDBCol } from "mdbreact";

const Culculate = () => {
  const [monthlyNet, setMonthlyNet] = useState(0);
  const [workedDays, setWorkedDays] = useState(0);
  const [asgariBrut, setAsgariBrut] = useState(2943)

  const DAMGA_VERIGISI = 0.00759;
  const maksIskurPay = asgariBrut * 1.5 * (1-DAMGA_VERIGISI);
  const maxIskurPayDaily = maksIskurPay / 30;

  const totalIncome = monthlyNet * 12 * 1.35 //yillik brut gelirin yaklasik olarak hesaplanmasi
  const dailyPayIskur = ((totalIncome / 12 / 30) * 0.6); //iskura tabii miktarin hesaplanmasi
  const dailyIskurNetPay = dailyPayIskur > maxIskurPayDaily ? maxIskurPayDaily : dailyPayIskur; //Gunluk iskura dusen max. odeme miktarinin belirlenmesi
  const dailyPayIsveren = monthlyNet / 30; //isverenin gunluk odemesi gereken tutar
  const isKurDays = 30-workedDays; //calismadigi gunlerin hesaplanmasi
  let iskurPay = dailyIskurNetPay * isKurDays * (1 - DAMGA_VERIGISI); //iskurun odemesi gereken tutar. iskurun odemesi gereken gun sayisi * brut maasin yuzde 60. brut asgari ucretin %150'sinden fazla olamaz

  
  const isverenPay =dailyPayIsveren * workedDays;
  const monthlyTotal = isverenPay + iskurPay ; //damga vergisi sonrasi odeme

  return (
    <div>

      <MDBInput
            onChange={e => setMonthlyNet(e.target.value)}
            type="number"
            label="Aylık (AGİ Hariç) Net Maaş"
          >
            TL
          </MDBInput>
  
     
       <MDBRow>
         <MDBCol>
         <MDBInput
            onChange={e => setWorkedDays(e.target.value)}
            type="number"
            label="Varsa çalışılan gün "
          >
         
          </MDBInput>
         </MDBCol>

         <MDBCol>
         <MDBInput
          value={asgariBrut}
            onChange={e => setAsgariBrut(e.target.value)}
            type="number"
            label="Brüt Asgari Ücret"
           
          >
           TL
          </MDBInput>
         </MDBCol>
       </MDBRow>

    
       
          <MDBAlert className={monthlyTotal > 1700 ? 'font-weight-bold animated shake' : 'font-weight-bold '}  color={monthlyTotal > 1700 ? 'success' : 'dark'}>
         
        <small className="d-flex justify-content-evenly ">Toplam Net Aylık (Damga vergisi sonrası): </small>
  
        {monthlyTotal.toFixed(2)} TL
      </MDBAlert>

      <MDBAlert color={dailyPayIskur >= maxIskurPayDaily ? "danger" : "dark"}>
        <small className="d-flex justify-content-evenly">Günlük Hakediş:</small>
        {dailyPayIskur.toFixed(2)} TL
      <br /> <strong> Hesaplanacak Net: {dailyPayIskur >= maxIskurPayDaily ?  `${maxIskurPayDaily.toFixed(2)} ₺ --> Tavan ödeme miktarıdır.` : `${dailyPayIskur.toFixed(2)}₺`} </strong>
      </MDBAlert>
      <MDBAlert color={iskurPay === maksIskurPay ? "danger" : "dark"}>
        <small className="d-flex justify-content-evenly ">
          İşkur Aylık Ödeme Tutarı:
        </small>
        {iskurPay.toFixed(2)} TL
        {iskurPay === maksIskurPay
          ? "    --(İşkur'un ödeme miktari brüt asgari ücretin %150' sinden fazla olamaz!) "
          : ""}
      </MDBAlert>
      <MDBAlert color="dark">
        <small className="d-flex justify-content-evenly">
          Isveren Aylik Ödeme:{" "}
        </small>
        {isverenPay.toFixed(2)} TL
      </MDBAlert>
    
    </div>
  );
};

export default Culculate;
