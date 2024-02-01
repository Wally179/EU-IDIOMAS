import React, { useState } from "react";
import "./MyForm.css";
import emailjs from "@emailjs/browser";

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      arquivo: file,
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
            console.log("email enviado", response.status, response.text);
          },
          (err) => {
            console.log("erro:" + err);
          }
        );
    } else {
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

      <label>
        Anexe seu arquivo aqui:
        <input type="file" onChange={handleFileChange} />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
