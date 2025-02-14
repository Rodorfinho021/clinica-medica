'use client'
import { useEffect, useState } from "react";
import styles from "./listar.module.css";


export default function Afis() {
    let [nome,setNome] = useState('')
    let [medicos,setMedicos] = useState([{
        "id": 1,
        "nome": "Alice Alves Nogueira",
        "telefone": "(69) 99932-9014",
        "especialidade":"Anestesiologia"},
        {
          "id": 2,
          "nome": "penis Silva",
          "telefone": "(99) 99999-9999",
          "especialidade":"Anestesiologia"}
      ])
    const getMedicos = async () =>{
        const response = await fetch('https://api-clinica-2a.onrender.com/medicos');
        if (!response.ok) {
            throw new Error('Deu ruim buscando os dados'+ response.statusText);
            }
        const data = await response.json();
        setMedicos(data);


    }

    useEffect(()=>{
        getMedicos();
    },[]);
    return (
      <>
        <div className={styles.medicosConteiner}>
            <h1 className={styles.medicosTitulo}>Lista de Médicos</h1>
            <div className={styles.medicoCentralizado}>
            <table className={styles.medicosTabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Especialidade</th>
                    </tr>
                </thead>
                <tbody >
                {medicos.map((medico)=>(
                    <tr key={medico.id}>
                        <td>{medico.id}</td>
                        <td>{medico.nome}</td>
                        <td>{medico.telefone}</td>
                        <td>{medico.email}</td>
                        <td>{medico.especialidade}</td>
                    </tr>

                ))}
                </tbody>
            </table>
            </div>
        </div>
       
      </>
    );
  }