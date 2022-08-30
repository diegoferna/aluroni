import styles from './FIltros.module.scss'
import filtros from './filtros.json'
import { useState } from 'react'
import classNames from 'classnames'

type IOpcao = typeof filtros[0]

// interface opcao {
//     id: number,
//     label: string
// }

interface Props {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros ({filtro, setFiltro} : Props) {

    function selecionarFiltro(opcao: IOpcao) {
        if (opcao.id === filtro) return setFiltro(null)
        return setFiltro(opcao.id)
    }
    return( 
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']] : filtro === opcao.id
                    })}    	
                    key={opcao.id} 
                    onClick={()=> selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}