import { Input } from "./otherPages";

export default function Home() {
  return (
    <div>
      <h2>Viva Santana!</h2>
      <Input
        type="text"
        placeholder="Digite aqui um texto..."
        style={{
          backgroundColor: "#212121",
          color: "#FFFFFF",
          padding: "10px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}
