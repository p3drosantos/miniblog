import './styles.css'

export const Button =  ({texto, onClick, disabled }) => (

        <button 
        className="button" 
        disabled={disabled} 
        onClick={onClick}
        >
            {texto}texto
        </button>

)

        
        