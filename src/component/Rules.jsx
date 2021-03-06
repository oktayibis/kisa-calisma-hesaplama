import React, { Component } from "react";
import { MDBBtn, MDBCollapse, MDBContainer, MDBAlert } from "mdbreact";

class Rules extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
      <div className='text-center' >
      <MDBContainer>

     
      <MDBBtn
        color="info "
      
        onClick={this.toggleCollapse("company")}
        style={{ marginBottom: "1rem" }}
        className='border-radius'
    >
      İşveren Şartları
    </MDBBtn>

    <MDBBtn
      color='warning'
      onClick={this.toggleCollapse("employee")}
      style={{ marginBottom: "1rem" }}
      className='border-radius'
    >
      Çalışan Şartları
    </MDBBtn>
    <MDBBtn
      color='success'
      onClick={this.toggleCollapse("payment")}
      style={{ marginBottom: "1rem" }}
      className='border-radius'
    >
     Ücret nasıl hesaplanır
    </MDBBtn>
        <MDBCollapse id="company" isOpen={this.state.collapseID}>
     
            <MDBAlert className='text-justify' color='info'>
            <li className='m-2 '>Kısa Çalışma ödeneğinden yararlanabilmek için işveren tarafından <a href='https://www.iskur.gov.tr/isveren/kisa-calisma-odenegi/basvuru-icin-gerekli-belgeler-ve-il-iletisim-adresleri/' target='_blank' rel="noopener noreferrer">İşkur'a </a> belirtildiği şekilde başvuru yapması gerekmektedir.</li>
            <li className='m-2'>Genel ekonomik, sektörel, bölgesel kriz veya zorlayıcı sebeplerle işyerindeki haftalık çalışma sürelerinin geçici olarak en az üçte bir oranında azaltılması veya süreklilik koşulu aranmaksızın işyerinde faaliyetin tamamen veya kısmen en az dört hafta süreyle durdurulması hallerinde işveren tarafından başvuru yapılması gerekmektedir.
            <span className='font-weight-bold'> COVID-19 Zorlayıcı sebeplerden kabul edilmiş ve İşkur tarafından kısa çalışma ödeneği uygunluk listesine alınmıştır.</span></li>
            <li className='m-2'>İşverenin başvurusu sonrası görevlendirilen bir müfettiş, yukarıda belirtilen şartlara durumun uygun olup olmadığını analiz edecektir.</li>
            <li className='m-2'>Eğer müfettiş onayı ile kısa çalışma ödeneği uygun görülürse iş veren bu durumdan yararlanmasını istediği çalışan listesini işkur ile paylaşacaktır.</li>
            <li className='m-2'>Işkur tarafından ödeme onaydan bir hafta sonra başlayacatır. Bu bir haftalık maaşın en az yarısını ödemek koşuluyla işverenin sorumluluğundadır. </li>

          </MDBAlert>
     
        </MDBCollapse>
        <MDBCollapse id="employee" isOpen={this.state.collapseID}>
      
            <MDBAlert className='text-left' color='warning'>
            <li className='m-2'>Son 60 gün hizmet akdine tabi olmak kaydıyla son 3 yıl içinde 450 gün sigorta priminin ödemiş olması gerekmektedir.</li>
            <li className='m-2'>Sigorta primi gün sayısı e-Devlet üzerinden, SGK dökümü ile kontrol edilebilir.</li>
            <li className='m-2'>Ödeme süresi 3 ayı aşamazç</li> 
            <li className='m-2'>Ödeme süresi bakanlar kurulu kararı ile 6 aya uzatılabilir.</li>
            <li className='m-2'>Kısa çalışma ödeneği süresinde iş sözleşmesi tek taraflı olarak sonlandırılamaz.</li>
            <li className='m-2'>Kısa çalışma ödeneği süresinde işveren ve işçi iş sözleşmesindeki yükümlülüklerini askıya alır.</li>

          </MDBAlert>
        
        
        </MDBCollapse>
        <MDBCollapse id="payment" isOpen={this.state.collapseID}>
  
            <MDBAlert className='text-left' color='success'>
            <li className='m-2'>Sigortalı çalışanın son oniki aylık prime esas kazançları dikkate alınarak hesaplanan günlük ortalama brüt kazancının % 60’ıdır. </li>
            <li className='m-2'>Bu şekilde hesaplanan kısa çalışma ödeneği miktarı, aylık asgari ücretin brüt tutarının % 150’sini geçemez. </li>
            <li className='m-2'>Eğer sigortalının çalıştığı gün olursa, bu miktar işveren tarafından ödenecektir.</li>
            <li className='m-2'>Haftalık izin, resmi ve ulusal tatil gibi izinler işveren ve işkur tarafından aynı ortantıda paylaşılarak ödenir.</li>
          </MDBAlert>
        
        </MDBCollapse>
        <div className="card my-3">
  <div className="card-body">
    <a href='https://www.iskur.gov.tr/isveren/kisa-calisma-odenegi' target='_blank' rel="noopener noreferrer">Daha ayrıntılı bilgi için İşkur tarafından hazırlanan resmi bilgilendirme sayfasını kontrol edebilirsiniz.</a>
  </div>
</div>
        </MDBContainer>
      </div>
    );
  }
}

export default Rules;