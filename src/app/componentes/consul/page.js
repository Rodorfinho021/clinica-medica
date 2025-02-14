'use client'
import { useEffect, useState } from "react";
import styles from "./consulta.module.css";


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
        const response = await fetch('https://api-clinica-2a.onrender.com/consultas');
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
                        <th>Especialidade</th>
                        <th>Paciente</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody >
                {medicos.map((medico)=>(
                    <tr key={medico.id}>
                        <td>{medico.id}</td>
                        <td>{medico.paciente}</td>
                        <td>{medico.especialidade}</td>
                        <td>{medico.paciente}</td>
                        <td>{medico.tipo}</td>
                    </tr>

                ))}
                </tbody>
            </table>
            </div>
        </div>
       
      </>
    );
  }