import React, { useState } from "react";
import "./MyForm.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    texto: "",
    arquivo: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpa o erro quando o campo é alterado
    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validar o campo de e-mail
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Por favor, insira um e-mail válido.";
      valid = false;
    }

    // Validar o campo de telefone
    if (!formData.telefone.trim() || !/^\d{10,}$/i.test(formData.telefone)) {
      newErrors.telefone =
        "Por favor, insira um número de telefone válido (mínimo de 10 dígitos com DDD). Ex: 1140028922";
      valid = false;
    }

    // Outras validações podem ser adicionadas para os campos restantes

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "service_h1dnlet",
          "template_nja37cj",
          formData,
          "c1Xz_QuIfGULVpjj2"
        )
        .then(
          (response) => {
            toast.success("Email enviado com sucesso!");
            console.log("email enviado", response.status, response.text);
          },
          (err) => {
            toast.error("Erro ao enviar email. Tente novamente.");
            console.log("erro:" + err);
          }
        );
    } else {
      toast.error("Formulário inválido. Por favor, corrija os erros.");
      console.log("Formulário inválido. Por favor, corrija os erros.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>

      <div className="error-message">{errors.nome}</div>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <div className="error-message">{errors.email}</div>

      <label>
        Telefone:
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
      </label>

      <div className="error-message">{errors.telefone}</div>

      <label>
        Texto:
        <textarea name="texto" value={formData.texto} onChange={handleChange} />
      </label>

      <label color="#14213D" style={{ fontSize: "14px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#FCA311"
          class="bi bi-info-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
        Caso queira adiantar o processo de orçamento e nos enviar um arquivo de
        texto, por favor adicione o link do arquivo do Google Drive no corpo da
        mensagem!
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
