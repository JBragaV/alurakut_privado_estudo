import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { Nudes } from '../src/components/Nudes'

function FotoSideBar(props) {
  return (
    <Box>
      <img style = {{borderRadius: '8px'}} src={`https://github.com/${props.user}.png`} alt='Apontadores'/>
      <hr />
      <p><a className="boxLink" href={`https://github.com/${props.user}.png`}>@{props.user}</a></p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([])
  console.log(comunidades)
  console.log(setComunidades)
  const user = 'JBragaV'
  const fotosApontado = ['JBragaV', 'JBragaV', 'JBragaV']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="apontador" style = {{gridArea: 'apontadores' }}>
          <FotoSideBar user = {user}/>
        </div>
        <div className="dadada" style = {{gridArea: 'dadada' }}>
          <Box>DADADA</Box>
          <Box>
            <h2>O que vamos fazer?</h2>
            <form onSubmit={function handleCriaComunidade(event) {
              event.preventDefault()
              const dadosFormulario = new FormData(event.target)
              const comunidadeNova = {
                id: new Date().toISOString(),
                name: `${dadosFormulario.get('title')}`,
                image: `${dadosFormulario.get('image')}`
              }
              setComunidades([...comunidades, comunidadeNova])
              
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type='text'
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                  type='text'
                />
              </div>
              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>
        <div className="nudes" style = {{gridArea: 'nudes' }}>
          <Nudes>
          Comunidades ({comunidades.length})
            <ul>
              {comunidades.map(comunidade => {
                  return (<li key={comunidade.id}>
                    <img src={'http://placehold.it/300x300'}/>
                    <span>{comunidade.name}</span>
                  </li>)
                })
              }
            </ul>
          </Nudes>
        </div>
      </MainGrid>
    </>
  )
}
