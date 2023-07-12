import React from "react";
import LayoutPages from "../../Components/LayoutPages";

function Contact() {
  return (
    <>
      <LayoutPages>
        <div style={{ height: "inherit" }}>
          <iframe
            src="https://forms.monday.com/forms/embed/2e90a38ef4192d5698984e68c72fe4cf?r=use1"
            style={{
              minHeight: "100vh",
            }}
          ></iframe>
        </div>
      </LayoutPages>
    </>
  );
}

export default Contact;
