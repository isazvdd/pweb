export default function InputSection() {
  return (
    <section>
      <input>Escreva aqui alguma coisa</input>
    </section>
  );
}

export function Input(props) {
  return <input {...props} />;
}
