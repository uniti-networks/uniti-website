const Footer = () => (
  <footer
    className="w-full"
    style={{
      background: "#283b8d",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      padding: "48px 0",
    }}
  >
    <div className="container-wide px-6 lg:px-20 flex flex-col md:flex-row items-start justify-between gap-6">
      <div>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>
          Digital activation that pays
        </p>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "6px" }}>
          © 2026 Uniti Networks Ltd. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:text-right">
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>
          connect@unitinetworks.com
        </p>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>
          licensing@unitinetworks.com
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;