import VietnamNet from "assets/images/brand/Vietnamnet-Logo.png";

function BrandLogo() {
  return (
    <div className="aximo-brandlogo-section2 extra-side-margin">
      <div className="aximo-brandlogo-title">
        <p>Từng xuất hiện trên</p>
      </div>
      <div className="aximo-brandlogo-item d-flex justify-content-center">
        <a
          href="https://vietnamnet.vn/mo-ra-chan-troi-tri-thuc-moi-cho-tre-em-o-nhung-vung-que-xa-xoi-kho-khan-2322582.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={VietnamNet}
            alt="brand logo"
            style={{ height: "80px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default BrandLogo;
