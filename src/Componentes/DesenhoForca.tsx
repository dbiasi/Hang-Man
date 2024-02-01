interface Props {
  contadorErro: number;
}

const DesenhoForca = ({ contadorErro }: Props) => {
  const CABECA = (
    <div
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "100%",
        border: "9px solid black",
        position: "absolute",
        top: "45px",
        right: "-27px",
        visibility: contadorErro >= 1 ? "visible" : "hidden",
      }}
    ></div>
  );

  const CORPO = (
    <div
      style={{
        width: "9px",
        height: "90px",
        backgroundColor: "black",
        position: "absolute",
        top: "108px",
        right: "0px",
        visibility: contadorErro >= 2 ? "visible" : "hidden",
      }}
    ></div>
  );

  const BRACO_DIREITO = (
    <div
      style={{
        width: "90px",
        height: "9px",
        backgroundColor: "black",
        position: "absolute",
        top: "135px",
        right: "-90px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
        visibility: contadorErro >= 3 ? "visible" : "hidden",
      }}
    ></div>
  );

  const BRACO_ESQUERDO = (
    <div
      style={{
        width: "90px",
        height: "9px",
        backgroundColor: "black",
        position: "absolute",
        top: "135px",
        right: "9px",
        rotate: "30deg",
        transformOrigin: "right bottom",
        visibility: contadorErro >= 4 ? "visible" : "hidden",
      }}
    ></div>
  );

  const PERNA_DIREITA = (
    <div
      style={{
        width: "90px",
        height: "9px",
        backgroundColor: "black",
        position: "absolute",
        top: "189px",
        right: "-81px",
        rotate: "60deg",
        transformOrigin: "left bottom",
        visibility: contadorErro >= 5 ? "visible" : "hidden",
      }}
    ></div>
  );

  const PERNA_ESQUERDA = (
    <div
      style={{
        width: "90px",
        height: "9px",
        backgroundColor: "black",
        position: "absolute",
        top: "189px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
        visibility: contadorErro >= 6 ? "visible" : "hidden",
      }}
    ></div>
  );

  return (
    <div style={{ position: "relative" }}>
      {CABECA}
      {CORPO}
      {BRACO_DIREITO}
      {BRACO_ESQUERDO}
      {PERNA_DIREITA}
      {PERNA_ESQUERDA}
      <div
        style={{
          height: "45px",
          width: "9px",
          backgroundColor: "black",
          position: "absolute",
          right: "0px",
          top: "0px",
        }}
      />
      <div
        style={{
          height: "9px",
          width: "180px",
          backgroundColor: "black",
          marginLeft: "108px",
        }}
      />
      <div
        style={{
          height: "360px",
          width: "9px",
          backgroundColor: "black",
          marginLeft: "108px",
        }}
      />
      <div
        style={{ height: "9px", width: "225px", backgroundColor: "black" }}
      />
    </div>
  );
};

export default DesenhoForca;
