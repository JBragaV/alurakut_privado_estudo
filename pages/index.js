import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'
import { Nudes } from '../src/components/Nudes'

function FotoSideBar(props) {
  return (
    <Box>
      <img style = {{borderRadius: '8px'}} src={`https://github.com/${props.user}.png`}alt='Apontadores'/>
    </Box>
  )
}

export default function Home() {

  const user = 'JBragaV'
  const fotosApontado = ['Jo', 'Dadada', 'Manuela']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="apontador" style = {{gridArea: 'apontadores' }}>
          <FotoSideBar user = {user}/>
        </div>
        <div className="dadada" style = {{gridArea: 'dadada' }}>
          <Box>DADADA</Box>
        </div>
        <div className="nudes" style = {{gridArea: 'nudes' }}>
          <Nudes>
            Nudes ({fotosApontado.length})
            {fotosApontado.map(item => <li>{item}</li>)}
          </Nudes>
        </div>
      </MainGrid>
    </>
  )
}
