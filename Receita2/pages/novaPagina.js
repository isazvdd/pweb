import { DeOutraPagina } from "./outraPagina.js";

export default function Principal() {
  return (
    <div>
      <h1>Nova Página</h1>
      <MariaPrea />
      <PreaMaria />
      <Maria />
      <DeOutraPagina />
    </div>
  );
}

export function MariaPrea() {
  return <h2>Morreu Maria Preá...</h2>;
}

export function PreaMaria() {
  return <h3>Agora vamos deitar</h3>;
}

export function Maria() {
  return <h4>Mas antes, vamos tomar uma!</h4>;
}
