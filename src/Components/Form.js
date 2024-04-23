import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Form({ onMemberConnect }) { // le Props - déclaration de l'évènement { onMemberConnect } permet le lien avec le parent

    // const inputRef = useRef()

    // const [name, setName] = useState('')

    const [name, setName] = useState([
        { id: 1, nom: "toto" },
        { id: 2, nom: "titi" },
    ]);


    const [newName, setNewName] = useState('')

    const navigate = useNavigate()
    // hook pour gérer la navigation

    const handleSubmit = (event) => {
        event.preventDefault();
        // 1. copie du state
        const nameCopy = [...name];

        // 2. manipulation sur la copie su state
        // const id = new Date().getTime();
        const id = name.length + 1;
        const nom = newName;
        nameCopy.push({ id: id, nom: nom }) // stocke chaque nouveau memebre dans le tableau [name]
        onMemberConnect({ id: id, nom: nom }); // permet le renvoi du memebre connecté au parent
        navigate('/')  // retour à la page d'accueil

        // 3. modif du state
        setName(nameCopy);
        setNewName(""); // remet vide le champ de saisie

    }

    const handleChange = (event) => {
        // enregistre les changements à chaque saisie de caractère et refresh (UPDATE) l'affichage
        // synchronisation ascendante/descendante
        setNewName(event.target.value)
    }

    return (
        // 1. création du formulaire
        <form action="submit" onSubmit={handleSubmit}>
            <div>
                <input
                    value={newName}
                    type="text"
                    placeholder="Votre nom :"
                    onChange={handleChange}
                />
                {/* pour soumettre le formulaire : un bouton*/}
                <button>Ajouter</button>
                <h1> Liste des membres</h1>
                <ul>{name.map((membre) => (
                    <li> {membre.nom}, {membre.id} </li>
                ))}
                </ul>
            </div>
        </form>
    )
}